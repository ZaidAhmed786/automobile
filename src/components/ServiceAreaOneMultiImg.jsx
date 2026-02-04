import React from "react";
import { Link } from "react-router-dom";

const ServiceAreaOneMultiImg = () => {
  return (
    <div className="service-area-1 space overflow-hidden">
      <div className="container">
        <div className="row gy-4 justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div className="service-card style-shadow">
              <div className="service-card_content">
                <div className="service-card_icon">
                  <img src="assets/img/icon/service-icon_1-1.svg" alt="Fixturbo" />
                </div>
                <h4 className="service-card_title h5">
                  <Link to="/about">Auto Fixers</Link>
                </h4>
                <p className="service-card_text">
                  Expert technicians ready to handle any car issues and keep your vehicle running smoothly.{" "}
                </p>
                <Link to="/about" className="link-btn">
                  Read More <i className="fas fa-arrow-right" />
                </Link>
              </div>
              <div className="service-card_img">
                <img src="assets/images/services/service-1-1 (1).png" alt="Fixturbo" />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-card style-shadow">
              <div className="service-card_content">
                <div className="service-card_icon">
                  <img src="assets/img/icon/service-icon_1-2.svg" alt="Fixturbo" />
                </div>
                <h4 className="service-card_title h5">
                  <Link to="/about">Mechanic Masters</Link>
                </h4>
                <p className="service-card_text">
                  Skilled mechanics providing precise diagnostics and high-quality repairs for all car models.{" "}
                </p>
                <Link to="/about" className="link-btn">
                  Read More <i className="fas fa-arrow-right" />
                </Link>
              </div>
              <div className="service-card_img">
                <img src="assets/images/services/service-1-2.png" alt="Fixturbo" />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-card style-shadow">
              <div className="service-card_content">
                <div className="service-card_icon">
                  <img src="assets/img/icon/service-icon_1-3.svg" alt="Fixturbo" />
                </div>
                <h4 className="service-card_title h5">
                  <Link to="/about">Drive-In Garage</Link>
                </h4>
                <p className="service-card_text">
                  Convenient drive-in service for quick and efficient car repairs without the wait.{" "}
                </p>
                <Link to="/about" className="link-btn">
                  Read More <i className="fas fa-arrow-right" />
                </Link>
              </div>
              <div className="service-card_img">
                <img src="assets/images/services/service-1-3.png" alt="Fixturbo" />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-card style-shadow">
              <div className="service-card_content">
                <div className="service-card_icon">
                  <img src="assets/img/icon/service-icon_1-4.svg" alt="Fixturbo" />
                </div>
                <h4 className="service-card_title h5">
                  <Link to="/about">Car Care Clinic</Link>
                </h4>
                <p className="service-card_text">
                  Complete maintenance and repair services to extend your car’s lifespan.{" "}
                </p>
                <Link to="/about" className="link-btn">
                  Read More <i className="fas fa-arrow-right" />
                </Link>
              </div>
              <div className="service-card_img">
                <img src="assets/images/services/service-1-4.png" alt="Fixturbo" />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-card style-shadow">
              <div className="service-card_content">
                <div className="service-card_icon">
                  <img src="assets/img/icon/service-icon_1-5.svg" alt="Fixturbo" />
                </div>
                <h4 className="service-card_title h5">
                  <Link to="/about">Car Repair Services</Link>
                </h4>
                <p className="service-card_text">
                 Comprehensive car repair solutions for engines, brakes, and more.{" "}
                </p>
                <Link to="/about" className="link-btn">
                  Read More <i className="fas fa-arrow-right" />
                </Link>
              </div>
              <div className="service-card_img">
                <img src="assets/images/services/service-1-5.png" alt="Fixturbo" />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-card style-shadow">
              <div className="service-card_content">
                <div className="service-card_icon">
                  <img src="assets/img/icon/service-icon_1-6.svg" alt="Fixturbo" />
                </div>
                <h4 className="service-card_title h5">
                  <Link to="/about">Repair Solutions</Link>
                </h4>
                <p className="service-card_text">
                  Professional repair services ensuring safety, performance, and peace of mind.{" "}
                </p>
                <Link to="/about" className="link-btn">
                  Read More <i className="fas fa-arrow-right" />
                </Link>
              </div>
              <div className="service-card_img">
                <img src="assets/images/services/service-1-6.png" alt="Fixturbo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceAreaOneMultiImg;
