import './App.css';
import React, { Component } from 'react';

function handleClick() {
  console.log('click');
}

class App extends Component {
  render() {
    return (
      <button onClick={ handleClick }>Meu Botão</button>
    );
  }
}

export default App;
