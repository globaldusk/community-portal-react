import React, {Component} from 'react';

var summaryMessage = `Thank you for visiting the Prime Golf Community Portal! 
Our website serves as a central hub for individuals who share a an interest in our facilities. 
We provide a platform for members to connect and engage with us through the contact section. 

Our community portal is designed to be interactive, allowing members to identify weather and view footage of our courses. 

We hope that our website fosters a sense of belonging and shared purpose among our members, and we invite you to join our community today.`;

export class Summary extends Component {
  render(){
    return (
      <section className="summary">
        <h2>Thank you for visiting!</h2>
        <p>
          {summaryMessage}
        </p>
      </section>
    );
  }
}