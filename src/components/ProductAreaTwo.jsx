import React from "react";
import { Link } from "react-router-dom";

const ProductAreaTwo = () => {
  return (
    <div className="product-area-2 space-top overflow-hidden">
      <div className="container">
        <div className="mb-50">
          <div className="row gy-4 justify-content-lg-between justify-content-center align-items-center text-lg-start text-center">
            <div className="col-lg-6">
              <div className="title-area mb-0">
                <h3 className="sec-title mb-0">Trending Products</h3>
              </div>
            </div>
            <div className="col-auto">
              <div className="sec-btn">
                <Link to="/shop" className="btn style-border2">
                  See More
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row gy-30 gx-30 justify-content-center">
          <div className="col-xxl-4 col-lg-6">
            <div className="product-card list-view">
              <div className="product-img">
                <img
                  src="/assets/images/1-1.png"
                  alt="Fixturbo"
                />
              </div>
              <div className="product-content">
                <h3 className="product-title">
                  <Link to="/shop">Engine Pistons & Gear Assembly</Link>
                </h3>
                <span className="star-rating">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </span>
                <span className="price">
                  <del>$30</del> $25
                </span>
                <Link to="#" className="link-btn">
                  Add to cart <i className="fas fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-lg-6">
            <div className="product-card list-view">
              <div className="product-img">
                <img
                  src="/assets/images/1-2 (1).png"
                  alt="Fixturbo"
                />
              </div>
              <div className="product-content">
                <h3 className="product-title">
                  <Link to="/shop">Exhaust Manifold Assembly</Link>
                </h3>
                <span className="star-rating">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </span>
                <span className="price">
                  <del>$30</del> $25
                </span>
                <Link to="#" className="link-btn">
                  Add to cart <i className="fas fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-lg-6">
            <div className="product-card list-view">
              <div className="product-img">
                <img
                  src="/assets/images/1-3 (1).png"
                  alt="Fixturbo"
                />
              </div>
              <div className="product-content">
                <h3 className="product-title">
                  <Link to="/shop">Windshield Wiper Motor</Link>
                </h3>
                <span className="star-rating">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </span>
                <span className="price">
                  <del>$30</del> $25
                </span>
                <Link to="#" className="link-btn">
                  Add to cart <i className="fas fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-lg-6">
            <div className="product-card list-view">
              <div className="product-img">
                <img
                  src="/assets/images/1-4.png"
                  alt="Fixturbo"
                />
              </div>
              <div className="product-content">
                <h3 className="product-title">
                  <Link to="/shop">Power Steering Pump</Link>
                </h3>
                <span className="star-rating">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </span>
                <span className="price">
                  <del>$30</del> $25
                </span>
                <Link to="#" className="link-btn">
                  Add to cart <i className="fas fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-lg-6">
            <div className="product-card list-view">
              <div className="product-img">
                <img
                  src="/assets/images/1-5 (1).png"
                  alt="Fixturbo"
                />
                <span className="tag">
                  <span className="offer-tag">-20%</span>
                </span>
              </div>
              <div className="product-content">
                <h3 className="product-title">
                  <Link to="/shop">Mechanical Gear System</Link>
                </h3>
                <span className="star-rating">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </span>
                <span className="price">
                  <del>$30</del> $25
                </span>
                <Link to="#" className="link-btn">
                  Add to cart <i className="fas fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-lg-6">
            <div className="product-card list-view">
              <div className="product-img">
                <img
                  src="/assets/images/1-6 (1).png"
                  alt="Fixturbo"
                />
              </div>
              <div className="product-content">
                <h3 className="product-title">
                  <Link to="/shop">Exhaust Manifold Unit</Link>
                </h3>
                <span className="star-rating">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </span>
                <span className="price">
                  <del>$30</del> $25
                </span>
                <Link to="#" className="link-btn">
                  Add to cart <i className="fas fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductAreaTwo;
