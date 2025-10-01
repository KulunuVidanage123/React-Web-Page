import React from 'react';
import Header from './components/Header';
import Slider from './components/Slider';
import IconBar from './components/IconBar';
import HeroText from './components/HeroText'; 
import Homepage from './components/Homepage'; 
import Homepage2 from './components/Homepage2'; 
import Homepage3 from './components/Homepage3'; 
import Cards from './components/Cards';
import Logos from './components/Logos';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Slider />
      <IconBar />
      <HeroText />
      <Homepage />
      <Homepage2 />
      <Homepage3 />
      <Cards />
      <Logos />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;