import * as React from "react";
import { useEffect, useState } from "react";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import DeleteIcon from "@mui/icons-material/Delete";
import { visuallyHidden } from "@mui/utils";
import { TextField } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";

import { Menu, MenuItem } from "@mui/material";

function createData(id, _id, Username, Email, Password, AccountType, action) {
  return {
    id,
    _id,
    Username,
    Email,
    Password,
    AccountType,
    action,
  };
}

const headCells = [
  {
    id: "Date",
    numeric: false,
    disablePadding: false,
    label: "Date",
  },
  {
    id: "Username",
    numeric: false,
    disablePadding: false,
    label: "Username",
  },
  {
    id: "Activity",
    numeric: false,
    disablePadding: false,
    label: "Activity",
  },

  {
    id: "AccountType",
    numeric: false,
    disablePadding: false,
    label: "Account Type",
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
  return order === "desc"
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
  const {

    order,
    orderBy,
  
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
       
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "center" : "center"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
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
  const {
    numSelected,
   
    handleDelete,
    onSearchChange,
    onFilterClick,
    filterAnchorEl,
    filterStatus,
  } = props;

  return (
    <Toolbar
      sx={{
        paddingBottom: 2,
        paddingTop: 3,
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: "1 1 100%" }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <>
          <Typography
            sx={{ flex: "1 1 100%", color: "#0C7230", fontWeight: "bold" }}
            variant="h6"
            id="tableTitle"
            component="div"
          >
            Activity Log
            <br />
            <Typography variant="caption" sx={{ color: "grey" }}>
              Keeps track of changes in the system
            </Typography>
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
            sx={{ marginRight: 2, width: "280px" }}
          />
     

          <Tooltip title="Filter list">
            <IconButton onClick={onFilterClick}>
              <FilterListIcon />
            </IconButton>
          </Tooltip>
          <Typography sx={{ marginLeft: 2, color: "grey" }} variant="body2">
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
        <MenuItem onClick={() => onFilterClick(null, "Agri-Tech")}>
          Agri-Tech
        </MenuItem>
        <MenuItem onClick={() => onFilterClick(null, "Admin")}>Admin</MenuItem>
      </Menu>
    </Toolbar>
  );
}

export default function EnhancedTable(n) {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("FullName");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [rows, setRows] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("All"); // State for filter status
  const [filterAnchorEl, setFilterAnchorEl] = useState(null); // State for filter menu anchor

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/activitylog");
      const data = await response.json();
      console.log("data :", data); // View the fetched data in the console

      const formattedRows = data.map((item, index) =>
        createData(
          index + 1,
          item._id,
          item.Date,
          item.Email,
          item.Password,
          item.AccountType,
          ""
        )
      );
      console.log("data created");
      setRows(formattedRows);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
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

  
  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  const filteredRows = rows.filter(
    (row) =>
      (row.Username.toLowerCase().includes(searchQuery.toLowerCase()) ||
        row.Email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        row.AccountType.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (filterStatus === "All" || row.AccountType === filterStatus)
  );

  const handleFilterClick = (event, status) => {
    if (status) {
      setFilterStatus(status);
      setFilterAnchorEl(null);
    } else {
      setFilterAnchorEl(filterAnchorEl ? null : event.currentTarget);
    }
  };

  const handleDelete = async () => {
    if (selected.length === 0) return;

    try {
      const idsToDelete = selected;

      const deletedRows = [];
      idsToDelete.forEach((id) => {
        const deletedRow = rows.find((row) => row.id === id); // Find the row object with matching id
        if (deletedRow) deletedRows.push(deletedRow);
      });

      if (deletedRows.length === 0) {
        console.error("No rows found for selected IDs");
        return;
      }

      console.log("Deleted Rows:", deletedRows);

      // Iterate over each deleted ID and send a DELETE request for each
      for (let i = 0; i < deletedRows.length; i++) {
        const response = await fetch(
          `http://localhost:5000/api/admin/${deletedRows[i]._id}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ id: deletedRows[i]._id }), // Sending single ID in the body
          }
        );

        if (!response.ok) {
          console.error("Failed to delete row with ID:", deletedRows[i]._id);
        }
      }

      // Remove the deleted rows from the state
      const remainingRows = rows.filter((row) => !idsToDelete.includes(row.id));
      setRows(remainingRows);
      setSelected([]);
      console.log("Deletion completed");
    } catch (error) {
      console.error("Error deleting admin:", error);
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
    const parts = text.split(new RegExp(`(${query})`, "gi"));

    return parts.map((part, index) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <span key={index} style={{ backgroundColor: "#FFFF00" }}>
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;


  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", lg: 2 }}>
        <EnhancedTableToolbar
          numSelected={selected.length}
     
          handleDelete={handleDelete}
          onSearchChange={handleSearchChange}
          onFilterClick={handleFilterClick}
          filterAnchorEl={filterAnchorEl}
          filterStatus={filterStatus}
        />
        <TableContainer sx={{ maxHeight: n }}>
          <Table
            sx={{ minWidth: innerWidth - 380 }}
            aria-labelledby="tableTitle"
            size={dense ? "small" : "medium"}
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
                
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                        align="center"
                      >
                        {row.Username}
                      </TableCell>
                      <TableCell align="center">{highlightText(row.Email, searchQuery)}</TableCell>
                      <TableCell align="center">{highlightText(row.Password)}  </TableCell>
                      <TableCell align="center">{highlightText(row.AccountType, searchQuery)} </TableCell>
                  
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
