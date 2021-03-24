import React, { FC } from "react";
import { makeStyles } from "@material-ui/core/styles";
import noVideo from "../../assets/Video.png";

const useStyles = makeStyles({
  root: {
    // outline: "1px solid orange",
    height: 226,
    width: 244,
    margin: "2px 0 2px 0",
  },
  rootList:{
    display:'flex',
    marginTop:32,
  },
  video: {
    width: 244,
    height: 138,
    marginRight:20,
    "& img": {
      width: "100%",
    },
  },
  videodesc: {
    display:'flex',
    flexDirection:'column'
  },
  title: {
    fontWeight: 500,
    fontSize: "1.6rem",
    marginBottom: 8,
  },
  desc: {
    color: "rgba(23, 23, 25, 0.3)",
    fontWeight: 400,
    fontSize: "1.4rem",
  },

});

type PropsType = {
  changeView: boolean;
};

const Crads: FC<PropsType> = ({ changeView }) => {
  const classes = useStyles();

  console.log(changeView);

  return (
    <div className={changeView?classes.rootList:classes.root}>
      <div className={classes.video}>
        <img src={noVideo} alt="" />
      </div>
      <div className={classes.videodesc}>
        <p className={classes.title}>
          Как кормить кошку натуралкой | Перечень полезных для кош...
        </p>
        <p className={classes.desc}>
          Ветеринария и Кормление соб...786 тыс. просмотров
        </p>
      </div>
    </div>
  );
};

export default Crads;
