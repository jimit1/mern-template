import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import Form from "../Form/Form";
import Card from "../Card/Card";
import Button from "../Button/Button";

const Edit = (props) => {
  let { id } = useParams();
  const [task, setTask] = useState({ editText: "", id: id });

  useEffect(() => {
    axios
      .get(`/find/${id}`)
      .then((res) => {
        setTask({ id: id, editText: res.data.text });
      })
      .catch((err) => console.log(err));
  }, [id]);

  const editTextSubmit = () => {
    axios.patch("/edit", { id: task.id, text: task.editText }).then(() => {
      props.showTodos();
      history.push("/");
    });
  };

  const editTextChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
    console.log(task);
  };

  const history = useHistory();

  return (
    <div className="container">
      <Card
        title="Editing: are you sure?"
        form={
          <Form
            textValue={task.editText}
            inputName={"editText"}
            handleChange={editTextChange}
            handleSubmit={editTextSubmit}
          />
        }
      >
        <Button color="grey" text="Cancel" click={() => history.push(`/`)} />
        <Button color="red" text="Submit" click={editTextSubmit} />
      </Card>
    </div>
  );
};

export default Edit;
