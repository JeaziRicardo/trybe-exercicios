import './App.css';
import React, { Component } from 'react';

function handleClickOne() {
  console.log('click');
}

function handleClickTwo() {
  console.log('click');
}

function handleClickThree() {
  console.log('click');
}

class App extends Component {
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
