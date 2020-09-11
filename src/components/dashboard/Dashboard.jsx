import React, { Component } from "react";
import ToolDispatch from "./ToolDispatch";
import styles from "../../styles/dashboard.module.css";
import Grid from "../wrapper/Grid";

export default class Dashboard extends Component {
  render() {
    const dashboardTools = this.props.dashboardTools;
    return (
      <div id={styles.dashboard}>
        {dashboardTools.length !== 0 ? (
          <Grid
            gridTemplateColumns={"repeat(auto-fit, minmax(150px, 1fr))"}
            gridGap={"15px"}
          >
            {dashboardTools.map((tool, index) => (
              <ToolDispatch
                key={index}
                content={tool}
                index={index}
                deleteDashboardTool={this.props.deleteDashboardTool}
              />
            ))}
          </Grid>
        ) : (
          <p>Click on a button from the toolbar to add your first element</p>
        )}
      </div>
    );
  }
}
