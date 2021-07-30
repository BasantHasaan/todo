import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CreateTask from "./todo/CreateTodo";
import Home from "./components/Home";
import TodosDetails from './todo/TodoDetails';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <React.Fragment>
          <div className="todo-list">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/create">
                <CreateTask />
              </Route>
              <Route path="/todos/:id">
              <TodosDetails />
            </Route>
            </Switch>
          </div>
        </React.Fragment>
      </div>
    </Router>
  );
}

export default App;
