import { Box, Typography, useMediaQuery } from '@mui/material';
import NavBar from './NavBar';
import OrgChart from './Orgchart';
import AboutHeader from './AboutHeader';
import Footer from './Footer';

const About = () => {

    // Using MUI's useMediaQuery hook to detect screen size
    const isMobile = useMediaQuery('(max-width:600px)');
    const isTablet = useMediaQuery('(max-width:960px)');

    return (
       <>
       {/* Navigation bar */}
       <NavBar />

       {/* About Header */}
       <AboutHeader />

        {/* Main content */}
        <Box sx={{ 
            color: '#0C7230', 
            marginTop: 5, 
            marginBottom: 5, 
            marginLeft: isMobile ? 2 : isTablet ? 5 : 25, 
            marginRight: isMobile ? 2 : isTablet ? 5 : 25 
        }}>
            <Typography variant='subtitle1'>
                {/* Paragraph 1 */}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed ut ultricies quam. Nullam eget sem vitae tortor vehicula tincidunt.
                Integer vitae magna eu velit malesuada vulputate. Proin porta felis a magna congue,
                vel semper est accumsan. Duis nec ipsum id felis pulvinar cursus. Nullam nec augue nec ex scelerisque lobortis.
                Phasellus maximus, sem et varius congue, nunc risus fermentum lacus, vel ultricies odio elit eu enim.
                <br /><br />
                {/* Paragraph 2 */}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
        </Box>
        
        {/* Organizational Chart */}
        <OrgChart />

        {/* Footer */}
        <Footer />
       </>
    )
}
export default About;