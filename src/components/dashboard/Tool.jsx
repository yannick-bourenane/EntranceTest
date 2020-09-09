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
    let componentToDisplay = "";
    switch (id) {
      case 1:
        componentToDisplay = <StickyNote toolData={propsToSend} />;
        break;
      case 2:
        componentToDisplay = <Text toolData={propsToSend} />;
        break;
      case 3:
        componentToDisplay = <Square toolData={propsToSend} />;
        break;
      case 4:
        componentToDisplay = <Pen toolData={propsToSend} />;
        break;
      case 5:
        componentToDisplay = <Image toolData={propsToSend} />;
        break;
      case 6:
        componentToDisplay = <Structure toolData={propsToSend} />;
        break;
      default:
        componentToDisplay = "Component not found";
    }
    // The tools are identicals, but the point is to make them scalable
    return <React.Fragment>{componentToDisplay}</React.Fragment>;
  }
}
