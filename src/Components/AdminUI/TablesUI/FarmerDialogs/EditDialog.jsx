import { Dialog, DialogTitle, DialogContent, Button, TextField, Typography, Box, DialogActions } from '@mui/material';
import { useState, useEffect, useRef } from 'react';

export default function EditDialog(props) {
    const { openPopup, setOpenPopup, rowData, fetchData } = props;
    const [formData, setFormData] = useState({});
    const [errors, setErrors] = useState({});
    const initialRowData = useRef(rowData);

    useEffect(() => {
        setFormData(rowData || {});
        initialRowData.current = rowData;
    }, [rowData]);

    const regexPatterns = {
      
        Username: /^[a-zA-Z0-9_]{3,16}$/, // alphanumeric and underscore, 3-16 characters
        FullName: /^[a-zA-Z\s]{2,50}$/, // letters and spaces, 2-50 characters
        Address: /^.{5,100}$/, // any characters, 5-100 length
        Contact: /^\d{11}$/, // exactly 10 digits
        Organization: /^.{2,50}$/, // any characters, 2-50 length
    };

    const validateField = (name, value) => {
        if (regexPatterns[name] && !regexPatterns[name].test(value)) {
            setErrors(prevErrors => ({
                ...prevErrors,
                [name]: true
            }));
        } else {
            setErrors(prevErrors => ({
                ...prevErrors,
                [name]: false
            }));
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
        validateField(name, value);
    };

    const handleSave = async () => {
        try {
            // Validate all fields before saving
            let valid = true;
            for (const field in formData) {
                if (regexPatterns[field] && !regexPatterns[field].test(formData[field])) {
                    valid = false;
                    setErrors(prevErrors => ({
                        ...prevErrors,
                        [field]: true
                    }));
                }
            }
            if (!valid) {
                console.error('Validation errors:', errors);
                return;
            }

            const response = await fetch(`http://localhost:5000/api/farmers/${rowData._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Failed to update farmer');
            }
            console.log('Farmer updated?', response);

            fetchData();
            setOpenPopup(false);
        } catch (error) {
            console.error('Error updating farmer:', error);
        }
    };

    const handleClose = () => {
        setFormData(initialRowData.current || {});
        setOpenPopup(false);
    };

    const handleContactKeyPress = (e) => {
        const charCode = e.which ? e.which : e.keyCode;
        if (charCode < 48 || charCode > 57) {
            e.preventDefault();
        }
    };

    const style = { width: '300px', margin: '0px 0px 10px 0px', backgroundColor: '#F3F3F3' };

    return (
        <Dialog maxWidth='lg' open={openPopup} onClose={handleClose}>
            <DialogTitle>Edit User</DialogTitle>
            <DialogContent sx={{ display: 'flex' }}>
                <Box sx={{ margin: '0px 50px 0px 0px ' }}>
                    <Box>
                        <Typography marginBottom={1}>Registration Date</Typography>
                        <TextField 
                            name="DateRegistered" 
                            value={formData.DateRegistered || ''} 
                            onChange={handleChange} 
                            fullWidth 
                            disabled
                            sx={style} 
                      
                        />
                    </Box>
                    <Box>
                        <Typography marginBottom={1}>Username</Typography>
                        <TextField 
                            name="Username" 
                            value={formData.Username || ''} 
                            onChange={handleChange} 
                            sx={style} 
                            error={!!errors.Username}
                            helperText={errors.Username ? '3-16 alphanumeric characters or underscores' : ''}
                        />
                    </Box>
                    <Box>
                        <Typography marginBottom={1}>Full Name</Typography>
                        <TextField 
                            name="FullName" 
                            value={formData.FullName || ''} 
                            onChange={handleChange} 
                            sx={style} 
                            error={!!errors.FullName}
                            helperText={errors.FullName ? '2-50 letters and spaces' : ''}
                        />
                    </Box>
                    <Box>
                        <Typography marginBottom={1}>Address</Typography>
                        <TextField 
                            name="Address" 
                            value={formData.Address || ''} 
                            onChange={handleChange} 
                            sx={style} 
                            error={!!errors.Address}
                            helperText={errors.Address ? '5-100 characters' : ''}
                        />
                    </Box>
                </Box>
                <Box>
                    <Box>
                        <Typography marginBottom={1}>Contact No.</Typography>
                        <TextField 
                            name="Contact" 
                            value={formData.Contact || ''} 
                            onChange={handleChange} 
                            onKeyPress={handleContactKeyPress}
                            sx={style} 
                            error={!!errors.Contact}
                            helperText={errors.Contact ? 'Exactly 11 digits' : ''}
                            inputProps={{ maxLength: 11 }}
                        />
                    </Box>
                    <Box>
                        <Typography marginBottom={1}>Organization</Typography>
                        <TextField 
                            name="Organization" 
                            value={formData.Organization || ''} 
                            onChange={handleChange} 
                            sx={style} 
                            error={!!errors.Organization}
                            helperText={errors.Organization ? '2-50 characters' : ''}
                        />
                    </Box>
                 
                
                </Box>
            </DialogContent>
            <DialogActions>
            <Button 
                        variant='outlined' 
                        onClick={handleSave} 
                        sx={{ margin: '0px 10px 10px 00px' }}
                        disabled={Object.values(errors).some(error => error)}
                    >
                        Confirm
                    </Button>
                    <Button 
                        variant='contained' 
                        onClick={handleClose} 
                        sx={{ margin: '00px 10px 10px 0px' }}
                    >
                        Close
                    </Button>

            </DialogActions>
        </Dialog>
    );
}
