import { Box, Typography } from "@mui/material";
import LocationBg from  '../assets/LocationBg.png';
import Locations from '../assets/Location.png';

const Location = () => {
    return (
        <>
        <Box sx={{maxWidth: '100%'}}>
        <Typography variant= 'h1' sx={{position: 'absolute', top: 200, left: '40%', color: 'white', fontWeight: 'bold'}}> Location </Typography>
         <img src={LocationBg} style={{ maxWidth: "100%", opacity: "100" }} />
        </Box>

        <Box sx={{display: 'flex', maxWidth:'100%', justifyContent: 'center', marginTop: 10, marginBottom: 10, marginLeft: 55, marginRight: 55, padding: 5, border: '2px solid #0C7230', borderRadius: '15px 20px'}}>
            <Box sx={{color: '#0C7230', marginLeft: 5, marginRight: 10}}>
                
                <Box>
                    <Typography variant='h3' sx={{fontWeight: 'bold'}}>Contact</Typography>
                    <Typography variant ='subtitle1'>Helen@gmail.com <br /> sample@gmail.com <br /> +63 911 0090 908 <br /> +63 912 3456 789</Typography>
                </Box>

                    
                <Box sx={{marginTop: 10}}>
                    <Typography variant='h3' sx={{fontWeight: 'bold'}}>Place</Typography>
                    <Typography variant ='subtitle1'>Helen@gmail.com <br /> sample@gmail.com <br /> +63 911 0090 908 <br /> +63 912 3456 789</Typography>
                </Box>
          
          
            </Box>
            <Box sx={{borderRadius: '200px'}}>
            <img src={Locations} style={{ maxWidth: "100%", opacity: "100", borderRadius: 20 }} />        
            </Box>

        </Box>
 
         
 
 
 
        
        </>
    )
}
export default Location;