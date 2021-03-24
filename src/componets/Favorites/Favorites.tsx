import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    bodyWrap: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 66,
      bottom: 0,
      background: "#FAFAFA",
    },
    container: {
      position: "absolute",
      width: 1040,
      left: "calc(50% - 1040px/2)",
      top: 0,
      bottom: 0,
      msOverflowStyle: "none" /* IE and Edge */,
      scrollbarWidth: "none" /*Firefox */,
      overflowY: "scroll",
      "&::-webkit-scrollbar": {
        display: "none",
      },
    },
    heading: {
      position: "absolute",
      width: 144,
      height: 40,
      left: 0,
      top: 40,
      fontSize: "2.8rem",
      fontWeight: 400,
      marginBottom: 40,
    },
    list: {
      position: "absolute",
      height: 396,
      left: 0,
      right: 0,
      top: 120,
    },
    listItem: {
     display:'flex',
     flexDirection:'column',
     background:"#fff",
     height:47,
     fontSize:'1.6rem',
     fontWeight:500,
     justifyContent:'center',
     paddingLeft:'2rem',
     borderBottom:'1px solid #F1F1F1',
     cursor:'pointer',
    },
  })
);

const favItems = [
  "видео",
  "чем кормить кота",
  "despacito",
  "bts",
  "bad bunny",
  "pewdiepie",
  "asmr",
  "видео",
  "чем кормить кота",
  "чем кормить кота",
];

const Favorites = () => {
  const classes = useStyles();
  return (
    <div className={classes.bodyWrap}>
      <div className={classes.container}>
        <h2 className={classes.heading}>Избранное</h2>
        <ul className={classes.list}>
          {favItems.map((item) => (
            <li className={classes.listItem}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Favorites;
