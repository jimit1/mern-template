import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import Form from "../form/form";
import Card from "../card/card";
import Button from "../button/button";
import Container from "../container/container";

const Edit = (props) => {
  let { id } = useParams();

  useEffect(() => {
    const updateEditText = props.updateEditText;

    axios
      .get(`/find/${id}`)
      .then((res) => {
        updateEditText({ id: id, editText: res.data.text });
      })
      .catch((err) => console.log(err));
  }, [id, props.updateEditText]);

  const history = useHistory();

  return (
    <Container>
      <Card
        title="Editing: are you sure?"
        form={
          <Form
            textValue={props.editedText.editText}
            inputName={"editText"}
            handleChange={props.editTextChange}
            handleSubmit={(e) => {
              props.editTextSubmit(e);
              history.push("/");
            }}
          />
        }
      >
        <Button color="grey" text="Cancel" click={() => history.push(`/`)} />
        <Button
          color="red"
          text="Submit"
          click={(e) => {
            props.editTextSubmit(e);
            history.push("/");
          }}
        />
      </Card>
    </Container>
  );
};

export default Edit;
