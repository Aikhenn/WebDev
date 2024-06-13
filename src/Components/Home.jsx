import { Box, Button, Card, CardContent, CardMedia, Container, Grid, Stack, ThemeProvider, Typography, createTheme, responsiveFontSizes } from "@mui/material";

import HomeBg from '../assets/HomeBg.png';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MobileApp from '../assets/MobileApp.png';
import SliderPage from "./SliderPage";
import NavBar from "./NavBar";
import Footer from "./Footer";


let theme = createTheme();
theme = responsiveFontSizes(theme);



const Home = () => {
    return (
        <>
     <NavBar />
        <Box
            sx={{
                position: 'relative',
                top: '0px',
                maxWidth: '100%',
                maxHeight: '10%'
            }}
        >
            <img src={HomeBg} style={{ maxWidth: "100%", opacity: "100" }} />

            <Typography
                sx={{
                    position: 'absolute',
                    top: '140px',
                    left: '30px',
                    maxWidth: '60%',
                    padding: '50px',
                    maxHeight: '59%'
                }}
            >
                <ThemeProvider theme={theme}>
                    <Typography variant='h1' sx={{ fontWeight: 'Bold', position: 'relative', top: '0px', }}>Helen</Typography>
                    <Typography variant='h6' sx={{ marginBottom: '50px', position: 'relative', top: '0px', }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut ultricies quam. Nullam eget 
                        sem vitae tortor vehicula tincidunt. Integer vitae magna eu velit malesuada vulputate. Proin 
                        porta felis a magna congue, vel semper est accumsan. Duis nec ipsum id felis pulvinar cursus. 
                        Nullam nec augue nec ex scelerisque lobortis. Phasellus maximus, sem et varius congue, nunc risus 
     ma                   fermentum lacus, vel ultricies odio elit eu enim.
                    </Typography>
                </ThemeProvider>

                <Button variant='contained'
                    sx={{
                        maxWidth: '200px',
                        maxHeight: '60px',
                        backgroundColor: '#0C7230',
                        '&:hover': {
                            backgroundColor: '#096328'
                        }
                    }}
                >Read More

                </Button>
            </Typography>

        </Box>
        
        <Box sx={{ position: 'relative', top: '0px', padding: '100px 20px 50px 20px', display: 'flex', justifyContent: 'center'}}>
            <Container sx= {{ }}>
                <Typography variant="h1" sx={{color: '#0C7230', fontWeight: 'bold'}}>About the App</Typography>
                <Typography variant="subtitle1" sx={{color: 'black',fontSize: 30    }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut ultricies quam. Nullam eget sem vitae 
                    tortor vehicula tincidunt. Integer vitae magna eu velit malesuada vulputate. Proin porta felis a magna 
                    congue, vel semper est accumsan. Duis nec ipsum id felis pulvinar cursus. Nullam nec augue nec ex scelerisque
                     lobortis. Phasellus maximus, sem et varius congue, nunc risus fermentum lacus, vel ultricies odio elit eu enim.
                </Typography>
            </Container>
            <Box sx={{}}>
                <img src={MobileApp} style={{minWidth: 340}}/>
          
            </Box>
         </Box>

         <Box sx ={{backgroundColor:'#0C7230', padding: '50px',display: 'flex', alignItems: 'center'}}>
            <Container>
            <Typography sx={{fontWeight:'bold', fontSize:'50px'}}>Explore Projects</Typography>
            <Button variant='contained' sx ={{fontSize:'20px', backgroundColor:'white', color:'#0C7230', '&:hover': {backgroundColor: '#EDF3F1'}}}>Discover More</Button>
            </Container>
            <Box sx={{}}>
                <SliderPage></SliderPage>
            </Box>
              
   
        
         </Box>

         <Stack sx={{backgroundColor:'white', color: '#0C7230', display: 'flex' , justifyContent: 'center', padding: 5}}>
            <Typography variant="h2" sx={{fontWeight: 'bold', marginLeft: '34%'}}> Upcoming Events </Typography>
           
            <Grid container spacing={0}  style={{position:'relative', margin: '10px', display: 'flex', justifyContent: 'center'}}>
              
                
                <Card sx={{ position: 'relative', maxWidth: 345, margin: 5, borderRadius: 2,  boxShadow: '2px 2px 10px gray', transition: 'transform .2s', '&:hover': {transform: 'scale(1.1)'}}}>
                <CardMedia 
                component ='img'
                    height='300px'
                    image = 'https://source.unsplash.com/random'
                    alt='imageIcon'
                    
                    >
                
                </CardMedia>

               
                <CardContent>
                <Box sx={{position:'absolute', top: 280 , left: '35%',backgroundColor:'#0C7230' , color: 'white',padding: 1, borderRadius: 2}}>
                    <Typography sx={{ textAlign: 'center'}}>05 July 2024</Typography>
                </Box>

                <Box sx={{display:'flex', padding: '10px 0px 10px 32px', color: 'grey'}}>
                    <AccessTimeFilledIcon sx ={{margin: '0px 10px 0px 10px', color: '#0C7230'}}/> 
                    <Typography>10:30 AM</Typography>
                    <LocationOnIcon sx ={{margin: '0px 10px 0px 10px', color: '#0C7230'}}/>
                    <Typography>Location</Typography>

                </Box>    
    
                    
                    <Typography gutterBottom variant="h5" component="div" fontWeight={'Bold'} sx={{padding: '0px 35px 0px 35px', textAlign: 'center'}}> 
                    Bringing Food Back to the City
                    </Typography>
                   
                </CardContent>
            
                
                </Card>

                
                
                <Card sx={{ position: 'relative', maxWidth: 345, margin: 5, borderRadius: 2,  boxShadow: '2px 2px 10px gray', transition: 'transform .2s', '&:hover': {transform: 'scale(1.1)'}}}>
                <CardMedia 
                component ='img'
                    height='300px'
                    image = 'https://source.unsplash.com/random'
                    alt='imageIcon'
                    
                    >
                
                </CardMedia>

               
                <CardContent>
                <Box sx={{position:'absolute', top: 280 , left: '35%',backgroundColor:'#0C7230' , color: 'white',padding: 1, borderRadius: 2}}>
                    <Typography sx={{ textAlign: 'center'}}>05 July 2024</Typography>
                </Box>

                <Box sx={{display:'flex', padding: '10px 0px 10px 32px', color: 'grey'}}>
                    <AccessTimeFilledIcon sx ={{margin: '0px 10px 0px 10px', color: '#0C7230'}}/> 
                    <Typography>10:30 AM</Typography>
                    <LocationOnIcon sx ={{margin: '0px 10px 0px 10px', color: '#0C7230'}}/>
                    <Typography>Location</Typography>

                </Box>    
    
                    
                    <Typography gutterBottom variant="h5" component="div" fontWeight={'Bold'} sx={{padding: '0px 35px 0px 35px', textAlign: 'center'}}> 
                    The Future of Farming, Smart Irrigation Solutions
                    </Typography>
                   
                </CardContent>
            
                
                </Card>

                <Card sx={{ position: 'relative', maxWidth: 345, margin: 5, borderRadius: 2,  boxShadow: '2px 2px 10px gray', transition: 'transform .2s', '&:hover': {transform: 'scale(1.1)'}}}>
                <CardMedia 
                component ='img'
                    height='300px'
                    image = 'https://source.unsplash.com/random'
                    alt='imageIcon'
                    
                    >
                
                </CardMedia>

               
                <CardContent>
                <Box sx={{position:'absolute', top: 280 , left: '35%',backgroundColor:'#0C7230' , color: 'white',padding: 1, borderRadius: 2}}>
                    <Typography sx={{ textAlign: 'center'}}>05 July 2024</Typography>
                </Box>

                <Box sx={{display:'flex', padding: '10px 0px 10px 32px', color: 'grey'}}>
                    <AccessTimeFilledIcon sx ={{margin: '0px 10px 0px 10px', color: '#0C7230'}}/> 
                    <Typography>10:30 AM</Typography>
                    <LocationOnIcon sx ={{margin: '0px 10px 0px 10px', color: '#0C7230'}}/>
                    <Typography>Location</Typography>

                </Box>    
    
                    
                    <Typography gutterBottom variant="h5" component="div" fontWeight={'Bold'} sx={{padding: '0px 35px 0px 35px', textAlign: 'center'}}> 
                    Agronamy and relation to Other Sciences
                    </Typography>
                   
                </CardContent>
            
                
                </Card>
            </Grid>
         </Stack>
         <Footer />
         </>
     
    )
}
export default Home;