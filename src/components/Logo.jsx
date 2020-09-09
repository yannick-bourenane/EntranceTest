import React, { Component } from "react";
import LogoSVG from "../assets/images/Logo.svg";

export default class Logo extends Component {
  render() {
    return <img src={LogoSVG} alt="Workshop" title="Workshop" />;
  }
}
