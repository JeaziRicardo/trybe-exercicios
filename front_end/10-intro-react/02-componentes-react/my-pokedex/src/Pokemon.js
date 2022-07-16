import React, { Component } from "react";

class Pokemon extends Component {
  render() {
    const { id, name, type, image, averageWeight: { value, measurementUnit } } = this.props;
    return (
      <section>
        <img src={image} alt={name}/>
        <p>{ name }</p>
        <p>{ type }</p>
        <p>{ `Average Weight: ${value}${measurementUnit}` }</p>
      </section>
    )
  }
}

export default Pokemon;