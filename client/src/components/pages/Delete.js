import React from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Card from "../card/card";
import Button from "../button/button";
import Container from "../container/container";

const Delete = () => {
  const history = useHistory();

  let { id } = useParams();

  const [task, setTask] = useState({ text: "" });

  useEffect(() => {
    axios
      .get(`/find/${id}`)
      .then((res) => {
        setTask(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <Container>
      <Card title="Deleting: Are you sure?" text={task.text}>
        <Button
          color="teal"
          text="cancel"
          click={() => {
            history.push("/");
          }}
        />
        <Button
          color="red"
          text="delete"
          click={() => {
            axios.delete(`/remove/${task._id}`).then(() => history.push("/"));
          }}
        />
      </Card>
    </Container>
  );
};

export default Delete;
