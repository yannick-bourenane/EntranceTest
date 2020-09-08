import React, { Component } from "react";

export default class Flex extends Component {
  render() {
    const styleList = {
      flexDirection: this.props.flexDirection || "row",
      alignItems: this.props.alignItems || "flex-start",
      justifyContent: this.props.justifyContent || "flex-start",
    };
    return (
      <div className="flex" style={styleList}>
        {this.props.children}
      </div>
    );
  }
}
