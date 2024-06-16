import { AppBar, Box, Button, List, ListItem, Toolbar, Drawer, IconButton, useMediaQuery, useTheme } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useState } from "react"; 
import Popup from "./Login";
import HelenLogoSolo from '../assets/HelenGreenLogo2.png';

import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import WorkIcon from '@mui/icons-material/Work';
import EventIcon from '@mui/icons-material/Event';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Links = [
  { titlePage: 'Home', path: '/' },
  { titlePage: 'About', path: '/about' },
  { titlePage: 'Projects', path: '/projects' },
  { titlePage: 'Events', path: '/events' },
  { titlePage: 'Location', path: '/location' }
];

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md')); 
  const openDialog = () => {
    setOpen(true);
  };

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  // Drawer component for mobile navigation
  const drawer = (
    <Box onClick={toggleDrawer(false)} sx={{ width: 250 }}>
      <List>
        {Links.map(({ titlePage, path }) => (
          <ListItem
            component={NavLink}
            to={path}
            key={path}
            sx={{
              color: '#0C7230',
              padding: 2,
              '&:hover': { backgroundColor: '#0C7230', color: '#FFF'} 
            }}
          >
            {path === '/' && <HomeIcon sx={{ marginRight: 1 }} />} 
            {path === '/about' && <InfoIcon sx={{ marginRight: 1 }} />} 
            {path === '/projects' && <WorkIcon sx={{ marginRight: 1 }} />}
            {path === '/events' && <EventIcon sx={{ marginRight: 1 }} />} 
            {path === '/location' && <LocationOnIcon sx={{ marginRight: 1 }} />} 
            {titlePage}
          </ListItem>
        ))}
        <ListItem
          sx={{
            display: 'flex',
            justifyContent: 'center'

          }}
        >
          <Button
            sx={{
              backgroundColor: '#0C7230',
              width: '100%' ,
              '&:hover': {
                backgroundColor: '#096328'
              }
            }}
            variant='contained'
            onClick={openDialog}
          >
            Log in
          </Button>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar color='inherit'>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <img src={HelenLogoSolo} style={{ width: 120, height: 'auto', padding: 10 }} alt="Logo" />
          
          {isMobile ? (
            <>
              {/* Mobile view: Toggle button */}
              <IconButton 
                edge="end" 
                color="inherit" 
                aria-label="menu" 
                onClick={toggleDrawer(true)}
                sx={{ color: '#0C7230'}} 
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor='right' 
                open={drawerOpen}
                onClose={toggleDrawer(false)}
              >
                {drawer}
              </Drawer>
            </>
          ) : (
            <>
              {/* Desktop view: Centered navigation links */}
              <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
                <List sx={{ display: 'flex', textAlign: 'center' }}>
                  {Links.map(({ titlePage, path }) => (
                    <ListItem
                      component={NavLink}
                      to={path}
                      key={path}
                      sx={{
                        fontSize: 19,
                        color: '#0C7230',
                        position: 'relative',
                        justifyContent: 'center',
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          height: 3,
                          top: 35,
                          left: 0,
                          right: 0,
                          width: 0,
                          background: '#0C7230',
                          transition: 'width .5s',
                        },
                        '&:hover:after': { width: '100%' },
                        '&:hover': { color: '#0C7230' }
                      }}
                    >
                      {titlePage}
                    </ListItem>
                  ))}
                </List>
              </Box>
              {/* Login button in desktop view */}
              <Button
                sx={{
                  backgroundColor: '#0C7230',
                  fontSize: 17,
                  '&:hover': { backgroundColor: '#096328' }
                }}
                variant='contained'
                onClick={openDialog}
              >
                Log in
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>

      <Popup openPopup={open} setOpenPopup={setOpen} />
    </>
  );
}

export default NavBar;
