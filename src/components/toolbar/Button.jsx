import React, { Component } from "react";

export default class Button extends Component {
  constructor() {
    super();
    this.displayButton = this.displayButton.bind(this);
  }
  displayButton() {
    console.log(this.props);
    const html = (
      <li
        className={`toolbar-icon toolbar-icon-${this.props.buttonData.icon.id}`}
      >
        <img
          src={this.props.buttonData.icon.link}
          alt={this.props.buttonData.icon.description}
          onClick={() => {
            this.props.buttonData.addDashboardTool(this.props.buttonData.icon);
            this.props.buttonData.setTitle(
              this.props.buttonData.icon.description
            );
          }}
        />
      </li>
    );
    return html;
  }
}
