import React from "react";
import { useHistory } from "react-router-dom";

const Card = (props) => {
  const styles = {
    button: {
      marginRight: "10px",
      width: "80px",
    },
  };

  const history = useHistory();

  return (
    <div className="card ">
      <div className="card-content">
        <span className="card-title">{props.title}</span>
        <p>{props.text}</p>
      </div>
      <div className="card-action">
        <div className="input-field">
          <button
            className="btn waves-effect waves-light teal"
            style={styles.button}
            onClick={() => history.push(`/edit/${props.taskId}`)}
          >
            edit
          </button>
          <button
            className="btn waves-effect waves-light red"
            style={styles.button}
            onClick={() => history.push(`/delete/${props.taskId}`)}
          >
            delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
