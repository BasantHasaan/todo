import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import GraphCMSContent from "../db/graphcms";
import { useHistory } from "react-router-dom";
// import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
// import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
// import DateTimePicker from '@material-ui/lab/DateTimePicker';
// import Stack from '@material-ui/core/Stack';


   

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "300px",
    },
    "& .MuiButtonBase-root": {
      margin: theme.spacing(2),
    },
  },
}));
const Form = () => {
  const classes = useStyles();
  const history = useHistory();
  const Client = new GraphCMSContent();
  const [data, setData] = React.useState({});
  const submitForm = async (e) => {
    e.preventDefault();
    Client.createTodo(data)
      .then((res) => {
        history.push("/", res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <form className={classes.root} onSubmit={submitForm}>
      <TextField
        onChange={(e) =>
          setData({
            ...data,
            title: e.currentTarget.value,
          })
        }
        fullWidth
        label="Title"
      />
      <TextField
        label="Date"
        type="datetime-local"
   
        InputLabelProps={{
          shrink: true,
        }}
        // min={new Date()}
        inputProps={{
          min: new Date().toISOString().slice(0, -8),
          // max: "2020-08-20"
        }}  
        onChange={(e) =>
          setData({
            ...data,
            dueDate: new Date(e.currentTarget.value).toISOString(),
          })
        } 
             variant="filled"
      />
        

      <TextField
        onChange={(e) =>
          setData({
            ...data,
            details: e.currentTarget.value,
          })
        }
        fullWidth
        label="Details"
        multiline
        variant="filled"
      />
      <Button type="submit" variant="contained" color="primary">
        Add
      </Button>
    </form>
  );
};
export default Form;
