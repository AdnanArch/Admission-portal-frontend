import { Box, Button, MenuItem, TextField, Toolbar } from "@mui/material";
import React from "react";
import no_data_found from "../assets/no-data-found.svg";

const drawerWidth = 240;
function Adddepartment() {
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
        <section className="add-dp-admin mb-5">
          <div className="row border py-5">
            <div className="col-lg-6 col-md-12 col-sm-12 mb-5">
              <div className="dp-content">
                <h3 className="text-center mb-3">Add Department</h3>
                <div className="d-flex justify-content-center">
                  <hr class="gradient-line mb-5" />
                </div>
                <div className="dp-input mb-4">
                  <TextField
                    label="Select Department"
                    select
                    name="lastName"
                    fullWidth
                    color="success"
                    InputProps={{ style: { fontSize: "1.5rem" } }}
                    InputLabelProps={{ style: { fontSize: "1.5rem" } }}
                  >
                    <MenuItem value="BSCS" sx={{ fontSize: "1.5rem" }}>
                      Computer Science
                    </MenuItem>
                    <MenuItem value="BSSE" sx={{ fontSize: "1.5rem" }}>
                      Software Engineering
                    </MenuItem>
                    <MenuItem value="BSIT" sx={{ fontSize: "1.5rem" }}>
                      Information Technology
                    </MenuItem>
                  </TextField>
                </div>
                <div className="dp-button">
                  <Button
                    variant="contained"
                    color="success"
                    sx={{
                      bgcolor: "#04A56A",
                      "&:hover": {
                        bgcolor: "#047A4E",
                      },
                      fontSize: "1.5rem",
                      textTransform: "none",
                    }}
                  >
                    Add Department
                  </Button>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="ad-content">
                <h3 className="text-center mb-3">Add Admin</h3>
                <div className="d-flex justify-content-center">
                  <hr class="gradient-line mb-5" />
                </div>
                <div className="ad-input mb-5">
                  <TextField
                    label="Email"
                    placeholder="Enter Email Address"
                    type="text"
                    name="lastName"
                    fullWidth
                    color="success"
                    InputProps={{ style: { fontSize: "1.5rem" } }}
                    InputLabelProps={{ style: { fontSize: "1.5rem" } }}
                  />
                </div>

                <div className="ad-input mb-5">
                  <TextField
                    label="Password"
                    placeholder="Enter Password"
                    type="text"
                    name="lastName"
                    fullWidth
                    color="success"
                    InputProps={{ style: { fontSize: "1.5rem" } }}
                    InputLabelProps={{ style: { fontSize: "1.5rem" } }}
                  />
                </div>

                <div className="ad-input mb-4">
                  <TextField
                    label="Select Department"
                    select
                    name="lastName"
                    fullWidth
                    color="success"
                    InputProps={{ style: { fontSize: "1.5rem" } }}
                    InputLabelProps={{ style: { fontSize: "1.5rem" } }}
                  >
                    <MenuItem value="BSCS" sx={{ fontSize: "1.5rem" }}>
                      Computer Science
                    </MenuItem>
                    <MenuItem value="BSSE" sx={{ fontSize: "1.5rem" }}>
                      Software Engineering
                    </MenuItem>
                    <MenuItem value="BSIT" sx={{ fontSize: "1.5rem" }}>
                      Information Technology
                    </MenuItem>
                  </TextField>
                </div>
                <div className="ad-button">
                  <Button
                    variant="contained"
                    color="success"
                    sx={{
                      bgcolor: "#04A56A",
                      "&:hover": {
                        bgcolor: "#047A4E",
                      },
                      fontSize: "1.5rem",
                      textTransform: "none",
                    }}
                  >
                    Add Admin
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*---------Existing Department------------*/}
        <section className="existing-dp mb-5">
          <div className="row">
            <div className="col-12 text-center">
              <h3 className="mb-3">Existing Departments</h3>
              <div className="d-flex justify-content-center">
                <hr class="gradient-line mb-5" />
              </div>
            </div>
          </div>
          <div className="no-data-found">
            <div className="border">
              <div className="not-found-content text-center">
                <img
                  src={no_data_found}
                  alt=""
                  className="img-fluid"
                  style={{ width: "50rem" }}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-4"></div>
            <div className="col-4"></div>
            <div className="col-4"></div>
          </div>
        </section>
      </Box>
    </>
  );
}

export default Adddepartment;
