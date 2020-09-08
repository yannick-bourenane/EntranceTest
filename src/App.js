import React from "react";
import Toolbar from "./components/Toolbar";
import Dashboard from "./components/Dashboard";
import Flex from "./components/wrapper/Flex";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "This is the first title : ",
      dashboardElements: [],
    };
    this.callbacks = {
      updateDashboard: this.updateDashboard.bind(this),
      deleteDashboardElement: this.deleteDashboardElement.bind(this),
    };
  }

  updateDashboard(element) {
    this.setState({
      dashboardElements: [...this.state.dashboardElements, element],
      title: element.description,
    });
  }

  deleteDashboardElement(index) {
    console.log("hey");
    this.setState({
      dashboardElements: this.state.dashboardElements.filter(
        (element, arrIndex) => arrIndex !== index
      ),
    });
  }
  render() {
    return (
      <>
        <h1 className="main-title">{this.state.title}</h1>
        <Flex
          flexDirection={"row"}
          justifyContent={"space-between"}
          alignItems={"flex-start"}
        >
          <Toolbar updateDashboard={this.callbacks.updateDashboard} />
          <Dashboard
            deleteDashboardElement={this.callbacks.deleteDashboardElement}
            dashboardElements={this.state.dashboardElements}
          />
        </Flex>
      </>
    );
  }
}
