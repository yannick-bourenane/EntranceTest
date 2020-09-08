import React, { Component } from "react";
import Element from "./Element";

export default class Dashboard extends Component {
  render() {
    const dashboardElements = this.props.dashboardElements;
    return (
      <div id="dashboard">
        {dashboardElements.length !== 0 ? (
          dashboardElements.map((element) => (
            <Element key={element.id} content={element} />
          ))
        ) : (
          <p>Click on a button on the toolbar to add your first element</p>
        )}
      </div>
    );
  }
}
