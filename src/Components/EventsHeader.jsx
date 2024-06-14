import { Box } from "@mui/material";
import EventsBg from '../assets/EventsBg.png';

const EventsHeader = () => {

    return (
    <Box sx={{ position: 'relative', maxWidth: '100%', marginTop: 8, overflow: 'hidden' }}>
    {/* Background image */}
        <Box
                component="img"
                src={EventsBg}
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

export default EventsHeader;