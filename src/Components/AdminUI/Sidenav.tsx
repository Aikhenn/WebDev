
import { useState } from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import Dashboard from './Dashboard';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AgricultureOutlinedIcon from '@mui/icons-material/AgricultureOutlined';
import FarmerDashboard from './FarmerDashboard';
import PointOfSaleOutlinedIcon from '@mui/icons-material/PointOfSaleOutlined';
import HelenLogo from '../../assets/HelenGreenLogo2.png';

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import BuyerDashboard from './BuyerDashboard';

import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from "react-router-dom";
import EventManagement from './EventManagement';
import ProjectManagement from './ProjectManagement';

const drawerWidth = 280;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function Sidenav() {
  const theme = useTheme();
  const [open, setOpen] = useState(true);
  const [menudata, setMenudata] = useState("Dashboard");

  const navigate = useNavigate();



  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx ={{backgroundColor: 'white', color: '#0C7230'}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() =>{setOpen(!open)}}
            edge="start"

          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap display='flex' alignItems='center' padding={1.4}>
          <img src ={HelenLogo} height={70}></img> Office of the Provincial Agriculture Quezon FITS Center
          </Typography>
         
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}  >
        <DrawerHeader >
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon  /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader >
        <Divider />
        <List >
        
            <ListItem disablePadding sx={{ display: 'block' ,marginTop: 5 }} onClick={()=> setMenudata("Dashboard")}>
              <ListItemButton
                sx={{
                  minHeight: 60,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 3,
                    justifyContent: 'center',
                    marginLeft: 2.5,
                  }}
                >
                 <HomeOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding sx={{ display: 'block' }} onClick={()=> setMenudata("FarmerDashboard")}>
              <ListItemButton
                sx={{
                  minHeight: 60,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 3,
                    justifyContent: 'center',
                    marginLeft: 2.5,
                  }}
                >
                 <AgricultureOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Farmer Dashboard" />
              </ListItemButton>
            </ListItem>

        <ListItem disablePadding sx={{ display: 'block' }} onClick={()=> setMenudata("BuyerDashboard")}>
          <ListItemButton
            sx={{
              minHeight: 60,
              justifyContent: open ? 'initial' : 'center',
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : 3,
                justifyContent: 'center',
                marginLeft: 2.5,
              }}
            >
             <PointOfSaleOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Buyer Dashboard"  />
          </ListItemButton>
        </ListItem>
        
        </List>


        <Divider />
        
    
        <List>
        
        <ListItem disablePadding sx={{ display: 'block' ,marginTop: 5 }} onClick={()=> setMenudata("EventManagement")}>
          <ListItemButton
            sx={{
              minHeight: 60,
              justifyContent: open ? 'initial' : 'center',
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : 3,
                justifyContent: 'center',
                marginLeft: 2.5,
              }}
            >
             <CalendarMonthIcon />
            </ListItemIcon>
            <ListItemText primary="Event Management" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding sx={{ display: 'block' }} onClick={()=> setMenudata("ProjectManagement")}>
          <ListItemButton
            sx={{
              minHeight: 60,
              justifyContent: open ? 'initial' : 'center',
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : 3,
                justifyContent: 'center',
                marginLeft: 2.5,
              }}
            >
             <LightbulbOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Project Management" />
          </ListItemButton>
        </ListItem>
        
        </List>

        <Divider />

        <List>
        
        <ListItem disablePadding sx={{ display: 'block' }} onClick={()=> navigate("/")}>
          <ListItemButton
            sx={{
              minHeight: 60,
              justifyContent: open ? 'initial' : 'center',
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : 3,
                justifyContent: 'center',
                marginLeft: 2.5,
              }}
            >
             <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="Log Out" />
          </ListItemButton>
        </ListItem>

  
        </List>
        
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3, display: 'flex'}}>
            {menudata == "Dashboard" && <Dashboard />}
            {menudata == "FarmerDashboard" && <FarmerDashboard />}
            {menudata == "BuyerDashboard" && <BuyerDashboard />}
            {menudata == "EventManagement" && <EventManagement />}
            {menudata == "ProjectManagement" && <ProjectManagement />}
        
      </Box>
    </Box>
  );
}