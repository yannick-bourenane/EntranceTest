import React from "react";
import Toolbar from "./components/toolbar/Toolbar";
import Dashboard from "./components/dashboard/Dashboard";
import Header from "./components/Header";
import Flex from "./components/wrapper/Flex";
import Wrap from "./components/wrapper/Wrap";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "This is the first title : ",
      dashboardTools: [],
    };
    this.callbacks = {
      addDashboardTool: this.addDashboardTool.bind(this),
      deleteDashboardTool: this.deleteDashboardTool.bind(this),
    };
  }
  addDashboardTool(tool) {
    // Adding a new tool to the array
    this.setState({
      dashboardTools: [...this.state.dashboardTools, tool],
    });
  }

  deleteDashboardTool(index) {
    // Remove the targeted tool by filtering the array
    this.setState({
      dashboardTools: this.state.dashboardTools.filter(
        (tool, arrIndex) => arrIndex !== index
      ),
    });
  }
  render() {
    return (
      <>
        <Header />
        <Wrap>
          <h1 className="main-title">{this.state.title}</h1>
        </Wrap>
        <Flex
          flexDirection={"row"}
          justifyContent={"space-between"}
          alignItems={"flex-start"}
        >
          <Toolbar
            addDashboardTool={this.callbacks.addDashboardTool}
            setTitle={(newTitle) => this.setState({ title: newTitle })}
          />
          <Dashboard
            deleteDashboardTool={this.callbacks.deleteDashboardTool}
            dashboardTools={this.state.dashboardTools}
          />
        </Flex>
      </>
    );
  }
}
