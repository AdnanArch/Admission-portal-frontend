import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Paper } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Axios } from "axios";
import { LoadingButton } from "@mui/lab";

function TwoStepVerification() {
  const navigate = useNavigate();

  // -------use state for use input-------
  const [userInput, setUserInput] = useState("");
  console.log(userInput);
  const inputRefs = useRef([]);

  // ---------use state for loading---------
  const [loading, setLoading] = useState(false);

  // // -------use state for disable button--------
  // const [disable, setDisable] = useState(true);

  // --------use state for error message--------
  const [errorMessage, setErrorMessage] = useState("");

  // --------function for input hamdeling--------
  const handleInputChange = (e, index) => {
    const { value } = e.target;
    setUserInput((prevInput) => {
      let newInput =
        prevInput.slice(0, index) + value + prevInput.slice(index + 1);
      if (value !== "" && index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1].focus();
      }
      return newInput;
    });
  };
  //  ---------function for key handeling-------
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && index >= 0) {
      if (e.target.value === "" && index > 0) {
        e.preventDefault();
        inputRefs.current[index - 1].focus();
        setUserInput((prevInput) => {
          let newInput = prevInput.slice(0, index - 1) + prevInput.slice(index);
          return newInput;
        });
      } else if (index === 0) {
        setUserInput((prevInput) => prevInput.slice(0, -1));
      }
    }
  };

  // -------function for APi calling--------
  const fetchData = async () => {
    setLoading(true);
    const json = JSON.parse(userInput);
    console.log("JSON", json);
    try {
      const apiCall = {
        url: "",
        method: "POST",
        data: json,
      };
      const apiResponse = await Axios(apiCall);
      if (apiResponse.status === 200 || apiResponse.status === 201) {
        setLoading(false);
        navigate("/");
      } else {
        console.log("BAd");
      }
    } catch {}
  };

  const errorHandeling = (userInput) => {
    let NumericPattern = /^[0-9]+$/;
    let ErrorMessage = "";
    console.log(userInput);
    if (!NumericPattern.test(userInput)) {
      ErrorMessage = "Please enter a Number";
      setErrorMessage(ErrorMessage);
      return;
    } else if (userInput.length !== 6) {
      ErrorMessage = "Please enter a six Numbers of code";
      setErrorMessage(ErrorMessage);
      return;
    }
    setErrorMessage("");
    fetchData();
  };

  return (
    <section className="two-step-verification">
      <div className="verification-wrapper">
        <Paper>
          <div className="verification-content">
            <h3 className="text-center mb-5">2-Step Verification</h3>
            <div className="border"></div>
            <div className="text-center mt-4 mb-5">
              <LockOutlinedIcon sx={{ fontSize: "3rem" }} />
              <p>Please enter QR code</p>
            </div>
            <div className="input-box d-flex justify-content-between mb-5">
              {[...Array(6)].map((_, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength={1}
                  value={userInput[index] || ""}
                  onChange={(e) => handleInputChange(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  ref={(el) => (inputRefs.current[index] = el)}
                />
              ))}
            </div>
            <span
              style={{
                fontSize: "1.3rem",
                fontWeight: "600",
                color: "#D32F2F",
              }}
            >
              {errorMessage}
            </span>
            <div className="text-center mb-5">
              <LoadingButton
                loading={loading}
                onClick={() => {
                  errorHandeling(userInput);
                }}
                variant="contained"
                sx={{
                  textTransform: "none",
                  fontSize: "1.5rem",
                }}
              >
                Verify
              </LoadingButton>
            </div>
            <div className="border mb-4"></div>
            <div className="bottom-buttons d-flex justify-content-between align-items-center mb-4">
              <Button
                onClick={() => {
                  navigate("/signup");
                }}
                variant="outlined"
                sx={{
                  textTransform: "none",
                  fontSize: "1.5rem",
                }}
              >
                Create an Account
              </Button>
              <p className="forgot-pass">Forgot password?</p>
            </div>
          </div>
        </Paper>
      </div>
    </section>
  );
}

export default TwoStepVerification;
