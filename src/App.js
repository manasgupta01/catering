import "./App.css";
import React from "react";
import ParallaxImage from "./components/ParallaxImage";
import Nav from "./components/nav"; // Import the Nav component
import ImageCarousel from './components/ImageCarousel';
import WelcomeSection from './components/WelcomeSection';
import AboutSection from "./components/AboutSection";
const App = () => {
  return (
    <div>
      <Nav />
			 <ImageCarousel />
			 <WelcomeSection/>
			 <AboutSection/>
      <ParallaxImage /> 
		
    </div>
  );
};

export default App;
