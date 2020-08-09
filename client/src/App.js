import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Edit from "./components/Pages/Edit";
import Delete from "./components/Pages/Delete";
import Home from "./components/Pages/Home";
import Nav from "./components/Nav/Nav";

function App() {
  const [tasks, setTasks] = useState();
  const [newText, updateNewText] = useState();
  const [editedText, updateEditText] = useState({ editText: "", id: "" });

  const retrieveTasks = () => {
    axios
      .get("/all")
      .then((response) => setTasks(response.data))
      .catch((err) => console.log(err));
  };

  const newTextChange = (e) => {
    updateNewText({ ...newText, [e.target.name]: e.target.value });
  };

  const newTextSubmit = (e) => {
    e.preventDefault();
    axios.post("/new", { text: newText.todoText }).then(() => retrieveTasks());
  };

  const editTextSubmit = (e) => {
    e.preventDefault();
    axios
      .patch("/edit", { id: editedText.id, text: editedText.editText })
      .catch((err) => {
        console.log(err);
      });
  };

  const editTextChange = (e) => {
    updateEditText({ ...editedText, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    retrieveTasks();
  }, []);

  return (
    <Router>
      <Nav links={[<Link to="/">Home</Link>, <Link to="/about">About</Link>]} />

      <Switch>
        <Route path="/edit/:id">
          <Edit
            updateEditText={updateEditText}
            editTextChange={editTextChange}
            editTextSubmit={editTextSubmit}
            retrieveTasks={retrieveTasks}
            editedText={editedText}
          />
        </Route>
        <Route path="/delete/:id">
          <Delete />
        </Route>
        <Route path="/">
          <Home
            retrieveTasks={retrieveTasks}
            tasks={tasks}
            newTextChange={newTextChange}
            newTextSubmit={newTextSubmit}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
