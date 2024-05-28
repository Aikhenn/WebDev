
import { Box } from "@mui/material";
import SideNav from "./Sidenav";

function AdminPage  ()  {
    return (
    <Box sx={{position:'relative', top: 0,backgroundColor: '#F5F5F5',width: innerWidth, minHeight: innerHeight, padding: '100px 0px 0px 0px'}}>      
     <SideNav />

    </Box>
    )
}
export default AdminPage;