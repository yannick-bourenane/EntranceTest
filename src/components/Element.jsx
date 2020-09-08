import React, { Component } from "react";
import styles from "../styles/element.module.css";

export default class Element extends Component {
  render() {
    return (
      <div className={`${styles.element} element-${this.props.content.id}`}>
        <h4>{this.props.content.id}</h4>
        <div
          className={styles.close}
          onClick={() => this.props.deleteDashboardElement(this.props.index)}
        >
          x
        </div>
      </div>
    );
  }
}
