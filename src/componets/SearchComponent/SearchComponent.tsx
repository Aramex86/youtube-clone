import React, { useEffect, useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { FaRegHeart } from "react-icons/fa";

import SearchResults from "./SearchResults";
import Header from "../Header/Header";
import { useDispatch } from "react-redux";
import {
  getSearchResults,
  searchFav,
  searchValue,
} from "../../store/reducers/MainPageReducer";
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
    },
    toolbar: {
      display: "flex",
      justifyContent: "space-between",
    },
    logo: {
      width: 48,
      height: 48,
    },
    bodyWrapp: {
      background: "#E5E5E5",
      width: "100%",
      minHeight: 1200,
      position: "relative",
    },
    heading: {
      position: "absolute",
      width: 274,
      height: 52,
      left: "calc(50% - 217px/2 + 0.5px)",
      top: 220,
      textAlign: "center",
      "& h1": {
        fontSize: "3.6rem",
      },
    },
    searchWrapp: {
      position: "absolute",
      width: 686,
      height: 52,
      left: "calc(50% - 686px/2)",
      top: 65,
      border: " 1px solid rgba(23, 23, 25, 0.2)",
      borderRadius: 5,
      "& input": {
        width: "100%",
        height: "100%",
        border: "none",
        outline: "none",
        borderRadius: 5,
        paddingLeft: 15,
        fontSize: "2rem",
        "&:focus": {
          background: "rgba(197, 228, 249, 0.3)",
          color: "#272727",
        },
      },
      "& button": {
        background: "#1390E5",
        position: "absolute",
        borderRadius: "0px 5px 5px 0px",
        outline: "none",
        border: "none",
        width: 150,
        height: 52,
        right: 0,
        color: "#fff",
        fontSize: "2rem",
        cursor: "pointer",
      },
    },
    searchWrappActive: {
      position: "absolute",
      width: 1040,
      height: 52,
      left: "calc(50% - 1096px/2)",
      top: 65,
      border: " 1px solid rgba(23, 23, 25, 0.2)",
      borderRadius: 5,
      "& input": {
        width: "100%",
        height: "100%",
        border: "none",
        outline: "none",
        borderRadius: 5,
        paddingLeft: 15,
        fontSize: "2rem",
        "&:focus": {
          background: "rgba(197, 228, 249, 0.3)",
          color: "#272727",
        },
      },
      "& button": {
        background: "#1390E5",
        position: "absolute",
        borderRadius: "0px 5px 5px 0px",
        outline: "none",
        border: "none",
        width: 150,
        height: 52,
        right: 0,
        color: "#fff",
        fontSize: "2rem",
        cursor: "pointer",
      },
    },
    add: {
      position: "absolute",
      // visibility: 'hidden',
      width: 24,
      height: 24,
      right: 165,
      top: "calc(50% - 24px/2)",
      color: "#E5E5E5",
      cursor: "pointer",
      "&:hover": {
        color: "#1390E5",
      },
    },
  })
);

const SearchComponent = () => {
  const classes = useStyles();
  const [textValue, setTextValue] = useState<string>("");
  const [searchVal, setSearchVal] = useState<string>("");
  const [inputActive, setInputActive] = useState(false);
  const dispatch = useDispatch();

  const handaleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchVal(value);
    setTextValue(value);
  };

  const handaleSeach = () => {
    dispatch(searchValue(textValue));
    // dispatch(getSearchResults(searchVal));
    if (textValue) {
      setInputActive(true);
    }
  };

  return (
    <>
      <Header />
      <div className={classes.bodyWrapp}>
        <div className={classes.heading}>
          <h1>Поиск видео</h1>
          <div
            className={
              inputActive ? classes.searchWrappActive : classes.searchWrapp
            }
          >
            <input
              type="text"
              placeholder="Что хотите посмотреть?"
              value={textValue}
              onChange={handaleChange}
            />
            {textValue ? (
              <FaRegHeart
                className={classes.add}
                onClick={() => dispatch(searchFav([textValue]))}
              />
            ) : (
              ""
            )}
            <button onClick={handaleSeach}>Найти</button>
          </div>
        </div>
        <SearchResults />
      </div>
    </>
  );
};

export default SearchComponent;
