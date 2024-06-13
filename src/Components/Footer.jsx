import { Box, Stack, Typography } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import HelenWhiteLogo from '../assets/HelenWhiteLogo.png';


function Footer () {
    return (
        <Box sx={{position: 'relative',backgroundColor: '#0C7230', color: '', width: innerWidth-12, justifyContent: 'space-around'}}>

            <Box sx={{display: 'flex', justifyContent: 'center',}}>

            <Stack sx ={{display:'flex', justifyContent: 'center'}}>
                <img src={HelenWhiteLogo} style={{width: '400px',}}></img>
                <Box sx ={{display: 'flex', justifyContent:'center'}}>
                <FacebookIcon sx ={{width: 40, height: 40}} /> 
                <XIcon sx ={{width: 50, height: 40}}/>
                <InstagramIcon sx ={{width: 40, height: 40}} />
                <LinkedInIcon sx ={{width: 40, height: 40}}/>
                </Box>
        
            </Stack>

            <Box sx = {{padding: 10, maxWidth: '100%'}}>
            <Typography variant="h3" sx={{ fontWeight: 'bold'}}>Explore</Typography>
            <Box sx ={{backgroundColor: '#E1E1E1', minHeight: '2px', width: '150%', margin: '7px 0px 20px 0px'}}></Box>
            <Typography variant="caption" sx={{ marginBottom: 10, fontSize: '17px'}}>Home<br /> About Us <br />Projects <br/> Events <br/> Location</Typography>
            
            </Box>
           
            <Box sx = {{padding: 10, maxWidth: '100%'}}  >
            <Typography variant="h3" sx={{ fontWeight: 'bold'}}>Location</Typography>
            <Box sx ={{backgroundColor: '#E1E1E1', minHeight: '2px', width: '130%', margin: '7px 0px 20px 0px'}}></Box>
            <Typography variant="caption" sx ={{fontSize: '17px'}}>Quezon Capital Compound <br /> Belen Drive, Barangay 10, <br /> Lucena City.</Typography>
            </Box>

            <Box sx = {{padding: 10, maxWidth: '100%'}}>
            <Typography variant="h3" sx={{ fontWeight: 'bold' }}>Contact </Typography>
            <Box sx ={{backgroundColor: '#E1E1E1', minHeight: '2px', width: '150%', margin: '7px 0px 20px 0px'}}></Box>
            <Typography variant="caption" sx ={{fontSize: '17px'}}>Helen@gmail.com <br /> sample@gmail.com  <br /> +63 911 0090 908 <br /> +63 912 3456 789</Typography>
            </Box>

            </Box>

            <Stack>
            <Box sx ={{backgroundColor: '#E1E1E1', minHeight: '2px', marginLeft: '15%', width: '70%'}}></Box>
            <Typography sx={{padding: 2, textAlign: 'center'}}> © 2024 Office of Provincial Agricultural Quezon FITS Center. All Rights Reserved</Typography>
            </Stack>
            
           
        </Box>
    )
}
export default Footer;