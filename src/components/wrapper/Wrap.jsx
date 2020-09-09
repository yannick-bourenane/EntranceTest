import React, { Component } from "react";

export default class Wrap extends Component {
  render() {
    const className = this.props.className ? " " + this.props.className : "";
    return <div className={`wrap${className}`}>{this.props.children}</div>;
  }
}
