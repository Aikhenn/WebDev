/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Box,
  Button,
  Dialog,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import { FC } from "react";
import LoginBg from "../assets/LoginBg2.png";
import { useNavigate } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
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
          },
          "& .MuiInputBase-input": {
            color: "white",
          },
        },
      },
    },
  },
});

const Popup = ({ open, setOpen }) => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [userError, setUserError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [authError, setAuthError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleUserChange = (e) => {
    setUser(e.target.value);
    if (!validateUsername(e.target.value)) {
      setUserError("Please enter a valid username");
    } else {
      setUserError("");
    }
  };

  const validateUsername = (user) => {
    const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
    return USER_REGEX.test(user);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (!validatePassword(e.target.value)) {
      setPasswordError("Please enter a valid password");
    } else {
      setPasswordError("");
    }
  };

  const validatePassword = (password) => {
    const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
    return PWD_REGEX.test(password);
  };

  const authenticateUser = (username, password) => {
    // Mock authentication
    const validUsername = "admin";
    const validPassword = "Admin@1234";
    return username === validUsername && password === validPassword;
  };

  const closeDialog = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user && password && !userError && !passwordError) {
      if (authenticateUser(user, password)) {
        alert('Login Successful');
        navigate('/admin'); // navigate to the desired page
      } else {
        setAuthError("Invalid username or password");
      }
    }
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const navigate = useNavigate();

  return (
    <>
      <Dialog
        sx={{
          borderRadius: 20,
          "& .MuiDialog-paper": {
            width: "1000px",
            height: "600px",
            borderRadius: "50px",
            backgroundImage: { LoginBg },
          },
        }}
        open={open}
        onClose={closeDialog}
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
                    id="outlined-basic"
                    label="Username"
                    variant="outlined"
                    fullWidth
                    onChange={handleUserChange}
                    error={Boolean(userError)}
                    helperText={userError}
                    InputProps={{ style: { borderRadius: 40 } }}
                    sx={{ margin: 1, marginTop: 5 }}
                  />
                  <TextField
                    id="outlined-basic"
                    type={showPassword ? 'text' : 'password'}
                    label="Password"
                    variant="outlined"
                    fullWidth
                    onChange={handlePasswordChange}
                    InputProps={{
                      style: { borderRadius: 40 },
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                          >
                            {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    error={Boolean(passwordError)}
                    helperText={passwordError}
                    sx={{ margin: 1 }}
                  />
                  {authError && (
                    <Typography
                      variant="body2"
                      sx={{ color: "red", textAlign: "center", marginTop: 2 }}
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
            onClick={closeDialog}
            sx={{ position: "absolute", top: -100, left: 0 }}
          >
            Close
          </Button>
        </Box>
      </Dialog>
    </>
  );
};

export default Popup;
