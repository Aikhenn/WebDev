import { Box } from "@mui/material";
import AboutBg from '../assets/AboutBg.png';

const AboutHeader = () => {

    return (
    <Box sx={{ position: 'relative', maxWidth: '100%', marginTop: 8, overflow: 'hidden' }}>
    {/* Background image */}
        <Box
                component="img"
                src={AboutBg}
                alt="Background"
                sx={{
                    width: '100%',
                    height: 'auto',
                    opacity: "100",
                }}
        />
    </Box>
    );
};

export default AboutHeader;