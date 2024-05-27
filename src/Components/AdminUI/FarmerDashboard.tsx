
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Button, Typography } from '@mui/material';

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

function createFarmerVerifData(
  Fname: string,
  Lname: string,
  RegistrationDate: string,
) {
  return { Fname, Lname, RegistrationDate };
}

function createFarmerProfileData(
  Fname: string,
  Lname: string,
  Age: number,
  District: string,
  RegistrationDate: string,
) {
  return { Fname, Lname, Age, District, RegistrationDate };
}

const FarmerVerif = [
  createFarmerVerifData('Celia','almanzor', '2024-10-23'),
  createFarmerVerifData('Ervin', 'Emanuel', '2024-12-23'),
  createFarmerVerifData('Lucinda', 'Maria',   '2024-12-23'),
  createFarmerVerifData('patricia', 'Lilan',  '2024-12-23'),
  createFarmerVerifData('Guo', 'alice', '2024-12-23'),
];

const FarmerProf = [
  createFarmerProfileData('Celia','almanzor', 42, 'Malabon','2024-12-23'),
  createFarmerProfileData('Ervin', 'Emanuel',  42, 'Malabon', '2024-12-23'),
  createFarmerProfileData('Lucinda', 'Maria',  42, 'Malabon', '2024-12-23'),
  createFarmerProfileData('patricia', 'Lilan',  42, 'Malabon', '2024-12-23'),
  createFarmerProfileData('Guo', 'alice', 42, 'Malabon', '2024-12-23'),
];

export default function FarmerDashboard() {
  return (
    <Box sx ={{position: 'relative', top: 80,display: 'flex', flexDirection: 'column'}}>
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: innerWidth-333 }} aria-label="customized table">
            <TableHead>
                <Typography variant='h4' sx={{fontWeight: 'bold', padding: '20px 0px 20px  1px', color: 'green'}}>Farmer Verification</Typography>
            <TableRow>
                <StyledTableCell>First Name </StyledTableCell>
                <StyledTableCell align="center">Last Name</StyledTableCell>
                <StyledTableCell align="center">Registration Date</StyledTableCell>
                <StyledTableCell align="center">Status</StyledTableCell>
                <StyledTableCell align="center">Action</StyledTableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {FarmerVerif.map((FarmerVerif) => (
                <StyledTableRow key={FarmerVerif.Fname}>
                <StyledTableCell component="th" scope="row">
                    {FarmerVerif.Fname}
                </StyledTableCell>
                <StyledTableCell align="center">{FarmerVerif.Lname}</StyledTableCell>
                <StyledTableCell align="center">{FarmerVerif.RegistrationDate}</StyledTableCell>
                <StyledTableCell align="center"><Button variant='contained'>Pending</Button></StyledTableCell>
                <StyledTableCell align="center"><Button variant='contained' sx={{backgroundColor: 'Green', '&:hover': {backgroundColor: 'green'}}}>Approve</Button> <Button variant='contained' sx={{backgroundColor: 'Red', '&:hover': {backgroundColor: 'red'}}}>Reject</Button></StyledTableCell>
                </StyledTableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>

    <TableContainer component={Paper}>
    <Table sx={{ minWidth: innerWidth-333 }} aria-label="customized table">
    <TableHead>
        <Typography variant='h4' sx={{fontWeight: 'bold', padding: '20px 0px 20px  1px', color: 'green'}}>Farmer Profile</Typography>
        <TableRow>
        <StyledTableCell>First Name </StyledTableCell>
        <StyledTableCell align="center">Last Name</StyledTableCell>
        <StyledTableCell align="center">Age</StyledTableCell>
        <StyledTableCell align="center">Location</StyledTableCell>
        <StyledTableCell align="center">Verification Date</StyledTableCell>
     
        <StyledTableCell align="center">Action</StyledTableCell>
        </TableRow>
    </TableHead>
    <TableBody>
        {FarmerProf.map((FarmerProf) => (
        <StyledTableRow key={FarmerProf.Fname}>
            <StyledTableCell component="th" scope="row">
            {FarmerProf.Fname}
            </StyledTableCell>
            <StyledTableCell align="center">{FarmerProf.Lname}</StyledTableCell>
            <StyledTableCell align="center">{FarmerProf.Age}</StyledTableCell>
            <StyledTableCell align="center">{FarmerProf.District}</StyledTableCell>
            <StyledTableCell align="center">{FarmerProf.RegistrationDate}</StyledTableCell>
            <StyledTableCell align="center"><Button variant='contained' sx={{backgroundColor: '#DDC200', '&:hover': {backgroundColor: '#DDC200'}}}>Edit</Button> <Button variant='contained' sx={{backgroundColor: 'Red', '&:hover': {backgroundColor: 'red'}}}>Delete</Button></StyledTableCell>
        </StyledTableRow>
        ))}
    </TableBody>
    </Table>
    </TableContainer>

</Box>
  );
}
