import React, { Component } from "react";
import Flex from "./wrapper/Flex";
import IconSendInvite from "../assets/images/IconSendInvite.svg";

export default class Nav extends Component {
  render() {
    return (
      <nav className={this.props.isResponsive ? "responsive" : ""}>
        <Flex
          flexDirection={this.props.isResponsive && "column"}
          alignItems={this.props.isResponsive && "center"}
        >
          <button className="button has-icon secondary-revert">
            <img src={IconSendInvite} alt="Send invite" />
            Invite
          </button>
          <button className="button secondary">Workshop menu</button>
          <button className="button ">Start workshop</button>
        </Flex>
      </nav>
    );
  }
}
