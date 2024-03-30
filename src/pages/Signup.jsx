import React, { useState } from "react";
import birdlogo from "../assets/bird-logo.svg";
import loginimg from "../assets/loginimg.png";
import { Container, Stack, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { LoadingButton } from "@mui/lab";
import VisibilityOffRoundedIcon from "@mui/icons-material/VisibilityOffRounded";
import VisibilityIcon from "@mui/icons-material/Visibility";
import axios from "axios";

function Signup() {
  const navigate = useNavigate();

  // -------use-state for user input-------
  const [userinput, setUserinput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    cnic: "",
    password: "",
  });
  // console.log(userinput);

  // -------use-state for handle-loading-------
  const [loading, setLoading] = useState(false);

  // -------Use-stste for error-handling-------
  const [error, setError] = useState({
    firstName: "",
    lastName: "",
    email: "",
    cnic: "",
    password: "",
  });

  // -------Use-stste for revel-password-------
  const [RevealPassword, setRevealPassword] = useState(false);

  // -------function for input handeling-------
  const inputHandling = (e) => {
    const { name, value } = e.target;
    setUserinput({ ...userinput, [name]: value });
    errorHandling({ ...userinput, [name]: value });
  };

  // -------function for API calling-------
  const fetchData = async () => {
    setLoading(true);
    try {
      const apiCall = {
        url: "http://localhost:8080/signup",
        method: "POST",
        data: userinput,
      };
      const apiResponse = await axios(apiCall);
      if (apiResponse.status === 200 || apiResponse.status === 201) {
        console.log("Ustad g good ho gya ");
        setLoading(false);
      } else {
        console.log("Very bad ustad g");
      }
    } catch (error) {
      console.error("Error:", error.response.data.message);
    }
    setLoading(false);
  };

  // --------function for Error-Handling--------
  const errorHandling = (userinput) => {
    console.log(userinput.firstName);
    let errorValue = {
      firstName: false,
      lastName: false,
    };
    let namePattern = /^[a-zA-Z]+$/;
    let EmailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let CnicPattern = /^\d{5}-\d{7}-\d$/;
    if (!namePattern.test(userinput.firstName)) {
      errorValue.firstName = true;
      // errorValue.firstName = "Please enter a character";
    } else if (!namePattern.test(userinput.lastName)) {
      errorValue.lastName = true;
      // errorValue.lastName = "Please enter a character vl";
    } else if (!EmailPattern.test(userinput.email)) {
      errorValue.email = "Please enter a valid email";
    } else if (!CnicPattern.test(userinput.cnic)) {
      errorValue.cnic = "Please enter a valid CNIC";
    } else if (userinput.password.length < 8) {
      errorValue.password =
        "Your password must be greater than eight characters";
    }
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
                      InputProps={{ style: { fontSize: "1.5rem" } }}
                      InputLabelProps={{ style: { fontSize: "1.6rem" } }}
                      error={error.firstName}
                      helperText={error.firstName ? "1" : ""}
                      sx={{
                        "& .MuiFormHelperText-root": {
                          fontSize: "1rem",
                          fontWeight: "600",
                          marginLeft: "0",
                        },
                      }}
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
                      error={error.lastName}
                      helperText={error.lastName ? "2" : ""}
                      sx={{
                        "& .MuiFormHelperText-root": {
                          fontSize: "1rem",
                          fontWeight: "600",
                          marginLeft: "0",
                        },
                      }}
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
                      error={error.email?.email}
                      helperText={error.email?.email}
                      sx={{
                        "& .MuiFormHelperText-root": {
                          fontSize: "1rem",
                          fontWeight: "600",
                          marginLeft: "0",
                        },
                      }}
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
                      error={error.cnic?.cnic}
                      helperText={error.cnic?.cnic}
                      sx={{
                        "& .MuiFormHelperText-root": {
                          fontSize: "1rem",
                          fontWeight: "600",
                          marginLeft: "0",
                        },
                      }}
                    />

                    <div className="sign-up-password">
                      <TextField
                        onChange={inputHandling}
                        label="Password"
                        placeholder="Enter your password"
                        type={RevealPassword ? "text" : "password"}
                        name="password"
                        fullWidth
                        color="success"
                        InputProps={{ style: { fontSize: "1.5rem" } }}
                        InputLabelProps={{ style: { fontSize: "1.6rem" } }}
                        error={error.password?.password}
                        helperText={error.password?.password}
                        sx={{
                          "& .MuiFormHelperText-root": {
                            fontSize: "1rem",
                            fontWeight: "600",
                            marginLeft: "0",
                          },
                        }}
                      />
                      <div className="password-reveal-icon">
                        {RevealPassword === true && (
                          <VisibilityIcon
                            sx={{ fontSize: "2rem", cursor: "pointer" }}
                            onClick={() => {
                              setRevealPassword(false);
                            }}
                          />
                        )}
                        {RevealPassword === false && (
                          <VisibilityOffRoundedIcon
                            onClick={() => {
                              setRevealPassword(true);
                            }}
                            sx={{ fontSize: "2rem", cursor: "pointer" }}
                          />
                        )}
                      </div>
                    </div>
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
