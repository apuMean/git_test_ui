import React, { Component } from "react";
import { Jumbotron, Container, Button } from "react-bootstrap";
let DetailView = (props) => {
  return (
    <div>
      <Button
        className="btn btn-danger"
        style={{ float: "right" }}
        onClick={props.hideRepoDetails}
      >
        Close
      </Button>
      <Jumbotron fluid>
        <Container>
          <h6>{props.repo.title}</h6>
          <p style={{ float: "left" }}>{props.repo.text}</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default DetailView;
