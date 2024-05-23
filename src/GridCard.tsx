import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material"



function GridCard (){
  return (
    <Container maxWidth='lg'>
        <Typography variant='h4' align='center' style={{marginTop: '25px', color: '#000000', fontWeight: 'bold'}}>
            Admin 
        </Typography>
        <Grid container spacing={20}  style={{position:'relative', right: 65, margin: '10px'}}>

      

        <Card sx={{ maxWidth: 345, margin: 5, borderRadius: 5,  boxShadow: '2px 2px 10px gray'}}>
          <CardMedia 
           component ='img'
            height='300px'
            image = 'https://source.unsplash.com/random'
            alt='imageIcon'
            
            >
           
          </CardMedia>

          <CardContent>
            <Typography gutterBottom variant="h5" component="div" fontWeight={'Bold'}>
              Farmer Dashboard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Manage Farmers Information Location and Accreditation
            </Typography>
          </CardContent>
      
          <CardActions>
            <Button size="small" 
            sx={{  
              color: 'white',
              backgroundColor: '#0C7230',
              '&:hover':{ backgroundColor: '#096328'} 
              
              }}>
              Go
            </Button>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 345, margin: 5, borderRadius: 5,  boxShadow: '2px 2px 10px gray'}}>
        <CardMedia 
           component ='img'
            height='300px'
            image = 'https://source.unsplash.com/random'
            alt='imageIcon'
            
            >
           
          </CardMedia>

        <CardContent>
          <Typography gutterBottom variant="h5" component="div" fontWeight={'Bold'}>
            Farmer Dashboard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Manage Farmers Information Location and Accreditation
          </Typography>
        </CardContent>

        <CardActions>
          <Button size="small" 
          sx={{  
            color: 'white',
            backgroundColor: '#0C7230',
            '&:hover':{ backgroundColor: '#096328'} 
            
            }}>
            Go
          </Button>
        </CardActions>
        </Card>

        <Card sx={{ maxWidth: 345, margin: 5, borderRadius: 5,  boxShadow: '2px 2px 10px gray'}}>
        <CardMedia 
           component ='img'
            height='300px'
            image = 'https://source.unsplash.com/random'
            alt='imageIcon'
            
            >
           
          </CardMedia>

        <CardContent>
          <Typography gutterBottom variant="h5" component="div" fontWeight={'Bold'} >
            Farmer Dashboard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Manage Farmers Information Location and Accreditation
          </Typography>
        </CardContent>

        <CardActions>
          <Button size="small" 
          sx={{  
            color: 'white',
            backgroundColor: '#0C7230',
            '&:hover':{ backgroundColor: '#096328'} 
            
            }}>
            Go
          </Button>
        </CardActions>
        </Card>

        <Card sx={{ maxWidth: 345, margin: 5, borderRadius: 5,  boxShadow: '2px 2px 10px gray'}}>
          <CardMedia 
           component ='img'
            height='300px'
            image = 'https://source.unsplash.com/random'
            alt='imageIcon'
            
            >
           
          </CardMedia>

          <CardContent>
            <Typography gutterBottom variant="h5" component="div" fontWeight={'Bold'}>
              Farmer Dashboard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Manage Farmers Information Location and Accreditation
            </Typography>
          </CardContent>
      
          <CardActions>
            <Button size="small" 
            sx={{  
              color: 'white',
              backgroundColor: '#0C7230',
              '&:hover':{ backgroundColor: '#096328'} 
              
              }}>
              Go
            </Button>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 345, margin: 5, borderRadius: 5,  boxShadow: '2px 2px 10px gray'}}>
        <CardMedia 
           component ='img'
            height='300px'
            image = 'https://source.unsplash.com/random'
            alt='imageIcon'
            
            >
           
          </CardMedia>

        <CardContent>
          <Typography gutterBottom variant="h5" component="div" fontWeight={'Bold'}>
            Farmer Dashboard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Manage Farmers Information Location and Accreditation
          </Typography>
        </CardContent>

        <CardActions>
          <Button size="small" 
          sx={{  
            color: 'white',
            backgroundColor: '#0C7230',
            '&:hover':{ backgroundColor: '#096328'} 
            
            }}>
            Go
          </Button>
        </CardActions>
        </Card>

        <Card sx={{ maxWidth: 345, margin: 5, borderRadius: 5,  boxShadow: '2px 2px 10px gray'}}>
        <CardMedia 
           component ='img'
            height='300px'
            image = 'https://source.unsplash.com/random'
            alt='imageIcon'
            
            >
           
          </CardMedia>

        <CardContent>
          <Typography gutterBottom variant="h5" component="div" fontWeight={'Bold'}>
            Farmer Dashboard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Manage Farmers Information Location and Accreditation
          </Typography>
        </CardContent>

        <CardActions>
          <Button size="small" 
          sx={{  
            color: 'white',
            backgroundColor: '#0C7230',
            '&:hover':{ backgroundColor: '#096328'} 
            
            }}>
            Go
          </Button>
        </CardActions>
        </Card>



        </Grid>
    </Container>
  )
}

export default GridCard