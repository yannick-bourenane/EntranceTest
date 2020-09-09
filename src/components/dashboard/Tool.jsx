import React, { Component } from "react";
import StickyNote from "./tools/StickyNote";
import Text from "./tools/Text";
import Square from "./tools/Square";
import Pen from "./tools/Pen";
import Image from "./tools/Image";
import Structure from "./tools/Structure";

export default class Tool extends Component {
  render() {
    const propsToSend = {
      key: this.props.index,
      content: this.props.content,
      index: this.props.index,
      deleteDashboardTool: this.props.deleteDashboardTool,
    };
    const id = this.props.content.id;
    let componentToDisplay =
      id === 1 ? (
        <StickyNote toolData={propsToSend} />
      ) : id === 2 ? (
        <Text toolData={propsToSend} />
      ) : id === 3 ? (
        <Square toolData={propsToSend} />
      ) : id === 4 ? (
        <Pen toolData={propsToSend} />
      ) : id === 5 ? (
        <Image toolData={propsToSend} />
      ) : (
        <Structure toolData={propsToSend} />
      );
    // The tools are identicals, but the point is to make them scalable
    return <React.Fragment>{componentToDisplay}</React.Fragment>;
  }
}
