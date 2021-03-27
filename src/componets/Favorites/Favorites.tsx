import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Header from "../Header/Header";
import { useDispatch, useSelector } from "react-redux";
import {
  requestSelector,
  saveReqSelector,
  serachFav,
  serachName,
} from "../../store/selectors/MainSelector";
import { AppStateType } from "../../store/store/Store";
import {
  deleteFav,
  editform,
  getSearchResults,
} from "../../store/reducers/MainPageReducer";
import { useHistory } from "react-router";

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
      display: "flex",
      // flexDirection: "column",
      background: "#fff",
      height: 47,
      fontSize: "1.6rem",
      fontWeight: 500,
      justifyContent: "space-between",
      alignItems: "center",
      paddingLeft: "2rem",
      borderBottom: "1px solid #F1F1F1",
      cursor: "pointer",
      "&:hover": {
        border: "2px solid #1390E5",
        "& div": {
          opacity: 5,
        },
      },
      "& div": {
        marginRight: 20,
        width: "20.3rem",
        display: "flex",
        justifyContent: "space-between",
        opacity: 0,
        transition: "all .2s ease",
      },
    },
    btn: {
      width: "5.5rem",
      height: 20,
      background: "transparent",
      border: "transparent",
      outline: "transparent",
      cursor: "pointer",
    },
    btnModify: {
      color: " #1390E5",
    },
    btnDelete: {
      color: "red",
    },
  })
);

const Favorites = () => {
  const classes = useStyles();
  const favItems = useSelector((state: AppStateType) => saveReqSelector(state));
  const dispatch = useDispatch();
  const history = useHistory();

  const handaleExecute = (item: string) => {
    const [obj] = favItems;
    const { request, select='date', reqNum } = obj;
    history.push("/search");
    // dispatch(getSearchResults(request, reqNum, select?select:'date'));
  };

  const changeReq = () => {
    dispatch(editform(true));
    history.push("/modal");
  };

  return (
    <>
      <Header />
      <div className={classes.bodyWrap}>
        <div className={classes.container}>
          <h2 className={classes.heading}>Избранное</h2>
          <ul className={classes.list}>
            {favItems.map(({ request, nameReq, reqNum }, i) => (
              <li className={classes.listItem} key={i}>
                {nameReq}{" "}
                <div>
                  <button
                    className={`${classes.btn} ${classes.btnModify}`}
                    onClick={() => handaleExecute(request)}
                  >
                    Выполнить
                  </button>
                  <button
                    className={`${classes.btn} ${classes.btnModify}`}
                    onClick={changeReq}
                  >
                    Изменить
                  </button>
                  <button
                    className={`${classes.btn} ${classes.btnDelete}`}
                    onClick={() => dispatch(deleteFav([nameReq]))}
                  >
                    Удалить
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Favorites;
