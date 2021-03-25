import React, { FC } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    tooltipWrap: {
      position: "absolute",
      left: "57.4%",
      right: " 6.44%",
      top: "93.61%",
      bottom: "64.17%",
      height: 124,
      width: 220,
      background: "#fff",
      boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.15)",
      borderRadius: 5,
      zIndex: 1,
      fontSize: 16,
      "& p": {
        marginBottom: 32,
      },
      "& a": {
        textDecoration: "none",
        color: "#1390E5",
      },
    },
  })
);

type PropsType = {
  text: string;
  link: string;
};

const Tooltip: FC<PropsType> = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.tooltipWrap}>
      <p>{props.text}</p>
      <Link to={"/favorites"}>{props.link}</Link>
    </div>
  );
};

export default Tooltip;
