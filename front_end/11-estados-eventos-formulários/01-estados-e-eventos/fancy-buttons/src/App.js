import './App.css';
import React, { Component } from 'react';

class App extends Component {

  handleClickOne() {
    console.log('click aqui');
  }
  
  handleClickTwo() {
    console.log('click de novo');
  }
  
  handleClickThree() {
    console.log('click última vez');
  }

  render() {
    return (
      <div>
        <button onClick={ handleClickOne }>Meu Botão 1</button>
        <button onClick={ handleClickTwo }>Meu Botão 2</button>
        <button onClick={ handleClickThree }>Meu Botão 3</button>
      </div>
    );
  }
}

export default App;
