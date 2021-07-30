
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#e0e0e0",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link to="/">Home</Link>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <Link
              to="/create"
              // style={{
              //   color: "white",
              //   backgroundColor: "#f1356d",
              //   borderRadius: "8px",
              // }}
            >
              New Todo
            </Link>
          </Typography>

        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Navbar;
