import React, {Component} from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export class Footer extends Component {
  render(){
    return (
      <footer className="footer">
        <div className="footer-social">
          <a href="#">
            <FaFacebook />
          </a>
          <a href="#">
            <FaTwitter />
          </a>
          <a href="#">
            <FaInstagram />
          </a>
        </div>
        <div className="footer-terms">
          <p>Terms and Conditions | Privacy Policy</p>
          <p>All our content is borrowed from online sources</p>
        </div>
      </footer>
    );
  }
}//Basic footer that uses font awesome for social media icons