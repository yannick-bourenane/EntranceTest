import React from "react";
import Tool from "../Tool";

export default class StickyNote extends Tool {
  render() {
    return <React.Fragment>{this.displayTool()}</React.Fragment>;
  }
}
