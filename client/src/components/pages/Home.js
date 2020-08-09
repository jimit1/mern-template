import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Form from "../form/Form";
import Card from "../card/Card";
import Button from "../button/Button";
import Container from "../container/Container";

const Home = (props) => {
  const history = useHistory();

  useEffect(() => {
    const retrieveTasks = props.retrieveTasks;
    retrieveTasks();
  }, [props.retrieveTasks]);

  const showTasks = () => {
    const arr = props.tasks.map((task, id) => (
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
    ));

    return arr.reverse();
  };

  return (
    <Container>
      <div className="row">
        <div className="col m12 l6">
          <Form
            inputName={"todoText"}
            handleChange={props.newTextChange}
            handleSubmit={props.newTextSubmit}
          />
        </div>
        <div className="col m12 l6">{!props.tasks ? null : showTasks()}</div>
      </div>
    </Container>
  );
};

export default Home;
