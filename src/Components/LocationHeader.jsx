import { Box } from "@mui/material";
import LocationBg from '../assets/LocationBg.png';

const LocationHeader = () => {

    return (
    <Box sx={{ position: 'relative', maxWidth: '100%', marginTop: 8, overflow: 'hidden' }}>
    {/* Background image */}
        <Box
                component="img"
                src={LocationBg}
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

export default LocationHeader;