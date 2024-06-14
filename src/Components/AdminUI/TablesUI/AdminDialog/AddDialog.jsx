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
    Username: '',
    Email: '',
    Password: '',
    AccountType: '',
  });
  const [touchedFields, setTouchedFields] = useState({
    Username: false,
    Email: false,
    Password: false,
    AccountType: false,
    // Add other fields here if needed
  });

  useEffect(() => {
    if (!open) {
      // Reset formValues when dialog is closed
      setFormValues({
        Username: '',
        Email: '',
        Password: '',
        AccountType: '',
      });
      setTouchedFields({
        Username: false,
        Email: false,
        AccountType: false,
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


  const style = { width: '300px', margin: '0px 0px 10px 0px', backgroundColor: '#F3F3F3' };

  const usernameRegex = /^[a-zA-Z0-9]{4,}$/; // At least 4 alphanumeric characters
  const EmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  return (
    <Dialog maxWidth="lg" open={open} onClose={onClose}>
      <DialogTitle>Add Order Data</DialogTitle>
      <DialogContent sx={{ display: 'flex' }}>
        <Box sx={{ margin: '0px 50px 0px 0px ' }}>
       
          <Box>
            <Typography marginBottom={1} display={'flex'}>
              Username<Typography sx={{ color: '#F1C4C4' }}>*</Typography>
            </Typography>
            <TextField
              name="Username"
              value={formValues.Username || ''}
              onChange={handleChange}
              placeholder='w.g., Admin'
              error={touchedFields.Username && !usernameRegex.test(formValues.Username)}
              helperText={touchedFields.Username && !usernameRegex.test(formValues.Username) ? 'Username must have at least 4 alphanumeric characters' : ''}
              sx={style}
            />
          </Box>
          <Box>
            <Typography marginBottom={1} display={'flex'}>
              Email<Typography sx={{ color: '#F1C4C4' }}>*</Typography>
            </Typography>
            <TextField
              name="Email"
              value={formValues.Email || ''}
              onChange={handleChange}
              placeholder='e.g., Admin@gmail.com'
              error={touchedFields.Email && !EmailRegex.test(formValues.Email)}
              helperText={touchedFields.Email && !EmailRegex.test(formValues.Email) ? 'Not a Valid Email' : ''}
              sx={style}
            />
          </Box>

          <Box>
            <Typography marginBottom={1} display={'flex'}>
              Password<Typography sx={{ color: '#F1C4C4' }}>*</Typography>
            </Typography>
            <TextField
              name="Password"
              value={formValues.Password || ''}
              onChange={handleChange}
              placeholder='e.g., Admin@gmail.com'
              error={touchedFields.Password && !usernameRegex.test(formValues.Password)}
              helperText={touchedFields.Password && !usernameRegex.test(formValues.Password) ? 'Not a Valid Email' : ''}
              sx={style}
            />
          </Box>
          
          <Box>
            <Typography marginBottom={1} display={'flex'}>
              Account Type<Typography sx={{ color: '#F1C4C4' }}>*</Typography>
            </Typography>
            <Select
                name="AccountType"
              value={formValues.AccountType || 'On-Going'}
              onChange={handleChange}
              sx={style}
            >
              <MenuItem value="Agri-Tech">Agri Tech</MenuItem>
              <MenuItem value="Admin">Admin </MenuItem>
    
            </Select>
          </Box>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button
          onClick={handleSubmit}
          disabled={
           
            !formValues.Username ||
            !formValues.Email ||
            !formValues.Password ||
            !formValues.AccountType ||
            (touchedFields.Username && !usernameRegex.test(formValues.Username)) ||
            (touchedFields.Password && !usernameRegex.test(formValues.Password)) ||
            (touchedFields.Email && !EmailRegex.test(formValues.Email)) 

          }
        >
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
}
