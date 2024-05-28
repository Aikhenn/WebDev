
import { Box, Tab} from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import React from 'react';
import ProductTableUI from './TablesUI/ProducTableUI';

export default function BuyerDashboard() {

const [value, setValue] = React.useState('1');

  const handleChange =(event: React.ChangeEvent<object>, newValue: string) => {
    setValue(newValue);
  }

  return (
    <Box sx ={{position: 'relative', top: 0,display: 'flex', flexDirection: 'column'}}>

    <TabContext value={value}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <TabList onChange={handleChange} aria-label="lab API tabs example" 
          sx={{
              '& button': {
                borderRadius: '0px 10px 0px 0px', 
                backgroundColor: 'white',
                margin:'0px -10px 0px 0px',
                boxShadow: '-11px 2px 20px'},
               

          }}
          textColor="secondary"
          indicatorColor="secondary"
        
        >
          <Tab label="Products" value="1" sx={{zIndex: 3}}/>
          <Tab label="--" value="2" sx={{zIndex: 2}} />
       
        </TabList>
      </Box>
      <TabPanel value="1" sx= {{ backgroundColor: 'white'}}>
            <ProductTableUI />
      </TabPanel>
      <TabPanel value="2" sx= {{ backgroundColor: 'white'}}>
        

       
      </TabPanel>
     
  
    </TabContext>


   

    

</Box>
  );
}