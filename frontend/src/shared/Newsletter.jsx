import React from 'react'
import './newsletter.css'
import { Row, Col, Container } from 'reactstrap'
import maleTourist from '../assets/images/male-tourist.png'

const Newsletter = () => {
    return (
      <section className='newsletter'>
      <Container>
          <Row>
              <Col lg='6'>
                  <div className="newsletter__content">
                      <h2>Enroll today to receive invaluable travel insights and information. Join us!.</h2>
                      <div className="newsletter__input">
                          <input type="email" placeholder='Enter your email' />
                            <button className="btn newsletter__btn">Subscribe</button>
                        </div>
                     <p>"Explore the world with us. Subscribe for unforgettable travel experiences!"</p>
                 </div>
              </Col>
              <Col lg='6'>
                  <div className="newsletter__img">
                      <img src={maleTourist} alt='' />
                  </div>
                    </Col>
                    </Row>
        </Container>
    </section>
  )
}

export default Newsletter