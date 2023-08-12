import React, { useRef } from 'react';
import WelcomeSection from './WelcomeSection';
import AboutSection from './AboutSection';

const ParentComponent = () => {
  const aboutSectionRef = useRef(null);

  const scrollToAboutSection = () => {
    if (aboutSectionRef.current) {
      aboutSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <WelcomeSection onScrollToNext={scrollToAboutSection} />
      <AboutSection ref={aboutSectionRef} />
    </div>
  );
};

export default ParentComponent;
