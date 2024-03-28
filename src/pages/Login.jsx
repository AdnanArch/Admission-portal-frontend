import React from "react";
import birdlogo from "../assets/bird-logo.svg";
import loginimg from "../assets/loginimg.png";
import { Button, Container, Stack, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  return (
    <>
      <section className="login-section" style={{ overflow: "hidden" }}>
        <div className="row">
          <div className="col-lg-7 col-md-12 col-sm-12  mt-5 mb-5">
            <Container>
              <div className="logo">
                <img
                  src={birdlogo}
                  alt="Bird-logo"
                  className="img-fluid"
                  style={{ width: "13rem" }}
                />
              </div>
              <div className="login-content mx-auto" style={{ width: "35rem" }}>
                <div className="login-head mb-5">
                  <h5 className="mb-4">
                    Sign in to your Mailclub <br /> account
                  </h5>
                  <p
                    onClick={() => {
                      navigate("/signup");
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    Don't have an account at?{" "}
                    <span style={{ color: "#04A56A", fontWeight: "600" }}>
                      Sign up
                    </span>
                  </p>
                </div>
                <div className="login-text-field">
                  <Stack spacing={3}>
                    <TextField
                      label="E-mail"
                      placeholder="Enter e-mail"
                      fullWidth
                      color="success"
                      InputProps={{ style: { fontSize: "1.5rem" } }}
                      InputLabelProps={{ style: { fontSize: "1.6rem" } }}
                    />

                    <TextField
                      label="Password"
                      placeholder="Enter your password"
                      fullWidth
                      color="success"
                      InputProps={{ style: { fontSize: "1.5rem" } }}
                      InputLabelProps={{ style: { fontSize: "1.6rem" } }}
                    />
                  </Stack>
                </div>
                <div className="forget-password mt-4 mb-4">
                  <p style={{ color: "#04A56A", textAlign: "end" }}>
                    Forgot your password?
                  </p>
                </div>
                <div className="sign-in-button">
                  <Button
                    onClick={() => {
                      navigate("/dashboard");
                    }}
                    variant="contained"
                    fullWidth
                    color="success"
                    sx={{
                      bgcolor: "#04A56A",
                      "&:hover": "#04A56A",
                      fontSize: "1.5rem",
                      textTransform: "none",
                    }}
                  >
                    Sign In
                  </Button>
                </div>
              </div>
            </Container>
          </div>
          <div
            className="col-lg-5 col-md-12 col-sm-12 d-flex align-items-center justify-content-center"
            style={{ backgroundColor: "#F7F8F9" }}
          >
            <img src={loginimg} alt="Login-img" className="img-fluid" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
