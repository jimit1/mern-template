import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Edit from "./components/pages/Edit";
import Delete from "./components/pages/Delete";
import Home from "./components/pages/Home";
import Nav from "./components/Nav/Nav";

function App() {
  const [tasks, setTasks] = useState();

  const setTodos = () => {
    axios
      .get("/all")
      .then((response) => setTasks(response.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    setTodos();
  }, []);

  return (
    <Router>
      <div>
        <Nav links={[<Link to="/">Home</Link>, <Link to="/">About</Link>]} />

        <Switch>
          <Route path="/edit/:id">
            <Edit />
          </Route>
          <Route path="/delete/:id">
            <Delete />
          </Route>
          <Route path="/">
            <Home setTodos={setTodos} tasks={tasks} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
