import React, { Component } from "react";
import styles from "../styles/tool.module.css";

export default class Tool extends Component {
  render() {
    return (
      <div className={`${styles.tool} tool-${this.props.content.id}`}>
        <h4>{this.props.content.id}</h4>
        <div
          className={styles.close}
          onClick={() => this.props.deleteDashboardTool(this.props.index)}
        >
          x
        </div>
      </div>
    );
  }
}
