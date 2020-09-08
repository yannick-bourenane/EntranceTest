import React, { Component } from "react";

export default class Button extends Component {
  render() {
    return (
      <li class={`toolbar-icon toolbar-icon-${this.props.icon.id}`}>
        <img src={this.props.icon.link} alt={this.props.icon.description} />
      </li>
    );
  }
}
