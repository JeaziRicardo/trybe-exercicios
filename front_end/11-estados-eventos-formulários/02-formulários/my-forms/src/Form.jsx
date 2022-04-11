/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';

class Form extends Component {

  constructor() {
    super()
    
    this.state = {
      meuTexto: '',
    }

    this.handleText = this.handleText.bind(this);

  }

  handleText(event) {
    this.setState({
      meuTexto: event.target.value,
    });
  }

  render() {
    return (
      <form>
        <label>
          <select name="" id="">
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
          </select>
        </label>
        <label>
          <input type="text" />
        </label>
        <label>
          <input type="number" />
        </label>
        <label>
          <textarea name="meuTexto" onChange={this.handleText}></textarea>
        </label>
      </form>
    )
  }
}

export default Form;
