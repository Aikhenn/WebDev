import {Box, Button, Card,  CardContent, CardMedia, Typography} from "@mui/material";
import EventsBg from '../assets/EventsBg.png';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import NavBar from "./NavBar";
import Footer from "./Footer";


const Events = () => {

    const style = {margin: '10px',backgroundColor:'white', color:'black', '&:hover':{backgroundColor:'#0C7230', color: 'white'}}

    return (
<>
<NavBar />
       <Box sx={{Width: '100%'}}>
       <Typography variant= 'h1' sx={{position: 'absolute', top: 200, left: '40%', color: 'white', fontWeight: 'bold'}}> Events</Typography>
        <img src={EventsBg} style={{ width: innerWidth-12, opacity: "100", textAlign: 'center' }} />
       </Box>


        <Box sx={{display: 'flex', justifyContent: 'space-around'}}>
            <Box>
            <Card sx={{ position: 'relative', width: '1000px', margin: '100px 0px 20px 50px'}}>
                <CardMedia 
                component ='img'
                    height='400px'
                    image = 'https://source.unsplash.com/random'
                    alt='imageIcon'
                    
                    >
                
                </CardMedia>

               
                <CardContent>
                <Box sx={{position:'absolute', top: '53%', left: '3%',backgroundColor:'#0C7230' , color: 'white',padding: 1, borderRadius: 2}}>
                    <Typography sx={{ textAlign: 'center'}}>05 July 2024</Typography>
                </Box>

                <Box sx={{display:'flex', padding: '10px 0px 10px 32px', color: 'grey'}}>
                    <AccessTimeFilledIcon sx ={{margin: '0px 10px 0px 10px', color: '#0C7230'}}/> 
                    <Typography>10:30 AM</Typography>
                    <LocationOnIcon sx ={{margin: '0px 10px 0px 10px', color: '#0C7230'}}/>
                    <Typography>Location</Typography>

                </Box>    
    
                    
                    <Typography gutterBottom variant="h5" component="div" fontWeight={'Bold'} sx={{padding: '0px 35px 0px 35px', textAlign: ''}}> 
                    Bringing Food Back to the City
                    </Typography>
                    <Typography sx={{padding: '0px 35px 0px 35px', textAlign: 'justify'}}>
                    Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci phaedrum. There are many variations of
                    passages of Lorem Ipsum available, but the majority have alteration in some injected or words which
                    don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you
                    </Typography>
                    <Button  sx={{padding: '0px 35px 0px 35px', marginTop: '20px', textAlign: 'justify'}} >See more</Button>
                </CardContent>
         
                </Card>

                <Card sx={{ position: 'relative', width: '1000px', margin: '100px 0px 20px 50px'}}>
                <CardMedia 
                component ='img'
                    height='400px'
                    image = 'https://source.unsplash.com/random'
                    alt='imageIcon'
                    
                    >
                
                </CardMedia>

               
                <CardContent>
                <Box sx={{position:'absolute', top: '53%', left: '3%',backgroundColor:'#0C7230' , color: 'white',padding: 1, borderRadius: 2}}>
                    <Typography sx={{ textAlign: 'center'}}>05 July 2024</Typography>
                </Box>

                <Box sx={{display:'flex', padding: '10px 0px 10px 32px', color: 'grey'}}>
                    <AccessTimeFilledIcon sx ={{margin: '0px 10px 0px 10px', color: '#0C7230'}}/> 
                    <Typography>10:30 AM</Typography>
                    <LocationOnIcon sx ={{margin: '0px 10px 0px 10px', color: '#0C7230'}}/>
                    <Typography>Location</Typography>

                </Box>    
    
                    
                    <Typography gutterBottom variant="h5" component="div" fontWeight={'Bold'} sx={{padding: '0px 35px 0px 35px', textAlign: ''}}> 
                    Bringing Food Back to the City
                    </Typography>
                    <Typography sx={{padding: '0px 35px 0px 35px', textAlign: 'justify'}}>
                    Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci phaedrum. There are many variations of
                    passages of Lorem Ipsum available, but the majority have alteration in some injected or words which
                    don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you
                    </Typography>
                    <Button  sx={{padding: '0px 35px 0px 35px', marginTop: '20px', textAlign: 'justify'}} >See more</Button>
                </CardContent>
         
                </Card>

               
            </Box>

            <Box sx={{display: 'flex', justifyContent: 'center', flexDirection: 'column', margin: '50px 20px 30px 10px', maxWidth: '550px',  borderRadius:'20px'}}>
                <Box sx={{backgroundColor: '#F8F7F0', color: 'black', margin: '00px', padding: '20px', maxHeight: '680px'}}>
                    <Typography variant='h4' sx={{fontWeight: 'bold', color: '#0C7230', textAlign: 'center'}}>Upcoming Events</Typography>

                    <Box sx={{display:'flex', padding: '30px'}}>
                        <img src={'https://source.unsplash.com/random'} style={{maxWidth: '80px', height: '80px', borderRadius: '10px'}}></img>
                        <Typography variant="subtitle1" sx={{fontWeight: 'bold', padding: '00px 20px 10px 20px', fontSize:'16px'}}>
                            Bringing Food Production Back to Cities <br/> 05 July 2024
                        </Typography>
                       
                    </Box>

                    <Box sx={{display:'flex', padding: '30px'}}>
                        <img src={'https://source.unsplash.com/random'} style={{maxWidth: '80px', height: '80px', borderRadius: '10px'}}></img>
                        <Typography variant="subtitle1" sx={{fontWeight: 'bold', padding: '00px 20px 10px 20px', fontSize:'16px'}}>
                            Bringing Food Production Back to Cities <br/> 05 July 2024
                        </Typography>
                       
                    </Box>

                    <Box sx={{display:'flex', padding: '30px'}}>
                        <img src={'https://source.unsplash.com/random'} style={{maxWidth: '80px', height: '80px', borderRadius: '10px'}}></img>
                        <Typography variant="subtitle1" sx={{fontWeight: 'bold', padding: '00px 20px 10px 20px', fontSize:'16px'}}>
                            Bringing Food Production Back to Cities <br/> 05 July 2024
                        </Typography>
                       
                    </Box>

                    <Box sx={{display:'flex', padding: '30px'}}>
                        <img src={'https://source.unsplash.com/random'} style={{maxWidth: '80px', height: '80px', borderRadius: '10px'}}></img>
                        <Typography variant="subtitle1" sx={{fontWeight: 'bold', padding: '00px 20px 10px 20px', fontSize:'16px'}}>
                            Bringing Food Production Back to Cities <br/> 05 July 2024
                        </Typography>
                       
                    </Box>
                </Box>

                <Box sx={{backgroundColor: '#F8F7F0', color: 'black', marginTop: '30px', padding: '20px', maxHeight: '680px'}}>
                    <Typography variant='h6' sx={{fontWeight: 'bold',}}>Categories</Typography>
                    <Box sx={{color: '#878680',}}>
                       <Typography sx={{padding: '15px'}}>Agriculture </Typography>
                       <Typography sx={{padding: '15px'}}>Farm </Typography>
                       <Typography sx={{padding: '15px'}}>Farming </Typography>
                       <Typography sx={{padding: '15px'}}>Fresh Vegetables </Typography>
                       <Typography sx={{padding: '15px'}}>Harvest </Typography>
                       <Typography sx={{padding: '15px'}}>Organic Food </Typography>
                    </Box>
                   

                  
                </Box>
                
                <Box sx={{backgroundColor: '#F8F7F0', color: 'black', marginTop: '30px', padding: '20px', maxHeight: '680px'}}>
                    <Typography variant='h6' sx={{fontWeight: 'bold',}}>Tags</Typography>
                    <Box sx={{ display: 'flex', color: '#878680', width: '400px', paddingLeft: '50px',justifyContent: 'center', flexWrap: 'wrap'}}>
                       <Button variant="contained"  sx={style}>Agriculture</Button>
                       <Button variant="contained"  sx={style}>Farming</Button>
                       <Button variant="contained"  sx={style}>Harvest</Button>
                       <Button variant="contained"  sx={style}>Organic</Button>
                       <Button variant="contained"  sx={style}>Vegetables</Button>

                    </Box>
                   

                  
                </Box>
            </Box>
        </Box>

        
      



        <Footer />
       </>    )
}
export default Events;