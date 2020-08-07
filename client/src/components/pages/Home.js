import React, { useEffect } from "react";

import Form from "../Form/Form";
import Card from "../Card/Card";

const Home = (props) => {
  console.log(props.tasks);
  const styles = {
    spaceTop: {
      paddingTop: "30px",
    },
  };

  useEffect(() => {
    props.setTodos();
  }, []);

  return (
    <div className="container" style={styles.spaceTop}>
      <div className="row">
        <div className="col m12 l6">
          <Form setTodos={props.setTodos} />
        </div>
        <div className="col m12 l6">
          {!props.tasks
            ? null
            : props.tasks
                .reverse()
                .map((task, id) => (
                  <Card
                    key={id}
                    taskId={task._id}
                    title="Todo Item"
                    text={task.text}
                  />
                ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
