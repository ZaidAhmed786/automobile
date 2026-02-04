import React from "react";
import { Link } from "react-router-dom";

const FooterAreaFour = () => {
  return (
    <footer
      className="footer-wrapper footer-layout4"
      style={{ backgroundImage: "url(assets/img/bg/footer-bg2-1.png)" }}
    >
      <div className="container">
        <div className="widget-area">
          <div className="row justify-content-between">
            <div className="col-md-6 col-xl-4">
              <div className="widget footer-widget widget-about">
                <h3 className="widget_title">About Us</h3>
                <p className="footer-text mb-30">
                  Fixturbo provides reliable automotive solutions focused on quality repairs, performance, and long-lasting results you can trust.
                </p>
                <div className="social-btn style3">
                  <Link  tabIndex={-1}>
                    <i className="fab fa-instagram" />
                  </Link>
                  <Link  tabIndex={-1}>
                    <i className="fab fa-linkedin-in" />
                  </Link>
                  <Link tabIndex={-1}>
                    <i className="fab fa-twitter" />
                  </Link>
                  <Link  tabIndex={-1}>
                    <i className="fab fa-facebook-f" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-2">
              <div className="widget widget_nav_menu footer-widget">
                <h3 className="widget_title">Company</h3>
                <div className="menu-all-pages-container">
                  <ul className="menu">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                    <li>
                      <Link to="/team">Service</Link>
                    </li>
                    <li>
                      <Link to="/shop">Shop</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-5">
              <div className="widget footer-widget">
                <h3 className="widget_title">Contact</h3>
                <div className="widget-contact2">
                  <div className="widget-contact-grid">
                    <div className="icon">
                      <i className="fas fa-map-marker-alt" />
                    </div>
                    <div className="contact-grid-details">
                      <p>Address</p>
                      <h6>
                        66 Broklyant, New York
                        <p />
                      </h6>
                    </div>
                  </div>
                  <div className="widget-contact-grid">
                    <div className="icon">
                      <i className="fas fa-phone-alt" />
                    </div>
                    <div className="contact-grid-details">
                      <p>Phone Number</p>
                      <h6>
                        <Link to="tel:888123456765">012 345 678 9101</Link>
                        <p />
                      </h6>
                    </div>
                  </div>
                  <div className="widget-contact-grid">
                    <div className="icon">
                      <i className="fas fa-envelope" />
                    </div>
                    <div className="contact-grid-details">
                      <p>Email Address</p>
                      <h6>
                        <Link to="mailto:infoname@mail.com">
                          abcd@gmail.com
                        </Link>
                        <p />
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-wrap">
        <div className="container">
          <div className="row gy-3 justify-content-md-between justify-content-center">
            <div className="col-auto align-self-center">
              <p className="copyright-text text-center">
                © <Link to="#">Fixturbo</Link> 2024 | All Rights Reserved
              </p>
            </div>
            <div className="col-auto">
              <div className="footer-links">
                <Link to="/contact">Tarms &amp; Condition</Link>
                <Link to="/contact">Privacy Policy</Link>
                <Link to="/contact">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterAreaFour;
