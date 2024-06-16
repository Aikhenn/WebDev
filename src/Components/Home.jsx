import React from 'react';
import { Box, Button, Card, CardContent, CardMedia, Container, Grid, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MobileApp from '../assets/MobileApp.png';
import SliderPage from "./SliderPage";
import NavBar from "./NavBar";
import Footer from "./Footer";
import AppleIcon from '@mui/icons-material/Apple';
import AndroidIcon from '@mui/icons-material/Android';
import HomeHeader from "./HomeHeader";

const Home = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));


    return (
        <>
            {/* Navigation Bar */}
            <NavBar />

            {/* Home Header */}
            <HomeHeader />

            {/* About Section */}
            <Box sx={{ position: 'relative', padding: '100px 20px 50px 20px', display: 'flex', justifyContent: 'center' }}>
                <Container>
                    {/* About Title */}
                    <Typography variant="h1" sx={{ color: '#0C7230', fontWeight: 'bold' }}>About the App</Typography>

                    {/* About Description */}
                    <Typography variant="h6" sx={{ color: 'black' }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut ultricies quam. Nullam eget sem vitae
                        tortor vehicula tincidunt. Integer vitae magna eu velit malesuada vulputate. Proin porta felis a magna
                        congue, vel semper est accumsan. Duis nec ipsum id felis pulvinar cursus. Nullam nec augue nec ex scelerisque
                        lobortis. Phasellus maximus, sem et varius congue, nunc risus fermentum lacus, vel ultricies odio elit eu enim.
                    </Typography>

                    {/* Download Buttons */}
                    <Box sx={{ display: 'flex', justifyContent: isMobile ? 'center' : 'left', marginTop: '30px' }}>
                        {/* Google Play Store Button */}
                        <Button
                            variant="outlined"
                            sx={{ borderColor: '#000', color: '#000', marginRight: isMobile ? '0' : '15px', fontSize: '20px' }}
                            startIcon={<AndroidIcon sx={{ transform: 'scale(1.8)', margin: '10px' }} />}
                            href="https://play.google.com/store/apps/details?id=com.yourappname"
                            target="_blank"
                        >
                            Get it on <br />
                            Google Play
                        </Button>

                        {/* Apple App Store Button */}
                        <Button
                            variant="outlined"
                            sx={{ borderColor: '#000', color: '#000', fontSize: '20px' }}
                            startIcon={<AppleIcon sx={{ transform: 'scale(1.8)', margin: '10px' }} />}
                            href="https://apps.apple.com/us/app/your-app-name/idXXXXXXXXX"
                            target="_blank"
                        >
                            Download on the <br />
                            App Store
                        </Button>
                    </Box>
                </Container>

                {/* Mobile App Image */}
                <Box sx={{}}>
                    <img src={MobileApp} style={{ minWidth: 340, width: isMobile ? '100%' : 'auto' }} />
                </Box>
            </Box>

            {/* Explore Projects Section */}
            <Box sx={{ backgroundColor: '#0C7230', padding: '50px', display: 'flex', alignItems: 'center' }}>
                <Container>
                    {/* Explore Projects Title */}
                    <Typography sx={{ fontWeight: 'bold', fontSize: '50px', textAlign: isMobile ? 'center' : 'left' }}>Explore Projects</Typography>

                    {/* Discover More Button */}
                    <Box sx={{ display: 'flex', justifyContent: isMobile ? 'center' : 'left' }}>
                        <Button variant='contained'
                            sx={{
                                maxWidth: '200px',
                                maxHeight: '60px',
                                color: '#0C7230',
                                backgroundColor: '#FFFFFF',
                                '&:hover': {
                                    backgroundColor: '#F0F0F0',
                                }
                            }}
                        >
                            Discover More
                        </Button>
                    </Box>
                </Container>

                {/* Slider */}
                <Box sx={{ width: '100%' }}>
                    <SliderPage />
                </Box>
            </Box>

            {/* Upcoming Events Section */}
            <Stack sx={{ backgroundColor: 'white', color: '#0C7230', display: 'flex', justifyContent: 'center', padding: 5 }}>
                {/* Upcoming Events Title */}
                <Typography variant="h2" sx={{ fontWeight: 'bold', textAlign: 'center' }}> Upcoming Events </Typography>

                {/* Cards for Events */}
                <Grid container spacing={isMobile ? 2 : 4} style={{ position: 'relative', margin: '10px', display: 'flex', justifyContent: 'center' }}>
                    {/* Event Card 1 */}
                    <Card sx={{ position: 'relative', maxWidth: 345, margin: 2, borderRadius: 2, boxShadow: '2px 2px 10px gray', transition: 'transform .2s', '&:hover': { transform: 'scale(1.1)' } }}>
                        <CardMedia
                            component='img'
                            height='300px'
                            image='https://bingw.jasonzeng.dev/?index=random'
                            alt='imageIcon'
                        />
                        <CardContent>
                            {/* Date */}
                            <Box sx={{ position: 'absolute', top: 280, left: '35%', backgroundColor: '#0C7230', color: 'white', padding: 1, borderRadius: 2 }}>
                                <Typography sx={{ textAlign: 'center' }}>05 July 2024</Typography>
                            </Box>

                            {/* Time and Location */}
                            <Box sx={{ display: 'flex', padding: '10px 0px 10px 32px', color: 'grey' }}>
                                <AccessTimeFilledIcon sx={{ margin: '0px 10px 0px 10px', color: '#0C7230' }} />
                                <Typography>10:30 AM</Typography>
                                <LocationOnIcon sx={{ margin: '0px 10px 0px 10px', color: '#0C7230' }} />
                                <Typography>Location</Typography>
                            </Box>

                            {/* Event Title */}
                            <Typography gutterBottom variant="h5" component="div" fontWeight={'Bold'} sx={{ padding: '0px 35px 0px 35px', textAlign: 'center' }}>
                                Bringing Food Back to the City
                            </Typography>
                        </CardContent>
                    </Card>

                    {/* Event Card 2 */}
                    <Card sx={{ position: 'relative', maxWidth: 345, margin: 2, borderRadius: 2, boxShadow: '2px 2px 10px gray', transition: 'transform .2s', '&:hover': { transform: 'scale(1.1)' } }}>
                        <CardMedia
                            component='img'
                            height='300px'
                            image='https://bingw.jasonzeng.dev/?index=random'
                            alt='imageIcon'
                        />
                        <CardContent>
                            {/* Date */}
                            <Box sx={{ position: 'absolute', top: 280, left: '35%', backgroundColor: '#0C7230', color: 'white', padding: 1, borderRadius: 2 }}>
                                <Typography sx={{ textAlign: 'center' }}>05 July 2024</Typography>
                            </Box>

                            {/* Time and Location */}
                            <Box sx={{ display: 'flex', padding: '10px 0px 10px 32px', color: 'grey' }}>
                                <AccessTimeFilledIcon sx={{ margin: '0px 10px 0px 10px', color: '#0C7230' }} />
                                <Typography>10:30 AM</Typography>
                                <LocationOnIcon sx={{ margin: '0px 10px 0px 10px', color: '#0C7230' }} />
                                <Typography>Location</Typography>
                            </Box>

                            {/* Event Title */}
                            <Typography gutterBottom variant="h5" component="div" fontWeight={'Bold'} sx={{ padding: '0px 35px 0px 35px', textAlign: 'center' }}>
                                The Future of Farming, Smart Irrigation Solutions
                            </Typography>
                        </CardContent>
                    </Card>

                    {/* Event Card 3 */}
                    <Card sx={{ position: 'relative', maxWidth: 345, margin: 2, borderRadius: 2, boxShadow: '2px 2px 10px gray', transition: 'transform .2s', '&:hover': { transform: 'scale(1.1)' } }}>
                        <CardMedia
                            component='img'
                            height='300px'
                            image='https://bingw.jasonzeng.dev/?index=random'
                            alt='imageIcon'
                        />
                        <CardContent>
                            {/* Date */}
                            <Box sx={{ position: 'absolute', top:280, left: '35%', backgroundColor: '#0C7230', color: 'white', padding: 1, borderRadius: 2 }}>
                                <Typography sx={{ textAlign: 'center' }}>05 July 2024</Typography>
                            </Box>

                            {/* Time and Location */}
                            <Box sx={{ display: 'flex', padding: '10px 0px 10px 32px', color: 'grey' }}>
                                <AccessTimeFilledIcon sx={{ margin: '0px 10px 0px 10px', color: '#0C7230' }} />
                                <Typography>10:30 AM</Typography>
                                <LocationOnIcon sx={{ margin: '0px 10px 0px 10px', color: '#0C7230' }} />
                                <Typography>Location</Typography>
                            </Box>

                            {/* Event Title */}
                            <Typography gutterBottom variant="h5" component="div" fontWeight={'Bold'} sx={{ padding: '0px 35px 0px 35px', textAlign: 'center' }}>
                                Agronomy and Relation to Other Sciences
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Stack>

            {/* Footer */}
            <Footer />
        </>
    );
}

export default Home;
