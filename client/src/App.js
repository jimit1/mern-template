import React, { useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  useEffect(() => {
    axios
      .get("/example")
      .then(response => console.log(response))
      .catch(err => console.log(err));

    axios
      .get("/all")
      .then(response => console.log(response))
      .catch(err => console.log(err));
  });
  return (
    <div className="App">
      <h1>hello world</h1>
    </div>
  );
}

export default App;
