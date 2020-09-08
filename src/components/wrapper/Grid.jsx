import React, { Component } from "react";

export default class Grid extends Component {
  render() {
    const styleList = {
      gridTemplateColumns: this.props.gridTemplateColumns || "auto",
      gridGap: this.props.gridGap || "0px",
    };
    return (
      <div className="grid" style={styleList}>
        {this.props.children}
      </div>
    );
  }
}
