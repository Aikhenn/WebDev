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
        FarmerName: /^[a-zA-Z\s]{2,50}$/, // letters and spaces, 2-50 characters
        ProductName: /^.{5,100}$/, // any characters, 5-100 length
        Price: /^\d{2}$/, // exactly 2 digits
        Inventory: /^\d{2}$/, // exactly 2 digits
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

            const response = await fetch(`http://localhost:5000/api/products/${rowData._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Failed to update product list');
            }
            console.log('Product updated?', response);

            fetchData();
            setOpenPopup(false);
        } catch (error) {
            console.error('Error updating product:', error);
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
            <DialogTitle>Edit Product</DialogTitle>
            <DialogContent sx={{ display: 'flex' }}>
                <Box sx={{ margin: '0px 50px 0px 0px ' }}>
                    <Box>
                        <Typography marginBottom={1}>Date Added</Typography>
                        <TextField 
                            name="DateAdded" 
                            value={formData.DateAdded || ''} 
                            onChange={handleChange} 
                            fullWidth 
                            disabled
                            sx={style} 
                        />
                    </Box>
                    <Box>
                        <Typography marginBottom={1}>Product Name</Typography>
                        <TextField 
                            name="ProductName" 
                            value={formData.ProductName || ''} 
                            onChange={handleChange} 
                            sx={style} 
                            error={!!errors.ProductName}
                            helperText={errors.ProductName ? '5-100 characters' : ''}
                        />
                    </Box>
                
                    <Box>
                        <Typography marginBottom={1}>Farmer Name</Typography>
                        <TextField 
                            name="FarmerName" 
                            value={formData.FarmerName || ''} 
                            onChange={handleChange} 
                            sx={style} 
                            error={!!errors.FarmerName}
                            helperText={errors.FarmerName ? '2-50 letters and spaces' : ''}
                        />
                    </Box>
                  
                </Box>
                <Box>
                    <Box>
                        <Typography marginBottom={1}>Price</Typography>
                        <TextField 
                            name="Price" 
                            value={formData.Price || ''} 
                            onChange={handleChange} 
                            onKeyPress={handleContactKeyPress}
                            sx={style} 
                            error={!!errors.Price}
                            helperText={errors.Price ? 'Exactly 2 digits' : ''}
                            inputProps={{ maxLength: 2 }}
                        />
                    </Box>
                    <Box>
                        <Typography marginBottom={1}>Inventory</Typography>
                        <TextField 
                            name="Inventory" 
                            value={formData.Inventory || ''} 
                            onChange={handleChange} 
                            sx={style} 
                            error={!!errors.Quantity}
                            helperText={errors.Quantity ? 'Exactly 2 digits' : ''}
                            inputProps={{ maxLength: 2 }}
                        />
                    </Box>
                    <Box>
                    <Typography marginBottom={1}>Status</Typography>
                        <FormControl fullWidth sx={style}>
                            
                            <Select
                                name="status"
                                value={formData.status || 'To-Verify'}
                                onChange={handleChange}

                           
                            >
                                <MenuItem value="To-Verify">To Verify</MenuItem>
                                <MenuItem value="Verified">Verified</MenuItem>
                               
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