import React from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import Card from "../Card/Card";
import Button from "../Button/Button";
import Container from "../Container/Container";

const Delete = (props) => {
  const history = useHistory();

  let { id } = useParams();

  useEffect(() => {
    axios
      .get(`/find/${id}`)
      .then((res) => props.updateDeleteText(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <Container>
      <Card title="Deleting: Are you sure?" text={props.deleteText.text}>
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
            axios
              .delete(`/remove/${props.deleteText._id}`)
              .then(() => history.push("/"));
          }}
        />
      </Card>
    </Container>
  );
};

export default Delete;
