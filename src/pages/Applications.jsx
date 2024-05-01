import { Box, Button, MenuItem, TextField, Toolbar } from "@mui/material";
import React from "react";

const drawerWidth = 240;
function Applications() {
  return (
    <>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <h1>Applications</h1>
      </Box>
    </>
  );
}

export default Applications;
