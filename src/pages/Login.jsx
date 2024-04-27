import React, { useState } from "react";
import birdlogo from "../assets/bird-logo.svg";
import loginimg from "../assets/loginimg.png";
import { Avatar, Button, Container, Stack, TextField } from "@mui/material";
import VisibilityOffRoundedIcon from "@mui/icons-material/VisibilityOffRounded";
import VisibilityIcon from "@mui/icons-material/Visibility";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { useNavigate } from "react-router-dom";
import { LoadingButton } from "@mui/lab";
import axios from "axios";
import { User } from "lucide-react";

function Login() {
  const navigate = useNavigate();

  // --------use-state for userInput--------
  const [UserInput, setUserInput] = useState({
    email: "",
    password: "",
  });

  // ---------se-state for error handeling--------
  const [Error, setError] = useState({ email: "", password: "" });

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

  // --------use-state for Admin-login---------
  const [admin, setAdmin] = useState(false);

  // ---------function for error handeling----------

  const ErrorHandeling = (UserInput) => {
    console.log(UserInput.email);
    let ErrorMessage = {};
    let EmailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (UserInput.email.length > 0 && !EmailPattern.test(UserInput.email)) {
      ErrorMessage.email = "Please enter a valid E-mail addess";
      return setError(ErrorMessage);
    }
    setError("");
  };

  // ----function for chek inputs field data on submit-----

  const ErrorOnSubmitForm = (userInput) => {
    console.log(userInput.email);
    let ErrorMessage = {};
    let EmailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!EmailPattern.test(userInput.email)) {
      ErrorMessage.email = "Please enter E-mail addess";
      return setError(ErrorMessage);
    } else if (userInput.password.length < 1) {
      console.log(userInput.password);
      ErrorMessage.password = "Please enter password";
      return setError(ErrorMessage);
    }
    setError("");
    FetchData();
  };

  // ---------Axios function for Api calling---------
  const FetchData = async () => {
    console.log("wahab");
    setLoading(true);
    const apiUrl = admin ? "Admin url" : "Student url";
    try {
      const ApiCall = {
        url: apiUrl,
        method: "POST",
        dats: UserInput,
      };
      const ApiResponse = await axios(ApiCall);
      if (ApiResponse.status === 200 || ApiResponse.status === 201) {
        setLoading(false);
        navigate("/");
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
        <div className="row" style={{ height: "100vh" }}>
          <div className="col-lg-7 col-md-12 col-sm-12  mt-5 mb-5">
            <Container>
              <div className="d-flex justify-content-between align-items-center">
                <div className="logo">
                  <img
                    src={birdlogo}
                    alt="Bird-logo"
                    className="img-fluid"
                    style={{ width: "13rem" }}
                  />
                </div>
                <div>
                  <Button
                    variant="outlined"
                    onClick={() => {
                      setAdmin(true);
                    }}
                    color="success"
                    size="medium"
                    sx={{
                      color: "#04A56A",
                      textTransform: "none",
                      fontWeight: "600",
                      fontSize: "1.3rem",
                    }}
                  >
                    Admin Login
                  </Button>
                </div>
              </div>
              <div className="login-content mx-auto" style={{ width: "35rem" }}>
                <div className="login-head mb-5">
                  {admin === true && (
                    <div className="d-flex justify-content-center mb-3">
                      <Avatar sx={{ bgcolor: "#04A56A" }}>
                        <User />
                      </Avatar>
                    </div>
                  )}
                  <h5 className="text-center">
                    {admin ? "Admin login" : "Sign in"}
                  </h5>
                </div>
                <div className="login-text-field mb-3">
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
                          marginTop: "1rem",
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
                        error={Error?.password}
                        helperText={Error?.password}
                        sx={{
                          "& .MuiFormHelperText-root": {
                            fontSize: "1rem",
                            fontWeight: "600",
                            marginLeft: "0",
                            marginTop: "1rem",
                          },
                        }}
                      />
                      <div className="password-reveal-icon">
                        {RevealPassword === true && (
                          <RemoveRedEyeOutlinedIcon
                            sx={{ fontSize: "2rem", cursor: "pointer" }}
                            onClick={() => {
                              setRevealPassword(false);
                            }}
                          />
                        )}
                        {RevealPassword === false && (
                          <VisibilityOffOutlinedIcon
                            onClick={() => {
                              setRevealPassword(true);
                            }}
                            sx={{ fontSize: "2rem", cursor: "pointer" }}
                          />
                        )}
                      </div>
                    </div>
                    <p>
                      Don&apos;t have an account at?{" "}
                      <span
                        style={{
                          color: "#04A56A",
                          fontWeight: "600",
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          navigate("/signup");
                        }}
                      >
                        Sign up
                      </span>
                    </p>
                    <div className="forget-password mt-3">
                      <p style={{ color: "#04A56A", textAlign: "end" }}>
                        Forgot password?
                      </p>
                    </div>
                  </Stack>
                </div>

                <div className="sign-in-button">
                  <LoadingButton
                    onClick={() => {
                      ErrorOnSubmitForm(UserInput);
                    }}
                    loading={Loading}
                    variant="contained"
                    fullWidth
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
