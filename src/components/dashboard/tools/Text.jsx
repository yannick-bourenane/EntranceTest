import React from "react";
import Tool from "../Tool";

export default class Text extends Tool {
  render() {
    return <React.Fragment>{this.displayTool()}</React.Fragment>;
  }
}
