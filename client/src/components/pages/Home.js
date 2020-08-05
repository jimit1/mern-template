import React, { useState } from "react";

const Home = () => {
  const [state, setState] = useState({ text: "" });

  const styles = {
    container: {
      paddingTop: "50px",
    },

    text: {
      transform: "translate(0px, 15px )",
    },
  };

  const handleChange = (e) => {
    // const text = e.target.value;
    setState({ ...state, [e.target.name]: e.target.value });
    console.log(state);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hello");
  };

  return (
    <div className="container" style={styles.container}>
      <div className="row">
        <form className="col s12" onSubmit={handleSubmit}>
          <div className="row">
            <div className="input-field col s10">
              <input
                id="text"
                type="text"
                className="validate input-large"
                style={styles.text}
                name={"text"}
                onChange={handleChange}
              />
              <label htmlFor="text">Text</label>
            </div>
            <div className="input-field col s2">
              <button className="btn-floating btn-large waves-effect waves-light">
                <i className="material-icons">add</i>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
