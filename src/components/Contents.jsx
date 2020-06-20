import React, { Component } from "react";
import { Tabs, Tab } from "react-bootstrap";
import Repositories from "./Repositories";
import DetailView from "./DetailView";
class Contents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDetail: false,
      selectedRepo: null,
      repoList: [
        {
          title: "Walnut",
          text: "HTML Updated on 9 Sep 2018",
        },
        {
          title: "React-Redux-Boilerplate",
          text: "JavaScript  1  1 Updated on 29 Jun 2018",
        },
        {
          title: "first-contributions",
          text:
            "JavaScript  26,895 MIT License Updated on 19 Apr 2018          ",
        },
        {
          title: "vedantu",
          text: " JavaScript Updated on 30 Jan 2018",
        },
      ],
    };
  }
  showRepoDetails = (repo) => {
    this.setState({
      showDetail: true,
      selectedRepo: repo,
    });
  };
  hideRepoDetails = (repo) => {
    this.setState({
      showDetail: false,
      selectedRepo: null,
    });
  };
  render() {
    return (
      <Tabs defaultActiveKey="Repositories" id="uncontrolled-tab-example">
        <Tab eventKey="Overview" title="Overview" disabled></Tab>
        <Tab eventKey="Repositories" title="Repositories">
          {!this.state.showDetail ? (
            <Repositories
              repo={this.state.repoList}
              showRepoDetails={this.showRepoDetails}
            />
          ) : (
            <DetailView
              repo={this.state.selectedRepo}
              hideRepoDetails={this.hideRepoDetails}
            />
          )}
        </Tab>
        <Tab eventKey="project" title="Projects" disabled></Tab>
        <Tab eventKey="Stars" title="Stars" disabled></Tab>
        <Tab eventKey="Followers" title="Followers" disabled></Tab>
        <Tab eventKey="Following" title="Following" disabled></Tab>
      </Tabs>
    );
  }
}
export default Contents;
