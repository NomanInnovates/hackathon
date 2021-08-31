import './Footer.css'
import {FaFacebookF ,FaInstagram ,FaTwitter,FaTelegramPlane} from 'react-icons/fa';
import { Row ,Col} from 'react-bootstrap';
function Footer() {
    return (
        <div>
    
           <footer className="footer-section">
        <div className="container">
          <div className="footer-cta pt-5 pb-5">
              <Row>
              <Col xl={4} md={4} xs={12} className="mb-30">
     
                <div className="single-cta">
                  <i className="fas fa-map-marker-alt" />
                  <div className="cta-text">
                    <h4>Find us</h4>
                    <span>1010 Avenue, sw 54321, Faisalabad</span>
                  </div>
                </div>
                      </Col>
          
              <Col xl={4} md={4} xs={12} className="mb-30">
                <div className="single-cta">
           
                  <div className="cta-text">
                    <h4>Call us</h4>
                    <span><a href="tel:+92349 5532701">+92349 5532701</a></span>
                  </div>
                </div>
                </Col>
             
              <Col xl={4} md={4} xs={12} className="mb-30">
                <div className="single-cta">
      
                  <div className="cta-text">
                    <h4>Mail us</h4>
                    <span><a href="mailto:nomansandhu0125@gmail.com">nomansandhu0125@gmail.com</a></span>
                  </div>
                </div>
           
              </Col>
            </Row>
          </div>
          <div className="footer-content pt-5 pb-5">
            <Row>
          
            <Col xl={4} md={4} xs={12} className="mb-30">
                <div className="footer-widget">
                  <div className="footer-logo logo-text">
                    <a href="index.html" className="logo-text"><h3>Foodies</h3></a>
                  </div>
                  <div className="footer-text">
                    <p>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing
                      elit,Lorem ipsum dolor sit amet.</p>
                  </div>
                  <div className="footer-social-icon">
                    <span>Follow us</span>
                    <a href="#"> <FaFacebookF /></a>
                    <a href="#"><FaTwitter/></a>
                    <a href="#"><FaInstagram/></a>
                  </div>
                </div>
              </Col>
              <Col xl={4} md={4} xs={12} className="mb-30">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>Useful Links</h3>
                  </div>
                  <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">about</a></li>
                    <li><a href="#">services</a></li>
                    <li><a href="#">portfolio</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Our Services</a></li>
                    <li><a href="#">Expert Team</a></li>
                    <li><a href="#">Contact us</a></li>
                    <li><a href="#">Latest News</a></li>
                  </ul>
                </div>
              </Col>
              <Col xl={4} md={4} xs={12} className="mb-30">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>Subscribe</h3>
                  </div>
                  <div className="footer-text mb-25">
                    <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                  </div>
                  <div className="subscribe-form">
                    <form action="#">
                      <input type="text" placeholder="Email Address" />
                      <button><FaTelegramPlane /></button>
                    </form>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <div className="copyright-area">
          <div className="container">
        
          <Row>
          <Col xl={6} md={6} xs={12} className="text-center text-lg-left">
                <div className="copyright-text">
                  <p>Copyright © 2018, All Right Reserved <a href="https://github.com/Nomi0125">Nomi</a></p>
                </div>
              </Col>
              <Col xl={6} md={6} xs={12} className="d-none d-lg-block text-right">
         
                <div className="footer-menu">
                  <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Terms</a></li>
                    <li><a href="#">Privacy</a></li>
                    <li><a href="#">Policy</a></li>
                    <li><a href="#">Contact</a></li>
                  </ul>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </footer>
        </div>
    )
}

export default Footer
