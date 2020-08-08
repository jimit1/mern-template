import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const About = (props) => {
  let { id } = useParams();
  const [task, setTask] = useState({ text: "", id: id });

  useEffect(() => {
    axios.get(`/find/${id}`).then((res) => {
      setTask({ ...task, text: res.data.text });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const editTask = () => {
    axios.patch("/edit", { id: task.id, text: task.text }).then(() => {
      props.setTodos();
      history.push("/");
    });
  };

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const styles = {
    button: {
      marginRight: "10px",
      width: "80px",
    },
  };

  const history = useHistory();

  return (
    <div className="container">
      <h1>Are you sure?</h1>
      <div className="card ">
        <div className="card-content">
          <span className="card-title">Editing:</span>
          <form>
            <div className="input-field">
              <input
                id={"text"}
                type={"text"}
                value={task.text}
                className={"validate input-large"}
                name={"text"}
                onChange={handleChange}
              />
              <span
                className="helper-text"
                data-error="wrong"
                data-success="submitted"
              >
                Press Enter to submit
              </span>
            </div>
          </form>
        </div>
        <div className="card-action">
          <div className="input-field">
            <button
              className="btn waves-effect waves-light teal"
              style={styles.button}
              onClick={() => history.push("/")}
            >
              cancel
            </button>
            <button
              className="btn waves-effect waves-light red"
              style={styles.button}
              onClick={() => editTask()}
            >
              edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
