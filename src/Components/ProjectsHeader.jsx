import { Box } from "@mui/material";
import ProjectBg from '../assets/ProjectBg.png';

const ProjectHeader = () => {

    return (
    <Box sx={{ position: 'relative', maxWidth: '100%', marginTop: 8, overflow: 'hidden' }}>
    {/* Background image */}
        <Box
                component="img"
                src={ProjectBg}
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

export default ProjectHeader;