import { Dialog, DialogTitle, DialogContent, Button, TextField, Typography, Box, DialogActions } from '@mui/material';
import { useState, useEffect, useRef } from 'react';
import logActivity from "../../../../api/api.js";

export default function EditDialog(props) {
    const { openPopup, setOpenPopup, rowData, fetchData } = props;
    const [formData, setFormData] = useState({});
    const [errors, setErrors] = useState({});
    const [openVerifyDialog, setOpenVerifyDialog] = useState(false);
    const initialRowData = useRef(rowData);
    const [verifyAction, setVerifyAction] = useState('Verify');
    const [username, setUsername ]= useState(localStorage.getItem("username") || "Guest");

    useEffect(() => {
        setFormData(rowData || {});
        initialRowData.current = rowData;
        setVerifyAction(rowData?.status === 'Verified' ? 'Reject' : 'Verify');
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
            await logActivity(`Product of ${rowData.FarmerName} Updated`, username);

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

    const handleVerify = (action) => {
        setVerifyAction(action);
        setOpenVerifyDialog(true);
    };

    const handleConfirmVerify = () => {
        setFormData(prevState => ({
            ...prevState,
            status: verifyAction === 'Verify' ? 'Verified' : 'Rejected'
        }));
        setOpenVerifyDialog(false);
    };

    const handleCancelVerify = () => {
        setOpenVerifyDialog(false);
    };

    const style = { width: '300px', margin: '0px 0px 10px 0px', backgroundColor: '#F3F3F3' };

    return (
        <>
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
                                error={!!errors.Inventory}
                                helperText={errors.Inventory ? 'Exactly 2 digits' : ''}
                                inputProps={{ maxLength: 2 }}
                            />
                        </Box>
                        <Box display="flex" alignItems="center" flexDirection='row'>
                            <Box>
                                <Typography marginBottom={1}>Verification Status</Typography>
                                <TextField
                                    name="status"
                                    value={formData.status || ''}
                                    disabled
                                    sx={{width: 115, marginRight: 1.5}}
                                    onChange={handleChange}
                                />
                                {formData.status === 'Pending' ? (
                                    <>
                                        <Button 
                                            variant='contained' 
                                            onClick={() => handleVerify('Verify')} 
                                            sx={{
                                                marginRight: 1,
                                                height: 55, 
                                                backgroundColor: '#0C7230', 
                                                color: 'white', 
                                                '&:hover': {
                                                    backgroundColor: '#065121', 
                                                    color: 'white'
                                                }
                                            }}
                                        >  
                                            Verify
                                        </Button>
                                        <Button 
                                            variant='contained' 
                                            onClick={() => handleVerify('Reject')} 
                                            sx={{
                                                height: 55, 
                                                backgroundColor: '#B62828', 
                                                color: 'white', 
                                                '&:hover': {
                                                    backgroundColor: 'darkred', 
                                                    color: 'white'
                                                }
                                            }}
                                        >  
                                            Reject
                                        </Button>
                                    </>
                                ) : (
                                    <Button 
                                        variant='contained' 
                                        onClick={() => handleVerify(verifyAction)} 
                                        sx={{
                                            height: 55, 
                                            backgroundColor: verifyAction === 'Verify' ? '#0C7230' : '#B62828', 
                                            color: 'white', 
                                            '&:hover': {
                                                backgroundColor: verifyAction === 'Verify' ? '#065121' : 'darkred', 
                                                color: 'white'
                                            }
                                        }}
                                    >  
                                        {verifyAction}
                                    </Button>
                                )}
                            </Box>
                        </Box>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button 
                        onClick={handleSave} 
                        sx={{ margin: '0px 10px 10px 0px', color:'#0C7230', '&:hover': {color: '#0c7230'} }}
                        disabled={Object.values(errors).some(error => error)}
                    >
                        Confirm
                    </Button>
                    <Button 
                        onClick={handleClose} 
                        sx={{ margin: '0px 10px 10px 0px',color:'#0C7230', '&:hover': {color: '#0c7230'}}}
                    >
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
            <Dialog open={openVerifyDialog} onClose={handleCancelVerify}>
                <DialogTitle>Confirm {verifyAction}</DialogTitle>
                <DialogContent>
                    <Typography>Are you sure you want to {verifyAction.toLowerCase()} this product?</Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleConfirmVerify} sx={{ color:'#0C7230', '&:hover': {color: '#0c7230'}}}
                    >Yes</Button>
                    <Button onClick={handleCancelVerify}  sx={{ color:'#0C7230', '&:hover': {color: '#0c7230'}}}
                    >No</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
