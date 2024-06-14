import {
  Box,
  ButtonBase,
  Card,
  CardContent,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import SendIcon from "@mui/icons-material/Send";
import AttachFileIcon from "@mui/icons-material/AttachFile";

export default function Messages() {

  const cardStyle = { 
    boxShadow: "1px 1px 25px -15px grey",
    borderRadius: 5,
    width: "100%",
    height: 100,
    padding: "10px 5px 5px 10px",
    backgroundColor: "white",
    "&:hover": { 
      backgroundColor: "#0C7230", 
      color: 'white', 
      transition: '0.2s',
      "& .MuiTypography-root": {
        color: 'white',
      }
    },
  }

  return (
    <Box
      sx={{
        position: "relative",
        top: 0,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          flexDirection: "column",
          flexWrap: "wrap",
          backgroundColor: "#F5F5F5",
          width: 360,
          height: innerHeight - 150,
          borderRadius: 5,
          marginRight: 2,
          padding: 2,
        }}
      >
        <TextField
          marginBottom="49"
          InputProps={{
            sx: {
              borderRadius: 10,
              backgroundColor: "white",
              height: 50,
              width: 280,
              margin: 1,
              padding: 2,
            },
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          placeholder="Search..."
        >
          <AccountCircleIcon />
          Search
        </TextField>

        <ButtonBase
          sx={{
            borderRadius: 5,
            marginBottom: 1.5,
            "&:hover": { backgroundColor: "transparent" },
          }}
        >
          <Card sx={cardStyle}>
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: 0.5,
                }}
              >
                <AccountCircleIcon
                  sx={{ width: 40, height: 40, marginRight: 1 }}
                />
                <Typography variant="h6" sx={{color: '#0C7230'}}>Farmer Name</Typography>
              </Box>

              <Box>
                <Typography variant="subtitle">
                  Can you help me fix the problem
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </ButtonBase>

        <ButtonBase sx={{ borderRadius: 5, marginBottom: 1.5 }}>
          <Card sx={cardStyle}>
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: 0.5,
                }}
              >
                <AccountCircleIcon
                  sx={{ width: 40, height: 40, marginRight: 1  }}
                />
                <Typography variant="h6" sx={{color: '#0C7230'}}>Farmer Name</Typography>
              </Box>

              <Box>
                <Typography variant="subtitle">
                  Can you help me fix the problem
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </ButtonBase>

        <ButtonBase sx={{ borderRadius: 5, marginBottom: 1.5 }}>
          <Card sx={cardStyle}>
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: 0.5,
                }}
              >
                <AccountCircleIcon
                  sx={{ width: 40, height: 40, marginRight: 1 }}
                />
                <Typography variant="h6" sx={{color: '#0C7230'}}>Farmer Name</Typography>
              </Box>

              <Box>
                <Typography variant="subtitle">
                  Can you help me fix the problem
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </ButtonBase>
      </Box>

      <Box
        sx={{
          position: "relative",
          backgroundColor: "#F9F9F9",
          width: 800,
          alignItems: "space-around",
          height: innerHeight - 150,
          borderRadius: 5,
          boxShadow: 2,
          marginRight: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            padding: 3,
            position: "relative",
            boxShadow: 3,
            height: "100px",
            backgroundColor: "white",
            borderRadius: "10px 10px 0px 0px",
          }}
        >
          <AccountCircleIcon sx={{ width: 70, height: 70, marginRight: 1 }} />
          <Box>
            <Typography variant="h5" sx={{color: '#0C7230'}}> Farmer Name</Typography>
            <Typography>@username</Typography>
          </Box>
        </Box>

        <Box sx={{ position: "relative" }}>
          <Box
            sx={{
              backgroundColor: "white",
              position: "relative",
              top: 500,
              boxShadow: 4,
              width: "50%",
              padding: 2,
              margin: 2,
              borderRadius: 4,
            }}
          >
            <Typography>Can you help me fix</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            position: "relative",
            top: 500,
            padding: 2,
            backgroundColor: "white",
            boxShadow: "0px -2px 20px -15px",
            borderRadius: "0px 0px 15px 15px",
          }}
        >
          <TextField
            InputProps={{
              sx: {
                borderRadius: 10,
                backgroundColor: "white",
                height: 50,
                width: 700,
                margin: 1,
                padding: 2,
              },
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton sx={{color: '#0C7230'}}>
                    <AttachFileIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            placeholder="Message..."
          ></TextField>
          <IconButton sx={{backgroundColor: '#0C7230', color: 'white', '&:hover': {backgroundColor: '#0C7230', color: 'white'}}}>
            <SendIcon sx={{marginLeft: '2px'}} />
          </IconButton>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          flexDirection: "column",
          backgroundColor: "white",
          width: 350,
          height: innerHeight - 150,
          borderRadius: 5,
          boxShadow: 2,
          padding: 10,
        }}
      >
        <AccountCircleIcon sx={{ width: 200, height: 200 }} />
        <Typography variant="h5" fontWeight={"bold"} sx={{color: '#0C7230'}}>
          Farmer Name
        </Typography>
        <Typography>@username</Typography>
      </Box>
    </Box>
  );
}
