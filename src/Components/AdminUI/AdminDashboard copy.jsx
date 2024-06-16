import { Box } from "@mui/material";
import React from "react";
import AdminTableUI from "./TablesUI/AdminTableUI";

export default function AdminDashboard() {
  return (
    <Box
      sx={{
        position: "relative",
        top: 0,
        display: "flex",
        flexDirection: "column",
      }}
    >
  
      <AdminTableUI />
    </Box>
  );
}
