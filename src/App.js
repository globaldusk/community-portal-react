import { Route, Router } from 'react-router-dom';

import './App.css';

import {Header} from './components/Header'
import {Navbar} from './components/Navbar'
import {WelcomeSection} from './components/WelcomeSection'
import {GolfVideo} from './components/GolfVideo'
import {ImageGallery} from './components/ImageGallery'
import {WeatherTrafficSection} from './components/WeatherTrafficSection'
import {Summary} from './components/Summary'
import {Footer} from './components/Footer'

function App() {
  return (
    <div>
      <Header/>
      <Navbar/>
      <WelcomeSection name="Jack"/>
      <GolfVideo/>
      <ImageGallery/>
      <WeatherTrafficSection/>
      <Summary/>
      <Footer/>
    </div>
  );
}

export default App;
