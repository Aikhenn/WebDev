import { Box,  Card, Typography } from "@mui/material"
import { PieChart } from "@mui/x-charts";
import { useSpring, animated } from 'react-spring';
import OrderTableUI from "./TablesUI/OrderTableUI";
import FarmerRegistration from "./TablesUI/FarmerRegistration";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Number ({n}){
  const {number} = useSpring({
    from: {number: 0},
    number:n,
    delay: 20,
    config: {mass: 1, tension: 20, friction: 10},

  });
  return <animated.div>{number.to((n: number)=> n.toFixed(0))}</animated.div>

}


const Dashboard = () => {

    const CardStyle ={
        padding: 5, 
       
         borderRadius: '20px', 
         height: 190,
         width: 360,
         margin: '10px 10px 10px 10px' 
    }


    const data = [
      { id: 0, value: 10, label: 'series A' },
      { id: 1, value: 15, label: 'series B' },
      { id: 2, value: 20, label: 'series C' },
    ];
    
   
    

    return (
    <Box sx={{ position: 'relative', top: 0 ,display: 'flex', flexDirection: 'row' , justifyContent: 'center', maxWidth: innerWidth- 332, height: 'auto'}}>    
        <Box sx={{ position: 'relative', top: 0 ,display: 'flex', flexDirection: 'column' ,  height: 'auto'}}>
          <Box sx={{display: 'flex', flexDirection: 'row',  justifyContent: 'center',flexWrap: 'wrap'}}>
              <Card sx={CardStyle}>
                    <Typography variant='h5' sx={{fontWeight: 'bold'}}>Registered Farmers</Typography>
                      <br></br>
                    <Typography variant='h3' sx={{fontWeight: 'bolder', color: '#0C7230'}}><Number n={17}/> </Typography>
              </Card>

              <Card sx={CardStyle}>
                    <Typography variant='h5' sx={{fontWeight: 'bold'}}>Registered Buyers</Typography>
                      <br></br>
                    <Typography variant='h3' sx={{fontWeight: 'bolder', color: '#0C7230'}}><Number n={17}/> </Typography>
              </Card>

              <Card sx={CardStyle}>
                    <Typography variant='h5' sx={{fontWeight: 'bold'}}>Upcoming Events</Typography>
                      <br></br>
                    <Typography variant='h3' sx={{fontWeight: 'bolder', color: '#0C7230'}}><Number n={10}/> </Typography>
              </Card>

              <Card sx={CardStyle}>
                    <Typography variant='h5' sx={{fontWeight: 'bold'}}>Pending Orders</Typography>
                      <br></br>
                    <Typography variant='h3' sx={{fontWeight: 'bolder', color: '#0C7230'}}><Number n={6}/> </Typography>
              </Card>

              <Card sx={CardStyle}>
                    <Typography variant='h5' sx={{fontWeight: 'bold'}}>Completed Orders</Typography>
                      <br></br>
                    <Typography variant='h3' sx={{fontWeight: 'bolder', color: '#0C7230'}}><Number n={8}/> </Typography>
              </Card>

              <Card sx={CardStyle}>
                    <Typography variant='h5' sx={{fontWeight: 'bold'}}>On Going Projects</Typography>
                      <br></br>
                    <Typography variant='h3' sx={{fontWeight: 'bolder', color: '#0C7230'}}><Number n={5}/> </Typography>
              </Card>

          </Box>
          <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center',flexWrap: 'wrap'}}>
              <Card sx ={{padding: 5, margin: '10px 10px 0px 10px' , width: 550, height: 350 ,  borderRadius: '20px', }}>
              <Typography variant='h4' sx={{fontWeight: 'bold'}}>Farmers By Region</Typography>
              <PieChart 
                sx={{padding: 4 }}
                series={[
                  {
                    data,
                    highlightScope: { faded: 'global', highlighted: 'item' },
                    faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                  },
                ]}
                maxHeight={250}
              />
              </Card>
              <Card sx ={{padding: 5, margin: '10px 10px 10px 10px' , width: 550, height: 350 ,  borderRadius: '20px', }}>
              <Typography variant='h4' sx={{fontWeight: 'bold'}}>Buyers By Region</Typography>
              <PieChart 
                sx={{padding: 4 }}
                series={[
                  {
                    data,
                    highlightScope: { faded: 'global', highlighted: 'item' },
                    faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                  },
                ]}
                maxHeight={250}
              />
              </Card>
          </Box>

          <Box sx={{display: 'flex', flexDirection: 'row',  justifyContent: 'center',flexWrap: 'wrap'}}>
              <Card sx ={{padding: 5, margin: '10px 20px 10px 20px' , width: 1120, height: 420 , borderRadius: '10px', }}>
              <Typography variant='h5' sx={{fontWeight: 'bold'}}>Recent Orders</Typography>
              <OrderTableUI n={210} />
              
              </Card>
           
          </Box>
        </Box>

        <Box>
           
           
           <Card sx ={{padding: 5, margin: '10px 5px 10px 5px' , width: 350, height: 600 , borderRadius: '10px', }}>
              <Typography variant='h5' sx={{fontWeight: 'bold', marginBottom: 4}}>Activity Log</Typography>
            
              </Card>

                  
           <Card sx ={{padding: 5, margin: '10px 5px 10px 5px' , width: 350, height: 600 , borderRadius: '10px', }}>
              <Typography variant='h5' sx={{fontWeight: 'bold', marginBottom: 4}}>Pending Verification</Typography>
                <FarmerRegistration n={330}/>
              </Card>
               
              
               

        </Box>
        


    </Box>
    )
}
export default Dashboard;