import React, { useEffect } from "react";
import "./App.css";
import axios from "axios";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Edit from "./components/pages/Edit";
import Delete from "./components/pages/Delete";
import Home from "./components/pages/Home";

function App() {
  useEffect(() => {
    axios
      .get("/example")
      .then((response) => console.log(response))
      .catch((err) => console.log(err));

    axios
      .get("/all")
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  });

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Tasks</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/edit/:id">
            <Edit />
          </Route>
          <Route path="/delete/:id">
            <Delete />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
