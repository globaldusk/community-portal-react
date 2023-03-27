import React, {Component} from 'react';

export class WelcomeSection extends Component {
  render(){
    return (
      <section >
        <div id="welcome" className="welcome">
          <h2>Welcome to our Website</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat nibh nec purus feugiat, id aliquam orci sagittis. Etiam id dui in diam congue faucibus.</p>
        </div>
        <div id="contact-us" className="contact-us">
          <h2>Contact Us</h2>
          <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </section>
    );
  }
}