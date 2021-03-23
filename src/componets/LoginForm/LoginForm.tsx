import React, { useRef, useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import logo from "../../assets/sibdev-logo.png";
import Button from "@material-ui/core/Button";
import { BsEyeSlash } from "react-icons/bs";
import { BsEye } from "react-icons/bs";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
      },
      "& .MuiInputBase-root": {
        fontSize: "1.5rem",
      },
    },
    loginPage: {
      width: "100%",
      height: "100vh",
      background: "#FAFAFA",
    },
    formWrap: {
      position: "absolute",
      background: "#ffffff",
      width: 510,
      height: 520,
      left: "calc(50% - 510px/2)",
      top: "calc(50% - 520px/2)",
      borderRadius: 5,
      border: " 1px solid rgba(39, 39, 39, 0.1)",
    },
    formLogo: {
      position: "absolute",
      width: 88,
      height: 88,
      left: "calc(50% - 88px/2 + 2px)",
      top: 40,
      textAlign: "center",
      fontWeight: 500,
      fontSize: "1.8rem",
    },
    loginFieleld: {
      position: "absolute",
      width: 334,
      height: 70,
      left: "calc(50% - 334px/2)",
      top: 208,
      fontSize: "1.5rem",
      "& .MuiInputLabel-outlined": {
        fontSize: "1.5rem",
        transform: "translate(14px, 19px) scale(1)",
      },
      "&  .MuiInputLabel-outlined.MuiInputLabel-shrink": {
        transform: "translate(11px, -6px) scale(0.75)",
        fontSize: "1.5rem",
      },
      "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
        fontSize: "1.5rem",
      },
      "&::placeholder": {
        fontSize: "1.5rem",
      },
    },
    loginPassword: {
      position: "absolute",
      width: 334,
      height: 70,
      left: "calc(50% - 334px/2)",
      top: 298,
      "& .MuiInputLabel-outlined": {
        fontSize: "1.5rem",
        transform: "translate(14px, 19px) scale(1)",
      },
      "&  .MuiInputLabel-outlined.MuiInputLabel-shrink": {
        transform: "translate(11px, -6px) scale(0.75)",
        fontSize: "1.5rem",
      },
      "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
        fontSize: "1.9rem",
      },
    },
    formBtn: {
      position: "absolute",
      width: 176,
      height: 52,
      left: "calc(50% - 176px/2)",
      top: 408,
      background: "#1390E5",
      borderRadius: 5,
      fontSize: "2rem",
      color: "#fff",
      fontWeight: 400,
      "&:hover": {
        background: "#1390E5",
      },
    },
    formEye: {
      position: "absolute",
      width: 24,
      height: 24,
      right: 88,
      top: "calc(50% - 24px/2 + 63px)",
    },
  })
);

const LoginForm = () => {
  const classes = useStyles();
  const [showPass, setShowPass] = useState(false);

  const handlePassword = () => {
    setShowPass(!showPass);
  };
  console.log(showPass);
  return (
    <div className={classes.loginPage}>
      <div className={classes.formWrap}>
        <div className={classes.formLogo}>
          <img src={logo} alt="logo" />
          <span>Вход</span>
        </div>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            id="outlined-basic"
            label="Login"
            variant="outlined"
            className={classes.loginFieleld}
          />
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            className={classes.loginPassword}
            type={showPass?'text':'password'}
          />
          {showPass ? (
            <BsEye className={classes.formEye} onClick={handlePassword} />
          ) : (
            <BsEyeSlash className={classes.formEye} onClick={handlePassword} />
          )}

          <Button
            variant="contained"
            color="primary"
            className={classes.formBtn}
          >
            Войти
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
