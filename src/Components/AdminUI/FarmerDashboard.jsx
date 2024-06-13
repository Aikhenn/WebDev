
import React from 'react';
import { Box,Card, IconButton, Typography} from '@mui/material';
import { useSpring, animated } from 'react-spring';

import FarmerProfile from './TablesUI/FarmerProfile';

import { useEffect, useState } from 'react';
import CachedIcon from '@mui/icons-material/Cached';




export default function FarmerDashboard() {
  const [accreditedCount, setAccreditedCount] = useState(0);
  const [nonAccreditedCount, setNonAccreditedCount] = useState(0);
  const [forCheckingCount, setForCheckingCount] = useState(0);



  

  function Number ({n}){
    const {number} = useSpring({
      from: {number: 0},
      number:n,
      delay: 20,
      config: {mass: 1, tension: 20, friction: 10},
  
    });
    return <animated.div>{number.to((n)=> n.toFixed(0))}</animated.div>
  
  }

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/farmers');
      const data = await response.json();
      console.log('data :', data); // View the fetched data in the console

      // Calculate the counts from the fetched data
      const accredited = data.filter(item => item.status === 'Accredited').length;
      const nonAccredited = data.filter(item => item.status === 'Non-Accredited').length;
      const forChecking = data.filter(item => item.status === 'For Checking').length;
      
      console.log('count: ', accredited)

      // Set the counts in state
      setAccreditedCount(accredited);
      setNonAccreditedCount(nonAccredited);
      setForCheckingCount(forChecking);

      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


useEffect(() => {
  fetchData();
}, []);

const handleRefresh = async () => {
  await fetchData();
};

  

  const CardStyle ={
    padding: 5, 
   
     borderRadius: '20px', 
     minHeight: 200,
     minWidth: 400,
     margin: '10px 20px 10px 20px' 
}




  return (
    <>
    <Box sx={{position:'absolute', top: -2 ,left: 0,zIndex: 0, width: innerWidth, height: 500, opacity: '90%', borderRadius: '0px 0px 120px 120px',backgroundColor: '#0C7230'}} />
    <Box sx ={{position: 'relative', top: 0,display: 'flex',zIndex: 2,flexDirection: 'column'}}>
     
        <Box sx={{display: 'flex', flexDirection: 'row',  justifyContent: 'center',flexWrap: 'wrap'}}>
            <Card sx={CardStyle}>

                  <Typography variant='h4' sx={{fontWeight: 'bold'}}>Accredited Farmers</Typography>
                    <br></br>
                  <Typography variant='h3' sx={{fontWeight: 'bolder', color: '#0C7230'}}><Number n={accreditedCount}/> </Typography> 
            </Card>

            <Card sx={CardStyle}>
                  <Typography variant='h4' sx={{fontWeight: 'bold'}}>Non-Accredited Farmers</Typography>
                    <br></br>
                  <Typography variant='h3' sx={{fontWeight: 'bolder', color: '#0C7230'}}><Number n={nonAccreditedCount}/> </Typography>
            </Card>
            <Card sx={CardStyle}>
                  <Typography variant='h4' sx={{fontWeight: 'bold'}}>For Checking Farmers</Typography>
                    <br></br>
                  <Typography variant='h3' sx={{fontWeight: 'bolder', color: '#0C7230'}}><Number n={forCheckingCount}/> </Typography>
            </Card>
        </Box>

        <IconButton onClick={handleRefresh} sx={{width:'50px', borderRadius: '10px',color: 'white'}}>
            <CachedIcon />
        </IconButton>

      
        <Box sx={{marginTop: 1, maxWidth: 1800}}>
          <FarmerProfile n={440 } />
        </Box>
  
  
       
      



   

    

</Box>
</>
  );
}
