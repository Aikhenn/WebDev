import { useState, useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Box, Typography, Select, MenuItem } from '@mui/material';


export default function AddOrderDialog({ open, onClose, onAdd }) {
  const [formValues, setFormValues] = useState({
    DateOrdered: new Date().toISOString().slice(0, 10),
    BuyerName: '',
    FarmerName: '',
    ProductName: '',
    Price: '',
    Quantity: '',
    status: '',
  });
  const [touchedFields, setTouchedFields] = useState({
    BuyerName: false,
    FarmerName: false,
    ProductName: false,
    Price: false,
    Quantity: false,
    status: false,
    // Add other fields here if needed
  });

  const [buyerNames, setBuyerNames] = useState([]);
  const [farmerNames, setFarmerNames] = useState([]);
  const [productNames, setProductNames] = useState([]);

  useEffect(() => {
    if (open) {
      fetchBuyerNames();
      fetchFarmerNames();
      fetchProductNames()
    }
  }, [open]);

  const fetchBuyerNames = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/buyers');
      if (response.ok) {
        const data = await response.json();
        const names = data.map((buyer) => buyer.FullName); // Assuming the API returns an array of objects with a fullName field
        setBuyerNames(names);
      } else {
        console.error('Failed to fetch buyer names');
      }
    } catch (error) {
      console.error('Error fetching buyer names:', error);
    }
  };

  const fetchFarmerNames = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/farmers');
      if (response.ok) {
        const data = await response.json();
        const names = data.map((farmer) => farmer.FullName); // Assuming the API returns an array of objects with a fullName field
        setFarmerNames(names);
      } else {
        console.error('Failed to fetch farmer names');
      }
    } catch (error) {
      console.error('Error fetching farmer names:', error);
    }
  };

  
  const fetchProductNames = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/products');
      if (response.ok) {
        const data = await response.json();
        const names = data.map((products) => products.ProductName); // Assuming the API returns an array of objects with a fullName field
        setProductNames(names);
      } else {
        console.error('Failed to fetch product names');
      }
    } catch (error) {
      console.error('Error fetching product names:', error);
    }
  };




  useEffect(() => {
    if (!open) {
      // Reset formValues when dialog is closed
      setFormValues({
        DateOrdered: new Date().toISOString().slice(0, 10),
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

  return (
    <Dialog maxWidth="lg" open={open} onClose={onClose}>
      <DialogTitle>Add Order Data</DialogTitle>
      <DialogContent sx={{ display: 'flex' }}>
        <Box sx={{ margin: '0px 50px 0px 0px ' }}>
          <Box>
            <Typography marginBottom={1}>Order Date</Typography>
            <TextField
              name="DateRegistered"
              disabled
              value={formValues.DateOrdered || ''}
              onChange={handleChange}
              fullWidth
              sx={style}
            />
          </Box>
          <Box>
            <Typography marginBottom={1} display={'flex'}>
              Buyer Name<Typography sx={{ color: '#F1C4C4' }}>*</Typography>
            </Typography>
            
            <Select
              name="BuyerName"
              placeholder='Select'
              value={formValues.BuyerName}
              onChange={handleChange}
              error={touchedFields.BuyerName && !formValues.BuyerName}
              fullWidth
              sx={{ width: '300px', margin: '0px 0px 10px 0px', backgroundColor: '#F3F3F3' }}
            >

              {buyerNames.map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>

          </Box>
          <Box>
            <Typography marginBottom={1} display={'flex'}>
              Farmer Name<Typography sx={{ color: '#F1C4C4' }}>*</Typography>
            </Typography>
            <Select
              name="FarmerName"
              placeholder='Select'
              value={formValues.FarmerName}
              onChange={handleChange}
              error={touchedFields.FarmerName && !formValues.FarmerName}
              fullWidth
              sx={{ width: '300px', margin: '0px 0px 10px 0px', backgroundColor: '#F3F3F3' }}
            >

              {farmerNames.map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </Box>
          <Box>
            <Typography marginBottom={1} display={'flex'}>
              Product Name<Typography sx={{ color: '#F1C4C4' }}>*</Typography>
            </Typography>
            <Select
              name="ProductName"
              placeholder='Select'
              value={formValues.ProductName}
              onChange={handleChange}
              error={touchedFields.ProductName && !formValues.ProductName}
              fullWidth
              sx={{ width: '300px', margin: '0px 0px 10px 0px', backgroundColor: '#F3F3F3' }}
            >

              {productNames.map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>

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
            <Typography marginBottom={1}>Quantity</Typography>
            <TextField
              name="Quantity"
              value={formValues.Quantity || ''}
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
              <MenuItem value="On-Going">On-Going</MenuItem>
              <MenuItem value="Completed">Completed</MenuItem>
              <MenuItem value="Canceled">Canceled</MenuItem>
            </Select>
          </Box>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button
          onClick={handleSubmit}
          disabled={
            !formValues.DateOrdered ||
            !formValues.BuyerName ||
            !formValues.FarmerName ||
            !formValues.ProductName ||
            !formValues.Price ||
            !formValues.Quantity ||
            !formValues.status        

          }
        >
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
}
