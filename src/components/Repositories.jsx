import React, { Component } from "react";
import { Jumbotron, Container } from "react-bootstrap";
let Repositories = (props) => {
  return (
    <div>
      {props.repo.length != 0 &&
        props.repo.map((data, i) => {
          return (
            <Jumbotron key={i} fluid>
              <Container>
                <h4
                  onClick={(e) => {
                    props.showRepoDetails(data);
                  }}
                >
                  {data.title}
                </h4>
                <p style={{ float: "left" }}>{data.text}</p>
              </Container>
            </Jumbotron>
          );
        })}
    </div>
  );
};

export default Repositories;
