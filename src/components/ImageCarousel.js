import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import firebase from 'firebase/compat/app';
import { getStorage } from 'firebase/compat/storage';
import firebaseConfig from './firebaseConfig.js';

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const ImageCarousel = () => {
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    const storageRef = firebase.storage().ref();
    const imagesRef = storageRef.child('carousel'); // Assuming your images are stored in a "carousel" folder

    imagesRef.listAll().then((result) => {
      const urls = result.items.map((item) => {
        return item.getDownloadURL();
      });
      Promise.all(urls).then((downloadUrls) => {
        setImageUrls(downloadUrls);
      });
    });
  }, []);

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <Carousel
          autoPlay
          interval={5000} // 5 seconds
          showThumbs={false}
          showStatus={false}
          infiniteLoop
        >
          {imageUrls.map((imageUrl, index) => (
            <div key={index} className="carousel-slide">
              <img
                src={imageUrl}
                alt={`Slide ${index}`}
                className="carousel-image"
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ImageCarousel;
