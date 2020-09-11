import React, { Component } from "react";
import StickyNoteButton from "./buttons/StickyNoteButton";
import TextButton from "./buttons/TextButton";
import SquareButton from "./buttons/SquareButton";
import PenButton from "./buttons/PenButton";
import ImageButton from "./buttons/ImageButton";
import StructureButton from "./buttons/StructureButton";

export default class Tool extends Component {
  render() {
    const propsToSend = {
      icon: this.props.icon,
      addDashboardTool: this.props.addDashboardTool,
      setTitle: this.props.setTitle,
    };
    const id = this.props.icon.id;
    let componentToDisplay = "";
    switch (id) {
      case 1:
        componentToDisplay = <StickyNoteButton buttonData={propsToSend} />;
        break;
      case 2:
        componentToDisplay = <TextButton buttonData={propsToSend} />;
        break;
      case 3:
        componentToDisplay = <SquareButton buttonData={propsToSend} />;
        break;
      case 4:
        componentToDisplay = <PenButton buttonData={propsToSend} />;
        break;
      case 5:
        componentToDisplay = <ImageButton buttonData={propsToSend} />;
        break;
      case 6:
        componentToDisplay = <StructureButton buttonData={propsToSend} />;
        break;
      default:
        componentToDisplay = "Component not found";
    }
    // The tools are identicals, but the point is to make them scalable
    return <React.Fragment>{componentToDisplay}</React.Fragment>;
  }
}
