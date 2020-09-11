import React from "react";
import Tool from "../Tool";

export default class Structure extends Tool {
  render() {
    return <React.Fragment>{this.displayTool()}</React.Fragment>;
  }
}
