import React, { useState } from "react";
import axios from "axios";

const Form = (props) => {
  const [state, setState] = useState();
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("/new", { text: state.text }).then(() => props.setTodos());
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-field">
        <input
          id={"text"}
          type={"text"}
          className={"validate input-large"}
          name={"text"}
          onChange={handleChange}
        />
        <label htmlFor="text">Text</label>
        <span
          className="helper-text"
          data-error="wrong"
          data-success="submitted"
        >
          Press Enter to submit
        </span>
      </div>
    </form>
  );
};

export default Form;
