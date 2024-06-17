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
    DateRegistered: new Date().toISOString().slice(0, 10),
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
        DateRegistered: new Date().toISOString().slice(0, 10),
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
      setTouchedFields({
        Username: false,
        FullName: false,
        Address: false,
        Contact: false,
        Password: false,
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
  const PW_LENGTH_REGEX = /^.{8,}$/; // At least 8 characters
  const PW_LOWERCASE_REGEX = /^(?=.*[a-z])/; // At least one lowercase letter
  const PW_UPPERCASE_REGEX = /^(?=.*[A-Z])/; // At least one uppercase letter
  const PW_DIGIT_REGEX = /^(?=.*\d)/; // At least one digit
  const PW_SPECIAL_REGEX = /^(?=.*[^a-zA-Z0-9])/; // At least one special character (non-alphanumeric)

  const getPasswordValidationMessage = (password) => {
    if (!PW_LENGTH_REGEX.test(password)) {
      return 'Password must be at least 8 characters long';
    }
    if (!PW_LOWERCASE_REGEX.test(password)) {
      return 'Password must contain at least one lowercase letter';
    }
    if (!PW_UPPERCASE_REGEX.test(password)) {
      return 'Password must contain at least one uppercase letter';
    }
    if (!PW_DIGIT_REGEX.test(password)) {
      return 'Password must contain at least one digit';
    }
    if (!PW_SPECIAL_REGEX.test(password)) {
      return 'Password must contain at least one special character';
    }
    return ''; // Return empty string if all criteria are met
  };

  const validationMessage = getPasswordValidationMessage(formValues.Password);
  const helperText = touchedFields.Password && validationMessage;



  return (
    <Dialog maxWidth="lg" open={open} onClose={onClose}>
      <DialogTitle>Add Buyer Data</DialogTitle>
      <DialogContent sx={{ display: 'flex' }}>
        <Box sx={{ margin: '0px 50px 0px 0px ' }}>
          <Box>
            <Typography marginBottom={1}>Registration Date</Typography>
            <TextField
              name="DateRegistered"
              disabled
              value={formValues.DateRegistered || ''}
              onChange={handleChange}
              fullWidth
              sx={style}
            />
          </Box>
          <Box>
            <Typography marginBottom={1} display={'flex'}>
              Username<Typography sx={{ color: '#F1C4C4' }}>*</Typography>
            </Typography>
            <TextField
              name="Username"
              value={formValues.Username || ''}
              onChange={handleChange}
              placeholder='At least 4 characters'
              error={touchedFields.Username && !usernameRegex.test(formValues.Username)}
              helperText={touchedFields.Username && !usernameRegex.test(formValues.Username) ? 'Username must have at least 4 alphanumeric characters' : ''}
              sx={style}
            />
          </Box>
          <Box>
            <Typography marginBottom={1} display={'flex'}>
              Full Name<Typography sx={{ color: '#F1C4C4' }}>*</Typography>
            </Typography>
            <TextField
              name="FullName"
              value={formValues.FullName || ''}
              onChange={handleChange}
              placeholder='e.g., John Doe'
              error={touchedFields.FullName && !fullNameRegex.test(formValues.FullName)}
              helperText={touchedFields.FullName && !fullNameRegex.test(formValues.FullName) ? 'Full Name must include first and last name' : ''}
              sx={style}
            />
          </Box>
          <Box>
            <Typography marginBottom={1} display={'flex'}>
              Address<Typography sx={{ color: '#F1C4C4' }}>*</Typography>
            </Typography>
            <TextField
              name="Address"
              value={formValues.Address || ''}
              onChange={handleChange}
              placeholder='e.g., 123 Main St'
              sx={style}
            />
          </Box>
        </Box>
        <Box>
          <Box>
            <Typography marginBottom={1} display={'flex'}>
              Contact No.<Typography sx={{ color: '#F1C4C4' }}>*</Typography>
            </Typography>
            <TextField
              name="Contact"
              value={formValues.Contact || ''}
              onChange={handleChange}
              onKeyPress={handleKeyPress}
              placeholder='e.g., 1234567890'
              error={touchedFields.Contact && (!formValues.Contact || !/^\d+$/.test(formValues.Contact))}
              helperText={touchedFields.Contact && (!formValues.Contact || !/^\d+$/.test(formValues.Contact)) ? 'Contact No. must contain only numbers' : ''}
              sx={style}
            />
          </Box>
          <Box>
            <Typography marginBottom={1}>Organization</Typography>
            <TextField
              name="Organization"
              value={formValues.Organization || ''}
              onChange={handleChange}
              placeholder='e.g., Farm Co.'
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
              placeholder='Enter a password'
              error={Boolean(helperText)}
              helperText= {helperText}
              sx={style}
            />
          </Box>
          <Box>
            <Typography marginBottom={1} display={'flex'}>
              Status<Typography sx={{ color: '#F1C4C4' }}>*</Typography>
            </Typography>
            <Select
                name="status"
              value={formValues.status || ''}
              onChange={handleChange}
              sx={style}
            >
              <MenuItem value="For Checking">For Checking</MenuItem>
              <MenuItem value="Accredited">Accredited</MenuItem>
              <MenuItem value="Non-accredited">Non-accredited</MenuItem>
            </Select>
          </Box>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button
          onClick={handleSubmit}
          disabled={
            !formValues.DateRegistered ||
            !formValues.Username ||
            !formValues.FullName ||
            !formValues.Address ||
            !formValues.Contact ||
            !formValues.Password ||
            !formValues.status ||
            (touchedFields.Username && !usernameRegex.test(formValues.Username)) ||
            (touchedFields.FullName && !fullNameRegex.test(formValues.FullName)) ||
            (touchedFields.Contact && (!formValues.Contact || !/^\d+$/.test(formValues.Contact)))
          }
        >
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
}
