import { render, screen } from '@testing-library/react';
import { Header } from '../components/Header';
import '@testing-library/jest-dom'
import { WelcomeSection } from '../components/WelcomeSection';
import { WeatherTrafficSection } from '../components/WeatherTrafficSection';
import { Summary } from '../components/Summary';
import { Navbar } from '../components/Navbar';
import { ImageGallery } from '../components/ImageGallery';
import { GolfVideo } from '../components/GolfVideo';
import { Footer } from '../components/Footer';
import { CapacityToday } from '../components/CapacityToday';

test('renders header', () => {
  render(<Header/>);
  const linkElement = screen.getByText(/Prime Golf Community Portal/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders capacity today', () => {
  render(<CapacityToday/>);
  const linkElement = screen.getByText(/available capacity left/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders footer', () => {
  render(<Footer/>);
  const linkElement = screen.getByText(/Terms and Conditions/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders golf video', () => {
  render(<GolfVideo/>);
  const linkElement = screen.getByText(/Check out this amazing golf course:/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders image gallery', () => {
  render(<ImageGallery/>);
  const linkElement = screen.getByText(/Check out our image gallery/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders navbar', () => {
  render(<Navbar/>);
  const linkElement = screen.getByText(/Welcome/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders summary', () => {
  render(<Summary/>);
  const linkElement = screen.getByText(/Thank you for visiting!/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders weather traffic section', () => {
  render(<WeatherTrafficSection/>);
  const linkElement = screen.getByText(/USUAL CAPACITY/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders welcome section', () => {
  render(<WelcomeSection/>);
  const linkElement = screen.getByText(/Welcome to the Prime Golf Community Portal/i);
  expect(linkElement).toBeInTheDocument();
});