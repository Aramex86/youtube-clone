import React, { useEffect, useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { FormControl, InputLabel } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import Button from "@material-ui/core/Button";
import { useDispatch } from "react-redux";
import { requestNumber } from "../../store/reducers/MainPageReducer";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modalWrap: {
      position: "absolute",
      width: "100%",
      height: "100vh",
      background: "#75C7FF",
      opacity: 0.8,
    },
    modal: {
      position: "relative",
      width: 510,
      height: 573,
      background: "#FFFFFF",
      boxShadow: "0px 10px 50px rgba(19, 144, 229, 0.8)",
      borderRadius: 10,
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
    },
    modalHeading: {
      position: "absolute",
      width: 156,
      height: 28,
      left: "calc(50% - 156px/2)",
      top: 36,
      fontSize: "1.6rem",
      fontWeight: 500,
      textAlign: "center",
    },
    modalReq: {
      position: "absolute",
      width: 430,
      height: 70,
      left: "calc(50% - 430px/2)",
      top: 100,
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
    modalName: {
      position: "absolute",
      width: 430,
      height: 70,
      left: " calc(50% - 430px/2)",
      top: 194,
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
      "& .MuiFormLabel-asterisk.MuiInputLabel-asterisk": {
        color: "red",
      },
    },
    modalSelect: {
      position: "absolute",
      width: 430,
      height: 70,
      left: "calc(50% - 430px/2)",
      top: 288,
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
    modalSlider: {
      position: "absolute",
      width: 430,
      height: 67,
      left: 40,
      top: 382,
      "& .MuiSlider-root": {
        width: "65% !important",
      },
    },
    modalCount: {
      position: "absolute",
      width: 100,
      height: 48,
      left: "calc(50% - 100px/2 + 165px)",
      top: 7,
      border: " 1px solid rgba(23, 23, 25, 0.2)",
      borderRadius: 5,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "1.5rem",
      fontWeight: 400,
    },
    btnSave: {
      position: "absolute",
      width: 210,
      height: 52,
      left: 260,
      top: 485,
      background: "#1390E5",
      borderRadius: 5,
      fontSize: "1.5rem",
      "&:hover": {
        background: "#1390E5",
      },
    },
    btnDontSave: {
      position: "absolute",
      width: 210,
      height: 52,
      left: 40,
      top: 485,
      fontSize: "1.5rem",
    },
  })
);

type PropsType = {
  request: string;
  name: string;
};

const ModalWindow = () => {
  const classes = useStyles();
  const [count, setCount] = useState<number>();
  const dispatch = useDispatch();

  function valuetext(value: number) {
    setCount(value);
    return `${value}`;
  }
  useEffect(() => {
    dispatch(requestNumber(Number(count)))
  }, [count]);

  console.log(count);

  return (
    <div className={classes.modalWrap}>
      <div className={classes.modal}>
        <h3 className={classes.modalHeading}>Сохранить запрос</h3>
        <TextField
          id="request"
          label="Запрос"
          variant="outlined"
          className={classes.modalReq}
        />
        <TextField
          id="name"
          label="Укажите название"
          variant="outlined"
          className={classes.modalName}
          autoComplete="off"
          required
        />
        <FormControl variant="outlined" className={classes.modalSelect}>
          <InputLabel id="demo-simple-select-outlined-label">
            Сортировать по
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            //   value={age}
            //   onChange={handleChange}
            label="Age"
            disabled={true}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <div className={classes.modalSlider}>
          <Typography id="discrete-slider" gutterBottom>
            Максимальное количество
          </Typography>
          <Slider
            defaultValue={25}
            getAriaValueText={valuetext}
            aria-labelledby="discrete-slider"
            valueLabelDisplay="auto"
            step={10}
            marks
            min={0}
            max={50}
          />
          <div className={classes.modalCount}>{count}</div>
        </div>
        <Button
          variant="outlined"
          color="primary"
          className={classes.btnDontSave}
        >
          Не сохранять
        </Button>
        <Button variant="contained" color="primary" className={classes.btnSave}>
          Сохранить
        </Button>
      </div>
    </div>
  );
};

export default ModalWindow;
