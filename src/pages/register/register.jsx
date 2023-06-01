import { useState } from "react";
import { getUsers } from "../../utils/localStorage";
import styles from "./register.module.css";
import { BsTwitter } from "react-icons/bs";
import { useRecoilState, useRecoilValue } from "recoil";
import { Create } from "./create";
import { useNavigate } from "react-router-dom";
import {
  nameState,
  emailState,
  dateState,
  mobileState,
  passwordState,
  nameErrorState,
  emailErrorState,
  mobileErrorState,
  passErrorState,
  registeredState,
  createState,
} from "../../atoms/atoms";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Stack } from "@mui/material";
// import CloseIcon from '@mui/icons-material/Close';

export function Register() {
  const create = useRecoilValue(createState);
  const [showEmail, setShowEmail] = useState(false);
  const [name, setName] = useRecoilState(nameState);
  const [email, setEmail] = useRecoilState(emailState);
  const [date, setDate] = useRecoilState(dateState);
  const [mobile, setMobile] = useRecoilState(mobileState);
  const [password, setPassword] = useRecoilState(passwordState);

  const [nameError, setNameError] = useRecoilState(nameErrorState);
  const [emailError, setEmailError] = useRecoilState(emailErrorState);
  const [mobileError, setMobileError] = useRecoilState(mobileErrorState);
  const [passError, setPassError] = useRecoilState(passErrorState);

  const navigate = useNavigate();

  function validateUserName() {
    const regex = /^[a-zA-Z ]{5,16}$/;

    if (!name) {
      setNameError("Name is required");
      return false;
    } else if (!regex.test(name)) {
      setNameError(
        "name should be 5 to 16 characters and should not include any special character"
      );
      return false;
    } else {
      setNameError("");
      return true;
    }
  }

  function validateUserEmail() {
    const regex = /^\S+@\S+\.\S+$/;

    if (!email) {
      setEmailError("email is required");
      return false;
    } else if (!regex.test(email)) {
      setEmailError("It should be a valid email address");
      return false;
    } else {
      setEmailError("");
      return true;
    }
  }

  function validateMobile() {
    const regex = /^(?:\+?\d{1,3}[- ]?)?\d{10}$/;

    if (!mobile) {
      setMobileError("phone number should not be empty");
      return false;
    } else if (!regex.test(mobile)) {
      setMobileError("Please enter a valid phone number");
      return false;
    } else {
      setMobileError("");
      return true;
    }
  }

  function validatePassword() {
    const regex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,20}$/;

    if (!password) {
      setPassError("password is required");
      return false;
    } else if (!regex.test(password)) {
      setPassError(
        "password should be 8 to 20 characters and include at least 1 number, 1 letter and 1 special character"
      );
      return false;
    } else {
      setPassError("");
      return true;
    }
  }

  function showEmailInput() {
    if (!showEmail) {
      setShowEmail(true);
    } else {
      setShowEmail(false);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    const isUserNameValid = validateUserName();

    const isUserPasswordValid = validatePassword();
    let isEmailValid;
    let isMobileValid;

    if (showEmail) {
      isEmailValid = validateUserEmail();
    } else {
      isMobileValid = validateMobile();
    }

    if (
      isUserNameValid &&
      (showEmail ? isEmailValid : isMobileValid) &&
      isUserPasswordValid
    ) {
      const users = getUsers();
      // const check = users.find((user) => user.email === email);
      const check = users.find((user) => {
        if (showEmail) {
          return user.email === email;
        } else {
          return user.mobile === mobile;
        }
      });

      if (check) {
        alert("User already registered");
      } else {
        users.push({
          id: Date.now(),
          name,
          email,
          mobile,
          date,
          password,
          isLogin: false,
        });
        localStorage.setItem("users", JSON.stringify(users));
        navigate("/sign-in");
      }
    }
    setName("");
    setEmail("");
    setMobile("");
    setDate("");
    setPassword("");
  }

  return (
    <div className={styles.Regcontainer}>
      {create ? (
        <Create />
      ) : (
        <div>
          <div className={styles.formContainer}>
            <form className={styles.formReg} onSubmit={handleSubmit}>
              {/* <span className={styles.closeRegisterButton} onClick={(e) => navigate('/')}><CloseIcon /></span> */}

              <BsTwitter style={{ color: "white" }} />
              <h2 className={styles.headReg}>Create your account</h2>
              <TextField
                id="outlined-password-input"
                label="Name"
                type="text"
                value={name}
                autoComplete="current-password"
                onChange={(e) => setName(e.target.value)}
                className={styles.inputReg}
              />
              {<span className={styles.errMsg}>{nameError}</span>}
              {showEmail ? (
                <>
                  <TextField
                    id="outlined-password-input"
                    label="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    autoComplete="current-password"
                    className={styles.inputReg}
                  />
                  {<span className={styles.errMsg}>{emailError}</span>}
                </>
              ) : (
                <>
                  <TextField
                    id="outlined-password-input"
                    label="Phone"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    type="tel"
                    autoComplete="current-password"
                    className={styles.inputReg}
                  />
                  {<span className={styles.errMsg}>{mobileError}</span>}
                </>
              )}

              <span onClick={showEmailInput} className={styles.swapPhone}>
                {showEmail ? "Use Phone Number Instead " : " Use Email Instead"}
              </span>

              <div>
                <h5>Date of birth</h5>
                <small>
                  This will not be shown publicly. Confirm your own age, even if
                  this account is for a business, a pet, or something else.
                </small>
              </div>
              <TextField
                id="outlined-password-input"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                type="date"
                autoComplete="current-password"
                className={styles.inputReg}
              />
              <span></span>
              <TextField
                id="outlined-password-input"
                value={password}
                label="password"
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                autoComplete="current-password"
                className={styles.inputReg}
              />
              {<span className={styles.errMsg}>{passError}</span>}

              <button className={styles.btnReg} type="submit">
                Create
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
