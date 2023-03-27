import React, {Component} from 'react';

export class Navbar extends Component {
  render(){
    return (
      <nav>
        <ul>
          <li>
            <a href="#welcome">Welcome</a>
          </li>
          <li>
            <a href="#video">Video</a>
          </li>
          <li>
            <a href="#image-gallery">Gallery</a>
          </li>
          <li>
            <a href="#weather-and-traffic">Weather</a>
          </li>
          <li>
            <a href="#contact-us">Contact</a>
          </li>
        </ul>
      </nav>
    );
  }
}