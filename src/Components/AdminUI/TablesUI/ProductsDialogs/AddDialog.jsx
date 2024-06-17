import { useState, useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Box, Typography, Select, MenuItem } from '@mui/material';

export default function AddFarmerDialog({ open, onClose, onAdd }) {
  const [formValues, setFormValues] = useState({
    DateAdded: new Date().toISOString().slice(0, 10),
    Username: '',
    FullName: '',
    Address: '',
    Contact: '',
    Organization: '',
    Products: '',
    Orders: '',
    Password: '',
    status: '',
  });
  const [touchedFields, setTouchedFields] = useState({
    Username: false,
    FullName: false,
    Address: false,
    Contact: false,
    Password: false,
    status: false,
    // Add other fields here if needed
  });

  useEffect(() => {
    if (!open) {
      // Reset formValues when dialog is closed
      setFormValues({
        DateAdded: new Date().toISOString().slice(0, 10),
        BuyerName: '',
        FarmerName: '',
        ProductName: '',
        Price: '',
        Quantity: '',
        status: '',
      });
      setTouchedFields({
        BuyerName: false,
        FarmerName: false,
        ProductName: false,
        Price: false,
        Quantity: false,
        status: false,
        // Reset other fields if needed
      });
    }
  }, [open]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
    setTouchedFields({ ...touchedFields, [name]: true });
  };

  const handleSubmit = () => {
    onAdd(formValues);
    onClose();
  };

  const handleKeyPress = (event) => {
    // Allow only numeric input for Contact No.
    const pattern = /^[0-9\b]+$/;
    if (!pattern.test(event.key)) {
      event.preventDefault();
    }
  };

  const style = { width: '300px', margin: '0px 0px 10px 0px', backgroundColor: '#F3F3F3' };

  const usernameRegex = /^[a-zA-Z0-9]{4,}$/; // At least 4 alphanumeric characters
  const fullNameRegex = /^[a-zA-Z]+\s+[a-zA-Z]+$/; // Full name must include at least a first and last name

  return (
    <Dialog maxWidth="lg" open={open} onClose={onClose}>
      <DialogTitle>Add Product Data</DialogTitle>
      <DialogContent sx={{ display: 'flex' }}>
        <Box sx={{ margin: '0px 50px 0px 0px ' }}>
          <Box>
            <Typography marginBottom={1}>Date Added</Typography>
            <TextField
              name="DateAdded"
              disabled
              value={formValues.DateAdded || ''}
              onChange={handleChange}
              fullWidth
              sx={style}
            />
          </Box>
          <Box>
         
          </Box>
          <Box>
          <Box>
            <Typography marginBottom={1} display={'flex'}>
              Product Name<Typography sx={{ color: '#F1C4C4' }}>*</Typography>
            </Typography>
            <TextField
              name="ProductName"
              value={formValues.ProductName || ''}
              onChange={handleChange}
              placeholder='e.g., Carrots'
              sx={style}
            />
          </Box>
            <Typography marginBottom={1} display={'flex'}>
              Farmer Name<Typography sx={{ color: '#F1C4C4' }}>*</Typography>
            </Typography>
            <TextField
              name="FarmerName"
              value={formValues.FarmerName || ''}
              onChange={handleChange}
              placeholder='e.g., John Doe'
              error={touchedFields.FarmerName && !fullNameRegex.test(formValues.FarmerName)}
              helperText={touchedFields.FarmerName && !fullNameRegex.test(formValues.FarmerName) ? 'Full Name must include first and last name' : ''}
              sx={style}
            />
          </Box>
        
        </Box>
        <Box>
          <Box>
            <Typography marginBottom={1} display={'flex'}>
              Price<Typography sx={{ color: '#F1C4C4' }}>*</Typography>
            </Typography>
            <TextField
              name="Price"
              value={formValues.Price || ''}
              onChange={handleChange}
              onKeyPress={handleKeyPress}
              placeholder='e.g., 40.20'
              sx={style}
    
            />
          </Box>
          <Box>
            <Typography marginBottom={1}>Inventory</Typography>
            <TextField
              name="Inventory"
              value={formValues.Inventory || ''}
              onChange={handleChange}
              placeholder='e.g, 200'
              sx={style}
            />
          </Box>
          <Box>
            <Typography marginBottom={1} display={'flex'}>
              Status<Typography sx={{ color: '#F1C4C4' }}>*</Typography>
            </Typography>
            <Select
                name="status"
              value={formValues.status || 'On-Going'}
              onChange={handleChange}
              sx={style}
            >
              <MenuItem value="To-Verify">To Verify</MenuItem>
              <MenuItem value="Verified">Verified</MenuItem>
              
            </Select>
          </Box>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button
          onClick={handleSubmit}
          disabled={
            !formValues.DateAdded ||
            !formValues.FarmerName ||
            !formValues.ProductName ||
            !formValues.Price ||
            !formValues.Inventory ||
            !formValues.status ||
            (touchedFields.Username && !usernameRegex.test(formValues.Username)) ||
            (touchedFields.FullName && !fullNameRegex.test(formValues.FullName)) 

          }
        >
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
}
