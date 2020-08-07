import React from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const Delete = () => {
  const styles = {
    button: {
      marginRight: "10px",
      width: "80px",
    },
  };

  const history = useHistory();

  let { id } = useParams();

  const [task, setTask] = useState({ text: "" });

  useEffect(() => {
    axios.get(`/find/${id}`).then((res) => setTask(res.data));
  }, [id]);

  return (
    <div className="container">
      <div className="card ">
        <div className="card-content">
          <span className="card-title">Are you sure you want to delete?</span>
          <p>{task.text}</p>
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
              onClick={() => {
                axios
                  .delete(`/remove/${task._id}`)
                  .then(() => history.push("/"));
              }}
            >
              delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delete;
