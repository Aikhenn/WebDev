import { Box, Grid, Stack, Typography, Link as MuiLink } from "@mui/material";
import { Link } from 'react-router-dom'; 
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import HelenWhiteLogo from '../assets/HelenWhiteLogo.png';

function Footer() {
    return (
        <Box sx={{ position: 'relative', backgroundColor: '#0C7230', color: '', width: '100%', justifyContent: 'space-around' }}>
            <Grid container spacing={2} sx={{ padding: 2 }}>
              
                {/* First Column: Logo and Social Media Icons */}
                <Grid item xs={12} sm={6} md={3} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Stack sx={{ display: 'flex', justifyContent: 'center' }}>
                        <img src={HelenWhiteLogo} style={{ width: '200px' }} alt="Logo" />
                        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
                            <FacebookIcon sx={{ width: 40, height: 40, marginRight: 1 }} />
                            <XIcon sx={{ width: 50, height: 40, marginRight: 1 }} />
                            <InstagramIcon sx={{ width: 40, height: 40, marginRight: 1 }} />
                            <LinkedInIcon sx={{ width: 40, height: 40, marginRight: 1 }} />
                        </Box>
                    </Stack>
                </Grid>

                {/* Second Column: Explore */}
                <Grid item xs={12} sm={6} md={3}>
                    <Box sx={{ padding: 2 }}>
                        <Typography variant="h3" sx={{ fontWeight: 'bold' }}>Explore</Typography>
                        <Box sx={{ backgroundColor: '#E1E1E1', minHeight: '2px', width: '100%', margin: '7px 0px 20px 0px' }}></Box>
                        <Typography variant="caption" sx={{ marginBottom: 10, fontSize: '17px' }}>
                            <MuiLink component={Link} to="/" sx={{ color: 'inherit', textDecoration: 'none' }}>Home</MuiLink><br />
                            <MuiLink component={Link} to="/about" sx={{ color: 'inherit', textDecoration: 'none' }}>About Us</MuiLink><br />
                            <MuiLink component={Link} to="/projects" sx={{ color: 'inherit', textDecoration: 'none' }}>Projects</MuiLink><br />
                            <MuiLink component={Link} to="/events" sx={{ color: 'inherit', textDecoration: 'none' }}>Events</MuiLink><br />
                            <MuiLink component={Link} to="/location" sx={{ color: 'inherit', textDecoration: 'none' }}>Location</MuiLink>
                        </Typography>
                    </Box>
                </Grid>

                {/* Third Column: Location */}
                <Grid item xs={12} sm={6} md={3}>
                    <Box sx={{ padding: 2 }}>
                        <Typography variant="h3" sx={{ fontWeight: 'bold' }}>Location</Typography>
                        <Box sx={{ backgroundColor: '#E1E1E1', minHeight: '2px', width: '100%', margin: '7px 0px 20px 0px' }}></Box>
                        <Typography variant="caption" sx={{ fontSize: '17px' }}>
                            Quezon Capital Compound <br /> Belen Drive, Barangay 10, <br /> Lucena City.
                        </Typography>
                    </Box>
                </Grid>

                {/* Fourth Column: Contact */}
                <Grid item xs={12} sm={6} md={3}>
                    <Box sx={{ padding: 2 }}>
                        <Typography variant="h3" sx={{ fontWeight: 'bold' }}>Contact</Typography>
                        <Box sx={{ backgroundColor: '#E1E1E1', minHeight: '2px', width: '100%', margin: '7px 0px 20px 0px' }}></Box>
                        <Typography variant="caption" sx={{ fontSize: '17px' }}>
                            Helen@gmail.com <br /> sample@gmail.com <br /> +63 911 0090 908 <br /> +63 912 3456 789
                        </Typography>
                    </Box>
                </Grid>
            </Grid>

            <Stack>
                <Box sx={{ backgroundColor: '#E1E1E1', minHeight: '2px', marginLeft: '15%', width: '70%' }}></Box>
                <Typography sx={{ padding: 2, textAlign: 'center' }}>
                    © 2024 Office of Provincial Agricultural Quezon FITS Center. All Rights Reserved
                </Typography>
            </Stack>
        </Box>
    );
}

export default Footer;
