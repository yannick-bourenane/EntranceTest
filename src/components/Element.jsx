import React, { Component } from "react";

export default class Element extends Component {
  render() {
    return (
      <div className={`element element-${this.props.content.id}`}>
        <h4>{this.props.content.id}</h4>
      </div>
    );
  }
}
