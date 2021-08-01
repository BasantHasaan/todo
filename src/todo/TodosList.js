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
  const [error, setError] = React.useState('');

  const completeTodo = async({id,isCompleted}) => {
    try {
      const {data} = await Client.updateTodo(id,!isCompleted);
      if (!data) {
        throw new Error(`HTTP error! ${data}`);
      }
      const newTodos = todos.filter(todo=>todo.id !== id )
      setTodos([...newTodos,data.updateItem])
  
    } catch(error) { setError(error.message) }
  };
  if (error) return <h1>{error}</h1>;

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



