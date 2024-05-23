import { Box, Button,  Dialog, Stack, TextField, ThemeProvider, Typography, createTheme } from "@mui/material";
import { FC } from "react";
import LoginBg from '../assets/LoginBg2.png';



// eslint-disable-next-line @typescript-eslint/no-unused-vars
const theme = createTheme({
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'white',
                color: 'white'
              
              },
              '&:hover fieldset': {
                borderColor: 'white',
                color: 'white'
              },
              '&.Mui-focused fieldset': {
                borderColor: 'white',
                color: 'white'
              },
              color: 'white',
            },
            '& .MuiInputLabel-root': {
              color: 'white',
            },
            '& .MuiInputBase-input': {
              color: 'white',
            },
          },
        },
      },

    },
  });



// Define the props type
interface PopupProps {
    open: boolean;
    setOpen: (open: boolean) => void;
 
}

// Use FC (Functional Component) to type the component
const Popup: FC<PopupProps> = ({ open, setOpen}) => {

    const closeDialog = () => {
        setOpen(false);
    }

  

    return (
        <Dialog sx={{borderRadius: 20,  "& .MuiDialog-paper": { width: '1000px', height: '600px', borderRadius: "50px", backgroundImage: {LoginBg} }}} open={open} onClose={closeDialog} maxWidth="lg" >
        <img src={LoginBg} style={{ width: '100%', height: '100%',opacity: '100%', objectFit: 'fill'}} alt="Background" />
          <Box sx={{position: 'absolute', top: 0, left:'450px',width: '550px', height: '600px', backgroundColor:'#196812',opacity: '80%',  overflow: 'hidden'}}></Box>
        <Box style={{ position: 'relative', padding: 0, width: '100%'}}>
            <Box maxWidth='lg' sx={{ 
                position:'absolute',
                 bottom: 600, 
                 border: '2px solid black',
                 left: '47%',
                 backgroundColor:'#196812', 
                 opacity: '100%', 
                 width: '50%', 
                 height: '10%', 
                 
              
                }}>
                  <Stack sx={{ position: 'relative', display: 'row', top: 0, margin: 3 }}>
                
                <ThemeProvider theme={theme}>
                    <Typography variant='h3' sx={{fontWeight: 'bold', color: 'white', textAlign: 'center', marginTop: 12}}>Welcome to Helen</Typography>
                    <Typography variant ='subtitle1'  sx={{color: 'white', display: 'flex', justifyContent: 'center'}}>Log In as Admin to Continue</Typography>
                    <TextField id="outlined-basic" label="Username" variant="outlined"   InputProps={{style: {borderRadius: 40,} }} sx={{margin: 1, marginTop: 5}}/>
                    <TextField id="outlined-basic" label="Password" variant="outlined" InputProps={{style: {borderRadius: 40,} }} sx={{margin: 1}}/>
                   
                    <Button variant='contained' sx={{backgroundColor: 'white',opacity: '100%', borderRadius: 10, marginTop: 8,color: '#0C7230', '&:hover': { backgroundColor: '#0C7230', color: 'white'  } }}>Login as Admin</Button>
                
                </ThemeProvider>
            </Stack>

            </Box>
            
            
            <Button onClick={closeDialog} sx={{position: 'absolute', top: -100, left: 0}}>Close</Button>
        </Box>
    </Dialog>
    );
}

export default Popup;