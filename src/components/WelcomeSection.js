import React, { useEffect } from 'react';
import { Parallax } from 'react-parallax';

const WelcomeSection = ({ onScrollToNext }) => {
  useEffect(() => {
    const handleScroll = () => {
      const welcomeSection = document.querySelector('.parallax-content-wrapper');
      const welcomeRect = welcomeSection.getBoundingClientRect();

      if (welcomeRect.top <= 0 && welcomeRect.bottom >= window.innerHeight) {
        window.removeEventListener('scroll', handleScroll);
        onScrollToNext(); // Call the function to scroll to the next section
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [onScrollToNext]);

  return (
    <Parallax bgImage="/pic1.svg" strength={500}>
      <div className="parallax-content-wrapper">
        <div className="parallax-content">
          <h2>Welcome to Manas Catering</h2>
          <p>
            Looking for a perfect food affair to complement your special occasion? Look no further! Manas Caterers provide a sumptuous food itinerary to fulfill your each and every catering need. Be it a large, mid or small sized event, our full-range of outdoor and indoor catering services cover complete food preparation and presentation for formal and informal gatherings.
          </p>
        </div>
      </div>
    </Parallax>
  );
};

export default WelcomeSection;
