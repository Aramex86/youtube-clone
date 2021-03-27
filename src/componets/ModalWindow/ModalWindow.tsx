import React, { useEffect, useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { FormControl, InputLabel } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import Button from "@material-ui/core/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  requestNumber,
  saveRequesModal,
  updateRequest,
} from "../../store/reducers/MainPageReducer";
import { useForm, Controller } from "react-hook-form";
import { SavedRequestType } from "../../Types/Types";
import { useHistory } from "react-router";
import { AppStateType } from "../../store/store/Store";
import {
  editSelector,
  saveReqSelector,
  serachName,
} from "../../store/selectors/MainSelector";

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
      fontSize: "1.6rem",
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
      "& .MuiInputBase-root": {
        fontSize: "1.6rem",
      },
    },
    modalName: {
      position: "absolute",
      width: 430,
      height: 70,
      left: " calc(50% - 430px/2)",
      top: 194,
      fontSize: "1.6rem",
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
      "& .MuiInputBase-root": {
        fontSize: "1.6rem",
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

const ModalWindow = () => {
  const classes = useStyles();
  const [count, setCount] = useState<number>();
  const [val, setVal] = useState("");
  const [data, setData] = useState<SavedRequestType>();
  const dispatch = useDispatch();
  const history = useHistory();
  const reqVal = useSelector((state: AppStateType) => serachName(state));
  const edit = useSelector((state: AppStateType) => editSelector(state));
  const savedReq = useSelector((state: AppStateType) => saveReqSelector(state));
  const { register, handleSubmit, control } = useForm<SavedRequestType>();

  const savedName = savedReq.map(({ request }) => request).join();

  console.log(savedReq);
  const onSubmit = (data: SavedRequestType) => {
    if (savedReq.length > 0) {
      update(data);
    } else {
      createReq(data);
    }
    // if (savedName === data.request) {
    //   console.log(data.request);
    //   dispatch(updateRequest(data));
    //   history.push("/favorites");
    //   console.log(data);
    // }
  };

  const createReq = (data: SavedRequestType) => {
    data.updated= false;
    dispatch(saveRequesModal([data]));
    history.push("/favorites");
    console.log(data);
  };

  const update = (data: SavedRequestType) => {
    savedReq.find((item) => {
      if (item.request === data.request) {
        data.updated = true;
        console.log(data.request);
        dispatch(updateRequest(data));
        history.push("/favorites");
        console.log(data);
      }
    });
  };

  function valuetext(value: number) {
    setCount(value);
    return `${value}`;
  }
  useEffect(() => {
    dispatch(requestNumber(Number(count)));
  }, [count]);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setVal(event.target.value as string);
  };

  // const changeSaveReq=()=>{
  //   dispatch(updateRequest())
  // }

  return (
    <div className={classes.modalWrap}>
      <form
        className={classes.modal}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h3 className={classes.modalHeading}>
          {edit ? "Изменить запрос" : "Сохранить запрос"}
        </h3>
        <TextField
          id="request"
          label="Запрос"
          variant="outlined"
          name="request"
          className={classes.modalReq}
          inputRef={register({ required: true })}
          defaultValue={reqVal}
        />
        <TextField
          id="name"
          name="nameReq"
          label="Укажите название"
          variant="outlined"
          className={classes.modalName}
          autoComplete="off"
          required
          inputRef={register({ required: true })}
        />
        <FormControl variant="outlined" className={classes.modalSelect}>
          <InputLabel id="demo-simple-select-outlined-label">
            Сортировать по
          </InputLabel>

          <Controller
            name="select"
            control={control}
            defaultValue={val}
            as={
              <Select
                name="select"
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={val}
                onChange={handleChange}
                label="Age"
                innerRef={register()}
                // disabled={true}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"date"}>Дата</MenuItem>
                <MenuItem value={"title"}>Названию </MenuItem>
                <MenuItem value={"raiting"}>Рэйтинг</MenuItem>
              </Select>
            }
          />
        </FormControl>
        <div className={classes.modalSlider}>
          <Typography id="discrete-slider" gutterBottom>
            Максимальное количество
          </Typography>
          <Controller
            name="reqNum"
            control={control}
            defaultValue={12}
            render={(props) => (
              <Slider
                {...props}
                onChange={(_, value) => {
                  props.onChange(value);
                }}
                valueLabelDisplay="auto"
                min={5}
                max={50}
                step={5}
                marks
                getAriaValueText={valuetext}
              />
            )}
          />
          <div className={classes.modalCount}>{count}</div>
        </div>
        {edit ? (
          <>
            <Button
              variant="outlined"
              color="primary"
              className={classes.btnDontSave}
              onClick={() => history.push("/search")}
            >
              Не изменять
            </Button>
            <Button
              variant="contained"
              color="primary"
              className={classes.btnSave}
              type="submit"
            >
              Изменить
            </Button>
          </>
        ) : (
          <>
            <Button
              variant="outlined"
              color="primary"
              className={classes.btnDontSave}
              onClick={() => history.push("/search")}
            >
              Не сохранять
            </Button>
            <Button
              variant="contained"
              color="primary"
              className={classes.btnSave}
              type="submit"
            >
              Сохранить
            </Button>
          </>
        )}
      </form>
    </div>
  );
};

export default ModalWindow;
