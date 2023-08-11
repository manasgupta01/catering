import React, { useState, useEffect } from 'react';
import { Parallax } from 'react-parallax';

const inlineStyle = {
  background: '#fff',
  left: '50%',
  top: '50%',
  position: 'absolute',
  padding: '20px',
  transform: 'translate(-50%, -50%)',
};

const images = [
  {
    src: "https://img.freepik.com/free-photo/seoraksan-mountains-is-covered-by-morning-fog-sunrise-seoul-korea_335224-313.jpg?w=2000",
    strength: 500,
    content: <h1>hi</h1>
  },
];

const ParallaxImage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // Change image every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div style={{ position: 'relative', zIndex: 1 }}>
        {images.map((image, index) => (
          <Parallax key={index} bgImage={image.src} strength={image.strength}>
            <div style={{ height: 500 }}>{image.content}</div>
          </Parallax>
        ))}
      </div>
      <div style={{ marginTop: '500px', position: 'relative', zIndex: 0 }}>
        {/* Content that will scroll below the carousel */}
      </div>
    </div>
  );
};

export default ParallaxImage;
