import React, { Component } from "react";
import Element from "./Element";
import styles from "../styles/dashboard.module.css";
import Grid from "./wrapper/Grid";

export default class Dashboard extends Component {
  render() {
    const dashboardElements = this.props.dashboardElements;
    return (
      <div id={styles.dashboard}>
        {dashboardElements.length !== 0 ? (
          <Grid gridTemplateColumns={"repeat(auto-fit, minmax(75px, 1fr))"}>
            {dashboardElements.map((element) => (
              <Element key={element.id} content={element} />
            ))}
          </Grid>
        ) : (
          <p>Click on a button on the toolbar to add your first element</p>
        )}
      </div>
    );
  }
}
