import React from "react";

import Form from "../Form/Form";

const Home = (props) => {
  console.log(props.tasks);
  const styles = {
    spaceTop: {
      paddingTop: "30px",
    },

    button: {
      marginRight: "10px",
      width: "80px",
    },
  };

  return (
    <div className="container" style={styles.spaceTop}>
      <div className="row">
        <Form />
        {/* Tasks display */}
        <div className="col m12 l6">
          {!props.tasks
            ? null
            : props.tasks.map((task) => (
                <div className="card ">
                  <div className="card-content">
                    <span className="card-title">Todo item</span>
                    <p>{task.text}</p>
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
              ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
