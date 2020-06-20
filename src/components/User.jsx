import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
let User = (props) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.userData.pic} />
      <Card.Body>
        <Card.Title>{props.userData.name}</Card.Title>
        <div style={{ float: "left" }}>
          <Card.Text>{props.userData.status}</Card.Text>
          <Card.Text>{props.userData.office}</Card.Text>
          <Card.Text>{props.userData.location}</Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
};

export default User;
