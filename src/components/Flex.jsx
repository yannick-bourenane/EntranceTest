import React, { Component } from "react";

export default class Flex extends Component {
  render() {
    let classList = "";
    if (this.props.flexDirection)
      classList += "flex-direction-" + this.props.flexDirection;
    if (this.props.alignItems)
      classList += " align-items-" + this.props.alignItems;
    if (this.props.justifyContent)
      classList += " justify-content-" + this.props.justifyContent;
    return <div className={classList}>{this.props.children}</div>;
  }
}
