/* eslint-disable @typescript-eslint/no-unused-vars */

import { useState } from "react";
import {
  styled,
  useTheme,
  createTheme,
  ThemeProvider,
} from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import Dashboard from "./Dashboard";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AgricultureOutlinedIcon from "@mui/icons-material/AgricultureOutlined";
import FarmerDashboard from "./FarmerDashboard";
import PointOfSaleOutlinedIcon from "@mui/icons-material/PointOfSaleOutlined";
import HelenLogo from "../../assets/HelenGreenLogo2.png";

import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import BuyerDashboard from "./BuyerDashboard";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SellIcon from "@mui/icons-material/Sell";
import MessageIcon from "@mui/icons-material/Message";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";

import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import EventManagement from "./EventManagement";
import ProjectManagement from "./ProjectManagement";

import OrdersDashboard from "./OrdersDashboard";
import ProductDashboard from "./ProductDashboard";
import Messages from "./Messages";
import AdminDashboard from "./AdminDashboard";
import { Button } from "@mui/material";
import Logout from "./Logout";

const muiTheme = createTheme({
  components: {
    MuiListItem: {
      styleOverrides: {
        root: {
          "&&.Mui-selected": {
            backgroundColor: "red",
          },
          "&:hover": {
            backgroundColor: "#0C7230",
            color: "white",
          },
          "&:active": {
            backgroundColor: "#0C7230",
          },
        },
      },
    },
  },
});

const drawerWidth = 280;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function Sidenav() {
  
  const theme = useTheme();
  const [open, setOpen] = useState(true);
  const [menudata, setMenudata] = useState("Dashboard");
  const [openPopup, setOpenPopup] = useState(false);
  const [username, setUsername] = useState(localStorage.getItem("username") || "Guest");

  const navigate = useNavigate();

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ backgroundColor: "white", color: "#0C7230" }}
      >
        <Toolbar sx ={{display: 'flex', position:'relative',flexGrow: 5}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => {
              setOpen(!open);
            }}
            edge="start"
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            display="flex"
            alignItems="center"
            padding={1.4}
          >
            <img src={HelenLogo} height={70}></img> Office of the Provincial
            Agriculture Quezon FITS Center
          </Typography>

          <Typography sx={{color: 'black', marginLeft: 125}}>{username}</Typography>

          <IconButton onClick={() => setOpenPopup(true)} sx ={{color: '#0C7230', position: 'relative',left: 10, borderRadius: 2, height: 50}}>
            <LogoutIcon sx={{marginRight: 1}}/> 
            <Typography>Logout</Typography>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <ThemeProvider theme={muiTheme}>
          <List>
            <ListItem
              disablePadding
              sx={{ display: "block", marginTop: 5 }}
              onClick={() => setMenudata("AdminDashboard")}
            >
              <ListItemButton
                sx={{
                  minHeight: 60,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 3,
                    justifyContent: "center",
                    marginLeft: 2.5,
                  }}
                >
                  <AdminPanelSettingsIcon />
                </ListItemIcon>
                <ListItemText primary="Admin Dashboard" />
              </ListItemButton>
            </ListItem>
          </List>

          <Divider />

          <List>
            <ListItem
              disablePadding
              sx={{ display: "block" }}
              onClick={() => setMenudata("Dashboard")}
            >
              <ListItemButton
                sx={{
                  minHeight: 60,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 3,
                    justifyContent: "center",
                    marginLeft: 2.5,
                  }}
                >
                  <HomeOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Overview " />
              </ListItemButton>
            </ListItem>

            <ListItem
              disablePadding
              sx={{ display: "block" }}
              onClick={() => setMenudata("FarmerDashboard")}
            >
              <ListItemButton
                sx={{
                  minHeight: 60,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 3,
                    justifyContent: "center",
                    marginLeft: 2.5,
                  }}
                >
                  <AgricultureOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Farmer Dashboard" />
              </ListItemButton>
            </ListItem>

            <ListItem
              disablePadding
              sx={{ display: "block" }}
              onClick={() => setMenudata("BuyerDashboard")}
            >
              <ListItemButton
                sx={{
                  minHeight: 60,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 3,
                    justifyContent: "center",
                    marginLeft: 2.5,
                  }}
                >
                  <PointOfSaleOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Buyer Dashboard" />
              </ListItemButton>
            </ListItem>
          </List>

          <Divider />

          <List>
            <ListItem
              disablePadding
              sx={{ display: "block" }}
              onClick={() => setMenudata("OrderLists")}
            >
              <ListItemButton
                sx={{
                  minHeight: 60,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 3,
                    justifyContent: "center",
                    marginLeft: 2.5,
                  }}
                >
                  <ShoppingCartOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Order Lists" />
              </ListItemButton>
            </ListItem>

            <ListItem
              disablePadding
              sx={{ display: "block" }}
              onClick={() => setMenudata("ProductLists")}
            >
              <ListItemButton
                sx={{
                  minHeight: 60,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 3,
                    justifyContent: "center",
                    marginLeft: 2.5,
                  }}
                >
                  <SellIcon />
                </ListItemIcon>
                <ListItemText primary="Product Lists" />
              </ListItemButton>
            </ListItem>
          </List>
          <Divider />

          <List>
            <ListItem
              disablePadding
              sx={{ display: "block" }}
              onClick={() => setMenudata("EventManagement")}
            >
              <ListItemButton
                sx={{
                  minHeight: 60,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 3,
                    justifyContent: "center",
                    marginLeft: 2.5,
                  }}
                >
                  <CalendarMonthIcon />
                </ListItemIcon>
                <ListItemText primary="Event Managements" />
              </ListItemButton>
            </ListItem>

            <ListItem
              disablePadding
              sx={{ display: "block" }}
              onClick={() => setMenudata("ProjectManagement")}
            >
              <ListItemButton
                sx={{
                  minHeight: 60,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 3,
                    justifyContent: "center",
                    marginLeft: 2.5,
                  }}
                >
                  <LightbulbOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Project Management" />
              </ListItemButton>
            </ListItem>

          </List>

          <Divider />

          <List>
          <ListItem
              disablePadding
              sx={{ display: "block" }}
              onClick={() => setMenudata("Messages")}
            >
              <ListItemButton
                sx={{
                  minHeight: 60,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 3,
                    justifyContent: "center",
                    marginLeft: 2.5,
                  }}
                >
                  <MessageIcon />
                </ListItemIcon>
                <ListItemText primary="Messages" />
              </ListItemButton>
            </ListItem>
          </List>

        
        </ThemeProvider>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3, display: "flex" }}>
        {menudata == "Dashboard" && <Dashboard />}
        {menudata == "FarmerDashboard" && <FarmerDashboard />}
        {menudata == "BuyerDashboard" && <BuyerDashboard />}
        {menudata == "EventManagement" && <EventManagement />}
        {menudata == "ProjectManagement" && <ProjectManagement />}
        {menudata == "OrderLists" && <OrdersDashboard />}
        {menudata == "ProductLists" && <ProductDashboard />}
        {menudata == "Messages" && <Messages />}
        {menudata == "AdminDashboard" && <AdminDashboard />}
        

      </Box>

      <Logout
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      />
    </Box>
  );
}
