import React, { Component } from "react";
import Nav from "./Nav";
import Flex from "./wrapper/Flex";
import Wrap from "./wrapper/Wrap";
import LogInfo from "./LogInfo";
import Logo from "./Logo";
import BreadCrumb from "./BreadCrumb";
import { slide as Menu } from "react-burger-menu";

import "../styles/header.css";

export default class Header extends Component {
  state = {
    open: false,
    windowWidth: window.innerWidth,
  };

  handleClick() {
    this.setState({
      open: !this.state.open,
    });
  }

  handleResize = () =>
    this.setState({
      windowWidth: window.innerWidth,
    });

  componentDidMount() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  render() {
    let desktopView = this.state.windowWidth > 950;
    return (
      <header>
        <Wrap>
          <Flex justifyContent={"space-between"}>
            <Flex className="header-left">
              <Logo />
              <BreadCrumb isResponsive={!desktopView} />
            </Flex>

            {desktopView ? (
              <Flex className="header-right">
                <Nav isResponsive={false} />
                <LogInfo />
              </Flex>
            ) : (
              <Menu right outerContainerId={"root"} isOpen={this.state.open}>
                <Flex>
                  <Nav isResponsive={!desktopView} />
                  <LogInfo />
                </Flex>
              </Menu>
            )}
          </Flex>
        </Wrap>
      </header>
    );
  }
}
