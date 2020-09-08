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
          <Grid
            gridTemplateColumns={"repeat(auto-fit, minmax(150px, 1fr))"}
            gridGap={"15px"}
          >
            {dashboardElements.map((element, index) => (
              <Element
                key={index}
                content={element}
                index={index}
                deleteDashboardElement={this.props.deleteDashboardElement}
              />
            ))}
          </Grid>
        ) : (
          <p>Click on a button on the toolbar to add your first element</p>
        )}
      </div>
    );
  }
}
