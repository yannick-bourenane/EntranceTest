import React, { Component } from "react";

export default class Element extends Component {
  render() {
    return <div>{this.props.content.id}</div>;
  }
}
