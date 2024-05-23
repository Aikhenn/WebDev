import { Box, Typography } from '@mui/material';
import AboutBg from '../assets/AboutBg.png';

import OrgChart from './Orgchart';

const About = () => {
    return (
       <>
       <Box sx={{maxWidth: '100%'}}>
       <Typography variant= 'h1' sx={{position: 'absolute', top: 200, left: '40%', color: 'white', fontWeight: 'bold'}}> About Us</Typography>
        <img src={AboutBg} style={{ maxWidth: "100%", opacity: "100" }} />
       </Box>

        <Box sx={{color: '#0C7230', marginTop: 5, marginBottom: 5, marginLeft: 35, marginRight: 35}}>
            <Typography variant='subtitle1' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed ut ultricies quam. Nullam eget sem vitae tortor vehicula tincidunt. Integer vitae magna eu velit malesuada vulputate.
             Proin porta felis a magna congue, vel semper est accumsan. Duis nec ipsum id felis pulvinar cursus. Nullam nec augue nec ex scelerisque lobortis. 
             Phasellus maximus, sem et varius congue, nunc risus fermentum lacus, vel ultricies odio elit eu enim.
             <br /><br />
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
               proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </Typography>
        </Box>
        <OrgChart />



       
       </>
    )
}
export default About;