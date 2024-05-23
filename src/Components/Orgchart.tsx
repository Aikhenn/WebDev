import { Box, Card, CardContent, Container, Grid, Typography } from "@mui/material"
import PersonIcon from '@mui/icons-material/Person';


function  OrgChart (){
  return (
    <Container maxWidth='lg'>
      
        <Typography variant='h4' align='center' style={{marginTop: '25px', color: '#0C7230', fontWeight: 'bold'}}>
            Organization 
        </Typography>
        <Grid container spacing={0}  style={{position:'relative', left: 100, margin: '10px'}}>

      

        <Card sx={{ maxWidth: 345, margin: 5, borderRadius: 5,  boxShadow: '2px 2px 10px gray'}}>
        
          <CardContent sx={{color: '#0C7230'}}>
          <PersonIcon sx={{ width: 200, height: 200 }} />
            <Box sx={{justifyContent: 'center', alignItems: 'center'}}>
                <Typography gutterBottom variant="h5" component="div" fontWeight={'Bold'}>
                Name
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Position
                </Typography>
            </Box>
           
          </CardContent>
      
      
        </Card>

        
        <Card sx={{ maxWidth: 345, margin: 5, borderRadius: 5,  boxShadow: '2px 2px 10px gray'}}>
        
          <CardContent sx={{color: '#0C7230'}}>
          <PersonIcon sx={{ width: 200, height: 200 }} />
            <Box sx={{justifyContent: 'center', alignItems: 'center'}}>
                <Typography gutterBottom variant="h5" component="div" fontWeight={'Bold'}>
                Name
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Position
                </Typography>
            </Box>
           
          </CardContent>
      
      
        </Card>

        
        <Card sx={{ maxWidth: 345, margin: 5, borderRadius: 5,  boxShadow: '2px 2px 10px gray'}}>
        
          <CardContent sx={{color: '#0C7230'}}>
          <PersonIcon sx={{ width: 200, height: 200 }} />
            <Box sx={{justifyContent: 'center', alignItems: 'center'}}>
                <Typography gutterBottom variant="h5" component="div" fontWeight={'Bold'}>
                Name
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Position
                </Typography>
            </Box>
           
          </CardContent>
      
      
        </Card>

        <Card sx={{ maxWidth: 345, margin: 5, borderRadius: 5,  boxShadow: '2px 2px 10px gray'}}>
        
          <CardContent sx={{color: '#0C7230'}}>
          <PersonIcon sx={{ width: 200, height: 200 }} />
            <Box sx={{justifyContent: 'center', alignItems: 'center'}}>
                <Typography gutterBottom variant="h5" component="div" fontWeight={'Bold'}>
                Name
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Position
                </Typography>
            </Box>
           
          </CardContent>
      
      
        </Card>

        
        <Card sx={{ maxWidth: 345, margin: 5, borderRadius: 5,  boxShadow: '2px 2px 10px gray'}}>
        
          <CardContent sx={{color: '#0C7230'}}>
          <PersonIcon sx={{ width: 200, height: 200 }} />
            <Box sx={{justifyContent: 'center', alignItems: 'center'}}>
                <Typography gutterBottom variant="h5" component="div" fontWeight={'Bold'}>
                Name
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Position
                </Typography>
            </Box>
           
          </CardContent>
      
      
        </Card>

        
        <Card sx={{ maxWidth: 345, margin: 5, borderRadius: 5,  boxShadow: '2px 2px 10px gray'}}>
        
          <CardContent sx={{color: '#0C7230'}}>
          <PersonIcon sx={{ width: 200, height: 200 }} />
            <Box sx={{justifyContent: 'center', alignItems: 'center'}}>
                <Typography gutterBottom variant="h5" component="div" fontWeight={'Bold'}>
                Name
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Position
                </Typography>
            </Box>
           
          </CardContent>
      
      
        </Card>

        



        </Grid>
    </Container>
  )
}

export default OrgChart;