import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

import User from "./User";
import Contents from "./Contents";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: {
        name: "Apurva Punde",
        office: "justdial",
        status: "developer",
        location: "Bangalore",
        pic:
          "https://st.depositphotos.com/1779253/5140/v/950/depositphotos_51404241-stock-illustration-female-profile-avatar-icon-white.jpg",
      },
    };
  }
  render() {
    return (
      <Container>
        <Row style={{ marginTop: "20px" }}>
          <Col md={3}>
            <User userData={this.state.userData} />
          </Col>
          <Col md={9} style={{ paddingLeft: "30px" }}>
            <Contents />
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Home;
