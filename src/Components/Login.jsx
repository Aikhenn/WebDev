import React, { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import LoginBg from "../assets/LoginBg2.png";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';

const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "white",
              color: "white",
            },
            "&:hover fieldset": {
              borderColor: "white",
              color: "white",
            },
            "&.Mui-focused fieldset": {
              borderColor: "white",
              color: "white",
            },
            color: "white",
          },
          "& .MuiInputLabel-root": {
            color: "white",
            "&.Mui-focused": {
              color: "white",
            },
            "&.MuiInputLabel-shrink": {
              color: "white",
            },
          },
          "& .MuiInputBase-input": {
            color: "white",
          },
        },
      },
    },
  },
});

const Popup = ({ openPopup, setOpenPopup }) => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [userError, setUserError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [authError, setAuthError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState(""); // State to hold username

  const navigate = useNavigate();



  const handleUserChange = (e) => {
    setUser(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const authenticateUser = async (Username, Password) => {
    try {
      const response = await axios.post("http://localhost:5000/api/admin/authenticate", {
        Username,
        Password,
      });
      
      if (response.data.success) {
        setUsername(Username); 
        console.log("Active Account: ", username)// Set username in state
        localStorage.setItem("username", Username); // Store username in localStorage
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error("Error authenticating user:", error.response.data);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user && password) {
      const isAuthenticated = await authenticateUser(user, password);
      if (isAuthenticated) {
        alert('Login Successful');
        navigate('/admin'); // Navigate to the desired page upon successful login
      } else {
        setAuthError("Invalid username or password");
      }
    }
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleClose = () => {
    setOpenPopup(false);
    resetErrors();
  };

  const resetErrors = () => {
    setUserError("");
    setPasswordError("");
    setAuthError("");
  };

  return (
    <Dialog
      sx={{
        borderRadius: 20,
        "& .MuiDialog-paper": {
          width: "1000px",
          height: "600px",
          borderRadius: "50px",
          backgroundImage: `url(${LoginBg})`,
        },
      }}
      open={openPopup}
      onClose={handleClose}
      maxWidth="lg"
    >
      <img
        src={LoginBg}
        style={{
          width: "100%",
          height: "100%",
          opacity: "100%",
          objectFit: "fill",
        }}
        alt="Background"
      />
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: "450px",
          width: "550px",
          height: "600px",
          backgroundColor: "#196812",
          opacity: "80%",
          overflow: "hidden",
        }}
      ></Box>
      <Box style={{ position: "relative", padding: 0, width: "100%" }}>
        <Box
          maxWidth="lg"
          sx={{
            position: "absolute",
            bottom: 600,
            border: "2px solid black",
            left: "47%",
            backgroundColor: "#196812",
            opacity: "100%",
            width: "50%",
            height: "10%",
          }}
        >
          <Stack
            sx={{ position: "relative", display: "row", top: 0, margin: 3 }}
          >
            <ThemeProvider theme={theme}>
              <form onSubmit={handleSubmit}>
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: "bold",
                    color: "white",
                    textAlign: "center",
                    marginTop: 12,
                  }}
                >
                  Welcome to Helen
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  Log In as Admin to Continue
                </Typography>
                <TextField
                  id="username"
                  name="username"
                  label="Username"
                  variant="outlined"
                  fullWidth
                  onChange={handleUserChange}
                  error={Boolean(userError)}
                  helperText={userError}
                  InputProps={{ style: { borderRadius: 40 } }}
                  sx={{ margin: 1, marginTop: 5, color: 'white' }}
                />
                <TextField
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  label="Password"
                  variant="outlined"
                  fullWidth
                  onChange={handlePasswordChange}
                 
                  InputProps={{
                    style: { color: 'white', borderRadius: 40 },
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          sx={{ color: 'white' }}
                        >
                          {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  error={Boolean(passwordError)}
                  helperText={passwordError}
                  sx={{ margin: 1, color: 'white' }}
                />
                {authError && (
                  <Typography
                    variant="body2"
                    sx={{ backgroundColor: '#c62828', padding: 1, color: "#FFCDD2", borderRadius: '5px', textAlign: "center", marginTop: 2 }}
                  >
                    {authError}
                  </Typography>
                )}
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    backgroundColor: "white",
                    opacity: "100%",
                    borderRadius: 10,
                    marginTop: 8,
                    color: "#0C7230",
                    "&:hover": { backgroundColor: "#0C7230", color: "white" },
                  }}
                >
                  Login as Admin
                </Button>
              </form>
            </ThemeProvider>
          </Stack>
        </Box>
        <Button
          onClick={handleClose}
          sx={{ position: "absolute", top: -100, left: 0 }}
        >
          Close
        </Button>
      </Box>
    </Dialog>
  );
};

export default Popup;
