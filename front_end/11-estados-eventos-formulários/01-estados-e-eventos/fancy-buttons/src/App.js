import './App.css';
import React, { Component } from 'react';

class App extends Component {

  constructor() {
    super()
    this.state = {
      clicksOne: 0,
      clicksTwo: 0,
      ClicksThree: 0,
    }
    this.handleClickOne = this.handleClickOne.bind(this);
    this.handleClickTwo = this.handleClickTwo.bind(this);
    this.handleClickThree = this.handleClickThree.bind(this);
  }

  handleClickOne() {
    this.setState((prevState) => ({
      clicksOne: prevState.clicksOne + 1,
    }));
  }
  
  handleClickTwo() {
    this.setState((prevState) => ({
      clicksTwo: prevState.clicksTwo + 1,
    }));
  }
  
  handleClickThree() {
    this.setState((prevState) => ({
      ClicksThree: prevState.ClicksThree + 1,
    }));
  }

  render() {
    const { ClicksThree, clicksTwo, clicksOne } = this.state;
    return (
      <div>
        <button onClick={ this.handleClickOne }>Clicou: { clicksOne }</button>
        <button onClick={ this.handleClickTwo }>Clicou: { clicksTwo }</button>
        <button onClick={ this.handleClickThree }>Clicou: { ClicksThree }</button>
      </div>
    );
  }
}

export default App;
