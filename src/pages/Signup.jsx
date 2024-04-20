import React, { useState } from "react";
import birdlogo from "../assets/bird-logo.svg";
import loginimg from "../assets/loginimg.png";
import {
  Backdrop,
  Box,
  Modal,
  Container,
  Stack,
  TextField,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { LoadingButton } from "@mui/lab";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import axios from "axios";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import { useSpring, animated } from "@react-spring/web";
import successIcon from "../assets/success-icon.svg";

const Fade = React.forwardRef(function Fade(props, ref) {
  const {
    children,
    in: open,
    onClick,
    onEnter,
    onExited,
    ownerState,
    ...other
  } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter(null, true);
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited(null, true);
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {React.cloneElement(children, { onClick })}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element.isRequired,
  in: PropTypes.bool,
  onClick: PropTypes.any,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
  ownerState: PropTypes.any,
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #04A56A",
  boxShadow: 24,
  p: 4,
};

function Signup() {
  const navigate = useNavigate();

  // ----------use state for model----------
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
    navigate("/signup/verification");
  };

  // -------use-state for user input-------
  const [userinput, setUserinput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    cnic: "",
    password: "",
  });

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
    ErrorHandling({ ...userinput, [name]: value });
  };

  // -------function for API calling-------
  const fetchData = async () => {
    setLoading(true);
    try {
      const apiCall = {
        url: "http://localhost:8088/signup",
        method: "POST",
        data: userinput,
      };
      const apiResponse = await axios(apiCall);
      if (apiResponse.status === 200 || apiResponse.status === 201) {
        setOpen(true);
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
  const ErrorHandling = (userinput) => {
    console.log(userinput.firstName);
    let errorValue = {};
    let namePattern = /^[a-zA-Z]+$/;
    let EmailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let CnicPattern = /^\d{5}-\d{7}-\d$/;
    if (
      userinput.firstName.length > 0 &&
      !namePattern.test(userinput.firstName)
    ) {
      errorValue.firstName = "Please enter a character";
      return setError(errorValue);
    } else if (
      userinput.lastName.length > 0 &&
      !namePattern.test(userinput.lastName)
    ) {
      errorValue.lastName = "Please enter a character value";
      return setError(errorValue);
    } else if (
      userinput.email.length > 0 &&
      !EmailPattern.test(userinput.email)
    ) {
      errorValue.email = "Please enter a valid email addess";
      return setError(errorValue);
    } else if (userinput.cnic.length > 0 && !CnicPattern.test(userinput.cnic)) {
      errorValue.cnic = "Please enter a valid CNIC number";
      return setError(errorValue);
    } else if (userinput.password.length > 0 && userinput.password.length < 8) {
      errorValue.password =
        "Your password must be greater than eight characters";
      return setError(errorValue);
    }
    setError("");
  };

  // -------function for error chrk on submit-------
  const ErrorOnSubmitForm = (userinput) => {
    console.log("wahab");
    console.log(userinput.firstName);
    let ErrorMessage = {};
    let EmailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let CnicPattern = /^\d{5}-\d{7}-\d$/;
    if (userinput.firstName.length < 1) {
      ErrorMessage.firstName = "Please enter first name";
      return setError(ErrorMessage);
    } else if (userinput.lastName.length < 1) {
      ErrorMessage.lastName = "Please enter last name";
      return setError(ErrorMessage);
    } else if (!EmailPattern.test(userinput.email)) {
      ErrorMessage.email = "Please enter valid email address";
      return setError(ErrorMessage);
    } else if (!CnicPattern.test(userinput.cnic)) {
      ErrorMessage.cnic = "Please enter a valid CNIC number";
      return setError(ErrorMessage);
    } else if (userinput.password.length < 1) {
      ErrorMessage.password = "Please enter a password";
      return setError(ErrorMessage);
    }
    setError("");
    fetchData();
  };

  // --------function for submit button--------
  const SubmitAllFunction = () => {
    ErrorOnSubmitForm(userinput);
  };

  return (
    <>
      <section className="login-section" style={{ overflow: "hidden" }}>
        <form>
          <div className="row" style={{ height: "100vh" }}>
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
                <div
                  className="login-content mx-auto"
                  style={{ width: "35rem" }}
                >
                  <div className="login-head mb-5">
                    <h5 className="mb-4 text-center">Sign up</h5>
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
                        helperText={error.firstName}
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
                        placeholder="Enter Last Name"
                        type="text"
                        name="lastName"
                        fullWidth
                        color="success"
                        InputProps={{ style: { fontSize: "1.5rem" } }}
                        InputLabelProps={{ style: { fontSize: "1.6rem" } }}
                        error={error.lastName}
                        helperText={error.lastName}
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
                        placeholder="Enter E-mail"
                        type="email"
                        name="email"
                        required
                        fullWidth
                        color="success"
                        InputProps={{ style: { fontSize: "1.5rem" } }}
                        InputLabelProps={{ style: { fontSize: "1.6rem" } }}
                        error={error?.email}
                        helperText={error?.email}
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
                        error={error?.cnic}
                        helperText={error?.cnic}
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
                          placeholder="Enter Your Password"
                          type={RevealPassword ? "text" : "password"}
                          name="password"
                          fullWidth
                          color="success"
                          InputProps={{ style: { fontSize: "1.5rem" } }}
                          InputLabelProps={{ style: { fontSize: "1.6rem" } }}
                          error={error?.password}
                          helperText={error?.password}
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
                        SubmitAllFunction();
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

          <div>
            {/* <Button onClick={handleOpen}>Open modal</Button> */}
            <Modal
              aria-labelledby="spring-modal-title"
              aria-describedby="spring-modal-description"
              open={open}
              onClose={handleClose}
              closeAfterTransition
              slots={{ backdrop: Backdrop }}
              slotProps={{
                backdrop: {
                  TransitionComponent: Fade,
                },
              }}
            >
              <Fade in={open}>
                <Box sx={style}>
                  <div className="d-flex align-items-center justify-content-center">
                    <h5>Register Successfully</h5>
                    <img
                      src={successIcon}
                      alt="success-icon"
                      className="img-fluid ms-2"
                      style={{ width: "3.5rem" }}
                    />
                  </div>
                  <Typography
                    id="spring-modal-title"
                    variant="h6"
                    component="h2"
                  ></Typography>
                </Box>
              </Fade>
            </Modal>
          </div>
        </form>
      </section>
    </>
  );
}

export default Signup;
