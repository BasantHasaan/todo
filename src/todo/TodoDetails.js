import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import GraphCMSContent from "../db/graphcms";
import { Card, CardContent, Typography, makeStyles } from "@material-ui/core";

import moment from "moment";
const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});
const TodoDetails = () => {
  const { id } = useParams();
  const Client = new GraphCMSContent();
  const classes = useStyles();
  const { data, error, loading } = useQuery(Client.fetchTodo(id));

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  const { item: todo } = data;
  return (
    <>
      {data && (
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <Typography
              variant="h5"
              component="h2"
              style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
            >
             Title: {todo.title}
            </Typography>
            <Typography variant="h5" component="p">
              Details: {todo.details}
            </Typography>
            <Typography variant="h5" component="p">
              DueDate: {moment(todo.dueDate).format("DD-MM-YYYY,HH:MM")}
            </Typography>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default TodoDetails;
