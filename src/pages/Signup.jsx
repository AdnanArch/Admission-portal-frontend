import React, { useState } from "react";
import birdlogo from "../assets/bird-logo.svg";
import loginimg from "../assets/loginimg.png";
import { Button, Container, Stack, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { LoadingButton } from "@mui/lab";
import axios from "axios";

function Signup() {
  const navigate = useNavigate();

  // -------use-state for user input-------
  const [userinput, setUserinput] = useState([
    {
      firstName: "",
      lastName: "",
      email: "",
      cnic: "",
      password: "",
    },
  ]);
  // console.log(userinput);

  // -------use-state for handle-loading-------
  const [loading, setLoading] = useState(false);

  // -------Use-stste for error-handling-------
  const [error, setError] = useState();

  // -------function for input handeling-------
  const inputHandling = (e) => {
    const { name, value } = e.target;
    setUserinput({ ...userinput, [name]: value });
    errorHandling(userinput);
  };

  // -------function for API calling-------
  const fetchData = () => {
    setLoading(true);
    const apiCall = {
      url: "http://localhost:8080/signup",
      method: "POST",
      data: userinput,
    };
    const apiResponse = axios(apiCall);
    if (apiResponse.status === 200 || apiResponse.status === 201) {
      console.log("Ustad g good ho gya ");
      setLoading(false);
    } else {
      console.log("Very bad ustad g");
    }
  };

  // --------function for Error-Handling--------
  const errorHandling = (userinput) => {
    console.log(userinput.firstName);
    let errorValue = {};
    let namePattern = /^[a-zA-Z]+$/;
    if (!namePattern.test(userinput.firstName)) {
      errorValue.firstName = "Please enter a character";
    }
    // if (userinput.firstName.length < 5) {
    //   errorValue.firstName = "Please enter a character";
    // }

    setError(errorValue);
  };

  return (
    <>
      <section className="login-section" style={{ overflow: "hidden" }}>
        <div className="row" style={{ height: "" }}>
          <div className="col-lg-7 col-md-12 col-sm-12 mb-5">
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
                  <h5 className="mb-4">Get started with a Forever Free plan</h5>
                  <p>Signup in seconds. No credit card required.</p>
                </div>
                <div className="login-text-field">
                  <Stack spacing={2}>
                    <TextField
                      onChange={inputHandling}
                      label="First Name"
                      placeholder="Enter First Name"
                      type="text"
                      name="firstName"
                      required
                      fullWidth
                      color="success"
                      error={error?.firstName}
                      helperText={error?.firstName}
                      sx={{
                        "& .MuiFormHelperText-root": {
                          fontSize: "1rem",
                          fontWeight: "600",
                          marginLeft: "0",
                        },
                      }}
                      InputProps={{ style: { fontSize: "1.5rem" } }}
                      InputLabelProps={{ style: { fontSize: "1.6rem" } }}
                    />

                    <TextField
                      onChange={inputHandling}
                      label="Last Name"
                      placeholder="Enter your Last Nmae"
                      type="text"
                      name="lastName"
                      fullWidth
                      color="success"
                      InputProps={{ style: { fontSize: "1.5rem" } }}
                      InputLabelProps={{ style: { fontSize: "1.6rem" } }}
                    />

                    <TextField
                      onChange={inputHandling}
                      label="E-mail"
                      placeholder="Enter e-mail"
                      type="email"
                      name="email"
                      required
                      fullWidth
                      color="success"
                      InputProps={{ style: { fontSize: "1.5rem" } }}
                      InputLabelProps={{ style: { fontSize: "1.6rem" } }}
                    />

                    <TextField
                      onChange={inputHandling}
                      label="CNIC"
                      placeholder="Enter CNIC "
                      type="text"
                      name="cnic"
                      fullWidth
                      color="success"
                      InputProps={{ style: { fontSize: "1.5rem" } }}
                      InputLabelProps={{ style: { fontSize: "1.6rem" } }}
                    />

                    <TextField
                      onChange={inputHandling}
                      label="Password"
                      placeholder="Enter your password"
                      type="password"
                      name="password"
                      fullWidth
                      color="success"
                      InputProps={{ style: { fontSize: "1.5rem" } }}
                      InputLabelProps={{ style: { fontSize: "1.6rem" } }}
                    />
                  </Stack>
                </div>
                <div className="forget-password mt-4 mb-4">
                  <p
                    onClick={() => {
                      navigate("/login");
                    }}
                    style={{ textAlign: "end", cursor: "pointer" }}
                  >
                    Do you have an account?{""}{" "}
                    <span style={{ color: "#04A56A", fontWeight: "600" }}>
                      Login
                    </span>
                  </p>
                </div>
                <div className="sign-in-button">
                  <LoadingButton
                    loading={loading}
                    onClick={() => {
                      fetchData();
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
                    Creat My Account
                  </LoadingButton>
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

export default Signup;
