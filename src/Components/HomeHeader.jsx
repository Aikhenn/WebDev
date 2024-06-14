import React from 'react';
import { Box, Typography, Button, createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material";
import HomeBg from '../assets/HomeBg.png';

// Create and customize the theme
let theme = createTheme();
theme = responsiveFontSizes(theme);

const HomeHeader = () => {
    return (
        <ThemeProvider theme={theme}>
            {/* Home Page Section */}
            <Box sx={{ position: 'relative', maxWidth: '100%', marginTop: 8, overflow: 'hidden' }}>
                <Box
                    component="img"
                    src={HomeBg}
                    alt="Background"
                    sx={{
                        width: '100%',
                        height: '70%',
                        opacity: "100",
                    }}
                />

                {/* Description */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: '140px',
                        left: '30px',
                        maxWidth: '60%',
                        padding: '50px',
                        maxHeight: '59%',
                        color: 'white',
                    }}
                >
                    {/* Title */}
                    <Typography variant='h1' sx={{ fontWeight: 'bold', position: 'relative', lineHeight: 1.2 }}>
                        Helen
                    </Typography>

                    {/* Description */}
                    <Typography variant='h6' sx={{ marginBottom: '50px', position: 'relative', lineHeight: 1.5, whiteSpace: 'pre-wrap' }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut ultricies quam. Nullam eget
                        sem vitae tortor vehicula tincidunt. Integer vitae magna eu velit malesuada vulputate. Proin
                        porta felis a magna congue, vel semper est accumsan. Duis nec ipsum id felis pulvinar cursus.
                        Nullam nec augue nec ex scelerisque lobortis. Phasellus maximus, sem et varius congue, nunc risus
                        fermentum lacus, vel ultricies odio elit eu enim.
                    </Typography>

                    {/* Read More Button */}
                    <Button variant='contained'
                        sx={{
                            maxWidth: '200px',
                            maxHeight: '60px',
                            backgroundColor: '#0C7230',
                            '&:hover': {
                                backgroundColor: '#096328'
                            }
                        }}
                    >
                        Read More
                    </Button>
                </Box>
            </Box>
        </ThemeProvider>
    );
};

export default HomeHeader;
