import React, {Component} from 'react';

import image1 from '../assets/golf-img1.jpg'
import image2 from '../assets/golf-img2.jpg'
import image3 from '../assets/golf-img3.jpg'
import image4 from '../assets/golf-img4.jpg'
import image5 from '../assets/golf-img5.jpg'
import image6 from '../assets/golf-img6.jpg'

export class ImageGallery extends Component {
  render(){
    return (
      <section id="image-gallery">
        <h2>Check out our image gallery:</h2>
        <div className="image-grid">
          <img src={image1} alt="Image 1" />
          <img src={image2} alt="Image 2" />
          <img src={image3} alt="Image 3" />
          <img src={image4} alt="Image 4" />
          <img src={image5} alt="Image 5" />
          <img src={image6} alt="Image 6" />
        </div>
      </section>
    );
  }
}