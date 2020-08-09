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
  const [newText, updateText] = useState();

  const newTextChange = (e) => {
    updateText({ ...newText, [e.target.name]: e.target.value });
    console.log(newText);
  };

  const newTextSubmit = (e) => {
    e.preventDefault();
    axios.post("/new", { text: newText.todoText }).then(() => showTodos());
  };

  const showTodos = () => {
    axios
      .get("/all")
      .then((response) => setTasks(response.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    showTodos();
  }, []);

  return (
    <Router>
      <div>
        <Nav
          links={[
            <Link to="/">Home</Link>,
            <Link to="/about">About</Link>,
            <Link to="/contact">Contact</Link>,
          ]}
        />

        <Switch>
          <Route path="/edit/:id">
            <Edit showTodos={showTodos} />
          </Route>
          <Route path="/delete/:id">
            <Delete />
          </Route>
          <Route path="/">
            <Home
              showTodos={showTodos}
              tasks={tasks}
              newTextChange={newTextChange}
              newTextSubmit={newTextSubmit}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
