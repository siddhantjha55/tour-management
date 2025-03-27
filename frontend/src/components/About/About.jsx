import React from 'react';
import './About.css';
import { Container, Row, Col } from 'reactstrap';
import aboutVideo from '../../assets/images/hero-video.mp4';

const About = () => {
  return (
    <section className="about-section">
      <Container>
        <Row className="align-items-center">
          {/* Video Section */}
          <Col lg="6" md="12">
            <div className="about-video">
              <video src={aboutVideo} loop autoPlay muted />
            </div>
          </Col>

          {/* Content Section */}
          <Col lg="6" md="12">
            <div className="about-content">
              <h2 className="section-title">Discover Nepal with Us</h2>
              <p className="section-description">
                Welcome to <strong>Travel Nepal</strong>, your trusted partner in exploring the breathtaking beauty and
                rich culture of Nepal. From the towering peaks of the Himalayas to the serene landscapes of the Terai,
                we specialize in curating unforgettable experiences for travelers worldwide.
              </p>

              <h4>Our Mission</h4>
              <p>
                To provide unparalleled travel experiences while promoting sustainable tourism and preserving the
                cultural heritage of Nepal.
              </p>

              <h4>Our Vision</h4>
              <p>
                To be the leading travel agency in Nepal, connecting people with nature, adventure, and cultural
                experiences.
              </p>
            </div>
          </Col>
        </Row>

        {/* Services Section */}
        <Row className="services-section">
          <h3 className="section-subtitle">Our Services</h3>
          <Col lg="4" md="6" sm="12" className="service-item">
            <i className="ri-map-pin-line service-icon"></i>
            <h5>Custom Tour Packages</h5>
            <p>Design your perfect journey with tailored itineraries across Nepal's stunning landscapes.</p>
          </Col>
          <Col lg="4" md="6" sm="12" className="service-item">
            <i className="ri-hotel-line service-icon"></i>
            <h5>Accommodation & Travel</h5>
            <p>Enjoy top-notch accommodations and hassle-free travel arrangements during your trip.</p>
          </Col>
          <Col lg="4" md="6" sm="12" className="service-item">
            <i className="ri-landscape-line service-icon"></i>
            <h5>Adventure Activities</h5>
            <p>Embark on thrilling adventures like trekking, rafting, paragliding, and more.</p>
          </Col>
        </Row>

        {/* Why Choose Us Section */}
        <section className="why-choose-us">
          <Container>
            <h3 className="section-subtitle">Why Choose Us?</h3>
            <Row>
              <Col lg="4" md="6" sm="12" className="feature-item">
                <i className="ri-user-star-line feature-icon"></i>
                <h5>Expert Guides</h5>
                <p>Our experienced guides ensure safe, informative, and enjoyable trips.</p>
              </Col>
              <Col lg="4" md="6" sm="12" className="feature-item">
                <i className="ri-plant-line feature-icon"></i>
                <h5>Eco-Friendly Practices</h5>
                <p>We prioritize sustainability and environmentally responsible tourism.</p>
              </Col>
              <Col lg="4" md="6" sm="12" className="feature-item">
                <i className="ri-customer-service-2-line feature-icon"></i>
                <h5>24/7 Support</h5>
                <p>Our dedicated team is here to assist you anytime, anywhere.</p>
              </Col>
            </Row>
          </Container>
        </section>
      </Container>
    </section>
  );
};

export default About;
