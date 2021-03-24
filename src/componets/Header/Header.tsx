import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import logo from "../../assets/sibdev-logo.png";
import { useHistory } from "react-router-dom";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    header: {
      background: "#fff",
      color: "#1390E5",
      fontSize: "1.5rem",
      border: "1px solid #F1F1F1",
      boxShadow: "none",
      "& .MuiToolbar-gutters": {
        paddingLeft: "28.5rem",
        paddingRight: "28.5rem",
      },
    },
    menu: {
      display: "flex",
      alignItems: "center",
      "& .MuiButton-root:hover": {
        backgroundColor: "transparent",
      },
      "& button": {
        fontSize: "1.5rem",
        fontWeight: "400",
      },
      "& a": {
        textDecoration: "none",
      },
    },
    toolbar: {
      display: "flex",
      justifyContent: "space-between",
    },
    logo: {
      width: 48,
      height: 48,
    },
  })
);

const Header = () => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <AppBar position="static" className={classes.header}>
      <Toolbar className={classes.toolbar}>
        <ul className={classes.menu}>
          <img src={logo} alt="logo" className={classes.logo} />
          <Button color="inherit" onClick={() => history.push("/search")}>
            Поиск
          </Button>{" "}
          <Button color="inherit" onClick={() => history.push("/favorites")}>
            Избраное
          </Button>
        </ul>
        <Button
          color="inherit"
          style={{
            background: "transparent",
            fontSize: "1.5rem",
            fontWeight: 400,
          }}
          onClick={() => history.push("/")}
        >
          Выйти
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
