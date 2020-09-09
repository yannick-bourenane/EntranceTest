import React, { Component } from "react";
import Nav from "./Nav";
import Flex from "./wrapper/Flex";
import Wrap from "./wrapper/Wrap";
import LogInfo from "./LogInfo";
import Logo from "./Logo";

import BreadCrumb from "./BreadCrumb";

import "../styles/header.css";

export default class Header extends Component {
  render() {
    return (
      <header>
        <Wrap>
          <Flex justifyContent={"space-between"}>
            <Flex className="header-left">
              <Logo />
              <BreadCrumb />
            </Flex>
            <Flex className="header-right">
              <Nav />
              <LogInfo />
            </Flex>
          </Flex>
        </Wrap>
      </header>
    );
  }
}
