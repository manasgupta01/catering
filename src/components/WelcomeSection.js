import React, { useState, useEffect } from 'react';
import { Parallax } from 'react-parallax';
import styled from 'styled-components';

const WelcomeSection = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const calculateParallaxOffset = (factor) => {
    // Adjust the 'factor' value to control the intensity of the parallax effect
    return scrollPosition * factor;
  };

  return (
    <Parallax bgImage="/pic1.svg" strength={500}>
      <div className="parallax-content-wrapper">
        <div
          className="parallax-content"
          style={{
            transform: `translateY(${calculateParallaxOffset(0)}px)`, // Adjust the factor to control the parallax intensity
          }}
        >
          <h2>Welcome to Manas Catering</h2>
          <p>Looking for a perfect food affair to complement your special occasion? Look no further! Manas Caterers provide a sumptuous food itinerary to fulfill your each and every catering need. Be it a large, mid or small sized event, our full-range of outdoor and indoor catering services cover complete food preparation and presentation for formal and informal gatherings.</p>
        </div>
      </div>
    </Parallax>
  );
};

export default WelcomeSection;
