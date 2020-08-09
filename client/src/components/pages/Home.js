import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Form from "../Form/Form";
import Card from "../Card/Card";
import Button from "../Button/Button";

const Home = (props) => {
  const styles = {
    spaceTop: {
      paddingTop: "30px",
    },
  };

  const history = useHistory();

  useEffect(() => {
    const showTodos = props.showTodos;
    showTodos();
  }, [props.showTodos]);

  return (
    <div className="container" style={styles.spaceTop}>
      <div className="row">
        <div className="col m12 l6">
          <Form
            inputName={"todoText"}
            handleChange={props.newTextChange}
            handleSubmit={props.newTextSubmit}
          />
        </div>
        <div className="col m12 l6">
          {!props.tasks
            ? null
            : props.tasks.map((task, id) => (
                <Card key={id} title="Todo Item" text={task.text}>
                  <Button
                    color="teal"
                    text="edit"
                    click={() => history.push(`/edit/${task._id}`)}
                  />
                  <Button
                    color="red"
                    text="delete"
                    click={() => history.push(`/delete/${task._id}`)}
                  />
                </Card>
              ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
