
import { Box, } from '@mui/material';
import React from 'react';
import ProductTableUI from './TablesUI/ProducTableUI';

export default function BuyerDashboard() {



  return (
    <Box sx ={{position: 'relative', top: 0,display: 'flex', flexDirection: 'column'}}>

    
            <ProductTableUI />


  

    

</Box>
  );
}