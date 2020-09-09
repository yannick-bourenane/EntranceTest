import React, { Component } from "react";
import Flex from "./wrapper/Flex";
import HamburgerMenu from "react-hamburger-menu";
import IconSendInvite from "../assets/images/IconSendInvite.svg";

const width = window.innerWidth;

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }
  handleClick() {
    this.setState({
      open: !this.state.open,
    });
  }
  render() {
    return (
      <nav>
        <Flex>
          <button className="button has-icon secondary-revert">
            <img src={IconSendInvite} alt="Send invite" />
            Invite
          </button>
          <button className="button secondary">Workshop menu</button>
          <button className="button ">Start workshop</button>
        </Flex>
        {/* <HamburgerMenu
          isOpen={this.state.open}
          menuClicked={this.handleClick.bind(this)}
          width={18}
          height={15}
          strokeWidth={1}
          rotate={0}
          color="black"
          borderRadius={0}
          animationDuration={0.5}
        /> */}
      </nav>
    );
  }
}
