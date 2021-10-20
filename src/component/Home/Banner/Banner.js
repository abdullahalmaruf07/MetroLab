import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <Carousel fade>
  <Carousel.Item>
    <img
    style={{height:'60vh'}}
      className="d-block w-100"
      src="https://s.marketwatch.com/public/resources/images/MW-GK126_doctor_ZG_20180531120145.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Share You Problems</h3>
      <p>You can share your problem with us without any hesitation</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
    style={{height:'60vh'}}
      className="d-block w-100"
      src="https://vitalurgentcare.ca/wp-content/uploads/2020/08/pasted-image-0-2.png"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Get Your Best Solution</h3>
      <p>Share Your</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
    style={{height:'60vh'}}
      className="d-block w-100"
      src="https://images.benefitspro.com/contrib/content/uploads/sites/412/2018/11/IoTMedical.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Connect with us & be well</h3>
      <p>Good Health is very important to live a sound life.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    );
};

export default Banner;