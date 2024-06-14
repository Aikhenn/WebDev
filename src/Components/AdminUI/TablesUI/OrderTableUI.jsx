import * as React from 'react';
import { useEffect, useState } from 'react';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import { visuallyHidden } from '@mui/utils';
import { Button, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FilterListIcon from '@mui/icons-material/FilterList';

import EditDialog from './OrderDialogs/EditDialog';
import AddDialog from  './OrderDialogs/AddDialog';

import {Menu, MenuItem } from '@mui/material';



function createData(id, _id, DateOrdered, BuyerName, FarmerName, ProductName, Price , Quantity, status, action) {
  return {
   
    id,
    _id,
    DateOrdered,
    BuyerName,
    FarmerName,
    ProductName,
    Price,
    Quantity,
    status,
    action, 
  };
}

const headCells = [
  {
    id: 'DateOrdered',
    numeric: false,
    disablePadding: true,
    label: 'Order Date',
  },
  {
    id: 'BuyerName',
    numeric: false,
    disablePadding: false,
    label: 'Buyer Name',
  },
  {
    id: 'FarmerName',
    numeric: false,
    disablePadding: false,
    label: 'Farmer Name',
  },
  {
    id: 'ProductName',
    numeric: false,
    disablePadding: false,
    label: 'Product Name',
  },
  {
    id: 'Price',
    numeric: true,
    disablePadding: false,
    label: 'Price',
  },
  {
    id: 'Quantity',
    numeric: true,
    disablePadding: false,
    label: 'Quantity',
  },
  
  {
    id: 'status',
    numeric: false,
    disablePadding: false,
    label: 'Status',
  },
  {
    id: 'action',
    numeric: false,
    disablePadding: false,
    label: 'Action',
  },
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'center' : 'center'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          > 
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

function EnhancedTableToolbar(props) {
  const { numSelected, onAddClick , handleDelete ,  onSearchChange, onFilterClick, filterAnchorEl, filterStatus} = props;

  return (
    <Toolbar
      sx={{ paddingBottom: 2, paddingTop: 3,
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: '1 1 100%' }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <>
          <Typography
            sx={{ flex: '1 1 100%', color: '#0C7230', fontWeight: 'bold'}}
            variant="h6"
            id="tableTitle"
            component="div"
          >
            Order List<br />
            <Typography variant="caption" sx={{ color: 'grey'}}>A Data View of Orders for tracking</Typography>
          </Typography>
        </>
      )}
      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton onClick={handleDelete}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <>
        <TextField
        variant="outlined"
        size="small"
        placeholder="Search…"
        onChange={(e) => onSearchChange(e.target.value)}
        sx={{ marginRight: 2, width: '280px' }}
      />
         <Tooltip title="Add new Data">
            <Button variant="contained" 
            sx={{ minWidth: '150px', marginRight: 2, backgroundColor: '#0C7230', '&:hover': { backgroundColor: '#0C7230' } }}
            onClick={onAddClick}
            >
              <AddIcon sx={{ paddingRight: 0.6 }} /> New Order</Button>
          </Tooltip>

          <Tooltip title="Filter list">
            <IconButton onClick={onFilterClick}>
              <FilterListIcon />
            </IconButton>
          </Tooltip>
          <Typography
            sx={{ marginLeft: 2, color: 'grey' }}
            variant="body2"
          >
            Filter: {filterStatus}
          </Typography>
        </>
      )}
      <Menu
        anchorEl={filterAnchorEl}
        open={Boolean(filterAnchorEl)}
        onClose={() => onFilterClick(null)}
      >
        <MenuItem onClick={() => onFilterClick(null, 'All')}>All</MenuItem>
        <MenuItem onClick={() => onFilterClick(null, 'On-Going')}>On-Going</MenuItem>
        <MenuItem onClick={() => onFilterClick(null, 'Completed')}>Completed</MenuItem>
        <MenuItem onClick={() => onFilterClick(null, 'Canceled')}>Canceled</MenuItem>
      </Menu>
    </Toolbar>
  );
}

export default function EnhancedTable(n) {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('FullName');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [rows, setRows] = useState([]);
  const [openPopup, setOpenPopup] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState(null);
  const [addDialogOpen, setAddDialogOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState(''); 
  const [filterStatus, setFilterStatus] = useState('All'); // State for filter status
  const [filterAnchorEl, setFilterAnchorEl] = useState(null); // State for filter menu anchor


    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/orders');
        const data = await response.json();
        console.log('data :', data); // View the fetched data in the console

       
      
        const formattedRows = data.map((item, index) =>
        
          createData(index + 1, item._id, item.DateOrdered, item.BuyerName, item.FarmerName, item.ProductName, item.Price, item.Quantity, item.status, '')
        );
        console.log('data created')
        setRows(formattedRows);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };


  useEffect(() => {
    fetchData();
  }, []);



  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  const filteredRows = rows.filter(
    (row) =>
      (row.BuyerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        row.FarmerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        row.ProductName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        row.Price.toString().includes(searchQuery) ||
        row.Quantity.toString().includes(searchQuery)) &&
      (filterStatus === 'All' || row.status === filterStatus)
  );

  const handleFilterClick = (event, status) => {
    if (status) {
      setFilterStatus(status);
      setFilterAnchorEl(null);
    } else {
      setFilterAnchorEl(filterAnchorEl ? null : event.currentTarget);
    }
  };
  
  


  const handleEditClick = (event, id) => {
    const rowData = rows.find(row => row.id === id);
    setSelectedRowData(rowData);
  };

  const handleAddClick = () => {
    setAddDialogOpen(true);
  };



  const handleAddFarmer = async (newOrder) => {
    try {
      const response = await fetch('http://localhost:5000/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newOrder),
      });

      if (response.ok) {
        fetchData();
      } else {
        console.error('Error adding order:', response.statusText);
      }
    } catch (error) {
      console.error('Error adding order:', error);
    }
  };

  const handleDelete = async () => {
    if (selected.length === 0) return;

    try {
      const idsToDelete = selected;

      const deletedRows = [];
      idsToDelete.forEach(id => {
        const deletedRow = rows.find(row => row.id === id); // Find the row object with matching id
        if (deletedRow) deletedRows.push(deletedRow);
      });

      if (deletedRows.length === 0) {
        console.error('No rows found for selected IDs');
        return;
      }

      console.log('Deleted Rows:', deletedRows);

      // Iterate over each deleted ID and send a DELETE request for each
      for (let i = 0; i < deletedRows.length; i++) {
        const response = await fetch(`http://localhost:5000/api/orders/${deletedRows[i]._id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ id: deletedRows[i]._id }), // Sending single ID in the body
        });

        if (!response.ok) {
          console.error('Failed to delete row with ID:', deletedRows[i]._id);
        }
      }

      // Remove the deleted rows from the state
      const remainingRows = rows.filter((row) => !idsToDelete.includes(row.id));
      setRows(remainingRows);
      setSelected([]);
      console.log('Deletion completed');

    } catch (error) {
      console.error('Error deleting orders:', error);
    }
};


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const highlightText = (text, query) => {
    // If there's no query or no text, return the original text
    if (!query || !text) return text;
    
    // Split the text into parts before and after the query
    const parts = text.split(new RegExp(`(${query})`, 'gi'));
    
    return parts.map((part, index) => (
      part.toLowerCase() === query.toLowerCase() ? 
        <span key={index} style={{ backgroundColor: '#FFFF00' }}>{part}</span> : 
        part
    ));
  };
  

  const isSelected = (id) => selected.indexOf(id) !== -1;

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const statusStyle = (status) => {
    if(status ==='Completed') {
        return "#72F15B";    
    }
    if(status ==='On-Going'){
        return "#F1DF5B"
    }
    else{
      return "#F38484";
    }
  };
  

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', lg: 2 }}>
        <EnhancedTableToolbar 
        numSelected={selected.length} 
        onAddClick={handleAddClick}
        handleDelete={handleDelete}
        onSearchChange={handleSearchChange}
        onFilterClick={handleFilterClick}
        filterAnchorEl={filterAnchorEl}
        filterStatus={filterStatus}
      

        />
        <TableContainer sx={{ maxHeight: n}}>
          <Table
            sx={{ minWidth: innerWidth - 380 }}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
              
            />
            <TableBody>
              {stableSort(filteredRows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.id);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                     
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.id}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox"  onClick={(event) => handleClick(event, row.id)}>
                        <Checkbox
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{
                            'aria-labelledby': labelId,
                          }}
                        />
                      </TableCell>
                      <TableCell component="th" id={labelId} scope="row" padding="none">
                        {row.DateOrdered}
                      </TableCell>
                      <TableCell align="center"> {highlightText(row.BuyerName, searchQuery)}</TableCell>
                      <TableCell align="center"> {highlightText(row.FarmerName, searchQuery)}</TableCell>
                      <TableCell align="center"> {highlightText(row.ProductName, searchQuery)}</TableCell>
                      <TableCell align="center"> {highlightText(row.Price, searchQuery)}</TableCell>
                      <TableCell align="center"> {highlightText(row.Quantity, searchQuery)}</TableCell>
                      <TableCell align="center">
                    
                      <Typography sx={{
                        position: 'relative',
                        maxWidth:'auto',
                        border: `2px solid ${statusStyle(row.status)}`,                    
                        padding: '7px',
                        fontSize: 12,
                        borderRadius: 4}}
                      >
                         {highlightText(row.status, searchQuery)}
                      </Typography>
                        </TableCell>
                      <TableCell align="center">
                        <Tooltip title='Edit'>
                          <IconButton sx={{color: 'black' , padding: '20px',width: '30px', height: '30px',marginRight: 1}}
                            onClick={()  =>{
                               setOpenPopup(true);
                               handleEditClick(event, row.id);
                              }}
                          >
                            <EditIcon />
                          </IconButton>
                        </Tooltip>

                      
                        <EditDialog
                            openPopup = {openPopup} 
                            setOpenPopup = {setOpenPopup}
                            rowData = {selectedRowData}
                            fetchData={fetchData}

                          />
                        <AddDialog
                          open={addDialogOpen}
                          onClose={() => setAddDialogOpen(false)}
                          onAdd={handleAddFarmer}
                        />  
                   
  
                       
                        
                        </TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={filteredRows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
   
     
    </Box>
  );
}
