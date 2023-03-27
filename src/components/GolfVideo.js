import React, {Component} from 'react';

export class GolfVideo extends Component {
  render(){
    return (
      <section id="video">
        <h2>Check out this amazing golf course:</h2>
        <div className="video-wrapper">
          <iframe 
            className='iframeVideo'
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/PbRwgTTvK1U" 
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>
      </section>
    );
  }
}