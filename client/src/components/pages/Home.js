import React, { useState } from "react";

const Home = () => {
  const [state, setState] = useState({ text: "" });

  const styles = {
    spaceTop: {
      paddingTop: "30px",
    },

    button: {
      marginRight: "10px",
      width: "80px",
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
    <div className="container" style={styles.spaceTop}>
      {/* form and input  */}
      <div className="row">
        <form className="col s12" onSubmit={handleSubmit}>
          <div className="row">
            <div className="input-field col s12">
              <input
                id="text"
                type="text"
                className="validate input-large"
                name={"text"}
                onChange={handleChange}
              />

              <label htmlFor="text">Text</label>
            </div>
          </div>
          <div className="input-field">
            <button className="btn waves-effect waves-light right">
              Submit
            </button>
          </div>
        </form>
      </div>

      {/* Tasks display */}

      <div className="row" style={styles.spaceTop}>
        <div className="card ">
          <div className="card-content">
            <span className="card-title">Todo item</span>
            <p>
              I am a very simple card. I am good at containing small bits of
              information. I am convenient because I require little markup to
              use effectively.
            </p>
          </div>
          <div className="card-action">
            <div className="input-field">
              <button
                className="btn waves-effect waves-light green"
                style={styles.button}
              >
                edit
              </button>
              <button
                className="btn waves-effect waves-light red"
                style={styles.button}
              >
                delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
