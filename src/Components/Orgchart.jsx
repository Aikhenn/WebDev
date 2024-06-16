import { Box, Card, CardContent, Container, Grid, Typography } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';

function OrgChart() {
  return (
    <Container maxWidth='lg'>
      {/* Title of the Organization section */}
      <Typography variant='h4' align='center' style={{ marginTop: '25px', color: '#0C7230', fontWeight: 'bold' }}>
        Organization
      </Typography>

      {/* Grid container for holding the profile cards */}
      <Grid container spacing={2} justifyContent='center' style={{ margin: '10px' }}>
        
        {/* First profile card */}
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ maxWidth: 345, margin: 'auto', borderRadius: 5, boxShadow: '2px 2px 10px gray' }}>
            <CardContent sx={{ color: '#0C7230', textAlign: 'center' }}>
              <PersonIcon sx={{ width: 200, height: 200, margin: 'auto' }} />
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
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

        {/* Second profile card */}
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ maxWidth: 345, margin: 'auto', borderRadius: 5, boxShadow: '2px 2px 10px gray' }}>
            <CardContent sx={{ color: '#0C7230', textAlign: 'center' }}>
              <PersonIcon sx={{ width: 200, height: 200, margin: 'auto' }} />
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
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

        {/* Third profile card */}
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ maxWidth: 345, margin: 'auto', borderRadius: 5, boxShadow: '2px 2px 10px gray' }}>
            <CardContent sx={{ color: '#0C7230', textAlign: 'center' }}>
              <PersonIcon sx={{ width: 200, height: 200, margin: 'auto' }} />
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
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

        {/* Fourth profile card */}
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ maxWidth: 345, margin: 'auto', marginBottom: 3, borderRadius: 5, boxShadow: '2px 2px 10px gray' }}>
            <CardContent sx={{ color: '#0C7230', textAlign: 'center' }}>
              <PersonIcon sx={{ width: 200, height: 200, margin: 'auto' }} />
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
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

        {/* Fifth profile card */}
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ maxWidth: 345, margin: 'auto', marginBottom: 3, borderRadius: 5, boxShadow: '2px 2px 10px gray' }}>
            <CardContent sx={{ color: '#0C7230', textAlign: 'center' }}>
              <PersonIcon sx={{ width: 200, height: 200, margin: 'auto' }} />
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
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

        {/* Sixth profile card */}
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ maxWidth: 345, margin: 'auto', marginBottom: 3,  borderRadius: 5, boxShadow: '2px 2px 10px gray' }}>
            <CardContent sx={{ color: '#0C7230', textAlign: 'center' }}>
              <PersonIcon sx={{ width: 200, height: 200, margin: 'auto' }} />
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
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

      </Grid>
    </Container>
  )
}

export default OrgChart;
