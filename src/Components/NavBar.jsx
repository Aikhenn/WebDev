import { AppBar, Box, Button,  List, ListItem, Toolbar, } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import Popup from "./Login";
import HelenLogoSolo from '../assets/HelenGreenLogo2.png';




const Links = [
  {titlePage: 'Home', path: '/'},
  {titlePage: 'About', path: '/about'},
  {titlePage: 'Projects', path: '/projects'},
  {titlePage: 'Events', path: '/events'},
  {titlePage: 'Location', path: '/location'}
]









const NavBar =() => {

  const [open, setOpen] = useState(false);
  const openDialog = () => {
    setOpen(true);
  } 

  


  return (
    <>
   
    <AppBar color='inherit'>
      <Toolbar  sx= {{display: 'flex', justifyContent: 'space-between'}}>
        
        
        <img src={HelenLogoSolo} style={{width: '8%', padding: 10}}></img>
        
      
        
        <Box sx={{ display: 'flex', flexGrow: 0}}>
          <List sx={{display: 'flex', textAlign: 'center'}}>
            {Links.map(({titlePage, path }) => (
              <ListItem
              component = {NavLink}
              to={path}
              key={path}
              sx ={{color: '#0C7230', position:'relative',justifyContent: 'center' ,
              '&::after':{
               content: '""',
               position: 'absolute',
               height: 3,
               
               top: 35,
               left:  0,
               right: 0,
             
               width: 0,
               background: '#0C7230',
               transition: 'width .5s',
               color: '#0C7230'
               

              },
              '&:hover:after': {  width: '100%',  },
              '&:hover': { color: '#0C7230'  }
            }}  
              >
                {titlePage}
              </ListItem>
            ))}
          </List>
        </Box>
        <Button 
          sx={{
            flexGrow: 0,
            backgroundColor: '#0C7230',
            '&:hover':{
              backgroundColor: '#096328'
            }
          }}
        variant='contained'
        onClick={openDialog}
        >Log in
        </Button>
       
    
      </Toolbar>
    </AppBar>
    
     <Popup
        openPopup = {open} 
        setOpenPopup = {setOpen}
     >
        
     </Popup>
          
    </>
   
  )

  


}

export default NavBar;