import React, { useState } from 'react';
import { Box, Button, Card, CardContent, CardMedia, Typography, IconButton } from "@mui/material";
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled'; 
import LocationOnIcon from '@mui/icons-material/LocationOn'; 
import EventIcon from '@mui/icons-material/Event';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import NavBar from "./NavBar"; 
import Footer from "./Footer";
import CustomPagination from './CustomPagination'; // Import the renamed Pagination component
import EventsHeader from './EventsHeader'; // Import the EventsHeader component

const Events = () => {
    // Style for tag buttons
    const style = { 
        margin: '10px',
        backgroundColor: 'white',
        color: 'black',
        '&:hover': { backgroundColor: '#0C7230', color: 'white' }
    };

    // State for pagination
    const [page, setPage] = useState(1);
    const [expandedCard, setExpandedCard] = useState(null);
    const eventsPerPage = 3;
    const events = [
        {
            date: '05 July 2024',
            time: '10:30 AM',
            location: 'Location',
            title: 'Bringing Food Back to the City',
            description: 'Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci phaedrum. There are many variations of passages of Lorem Ipsum available, but the majority have alteration in some injected or words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you',
            image: 'https://source.unsplash.com/random',
            tags: ['Harvest', 'Agriculture']
        },
        {
            date: '06 July 2024',
            time: '11:00 AM',
            location: 'Location',
            title: 'Urban Farming Workshop',
            description: 'Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci phaedrum. There are many variations of passages of Lorem Ipsum available, but the majority have alteration in some injected or words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you',
            image: 'https://source.unsplash.com/random',
            tags: ['Farming', 'Urban']
        },
        {
            date: '07 July 2024',
            time: '09:00 AM',
            location: 'Location',
            title: 'Sustainable Agriculture Conference',
            description: 'Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci phaedrum. There are many variations of passages of Lorem Ipsum available, but the majority have alteration in some injected or words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you',
            image: 'https://source.unsplash.com/random',
            tags: ['Sustainable', 'Agriculture']
        },
    ];

    const handleChange = (_event, value) => {
        setPage(value);
    };

    const displayedEvents = events.slice((page - 1) * eventsPerPage, page * eventsPerPage);

    return (
        <>
            {/* Navigation bar */}
            <NavBar /> 
            
            {/* Event Page Header */}
            <EventsHeader /> {/* Use the EventsHeader component */}

            {/* Main container for event cards and sidebar */}
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-around', alignItems: { xs: 'flex-start', md: 'flex-start' } }}> 
                {/* Container for the event cards */}
                <Box sx={{ flex: '1', maxWidth: { xs: '100%', md: '1000px' }, margin: '20px' }}> 
                    {expandedCard === null && displayedEvents.map((event, index) => (
                        <Card key={index} sx={{ position: 'relative', width: '100%', margin: { xs: '20px 0', md: '20px 50px' } }}>
                            <CardMedia 
                                component='img'
                                height='400px'
                                image={event.image}
                                alt='Event Image'
                            />
                            <CardContent>
                                {/* Time, date, and location information */}
                                <Box sx={{ display: 'flex', alignItems: 'center', padding: '10px 10px', color: 'black'}}>
                                    <EventIcon sx={{ margin: '0px 10px', color: '#0C7230' }} />
                                    <Typography>{event.date}</Typography>
                                    <AccessTimeFilledIcon sx={{ margin: '0px 10px', color: '#0C7230' }} /> 
                                    <Typography>{event.time}</Typography>
                                    <LocationOnIcon sx={{ margin: '0px 10px', color: '#0C7230' }} />
                                    <Typography>{event.location}</Typography>
                                </Box>

                                {/* Event title and description */}
                                <Typography gutterBottom variant="h5" component="div" fontWeight={'Bold'} sx={{ padding: '0px 35px 0px 35px' }}> 
                                    {event.title}
                                </Typography>
                                <Typography sx={{ padding: '0px 35px 0px 35px', textAlign: 'justify' }}>
                                    {event.description}
                                </Typography>
                                <Button 
                                    sx={{ padding: '0px 35px 0px 35px', marginTop: '20px', textAlign: 'justify' }} 
                                    onClick={() => {
                                        setExpandedCard(index);
                                        window.scrollTo({
                                            top: 0,
                                            behavior: 'smooth' // Optional for smooth scrolling
                                        });
                                    }}
                                >
                                    See more
                                </Button>
                            </CardContent>
                        </Card>
                    ))}

                    {expandedCard !== null && (
                        <>
                        <Box sx={{ display: 'flex', alignItems: 'center', maxWidth: 1600, margin: '0 auto' }}>
                            <IconButton onClick={() => setExpandedCard(null)}>
                                <ArrowBackIcon />
                            </IconButton>
                            <Typography variant="h6" sx={{ color: 'black', marginRight: 'auto' }}>
                            List of Events
                            </Typography>
                        </Box>
                            <Card sx={{ position: 'relative', width: '100%', margin: '20px 0' }}>
                                <CardMedia 
                                    component='img'
                                    height='400px'
                                    image={events[expandedCard].image}
                                    alt='Event Image'
                                />
                                <CardContent>
                                    {/* Time, date, and location information */}
                                    <Box sx={{ display: 'flex', alignItems: 'center', padding: '10px 32px', color: 'black'}}>
                                        <EventIcon sx={{ margin: '0px 10px', color: '#0C7230' }} />
                                        <Typography>{events[expandedCard].date}</Typography>
                                        <AccessTimeFilledIcon sx={{ margin: '0px 10px', color: '#0C7230' }} /> 
                                        <Typography>{events[expandedCard].time}</Typography>
                                        <LocationOnIcon sx={{ margin: '0px 10px', color: '#0C7230' }} />
                                        <Typography>{events[expandedCard].location}</Typography>
                                    </Box>

                                    {/* Event title and description */}
                                    <Typography gutterBottom variant="h5" component="div" fontWeight={'Bold'} sx={{ padding: '0px 35px 0px 35px' }}> 
                                        {events[expandedCard].title}
                                    </Typography>
                                    <Typography sx={{ padding: '0px 35px 0px 35px', textAlign: 'justify' }}>
                                        {events[expandedCard].description}
                                    </Typography>

                                    {/* Additional fillers */}
                                    <Typography sx={{ padding: '20px 35px 0px 35px', textAlign: 'justify' }}>
                                        Additional filler content goes here. This is where you can add more information about the event.
                                    </Typography>

                                    {/* Tags */}
                                    <Box sx={{ padding: '20px 35px 0px 35px', display: 'flex', flexWrap: 'wrap' }}>
                                    <Typography variant="h6" sx={{ color: 'black', marginTop: '10px'}}>
                                        Tags:
                                    </Typography>
                                        {events[expandedCard].tags.map((tag, tagIndex) => (
                                            <Button key={tagIndex} variant="contained" sx={style}>{tag}</Button>
                                        ))}
                                    </Box>

                                </CardContent>
                            </Card>
                        </>
                    )}

                    {/* Pagination */}
                    {expandedCard === null && (
                        <CustomPagination 
                            count={Math.ceil(events.length / eventsPerPage)} 
                            page={page} 
                            onChange={handleChange} 
                        />
                    )}
                </Box>

                {/* Sidebar section */}
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', margin: '20px', maxWidth: { xs: '100%', md: '550px' }, marginTop: { md: '32px' }  }}>
                    
                    {/* Upcoming Events section */}
                    <Box sx={{ backgroundColor: '#F8F7F0', color: 'black', padding: '20px', borderRadius: '20px', margin: '20px 20px' }}>
                        <Typography variant='h4' sx={{ fontWeight: 'bold', color: '#0C7230', textAlign: 'center' }}>Upcoming Events</Typography>
                        
                        {/* Individual upcoming event items */}
                        <Box sx={{ display: 'flex', padding: '20px 0', alignItems: 'center' }}>
                            <img src={'https://source.unsplash.com/random'} style={{ width: '80px', height: '80px', borderRadius: '10px', marginRight: '20px' }} alt="Upcoming Event" />
                            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', fontSize: '16px' }}>
                                Bringing Food Production Back to Cities <br/> 05 July 2024
                            </Typography>
                        </Box>
                        {/* Repeat similar blocks for more upcoming events */}
                    </Box>

                    {/* Categories section */}
                    <Box sx={{ backgroundColor: '#F8F7F0', color: 'black', padding: '20px', borderRadius: '20px', margin: '20px 20px'  }}>
                        <Typography variant='h6' sx={{ fontWeight: 'bold' }}>Categories</Typography>
                        <Box sx={{ color: '#878680', padding: '15px 0' }}>
                            <Typography sx={{ padding: '15px 0' }}>Agriculture</Typography>
                            <Typography sx={{ padding: '15px 0' }}>Farm</Typography>
                            <Typography sx={{ padding: '15px 0' }}>Farming</Typography>
                            <Typography sx={{ padding: '15px 0' }}>Fresh Vegetables</Typography>
                            <Typography sx={{ padding: '15px 0' }}>Harvest</Typography>
                            <Typography sx={{ padding: '15px 0' }}>Organic Food</Typography>
                        </Box>
                    </Box>

                    {/* Tags section */}
                    <Box sx={{ backgroundColor: '#F8F7F0', color: 'black', padding: '20px', borderRadius: '20px' , margin: '20px 20px'  }}>
                        <Typography variant='h6' sx={{ fontWeight: 'bold' }}>Tags</Typography>
                        <Box sx={{ display: 'flex', color: '#878680', justifyContent: 'center', flexWrap: 'wrap' }}>
                            {/* Tags as buttons */}
                            <Button variant="contained" sx={style}>Agriculture</Button>
                            <Button variant="contained" sx={style}>Farming</Button>
                            <Button variant="contained" sx={style}>Harvest</Button>
                            <Button variant="contained" sx={style}>Organic</Button>
                            <Button variant="contained" sx={style}>Vegetables</Button>
                        </Box>                  
                    </Box>
                </Box>
            </Box>

            {/* Footer */}
            <Footer /> 
        </>    
    )
}

export default Events;
