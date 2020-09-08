import React, { Component } from "react";

export default class Wrap extends Component {
  render() {
    return <div className="wrap">{this.props.children}</div>;
  }
}
