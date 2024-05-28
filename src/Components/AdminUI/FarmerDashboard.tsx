/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Button, Card, Tab, Tabs, ThemeProvider, Typography, createTheme } from '@mui/material';
import React from 'react';
import { useSpring, animated } from 'react-spring';

import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import FarmerProfile from './TablesUI/FarmerProfile';
import FarmerRegistration from './TablesUI/FarmerRegistration';




export default function FarmerDashboard() {

  const theme = createTheme({
    palette: {
      secondary: {
        main: '#0C7230'
      }
    }
  });
      

  function Number ({n}){
    const {number} = useSpring({
      from: {number: 0},
      number:n,
      delay: 20,
      config: {mass: 1, tension: 20, friction: 10},
  
    });
    return <animated.div>{number.to((n: number)=> n.toFixed(0))}</animated.div>
  
  }

  const [value, setValue] = React.useState('1');

  const CardStyle ={
    padding: 5, 
   
     borderRadius: '20px', 
     minHeight: 200,
     minWidth: 400,
     margin: '10px 20px 10px 20px' 
}


  const handleChange =(event: React.ChangeEvent<object>, newValue: string) => {
    setValue(newValue);
  }

  return (
    <>
    <Box sx={{position:'absolute', top: -2 ,left: 0,zIndex: 0, width: innerWidth, height: 500, opacity: '90%', borderRadius: '0px 0px 120px 120px',backgroundColor: '#0C7230'}} />

   
    <Box sx ={{position: 'relative', top: 0,display: 'flex',zIndex: 2,flexDirection: 'column'}}>
     
       <Box sx={{display: 'flex', flexDirection: 'row',  justifyContent: 'center',flexWrap: 'wrap'}}>
            <Card sx={CardStyle}>
                  <Typography variant='h4' sx={{fontWeight: 'bold'}}>Registered Farmers</Typography>
                    <br></br>
                  <Typography variant='h3' sx={{fontWeight: 'bolder', color: '#0C7230'}}><Number n={17}/> </Typography> 
            </Card>

            <Card sx={CardStyle}>
                  <Typography variant='h4' sx={{fontWeight: 'bold'}}>Pending Verification</Typography>
                    <br></br>
                  <Typography variant='h3' sx={{fontWeight: 'bolder', color: '#0C7230'}}><Number n={24}/> </Typography>
            </Card>
        </Box>
    <ThemeProvider theme={theme}>
      
  
    <TabContext value={value}  >
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <TabList onChange={handleChange} aria-label="lab API tabs example"   
        
        TabIndicatorProps={{
          sx: {
            backgroundColor: 'red',
          },
        }}
          sx={{
              '& button': {
                borderRadius: '0px 10px 0px 0px', 
                backgroundColor: 'white',
                margin:'0px -10px 0px 0px',
                boxShadow: '-11px 2px 20px'},
               

          }}
          textColor='secondary'
       
        
        >
          <Tab label="Registerd Farmers" value="1" sx={{zIndex: 3}}/>
          <Tab label="Pending Verification" value="2" sx={{zIndex: 2}} />
       
        </TabList>
      </Box>
      <TabPanel value="1" sx= {{ backgroundColor: 'white'}}>
            <FarmerProfile />
      </TabPanel>
      <TabPanel value="2" sx= {{ backgroundColor: 'white'}}>
          <FarmerRegistration n ={440} />

       
      </TabPanel>
     
  
    </TabContext>
    </ThemeProvider>


   

    

</Box>
</>
  );
}
