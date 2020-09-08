import React from "react";
import Toolbar from "./components/Toolbar";
import Dashboard from "./components/Dashboard";
import Flex from "./components/Flex";

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

  deleteDashboardElement(id) {
    this.setState({
      dashboardElements: this.state.dashboardElements.filter(
        (element) => element.id !== id
      ),
    });
  }
  render() {
    return (
      <>
        <h1>{this.state.title}</h1>
        <Flex
          flexDirection={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
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
