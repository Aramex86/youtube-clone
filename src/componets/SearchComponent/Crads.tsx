import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import noVideo from "../../assets/Video.png";

const useStyles = makeStyles({
  root: {
    // outline: "1px solid orange",
    height: 226,
    width: 244,
    margin: "2px 0 2px 0",
  },
  video: {
    width: 244,
    height: 138,
    "& img": {
      width: "100%",
    },
  },
  title: {
    fontWeight: 500,
    fontSize: "1.6rem",
    marginBottom:8,
  },
  desc: {
    color: "rgba(23, 23, 25, 0.3)",
    fontWeight: 400,
    fontSize: "1.4rem",
  },
});

const Crads = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.video}>
        <img src={noVideo} alt="" />
      </div>
      <p className={classes.title}>
        Как кормить кошку натуралкой | Перечень полезных для кош...
      </p>
      <p className={classes.desc}>
        Ветеринария и Кормление соб... 786 тыс. просмотров
      </p>
    </div>
  );
};

export default Crads;
