import { Box, Typography, useMediaQuery } from "@mui/material";
import Locations from '../assets/Location.png';
import NavBar from "./NavBar";
import Footer from "./Footer";
import LocationHeader from "./LocationHeader"

const Location = () => {

    const isMobile = useMediaQuery('(max-width:600px)');
    const isTablet = useMediaQuery('(max-width:960px)');

    return (
        <>
         <NavBar />
         <LocationHeader />
    
 {/* Main Container */}
 <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    maxWidth: '100%',
                    justifyContent: 'center',
                    marginTop: 5,
                    marginBottom: 8,
                    marginLeft: isMobile ? 2 : isTablet ? 10 : 40,
                    marginRight: isMobile ? 2 : isTablet ? 10 : 40,
                    padding: isMobile ? 1 : isTablet ? 2 : 3,
                    border: '2px solid #0C7230',
                    borderRadius: '15px 20px',
                }}
            >
                {/* Contact and Place Information */}
                <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
                    {/* Contact */}
                    <Box sx={{ flex: 1, maxWidth: '300px', color: '#0C7230', margin: 5, marginTop: isMobile ? 5 : 0 }}>
                        <Box>
                            <Typography variant='h3' sx={{ fontWeight: 'bold' }}>Contact</Typography>
                            <Typography variant='subtitle1'>
                                +63 911 0090 908 <br />
                                +63 912 3456 789 <br />
                                Helen@gmail.com <br />
                                sample@gmail.com <br />
                            </Typography>
                        </Box>
                    </Box>

                    {/* Place */}
                    <Box sx={{ flex: 1, maxWidth: '300px', color: '#0C7230', margin: 5, marginTop: isMobile ? 5 : 0 }}>
                        <Box>
                            <Typography variant='h3' sx={{ fontWeight: 'bold' }}>Place</Typography>
                            <Typography variant='subtitle1'>
                                Quezon Capital Compound <br />
                                Belen Drive, Barangay 10, <br />
                                Lucena City, <br />
                                Philippines.
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                
                {/* Location Image */}
                <Box sx={{ borderRadius: '20px', overflow: 'hidden', display: 'flex', alignItems: 'center', width: '100%', marginBottom: 2 }}>
                    <img src={Locations} style={{ width: '100%', height: 'auto', opacity: "100" }} />
                </Box>
              
            </Box>
 
         
 
 
 
        <Footer />
        </>
    )
}
export default Location;