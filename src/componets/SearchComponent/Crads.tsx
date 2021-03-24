import React, { FC } from "react";
import { makeStyles } from "@material-ui/core/styles";
import noVideo from "../../assets/Video.png";
import { useSelector } from "react-redux";
import { getItems } from "../../store/selectors/MainSelector";
import { AppStateType } from "../../store/store/Store";
import { ItemsType } from "../../Types/Types";
import { items } from "../../store/reducers/MainPageReducer";

const useStyles = makeStyles({
  root: {
    // outline: "1px solid orange",
    height: 226,
    // width: 244,
    margin: "2px 0 2px 0",
    "& div": {
      display: "flex",
      marginBottom: 20,
      "& iframe": {
        marginRight: 20,
      },
    },
  },
  rootList: {
    display: "flex",
    flexWrap: "wrap",
    gap: 20,
    "& iframe": {
      marginRight: 0,
    },
  },
  // video: {
  //   width: 244,
  //   height: 138,
  //   marginRight: 20,
  //   "& img": {
  //     width: "100%",
  //   },
  // },
  videodesc: {
    display: "flex",
    flexDirection: "column",
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
    width: "24rem",
  },
});

type PropsType = {
  changeView: boolean;
};

const Crads: FC<PropsType> = ({ changeView }) => {
  const classes = useStyles();
  const results = useSelector((state: AppStateType) => getItems(state));

  

  return (
    <div className={changeView ? classes.rootList : classes.root}>
      {results.items?.map(({ id, snippet },i) => (
        <div key={i}>
          <iframe
            width="244"
            height="138"
            src={`https://www.youtube.com/embed/${id.videoId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div className={classes.videodesc}>
            <p
              className={classes.title}
              style={changeView ? { width: "24rem" } : { width: "100%" }}
            >
              {snippet.title}
            </p>
            <p
              className={classes.desc}
              style={changeView ? { width: "24rem" } : { width: "60%" }}
            >
              {snippet.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Crads;
