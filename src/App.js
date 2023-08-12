import "./App.css";
import React, { useRef } from 'react';	
import ParallaxImage from "./components/ParallaxImage";
import Nav from "./components/nav"; // Import the Nav component
import ImageCarousel from './components/ImageCarousel';
import WelcomeSection from './components/WelcomeSection';
import AboutSection from "./components/AboutSection";
const App = () => {

	const aboutSectionRef = useRef(null);

  const scrollToAboutSection = () => {
    if (aboutSectionRef.current) {
      aboutSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <Nav />
			 <ImageCarousel />
			 <WelcomeSection onScrollToNext={scrollToAboutSection} />
			 <AboutSection sectionRef={aboutSectionRef} />
      {/* <ParallaxImage />  */}
		
    </div>
  );
};

export default App;
