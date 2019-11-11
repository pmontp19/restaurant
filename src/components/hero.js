import React, { Component } from 'react'
import logo from '../menu.svg'

class Hero extends Component {
  render() {
    return (
      <div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Cal Gallisà
        </p>
      </div>
    )
  }
}

export default Hero