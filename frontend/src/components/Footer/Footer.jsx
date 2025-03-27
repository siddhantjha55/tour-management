import React from 'react'
import './footer.css'
import { Col, Container, Row,ListGroupItem, ListGroup } from 'reactstrap'
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png'

const quick__links = [
  {
    path: '/home',
    display:'Home'
  },
  {
    path: '/about',
    display:'About'
  },
  {
    path: '/tours',
    display:'Tours'
  },
]
const quick__links2 = [
  {
    path: '/gallery',
    display:'Gallery'
  },
  {
    path: '/login',
    display:'Login'
  },
  {
    path: '/register',
    display:'Register'
  },
]
const Footer = () =>
{
  const year = new Date().getFullYear()

  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg='3'>
            <div className="logo">
              <img src={ logo } alt='' />
              <p>"Crafting dream journeys , curating memories that last a lifetime."</p>
              <div className="social__links d-flex align-items-center gap-4">
                <span>
                <a href='https://www.youtube.com/watch?v=faFlVK4tpc4&ab_channel=MahaboobAlamMomin'>
                  <i class="ri-youtube-line"></i>
                </a>
              </span>
               <span>
                <a href='https://instagram.com/rawretrix?igshid=MzNlNGNkZWQ4Mg=='>
                  <i class="ri-instagram-line"></i>
                </a>
              </span>
               <span>
                <a href='https://www.facebook.com/salman.alam.7545?mibextid=ZbWKwL'>
                 <i class="ri-facebook-circle-line"></i>
                </a>
              </span>
             </div>
          </div>
        </Col>
          <Col lg='3'>
            <h5 className="footer__link-title">Discover</h5>
            <ListGroup className='footer__quick-links'>
              {
                quick__links.map((item, index) => (
                  <ListGroupItem key={ index } className='ps-0 border-0'>
                    <Link to={ item.path } >{ item.display }</Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </Col>
          <Col lg='3'>
            <h5 className="footer__link-title">Quick links</h5>
            <ListGroup className='footer__quick-links'>
              {
                quick__links2.map((item, index) => (
                  <ListGroupItem key={ index } className='ps-0 border-0'>
                    <Link to={ item.path } >{ item.display }</Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </Col>
          <Col lg='3'>
            <h5 className="footer__link-title">Contact</h5>
            
            <ListGroup className='footer__quick-links'>
            <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3 '>
                <h6 className='mb-0 d-flex align-align-items-center gap-2'>
                  <span>
                    <i class="ri-map-pin-line"></i>
                  </span>
                  Address:
                </h6>
                <p className='mb-0'>Mahaboob,Nepal</p>
              </ListGroupItem>
               <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3 '>
                <h6 className='mb-0 d-flex align-align-items-center gap-2'>
                  <span>
                    <i class="ri-mail-line"></i>
                  </span>
                  Email:
                </h6>
                <p className='mb-0 font-4xl'>alammahaboob101@gmail.com</p>
              </ListGroupItem>
               <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3 '>
                <h6 className='mb-0 d-flex align-align-items-center gap-2'>
                  <span>
                    <i class="ri-phone-fill"></i>
                  </span>
                  Phone:
                </h6>
                <p className='mb-0'>+977-9821955669</p>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg='12' className='text-center  pt-5'>
            <p className="copyright">Copyright {year},design and develop by Mahaboob Alam Momin.All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer