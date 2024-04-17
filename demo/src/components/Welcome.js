import React, { Component } from 'react'

export default class Welcome extends Component {
    state = {name:""}
    handleNameChange = (e) => {
        this.setState({name:"karthi"})
    }
  render() {
    return (
      <div>
        
        <h1>Welcome {this.props.name} as {this.props.heroName} </h1>
        <h2>{this.state.name}</h2>
        <button onClick={this.handleNameChange}>press</button>
        
        </div>
    )
  }
}
