import { Box, Card, CardMedia, Typography, Pagination, useMediaQuery, useTheme, ButtonBase, IconButton } from '@mui/material';
import NavBar from './NavBar';
import Footer from './Footer';
import ProjectBg from '../assets/ProjectBg.png';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import React, { useState } from 'react';
import CustomPagination from './CustomPagination'; 
import ProjectHeader from './ProjectsHeader';

const Projects = () => {
    const projectArray = [
        { title: 'Project 1', image: 'https://source.unsplash.com/random', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut ultricies quam. Nullam eget sem vitae tortor vehicula tincidunt. Integer vitae magna eu velit malesuada vulputate. Proin porta felis a magna congue, vel semper est accumsan. Duis nec ipsum id felis pulvinar cursus. Nullam nec augue nec ex scelerisque lobortis. Phasellus maximus, sem et varius congue, nunc risus fermentum lacus, vel ultricies odio elit eu enim.' },
        { title: 'Project 2', image: 'https://source.unsplash.com/random', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut ultricies quam. Nullam eget sem vitae tortor vehicula tincidunt. Integer vitae magna eu velit malesuada vulputate. Proin porta felis a magna congue, vel semper est accumsan. Duis nec ipsum id felis pulvinar cursus. Nullam nec augue nec ex scelerisque lobortis. Phasellus maximus, sem et varius congue, nunc risus fermentum lacus, vel ultricies odio elit eu enim.' },
        { title: 'Project 3', image: 'https://source.unsplash.com/random', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut ultricies quam. Nullam eget sem vitae tortor vehicula tincidunt. Integer vitae magna eu velit malesuada vulputate. Proin porta felis a magna congue, vel semper est accumsan. Duis nec ipsum id felis pulvinar cursus. Nullam nec augue nec ex scelerisque lobortis. Phasellus maximus, sem et varius congue, nunc risus fermentum lacus, vel ultricies odio elit eu enim.' },
        { title: 'Project 4', image: 'https://source.unsplash.com/random', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut ultricies quam. Nullam eget sem vitae tortor vehicula tincidunt. Integer vitae magna eu velit malesuada vulputate. Proin porta felis a magna congue, vel semper est accumsan. Duis nec ipsum id felis pulvinar cursus. Nullam nec augue nec ex scelerisque lobortis. Phasellus maximus, sem et varius congue, nunc risus fermentum lacus, vel ultricies odio elit eu enim.' },
        { title: 'Project 5', image: 'https://source.unsplash.com/random', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut ultricies quam. Nullam eget sem vitae tortor vehicula tincidunt. Integer vitae magna eu velit malesuada vulputate. Proin porta felis a magna congue, vel semper est accumsan. Duis nec ipsum id felis pulvinar cursus. Nullam nec augue nec ex scelerisque lobortis. Phasellus maximus, sem et varius congue, nunc risus fermentum lacus, vel ultricies odio elit eu enim.' },
        { title: 'Project 6', image: 'https://source.unsplash.com/random', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut ultricies quam. Nullam eget sem vitae tortor vehicula tincidunt. Integer vitae magna eu velit malesuada vulputate. Proin porta felis a magna congue, vel semper est accumsan. Duis nec ipsum id felis pulvinar cursus. Nullam nec augue nec ex scelerisque lobortis. Phasellus maximus, sem et varius congue, nunc risus fermentum lacus, vel ultricies odio elit eu enim.' },
        { title: 'Project 7', image: 'https://source.unsplash.com/random', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut ultricies quam. Nullam eget sem vitae tortor vehicula tincidunt. Integer vitae magna eu velit malesuada vulputate. Proin porta felis a magna congue, vel semper est accumsan. Duis nec ipsum id felis pulvinar cursus. Nullam nec augue nec ex scelerisque lobortis. Phasellus maximus, sem et varius congue, nunc risus fermentum lacus, vel ultricies odio elit eu enim.' },
        { title: 'Project 8', image: 'https://source.unsplash.com/random', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut ultricies quam. Nullam eget sem vitae tortor vehicula tincidunt. Integer vitae magna eu velit malesuada vulputate. Proin porta felis a magna congue, vel semper est accumsan. Duis nec ipsum id felis pulvinar cursus. Nullam nec augue nec ex scelerisque lobortis. Phasellus maximus, sem et varius congue, nunc risus fermentum lacus, vel ultricies odio elit eu enim.' },
        { title: 'Project 9', image: 'https://source.unsplash.com/random', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut ultricies quam. Nullam eget sem vitae tortor vehicula tincidunt. Integer vitae magna eu velit malesuada vulputate. Proin porta felis a magna congue, vel semper est accumsan. Duis nec ipsum id felis pulvinar cursus. Nullam nec augue nec ex scelerisque lobortis. Phasellus maximus, sem et varius congue, nunc risus fermentum lacus, vel ultricies odio elit eu enim.' },
        { title: 'Project 10', image: 'https://source.unsplash.com/random', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut ultricies quam. Nullam eget sem vitae tortor vehicula tincidunt. Integer vitae magna eu velit malesuada vulputate. Proin porta felis a magna congue, vel semper est accumsan. Duis nec ipsum id felis pulvinar cursus. Nullam nec augue nec ex scelerisque lobortis. Phasellus maximus, sem et varius congue, nunc risus fermentum lacus, vel ultricies odio elit eu enim.' },
    ];

    // State to manage the current page
    const [page, setPage] = useState(1);

    // State to manage the selected project
    const [selectedProject, setSelectedProject] = useState(null);

    // Theme and media query hook to check for different screens
    const theme = useTheme();
    const isTablet = useMediaQuery(theme.breakpoints.between('md', 'lg')); 
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    // 2 for mobile, 3 for tablet, 4 for larger screens
    const projectsPerRow = isMobile ? 2 : (isTablet ? 3 : 4);

    // Function to handle page change
    const handlePageChange = (event, value) => {
        setPage(value);
    };

    // Function to handle project click and scroll to the top
    const handleProjectClick = (project) => {
        setSelectedProject(project);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Calculate the projects to display on the current page
    const startIndex = (page - 1) * projectsPerRow;
    const endIndex = startIndex + projectsPerRow;
    const displayedProjects = projectArray.slice(startIndex, endIndex);

    return (
        <>
            {/* Navigation bar */}
            <NavBar />

            {/* Project Page Header */}
            <ProjectHeader />

            {selectedProject && (
                <Box sx={{ padding: 2, textAlign: 'center'  }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', maxWidth: 1300, margin: '0 auto' }}>
                        <IconButton onClick={() => setSelectedProject(null)} sx={{ marginRight: 1 }}>
                            <ArrowBackIcon />
                        </IconButton>
                        <Typography variant="h6" sx={{ color: 'black',                         marginRight: 'auto' }}>
                            List of Projects
                        </Typography>
                    </Box>
                    <Box
                        component="img"
                        src={selectedProject.image}
                        alt={selectedProject.title}
                        sx={{
                            width: '100%',
                            maxWidth: 1300,
                            height: 'auto',
                            maxHeight: 700,
                            margin: '0 auto',
                            borderRadius: '16px',
                            marginTop: 2 
                        }}
                    />
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', marginTop: 4 }}>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                maxWidth: 1300,
                                marginLeft: 2,
                            }}
                        >
                            <Typography variant="h3" sx={{ color: '#0C7230', fontWeight: 'bold' }}>
                                {selectedProject.title}
                            </Typography>
                            <Typography variant="body1" sx={{ color: 'black', marginTop: 2, marginBottom: 3, textAlign: 'left' }}>
                                {selectedProject.description}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            )}

            <Box sx={{ textAlign: 'center', marginTop: 4 }}>
                {selectedProject && (
                    <Typography variant="h4" sx={{ color: '#0C7230', fontWeight: 'bold', marginBottom: 1 }}>
                        Other Projects
                    </Typography>
                )}
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                        marginBottom: 4,
                    }}
                >
                    {displayedProjects.map((project, index) => (
                        <Box
                            key={index}
                            sx={{ maxWidth: isMobile ? 300 : 345, position: 'relative', margin: '15px 15px' }}
                        >
                            <ButtonBase
                                sx={{
                                    display: 'block',
                                    textAlign: 'initial', 
                                }}
                                onClick={() => handleProjectClick(project)}
                            >
                                <Card
                                    sx={{
                                        position: 'relative',
                                        transition: 'transform 0.3s', 
                                        '&:hover': {
                                            transform: 'scale(1.05)',
                                        },
                                    }}
                                >
                                    <CardMedia
                                        component="img"
                                        height="450"
                                        image={project.image}
                                        alt={`Project ${startIndex + index + 1}`}
                                        sx={{ borderRadius: '16px' }}
                                    />
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            top: '50%',
                                            left: '50%',
                                            transform: 'translate(-50%, -50%)',
                                            textAlign: 'center',
                                            padding: '16px',
                                            boxSizing: 'border-box',
                                            color: '#fff',
                                        }}
                                    >
                                        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                                            {project.title}
                                        </Typography>
                                    </Box>
                                </Card>
                            </ButtonBase>
                        </Box>
                    ))}
                </Box>
            </Box>

            {/* Pagination component */}
            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 4, marginBottom: 4 }}>
                <CustomPagination
                    count={Math.ceil(projectArray.length / projectsPerRow)}
                    page={page}
                    onChange={handlePageChange}
                />
            </Box>

            <Footer />
        </>
    );
};

export default Projects;

