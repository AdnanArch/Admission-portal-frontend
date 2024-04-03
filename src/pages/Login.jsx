import React, { useState } from "react";
import birdlogo from "../assets/bird-logo.svg";
import loginimg from "../assets/loginimg.png";
import { Container, Stack, TextField } from "@mui/material";
import VisibilityOffRoundedIcon from "@mui/icons-material/VisibilityOffRounded";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useNavigate } from "react-router-dom";
import { LoadingButton } from "@mui/lab";
import axios from "axios";

function Login() {
  const navigate = useNavigate();

  // --------use-state for userInput--------
  const [UserInput, setUserInput] = useState({
    email: "",
    password: "",
  });

  // ---------se-state for error handeling--------
  const [Error, setError] = useState({ email: "" });

  // -------function for UserInput-Handeling--------

  const InputHandeling = (e) => {
    const { name, value } = e.target;
    setUserInput({ ...UserInput, [name]: value });
    ErrorHandeling({ ...UserInput, [name]: value });
  };

  //-------------use-state for loading--------------
  const [Loading, setLoading] = useState(false);

  // -------Use-stste for revel-password-------
  const [RevealPassword, setRevealPassword] = useState(false);

  // ---------function for error handeling----------

  const ErrorHandeling = (UserInput) => {
    console.log(UserInput.email);
    let ErrorMessage = {};
    let EmailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (UserInput.email.length > 0 && !EmailPattern.test(UserInput.email)) {
      ErrorMessage.email = " Please enter a valid E-mail addess";
    }
    setError(ErrorMessage);
  };

  // ---------Axios function for Api calling---------
  const FetchData = async () => {
    console.log("wahab");
    setLoading(true);
    try {
      const ApiCall = {
        url: "",
        method: "POST",
        dats: UserInput,
      };
      const ApiResponse = await axios(ApiCall);
      if (ApiResponse.status === 200 || ApiResponse.status === 201) {
        setLoading(false);
        console.log("Api call successfull");
      } else {
        console.log("Api calling error");
        setLoading(false);
      }
    } catch (error) {
      console.log("Message:", error.response.data.message);
    }
    setLoading(false);
  };

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
                      onChange={InputHandeling}
                      name="email"
                      label="E-mail"
                      placeholder="Enter e-mail"
                      fullWidth
                      color="success"
                      InputProps={{ style: { fontSize: "1.5rem" } }}
                      InputLabelProps={{ style: { fontSize: "1.6rem" } }}
                      error={Error?.email}
                      helperText={Error?.email}
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
                        onChange={InputHandeling}
                        label="Password"
                        placeholder="Enter Your Password"
                        type={RevealPassword ? "text" : "password"}
                        name="password"
                        fullWidth
                        color="success"
                        InputProps={{ style: { fontSize: "1.5rem" } }}
                        InputLabelProps={{ style: { fontSize: "1.6rem" } }}
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
                  <p style={{ color: "#04A56A", textAlign: "end" }}>
                    Forgot your password?
                  </p>
                </div>
                <div className="sign-in-button">
                  <LoadingButton
                    onClick={() => {
                      FetchData();
                    }}
                    loading={Loading}
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

export default Login;
