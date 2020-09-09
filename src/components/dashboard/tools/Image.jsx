import React, { Component } from "react";
import styles from "../../../styles/tool.module.css";

export default class Image extends Component {
  render() {
    return (
      <div className={`${styles.tool} tool-${this.props.toolData.content.id}`}>
        <h4>{this.props.toolData.content.id}</h4>
        <div
          className={styles.close}
          onClick={() =>
            this.props.toolData.deleteDashboardTool(this.props.toolData.index)
          }
        >
          x
        </div>
      </div>
    );
  }
}
