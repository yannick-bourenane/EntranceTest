import React, { Component } from "react";
import IconBreadCrumb from "../assets/images/IconBreadCrumb.svg";

export default class BreadCrumb extends Component {
  render() {
    return (
      <div className={`breadcrumb ${this.props.isResponsive && "responsive"}`}>
        <ul>
          <li>Workshop name</li>
          <li>
            <b> > Board A</b>
          </li>
        </ul>
        <div className="breadcrumb-icon">
          <img src={IconBreadCrumb} alt="breadcrumb" />
        </div>
      </div>
    );
  }
}
