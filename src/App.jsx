import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const App = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    // This code will ensure that the carousel stops when the component unmounts
    return () => {
      if (sliderRef.current) {
        sliderRef.current.slickPause();
      }
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 200
  };

  return (
    <Slider ref={sliderRef} {...settings}>
      <div>
        <div className="card" style={{ width: '18rem' }}>
          <img src="/public/pexels-photo-196655.webp" className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </div>
      <div>
        <div className="card" style={{ width: '18rem' }}>
          <img src="/public/pexels-photo-196655.webp" className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </div>
      <div>
        <div className="card" style={{ width: '18rem' }}>
          <img src="/public/pexels-photo-196655.webp" className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </div>
      {/* Add more slides as needed */}
    </Slider>
  );
};

export default App;
