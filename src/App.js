import { Route, Router } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import './App.css';
import backgroundImage from './assets/background-img.avif'
import logo from './assets/prime-golf.png'
import image1 from './assets/golf-img1.jpg'
import image2 from './assets/golf-img2.jpg'
import image3 from './assets/golf-img3.jpg'
import image4 from './assets/golf-img4.jpg'
import image5 from './assets/golf-img5.jpg'
import image6 from './assets/golf-img6.jpg'

function App() {
  return (
    <div>
      <Header/>
      <Navbar/>
      <WelcomeSection/>
      <GolfVideo/>
      <ImageGallery/>
      <WeatherTrafficSection/>
      <Summary/>
      <Footer/>
    </div>
  );
}

function Header() {
  return (
    <header>
      <img src={logo} alt="Prime Golf Logo" />
      <h1>Prime Golf Community Portal</h1>
    </header>
  );
}

function Navbar() {
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

function WelcomeSection() {
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

function GolfVideo() {
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

function ImageGallery() {
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

function WeatherTrafficSection() {/*weather iframe widget do sdisplay a simple weather map of user location and the club location
table and ifram in same section  to keep them inline on the web page */
return (
  <section id="weather-and-traffic">
    
    <div className='block'>
      <h2>Weather Widget And Average Traffic Per Day:</h2>
      
    </div>
    <div className="iframeDiv">
      <iframe
        className='iframeWeather'
        loading="lazy"
        allowfullscreen
        referrerpolicy="no-referrer-when-downgrade"
        src="https://embed.windy.com/embed2.html?lat=-34.904&lon=151.249&detailLat=-34.904&detailLon=151.249&width=650&height=450&zoom=7&level=surface&overlay=clouds&product=ecmwf&menu=&message=&marker=&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=default&metricTemp=default&radarRange=-1">
      </iframe>
    </div>
    <table>
      <thead>
          <tr>
              <td>MON</td>
              <td>TUE</td>
              <td>WED</td>
              <td>THU</td>
              <td>FRI</td>
              <td>SAT</td>
              <td>SUN</td>
          </tr>
      </thead>
      <tbody>
          <tr>
              <td>40%</td>
              <td>50%</td>
              <td>75%</td>
              <td>40%</td>
              <td>75%</td>
              <td>80%</td>
              <td>90%</td>
          </tr>
      </tbody>
  </table>
    </section>
  );
}//A basic tbale with only two rows

function Summary() {
  return (
    <section className="summary">
      <h2>Thank you for visiting!</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
        enim auctor augue dictum, vel lacinia purus gravida. In non varius
        tellus, non rhoncus quam. Donec sagittis bibendum dolor, vitae
        tristique turpis bibendum nec. Integer gravida, nulla sit amet
        sollicitudin aliquam, nisl mauris volutpat magna, at pharetra lorem
        turpis id enim. Vivamus faucibus, mi eget sagittis tincidunt, odio
        augue tristique nisi, sit amet congue enim mauris id urna. Donec a
        diam est.
      </p>
    </section>
  );
}

function Footer() {
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
      </div>
    </footer>
  );
}

export default App;
