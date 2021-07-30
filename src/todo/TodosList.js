import { Link } from "react-router-dom";
import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import GraphCMSContent from '../db/graphcms'
import {
  Card,
  CardContent,
  Typography,
  Checkbox,
  Button
} from "@material-ui/core";


const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const TodosList = ({ data }) => {
  const classes = useStyles();
  const [todos, setTodos] = React.useState(data.items);
  const Client = new GraphCMSContent();
  const completeTodo = async({id,isCompleted}) => {
    const {data} = await Client.updateTodo(id,!isCompleted);
    if (data !== false) alert("New Todo Created Successfully!");
    else alert("An error occurred!");
    const newTodos = todos.filter(todo=>todo.id !== id )
    setTodos([...newTodos,data.updateItem]);

  };
  return (
    <>
    {todos.map((item) => (
    <Card className={classes.root} variant="outlined" key={item.id}>
    <CardContent>
      <Typography variant="h5" component="h2" style={{ textDecoration: item.isCompleted ? "line-through" : "" }}>
      <Checkbox
        checked={item.isCompleted}
        onChange={()=>completeTodo(item)}
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
      {item.title}
      </Typography>
      <Link to={`/todos/${item.id}`}>
      <Button variant="outlined" color="primary">
        View Details
      </Button>
      </Link>
    </CardContent>
  </Card>
    ))}
    </>
  );
};

export default TodosList;



