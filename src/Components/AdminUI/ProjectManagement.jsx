
import { Box , Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography, styled, tableCellClasses } from '@mui/material';





function ProjectManagement  ()  {

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: 'white',
      color: theme.palette.common.black,
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
    name,
    calories,
    fat,
    carbs,
    protein,
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
    <Box sx={{position: 'relative', top: 60, display:'flex', flexDirection: 'column'}}>    
    <Box sx={{ padding:3, borderRadius: 5, boxShadow: '1px 1px 4px', margin: 5}}>
    <TableContainer component={Paper}>
        <Table sx={{ width: innerWidth-500}} aria-label="customized table">
            <TableHead>
                <Typography variant='h4' sx={{fontWeight: 'bold', padding: '20px 0px 20px  1px', color: 'green'}}>Project Lists</Typography>
            <TableRow>
                <StyledTableCell>Project Title </StyledTableCell>
                <StyledTableCell align="center">Date Added</StyledTableCell>
                <StyledTableCell align="center">Registration Date</StyledTableCell>
                
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
 
                <StyledTableCell align="center"><Button variant='contained' sx={{backgroundColor: '#DDC200', '&:hover': {backgroundColor: '#DDC200'}}}>Edit</Button> <Button variant='contained' sx={{backgroundColor: 'Red', '&:hover': {backgroundColor: 'red'}}}>Delete</Button></StyledTableCell>
                </StyledTableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>


    </Box>  
    <Box  sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 5, width: '1450px',borderRadius: 10, boxShadow: '1px 1px 4px', margin: 5}}>
        <Typography variant= 'h4' margin={2} sx={{fontWeight: 'bold'}}>Create New Project</Typography>
        
        <TextField
          id="outlined-multiline-static"
          label="Project Title"
       
          sx={{margin: 1}}
          
      
        />



        <TextField
          id="outlined-multiline-static"
          label="Project Details"
          multiline
          sx={{margin: 1}}
          rows={6}
      
        />
        <Button variant="contained" sx={{margin: 1}}>Add Project</Button>
    </Box>
   
    </Box>
    )
}
export default ProjectManagement;