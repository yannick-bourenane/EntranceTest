import React, { Component } from "react";

export default class Grid extends Component {
  render() {
    const styleList = {
      gridTemplateColumns: this.props.gridTemplateColumns || "auto",
      gridGap: this.props.gridGap || "0px",
    };
    const className = this.props.className ? " " + this.props.className : "";
    return (
      <div className={`grid${className}`} style={styleList}>
        {this.props.children}
      </div>
    );
  }
}
