import { useState, useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Box, Typography } from '@mui/material';

export default function AddFarmerDialog({ open, onClose, onAdd }) {
  const [formValues, setFormValues] = useState({
    DateAdded: new Date().toISOString().slice(0, 10),
    FarmerName: '',
    ProductName: '',
    Price: '',
    Inventory: '',
    status: 'Pending',
    photo: null, // New field for photo
  });

  const [touchedFields, setTouchedFields] = useState({
    FarmerName: false,
    ProductName: false,
    Price: false,
    Inventory: false,
  });

  useEffect(() => {
    if (!open) {
      // Reset formValues when dialog is closed
      setFormValues({
        DateAdded: new Date().toISOString().slice(0, 10),
        FarmerName: '',
        ProductName: '',
        Price: '',
        Inventory: '',
        status: 'Pending',
        photo: null, // Reset photo
      });
      setTouchedFields({
        FarmerName: false,
        ProductName: false,
        Price: false,
        Inventory: false,
      });
    }
  }, [open]);

  const handleChange = (event) => {
    const { name, value, files } = event.target;
    if (name === 'photo') {
      setFormValues({ ...formValues, [name]: files[0] });
    } else {
      setFormValues({ ...formValues, [name]: value });
      setTouchedFields({ ...touchedFields, [name]: true });
    }
  };

  const handleSubmit = () => {
    const formData = new FormData();
    for (const key in formValues) {
      formData.append(key, formValues[key]);
    }
    onAdd(formData);
    onClose();
  };

  const handleKeyPress = (event) => {
    const pattern = /^[0-9\b]+$/;
    if (!pattern.test(event.key)) {
      event.preventDefault();
    }
  };

  const style = { width: '300px', margin: '0px 0px 10px 0px', backgroundColor: '#F3F3F3' };

  const fullNameRegex = /^[a-zA-Z]+\s+[a-zA-Z]+$/;

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
            <Typography marginBottom={1} display={'flex'}>
              Product Name<Typography sx={{ color: '#F1C4C4' }}>*</Typography>
            </Typography>
            <TextField
              name="ProductName"
              value={formValues.ProductName || ''}
              onChange={handleChange}
              placeholder="e.g., Carrots"
              sx={style}
              error={touchedFields.ProductName && !formValues.ProductName}
              helperText={touchedFields.ProductName && !formValues.ProductName ? 'Product Name is required' : ''}
            />
          </Box>
          <Box>
            <Typography marginBottom={1} display={'flex'}>
              Farmer Name<Typography sx={{ color: '#F1C4C4' }}>*</Typography>
            </Typography>
            <TextField
              name="FarmerName"
              value={formValues.FarmerName || ''}
              onChange={handleChange}
              placeholder="e.g., John Doe"
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
              placeholder="e.g., 40.20"
              sx={style}
              error={touchedFields.Price && !formValues.Price}
              helperText={touchedFields.Price && !formValues.Price ? 'Price is required' : ''}
            />
          </Box>
          <Box>
            <Typography marginBottom={1} display={'flex'}>
              Inventory<Typography sx={{ color: '#F1C4C4' }}>*</Typography>
            </Typography>
            <TextField
              name="Inventory"
              value={formValues.Inventory || ''}
              onChange={handleChange}
              onKeyPress={handleKeyPress}
              placeholder="e.g., 200"
              sx={style}
              error={touchedFields.Inventory && !formValues.Inventory}
              helperText={touchedFields.Inventory && !formValues.Inventory ? 'Inventory is required' : ''}
            />
          </Box>
          <Box>
            <Typography marginBottom={1} display={'flex'}>
              Status<Typography sx={{ color: '#F1C4C4' }}>*</Typography>
            </Typography>
            <TextField
              name="status"
              value={formValues.status}
              onChange={handleChange}
              disabled
              sx={style}
            />
          </Box>
          <Box>
            <Typography marginBottom={1} display={'flex'}>
              Upload Photo<Typography sx={{ color: '#F1C4C4' }}>*</Typography>
            </Typography>
            <input
              type="file"
              name="photo"
              onChange={handleChange}
              accept="image/*"
              style={style}
            />
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
            !formValues.photo || // Ensure photo is provided
            (touchedFields.FarmerName && !fullNameRegex.test(formValues.FarmerName))
          }
        >
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
}
