import React, { useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { BiGridAlt } from "react-icons/bi";
import { AiOutlineUnorderedList } from "react-icons/ai";
import Cards from "./Crads";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    resultsWrapp: {
      position: "absolute",
      width: 1040,
      left: "50%",
      top: "54%",
      transform: "translate(-50%,-50%)",
      bottom: 0,
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      height: 24,
      padding: "0 .5rem",
      alignItems: "center",
      fontSize: "1.6rem",
      fontWeight: 400,
      marginBottom: 20,
    },
    switchList: {
      "& svg": {
        width: 24,
        height: 24,
        cursor: "pointer",
        "&:nth-child(1)": {
          marginRight: 20,
        },
      },
    },
    cradsWrap: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      gap: 20,
      alignItems: "center",
    //   outline: "1px solid red",
      msOverflowStyle: "none" /* IE and Edge */,
      scrollbarWidth: "none" /*Firefox */,
      overflowY: "scroll",
      height: 700,
      "&::-webkit-scrollbar": {
        display: "none",
      },
    },
    cardrsWrapList:{
      display:'flex',
      flexDirection:'column',
      msOverflowStyle: "none" /* IE and Edge */,
      scrollbarWidth: "none" /*Firefox */,
      overflowY: "scroll",
      height: 700,
      "&::-webkit-scrollbar": {
        display: "none",
      },

    },
  })
);
const SearchResults = () => {
  const classes = useStyles();

  const[changeView,setChangeView]=useState(false);

  const handleView=()=>{
    setChangeView(!changeView);
  }

  return (
    <div className={classes.resultsWrapp}>
      <div className={classes.header}>
        <h3>Видео по запросу «чем кормить кота» <span style={{color: 'rgba(23, 23, 25, 0.3)',fontSize:'1.6rem',marginLeft:15}}>7230</span></h3>
        <div className={classes.switchList}>
          <AiOutlineUnorderedList onClick={handleView} />
          <BiGridAlt onClick={handleView} />
        </div>
      </div>
      <div className={changeView?classes.cardrsWrapList:classes.cradsWrap}>
        <Cards changeView={changeView}/>
        <Cards changeView={changeView}/>
        <Cards changeView={changeView}/>
        <Cards changeView={changeView}/>
        <Cards changeView={changeView}/>
        <Cards changeView={changeView}/>
        <Cards changeView={changeView}/>
        <Cards changeView={changeView}/>
     
      </div>
    </div>
  );
};

export default SearchResults;
