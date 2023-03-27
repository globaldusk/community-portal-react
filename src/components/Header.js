import React, {Component} from 'react';

import logo from '../assets/prime-golf.png'

export class Header extends Component {
  render(){
    return (
        <header>
          <img src={logo} alt="Prime Golf Logo" />
          <h1>Prime Golf Community Portal</h1>
        </header>
      );
  }
}