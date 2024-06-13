
import { Box, } from '@mui/material';
import React from 'react';
import OrderTableUI from './TablesUI/OrderTableUI';

export default function BuyerDashboard() {


  return (
    <Box sx ={{position: 'relative', top: 0,display: 'flex',  flexDirection: 'column'}}>

      
    
  
            <OrderTableUI n={440} />
    

    

</Box>
  );
}