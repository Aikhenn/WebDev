import { Box, Button, Card, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, styled, tableCellClasses } from "@mui/material"


const Dashboard = () => {

    const CardStyle ={
        padding: 5, 
        boxShadow: '1px 1px 4px',
         borderRadius: '20px', 
         height: 200,
         width: 400,
         margin: '10px 20px 10px 20px' 
    }

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
      [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#0C7230',
        color: theme.palette.common.white,
      },
      [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
      },
    }));
    
    const StyledTableRow = styled(TableRow)(({ theme }) => ({
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
      // hide last border
      '&:last-child td, &:last-child th': {
        border: 0,
      },
    }));
    
    function createData(
      name: string,
      calories: string,
      fat: number,
      carbs: number,
      protein: number,
    ) {
      return { name, calories, fat, carbs, protein };
    }
    
    const rows = [
      createData('Celia','almanzor', 6.0, 24, 4.0),
      createData('Ervin', 'Emanuel', 9.0, 37, 4.3),
      createData('Lucinda', 'Maria', 16.0, 24, 6.0),
      createData('patricia', 'Lilan', 3.7, 67, 4.3),
      createData('Guo', 'alice', 16.0, 49, 3.9),
    ];
    

    return (
    <Box sx={{ position: 'relative', top: 80,display: 'flex', flexDirection: 'column' ,  width: innerWidth- 332, height: 'auto'}}>    

        <Box sx={{display: 'flex', flexDirection: 'row',  justifyContent: 'center',flexWrap: 'wrap'}}>
            <Card sx={CardStyle}>
                  <Typography variant='h4' sx={{fontWeight: 'bold'}}>Registered Farmers</Typography>
                    <br></br>
                  <Typography variant='h3' sx={{fontWeight: 'bolder', color: '#0C7230'}}>00</Typography>
            </Card>

            <Card sx={CardStyle}>
                  <Typography variant='h4' sx={{fontWeight: 'bold'}}>Registered Buyers</Typography>
                    <br></br>
                  <Typography variant='h3' sx={{fontWeight: 'bolder', color: '#0C7230'}}>00</Typography>
            </Card>

            <Card sx={CardStyle}>
                  <Typography variant='h4' sx={{fontWeight: 'bold'}}>Upcoming Events</Typography>
                    <br></br>
                  <Typography variant='h3' sx={{fontWeight: 'bolder', color: '#0C7230'}}>00</Typography>
            </Card>

            <Card sx={CardStyle}>
                  <Typography variant='h4' sx={{fontWeight: 'bold'}}>Pending Orders</Typography>
                    <br></br>
                  <Typography variant='h3' sx={{fontWeight: 'bolder', color: '#0C7230'}}>00</Typography>
            </Card>

            <Card sx={CardStyle}>
                  <Typography variant='h4' sx={{fontWeight: 'bold'}}>Completed Orders</Typography>
                    <br></br>
                  <Typography variant='h3' sx={{fontWeight: 'bolder', color: '#0C7230'}}>00</Typography>
            </Card>

            <Card sx={CardStyle}>
                  <Typography variant='h4' sx={{fontWeight: 'bold'}}>On Going Projects</Typography>
                    <br></br>
                  <Typography variant='h3' sx={{fontWeight: 'bolder', color: '#0C7230'}}>00</Typography>
            </Card>

        </Box>
        <Box sx={{display: 'flex', flexDirection: 'row',  justifyContent: 'center',flexWrap: 'wrap'}}>
            <Card sx ={{padding: 5, margin: '10px 20px 10px 20px' , width: 620, height: 400 , boxShadow: '1px 1px 4px', borderRadius: '0px', }}>
            <Typography variant='h4' sx={{fontWeight: 'bold'}}>Farmers By Region</Typography>
            </Card>
            <Card sx ={{padding: 5, margin: '10px 20px 10px 20px' , width: 620, height: 400 , boxShadow: '1px 1px 4px', borderRadius: '20px', }}>
            <Typography variant='h4' sx={{fontWeight: 'bold'}}>Buyers By Region</Typography>
            </Card>
        </Box>

        <Box sx={{display: 'flex', flexDirection: 'row',  justifyContent: 'center',flexWrap: 'wrap'}}>
            <Card sx ={{padding: 5, margin: '10px 20px 10px 20px' , width: 820, height: 400 , borderRadius: '10px', }}>
            <Typography variant='h5' sx={{fontWeight: 'bold'}}>Recent Orders</Typography>
            <TableContainer component={Paper}>
        <Table sx={{ minWidth: innerWidth-333 }} aria-label="customized table">
            <TableHead>
                
            <TableRow>
                <StyledTableCell>First Name </StyledTableCell>
                <StyledTableCell align="center">Last Name</StyledTableCell>
                <StyledTableCell align="center">Registration Date</StyledTableCell>
                <StyledTableCell align="center">Status</StyledTableCell>
                <StyledTableCell align="center">Action</StyledTableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {rows.map((row) => (
                <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                    {row.name}
                </StyledTableCell>
                <StyledTableCell align="center">{row.calories}</StyledTableCell>
                <StyledTableCell align="center">{row.fat}</StyledTableCell>
                <StyledTableCell align="center"><Button variant='contained'>Pending</Button></StyledTableCell>
                <StyledTableCell align="center"><Button variant='contained' sx={{backgroundColor: 'Green', '&:hover': {backgroundColor: 'green'}}}>Approve</Button> <Button variant='contained' sx={{backgroundColor: 'Red', '&:hover': {backgroundColor: 'red'}}}>Reject</Button></StyledTableCell>
                </StyledTableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
            
            </Card>
            <Card sx ={{padding: 5, margin: '10px 20px 10px 20px' , width: 420, height: 400 , borderRadius: '10px', }}>
            <Typography variant='h5' sx={{fontWeight: 'bold'}}>Pending Verification</Typography>
            </Card>
        </Box>


    </Box>
    )
}
export default Dashboard;