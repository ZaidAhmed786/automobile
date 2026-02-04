import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Thumbs, EffectFade } from "swiper";
const TestimonialOne = () => {
  return (
    <div
      className="testimonial-area-1 overflow-hidden"
      style={{ backgroundImage: "url(assets/images/about/testimonial-bg1-1.png)" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="testimonial-thumb1">
              <img src="assets/images/about/testimonial-1-1.png" alt="Fixturbo" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="space">
              <div className="title-area">
                <span className="sub-title">Clients testimonial</span>

                <h2 className="sec-title text-white">
                  Car Repair The Best <br /> Services
                </h2>
              </div>
              <div className="row global-carousel testi-slider-1">
                <Swiper
                  loop={true}
                  navigation={{
                    nextEl: ".testimonialOne-button-next",
                    prevEl: ".testimonialOne-button-prev",
                  }}
                  spaceBetween={20}
                  slidesPerGroup={1}
                  speed={1000}
                  autoplay={{ delay: 6000 }}
                  pagination={true}
                  className="mySwiper"
                  modules={[FreeMode, Navigation, Thumbs, EffectFade]}
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                    },
                    500: {
                      slidesPerView: 1,
                    },
                    768: {
                      slidesPerView: 1,
                    },
                    992: {
                      slidesPerView: 1,
                    },
                    1200: {
                      slidesPerView: 1,
                    },
                    1400: {
                      slidesPerView: 1,
                    },
                  }}
                >
                  <SwiperSlide>
  <div className="testi-card">
    <div className="testi-card_content">
      <div className="testi-card-profile">
        <div className="testi-card-profile-details">
          <h4 className="testi-profile-title">Nafiz Bhuiyan</h4>
          <span className="testi-profile-desig">Customer</span>
        </div>
        <div className="quote-icon">
          <img src="assets/img/icon/quote1-1.svg" alt="Fixturbo" />
        </div>
      </div>

      <p className="testi-card_text">
        Fixturbo provided excellent car repair service. The team quickly diagnosed
        the issue and fixed it with great attention to detail. Highly reliable
        and professional work.
      </p>

      <div className="rating">
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
      </div>
    </div>
  </div>
</SwiperSlide>

                  <SwiperSlide>
  <div className="testi-card">
    <div className="testi-card_content">
      <div className="testi-card-profile">
        <div className="testi-card-profile-details">
          <h4 className="testi-profile-title">Ahsan Malik</h4>
          <span className="testi-profile-desig">Vehicle Owner</span>
        </div>
        <div className="quote-icon">
          <img src="assets/img/icon/quote1-1.svg" alt="Fixturbo" />
        </div>
      </div>

      <p className="testi-card_text">
        The mechanics were skilled and transparent about the repairs. My car now
        runs smoothly, and the service was completed on time without any hassle.
      </p>

      <div className="rating">
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
      </div>
    </div>
  </div>
</SwiperSlide>

                  <SwiperSlide>
  <div className="testi-card">
    <div className="testi-card_content">
      <div className="testi-card-profile">
        <div className="testi-card-profile-details">
          <h4 className="testi-profile-title">Sara Khan</h4>
          <span className="testi-profile-desig">Regular Client</span>
        </div>
        <div className="quote-icon">
          <img src="assets/img/icon/quote1-1.svg" alt="Fixturbo" />
        </div>
      </div>

      <p className="testi-card_text">
        Outstanding service experience! From diagnostics to final delivery,
        everything was handled professionally. I trust Fixturbo for all my car
        maintenance needs.
      </p>

      <div className="rating">
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
      </div>
    </div>
  </div>
</SwiperSlide>

                </Swiper>

                <div className="testimonialOne arrow">
                  <div className=" testimonialOne-button-next testimonialOne-button">
                    <i className="fas fa-arrow-left"></i>
                  </div>
                  <div className=" testimonialOne-button-prev testimonialOne-button">
                    <i className="fas fa-arrow-right"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialOne;
