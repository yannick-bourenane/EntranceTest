import React, { Component } from "react";
import Button from "./Button";
import styles from "../../styles/toolbar.module.css";

import Image from "../../assets/buttons/Image.svg";
import Pen from "../../assets/buttons/Pen.svg";
import Square from "../../assets/buttons/Square.svg";
import StickyNote from "../../assets/buttons/StickyNote.svg";
import Structure from "../../assets/buttons/Structure.svg";
import Text from "../../assets/buttons/Text.svg";

const icons = [
  {
    id: 1,
    description: "Sticky note",
    link: StickyNote,
  },
  {
    id: 2,
    description: "Text",
    link: Text,
  },
  {
    id: 3,
    description: "Square",
    link: Square,
  },
  {
    id: 4,
    description: "Pen",
    link: Pen,
  },
  {
    id: 5,
    description: "Image",
    link: Image,
  },
  {
    id: 6,
    description: "Structure",
    link: Structure,
  },
];

export default class Sidebar extends Component {
  render() {
    return (
      <ul id={styles.toolbar}>
        {icons.length &&
          icons.map((icon) => (
            <Button
              key={icon.id}
              icon={icon}
              addDashboardTool={this.props.addDashboardTool}
            />
          ))}
      </ul>
    );
  }
}
