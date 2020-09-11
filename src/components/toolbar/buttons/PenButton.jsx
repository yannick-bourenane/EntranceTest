import React from "react";
import Button from "../Button";

export default class PenButton extends Button {
  render() {
    return <React.Fragment>{this.displayButton()}</React.Fragment>;
  }
}
