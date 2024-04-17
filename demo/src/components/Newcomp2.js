
import React, { Component } from 'react'

export default class Newcomp2 extends Component {

    state = {age: 10}

    handleagechangeadd = (e) => {
        this.setState({age: this.state.age + 1})
    }
    handleagechangesub = (e) => {
        this.setState({age: this.state.age - 1})
    }
    handleagechangereset = (e) => {
        this.setState({age: 0})
    }
  render() {
    return (
      <div>
        <button onClick={this.handleagechangeadd}>+</button>
        <h1>{this.state.age}</h1>
        <button onClick={this.handleagechangesub}>-</button>
        <button onClick={this.handleagechangereset}>Reset</button>
        <h1></h1>
      </div>
    )
  }
}
