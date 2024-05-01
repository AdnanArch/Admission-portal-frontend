import { Avatar, Box, Button, Toolbar } from "@mui/material";
import React from "react";
import GroupsIcon from "@mui/icons-material/Groups";
import LanguageIcon from "@mui/icons-material/Language";
import BlockIcon from "@mui/icons-material/Block";
import dash_img from "../assets/D-img-1.png";

const drawerWidth = 240;
function Dashboard() {
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
        <section className="dash-board container mb-5">
          <div
            className="row py-5"
            style={{ backgroundColor: "#D8F5E8", borderRadius: "20px" }}
          >
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="container">
                <div className="dash-content">
                  <h5>
                    Start your journey &#128075; <br /> with University Of
                    Sahiwal
                  </h5>
                </div>
                <div>
                  <p className="mb-5">
                    Lorem ipsum dolor sit quae esse assumenda aperiam blanditiis
                    perspiciatis, nesciunt nisi earum eaque voluptates!
                  </p>
                </div>
                <div>
                  <Button
                    onClick={() => {
                      navigate("/apply");
                    }}
                    variant="contained"
                    sx={{ backgroundColor: "#00A76F", fontWeight: "600" }}
                    color="success"
                  >
                    Apply Now
                  </Button>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="dashboard-img d-flex justify-content-lg-end justify-content-md-center">
                <img src={dash_img} alt="dash-board-img" />
              </div>
            </div>
          </div>
        </section>
        <section className="dashboard-section mb-5">
          <div className="row">
            {/*------------ BOX-1 --------*/}
            <div className="col-lg-4 col-md-12 col-md-12 mb-4">
              <div
                className="box-1"
                style={{
                  backgroundColor: "#e9fcd4",
                  borderRadius: "1rem",
                  padding: "3rem 0",
                }}
              >
                <div className="box-content">
                  <div className="avatar-icon d-flex justify-content-center mb-5">
                    <Avatar
                      sx={{
                        width: "7rem",
                        height: "7rem",
                        bgcolor: "#d2f1be",
                      }}
                    >
                      <GroupsIcon
                        sx={{
                          width: "3rem",
                          height: "3rem",
                          color: "#229a16",
                        }}
                      />
                    </Avatar>
                  </div>
                  <div className="text-center">
                    <h3 style={{ color: "#08660d" }}>363</h3>
                    <p style={{ color: "#62a25d" }}>Total user</p>
                  </div>
                </div>
              </div>
            </div>

            {/*------------ BOX-2 --------*/}

            <div className="col-lg-4 col-md-12 col-md-12 mb-4">
              <div
                className="box-2"
                style={{
                  backgroundColor: "#d0f2ff",
                  borderRadius: "1rem",
                  padding: "3rem 0",
                }}
              >
                <div className="box-content">
                  <div className="avatar-icon d-flex justify-content-center mb-5">
                    <Avatar
                      sx={{
                        width: "7rem",
                        height: "7rem",
                        bgcolor: "#acd5f2",
                      }}
                    >
                      <LanguageIcon
                        sx={{
                          width: "3rem",
                          height: "3rem",
                          color: "#0f56b8",
                        }}
                      />
                    </Avatar>
                  </div>
                  <div className="text-center">
                    <h3 style={{ color: "#04297a" }}>363</h3>
                    <p style={{ color: "#4f73ac" }}>Total user</p>
                  </div>
                </div>
              </div>
            </div>

            {/*------------ BOX-3 --------*/}

            <div className="col-lg-4 col-md-12 col-md-12 mb-4">
              <div
                className="box-3"
                style={{
                  backgroundColor: "#ffe7d9",
                  borderRadius: "1rem",
                  padding: "3rem 0",
                }}
              >
                <div className="box-content">
                  <div className="avatar-icon d-flex justify-content-center mb-5">
                    <Avatar
                      sx={{
                        width: "7rem",
                        height: "7rem",
                        bgcolor: "#f2c2bb",
                      }}
                    >
                      <BlockIcon
                        sx={{
                          width: "3rem",
                          height: "3rem",
                          color: "#b82337",
                        }}
                      />
                    </Avatar>
                  </div>
                  <div className="text-center">
                    <h3 style={{ color: "#7a0c2e" }}>363</h3>
                    <p style={{ color: "#ab5d6e" }}>Total user</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-md-12 mb-4">
              <div
                className="box-3"
                style={{
                  backgroundColor: "#ffe7d9",
                  borderRadius: "1rem",
                  padding: "3rem 0",
                }}
              >
                <div className="box-content">
                  <div className="avatar-icon d-flex justify-content-center mb-5">
                    <Avatar
                      sx={{
                        width: "7rem",
                        height: "7rem",
                        bgcolor: "#f2c2bb",
                      }}
                    >
                      <BlockIcon
                        sx={{
                          width: "3rem",
                          height: "3rem",
                          color: "#b82337",
                        }}
                      />
                    </Avatar>
                  </div>
                  <div className="text-center">
                    <h3 style={{ color: "#7a0c2e" }}>363</h3>
                    <p style={{ color: "#ab5d6e" }}>Total user</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-md-12 mb-4">
              <div
                className="box-3"
                style={{
                  backgroundColor: "#ffe7d9",
                  borderRadius: "1rem",
                  padding: "3rem 0",
                }}
              >
                <div className="box-content">
                  <div className="avatar-icon d-flex justify-content-center mb-5">
                    <Avatar
                      sx={{
                        width: "7rem",
                        height: "7rem",
                        bgcolor: "#f2c2bb",
                      }}
                    >
                      <BlockIcon
                        sx={{
                          width: "3rem",
                          height: "3rem",
                          color: "#b82337",
                        }}
                      />
                    </Avatar>
                  </div>
                  <div className="text-center">
                    <h3 style={{ color: "#7a0c2e" }}>363</h3>
                    <p style={{ color: "#ab5d6e" }}>Total user</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-md-12 mb-4">
              <div
                className="box-3"
                style={{
                  backgroundColor: "#ffe7d9",
                  borderRadius: "1rem",
                  padding: "3rem 0",
                }}
              >
                <div className="box-content">
                  <div className="avatar-icon d-flex justify-content-center mb-5">
                    <Avatar
                      sx={{
                        width: "7rem",
                        height: "7rem",
                        bgcolor: "#f2c2bb",
                      }}
                    >
                      <BlockIcon
                        sx={{
                          width: "3rem",
                          height: "3rem",
                          color: "#b82337",
                        }}
                      />
                    </Avatar>
                  </div>
                  <div className="text-center">
                    <h3 style={{ color: "#7a0c2e" }}>363</h3>
                    <p style={{ color: "#ab5d6e" }}>Total user</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-md-12 mb-4">
              <div
                className="box-3"
                style={{
                  backgroundColor: "#ffe7d9",
                  borderRadius: "1rem",
                  padding: "3rem 0",
                }}
              >
                <div className="box-content">
                  <div className="avatar-icon d-flex justify-content-center mb-5">
                    <Avatar
                      sx={{
                        width: "7rem",
                        height: "7rem",
                        bgcolor: "#f2c2bb",
                      }}
                    >
                      <BlockIcon
                        sx={{
                          width: "3rem",
                          height: "3rem",
                          color: "#b82337",
                        }}
                      />
                    </Avatar>
                  </div>
                  <div className="text-center">
                    <h3 style={{ color: "#7a0c2e" }}>363</h3>
                    <p style={{ color: "#ab5d6e" }}>Total user</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Box>
    </>
  );
}

export default Dashboard;
