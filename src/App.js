import React from 'react';

export default class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
		  title : "This is the first title : "
		}
	}
	render() {
    return (
      <>
        <h1>{this.state.title}</h1>
      </>
    );
  }
}
