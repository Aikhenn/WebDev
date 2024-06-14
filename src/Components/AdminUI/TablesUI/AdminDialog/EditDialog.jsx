import { Dialog, DialogTitle, DialogContent, Button, TextField, Typography, Box, DialogActions, Select, MenuItem, FormControl } from '@mui/material';
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
        Email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,

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

            const response = await fetch(`http://localhost:5000/api/admin/${rowData._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Failed to update order list');
            }
            console.log('Admin Updated?', response);

            fetchData();
            setOpenPopup(false);
        } catch (error) {
            console.error('Error updating admin:', error);
        }
    };

    const handleClose = () => {
        setFormData(initialRowData.current || {});
        setOpenPopup(false);
    };

    

    const style = { width: '300px', margin: '0px 0px 10px 0px', backgroundColor: '#F3F3F3' };

    return (
        <Dialog maxWidth='lg' open={openPopup} onClose={handleClose}>
            <DialogTitle>Edit Order</DialogTitle>
            <DialogContent sx={{ display: 'flex' }}>
                <Box sx={{ margin: '0px 50px 0px 0px ' }}>
                    
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
                        <Typography marginBottom={1}>Email</Typography>
                        <TextField 
                            name="Email" 
                            value={formData.Email || ''} 
                            onChange={handleChange} 
                            sx={style} 
                            error={!!errors.Email}
                            helperText={errors.Email ? '2-50 letters and spaces' : ''}
                        />
                    </Box>
                    <Box>
                        <Typography marginBottom={1}>Password</Typography>
                        <TextField 
                            name="Password" 
                            value={formData.Password || ''} 
                            onChange={handleChange} 
                            sx={style} 
                            error={!!errors.Password}
                            helperText={errors.Password ? '5-100 characters' : ''}
                        />
                    </Box>
                </Box>
                <Box>
                    
                    <Box>
                    <Typography marginBottom={1}>Account Type</Typography>
                        <FormControl fullWidth sx={style}>
                            
                            <Select
                                name="AccountType"
                                value={formData.AccountType || 'Agri-Tech'}
                                onChange={handleChange}

                           
                            >
                                <MenuItem value="Agri-Tech">Agri-Tech</MenuItem>
                                <MenuItem value="Admin">Admin</MenuItem>
                              
                            </Select>
                        </FormControl>
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
