import { Container, Row, Col } from "react-bootstrap";
import { Telephone, At, Building } from 'react-bootstrap-icons'
import navIcon1 from "../../assets/img/nav-icon1.svg";
import navIcon2 from "../../assets/img/nav-icon2.svg";
import navIcon3 from "../../assets/img/nav-icon3.svg";

import './index.css'

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-start">
          <Col size={12} sm={4}>
            <div className="footer-title">Reach Us</div>
            <p className="align-items-start"><Telephone size={20} className="mx-2"></Telephone>100868826</p>
            <p><At size={20} className="mx-2"></At>jensikalathiya2003@gmail.com</p>
            <p><Building size={20} className="mx-2"></Building>北京市颐和园路5号</p>
          </Col>
          <Col size={12} sm={4}>
            <div className="footer-title">Quick Link</div>
            <p>About Us</p>
            <p>Contact Us</p>
          </Col>
          <Col size={12} sm={4}>
            <div className="footer-title">Follow Us</div>
            <div className="social-icon mt-2">
              <a href="#"><img src={navIcon1} alt="Icon" /></a>
              <a href="#"><img src={navIcon2} alt="Icon" /></a>
              <a href="#"><img src={navIcon3} alt="Icon" /></a>
            </div>
          </Col>
        </Row>
        <Row className="footer-wrap text-center my-3">
          <div class="footer-name">ChatLaw</div>
          <div className="py-4">Copyright 2023. All Rights Reserved</div>
        </Row>
      </Container>
    </footer>
  )
}
