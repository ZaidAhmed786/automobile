import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Thumbs, EffectFade } from "swiper";
import { Link } from "react-router-dom";
const ClientAreaFour = () => {
  return (
    <div className="client-area-3">
      <div className="container">
        <div className="row gx-80 gy-4">
          <div className="col-lg-5">
            <div className="client3-wrap">
              <div className="title-area mb-0">
                <span className="sub-title">Logo Brands &amp; Clients</span>
                <h2 className="sec-title">
                  Smart Solutions for Modern Businesses
                </h2>
                <p className="sec-text">
                  We focus on delivering practical solutions that simplify operations and create sustainable growth for businesses of all sizes.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="client-slider3">
              <div className="row global-carousel slider1">
                <Swiper
                  navigation={{
                    nextEl: ".team-slider2-next",
                    prevEl: ".team-slider2-prev",
                  }}
                  spaceBetween={20}
                  slidesPerGroup={1}
                  speed={1000}
                  pagination={{ clickable: true }}
                  loop
                  autoplay={{
                    stopOnLastSlide: false,
                  }}
                  className="mySwiper"
                  modules={[FreeMode, Navigation, Thumbs, EffectFade]}
                  breakpoints={{
                    0: {
                      slidesPerView: 2,
                    },
                    768: {
                      slidesPerView: 3,
                    },
                    992: {
                      slidesPerView: 4,
                    },
                    1200: {
                      slidesPerView: 4,
                    },
                    1400: {
                      slidesPerView: 5,
                    },
                  }}
                >
                  <SwiperSlide>
                    <div>
                      <div className="client-logo">
                        <Link to="/">
                          <img
                            src="/assets/images/1-1 (1).png"
                            alt="Fixturbo"
                          />
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div>
                      <div className="client-logo">
                        <Link to="/">
                          <img
                            src="/assets/images/1-2.png"
                            alt="Fixturbo"
                          />
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div>
                      <div className="client-logo">
                        <Link to="/">
                          <img
                            src="/assets/images/1-3.png"
                            alt="Fixturbo"
                          />
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div>
                      <div className="client-logo">
                        <Link to="/">
                          <img
                            src="/assets/images/1-4 (1).png"
                            alt="Fixturbo"
                          />
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div>
                      <div className="client-logo">
                        <Link to="/">
                          <img
                            src="/assets/images/1-5.png"
                            alt="Fixturbo"
                          />
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div>
                      <div className="client-logo">
                        <Link to="/">
                          <img
                            src="/assets/images/1-6.png"
                            alt="Fixturbo"
                          />
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div>
                      <div className="client-logo">
                        <Link to="/">
                          <img
                            src="/assets/images/1-7.png"
                            alt="Fixturbo"
                          />
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="row global-carousel slider2">
                <Swiper
                  navigation={{
                    nextEl: ".team-slider2-next",
                    prevEl: ".team-slider2-prev",
                  }}
                  spaceBetween={20}
                  slidesPerGroup={1}
                  speed={1000}
                  pagination={{ clickable: true }}
                  loop
                  autoplay={{
                    stopOnLastSlide: false,
                  }}
                  className="mySwiper"
                  modules={[FreeMode, Navigation, Thumbs, EffectFade]}
                  breakpoints={{
                    0: {
                      slidesPerView: 2,
                    },
                    768: {
                      slidesPerView: 3,
                    },
                    992: {
                      slidesPerView: 4,
                    },
                    1200: {
                      slidesPerView: 5,
                    },
                    1400: {
                      slidesPerView: 6,
                    },
                  }}
                >
                  <SwiperSlide>
                    <div>
                      <div className="client-logo">
                        <Link to="/">
                          <img
                            src="/assets/images/1-8 (1).png"
                            alt="Fixturbo"
                          />
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div>
                      <div className="client-logo">
                        <Link to="/">
                          <img
                            src="/assets/images/1-9.png"
                            alt="Fixturbo"
                          />
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div>
                      <div className="client-logo">
                        <Link to="/">
                          <img
                            src="/assets/images/1-10.png"
                            alt="Fixturbo"
                          />
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div>
                      <div className="client-logo">
                        <Link to="/">
                          <img
                            src="/assets/images/1-11.png"
                            alt="Fixturbo"
                          />
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div>
                      <div className="client-logo">
                        <Link to="/">
                          <img
                            src="/assets/images/1-12.png"
                            alt="Fixturbo"
                          />
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div>
                      <div className="client-logo">
                        <Link to="/">
                          <img
                            src="/assets/images/1-13.png"
                            alt="Fixturbo"
                          />
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div>
                      <div className="client-logo">
                        <Link to="/">
                          <img
                            src="/assets/images/1-14.png"
                            alt="Fixturbo"
                          />
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientAreaFour;
