import React, { useState } from "react";
import axios from "axios";

const Form = () => {
  const [state, setState] = useState();
  const handleChange = (e) => {
    // const text = e.target.value;
    setState({ ...state, [e.target.name]: e.target.value });
    console.log(state);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("/new", { text: state.text }).then((res) => console.log(res));
  };
  return (
    <form className="col m12 l6" onSubmit={handleSubmit}>
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
