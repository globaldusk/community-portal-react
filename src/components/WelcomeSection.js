import React, {Component} from 'react';

var welcomeMessage = (`Welcome to the Prime Golf Club community portal. 
We are a Sydney based golf course with a national presence and host annual tournaments.
As a company we value service, quality and experience.

On this web app you can fin images and videos of our facilities, weather and traffic 
for each day of the week at our locations, you can also contact us directly!`);

export class WelcomeSection extends Component {//using synthetic events
  render(){
    return (
      <section>
        <div id="welcome" className="welcome">
          <h2>Welcome to the Prime Golf Community Portal, {this.props.name}</h2>
          <p>{welcomeMessage}</p>
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