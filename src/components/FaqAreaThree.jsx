import React from "react";

const FaqAreaThree = () => {
  return (
    <div className="faq-area-1 space">
      <div className="container">
        <div
          className="faq-wrap space"
          style={{
            backgroundImage: "url(assets/images/faq-bg.png)",
            backgroundColor: "#F4F4F4",
            backgroundSize: "cover",
          }}
        >
          <div className="row justify-content-center">
            <div className="col-xl-5 col-lg-6 col-11">
              <div className="title-area text-center">
                <span className="sub-title">ask anything</span>
                <h2 className="sec-title">
                  Empowering Businesses For A Brighter Future
                </h2>
              </div>
            </div>
            <div className="col-xl-8 col-md-10 col-11">
              <div className="accordion-area accordion" id="faqAccordion">
                <div className="accordion-card style3 active">
                  <div className="accordion-header" id="collapse-item-1">
                    <button
                      className="accordion-button "
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-1"
                      aria-expanded="true"
                      aria-controls="collapse-1"
                    >
                      {" "}
                      What Is the Purpose of a Business Plan?
                    </button>
                  </div>
                  <div
                    id="collapse-1"
                    className="accordion-collapse collapse show"
                    aria-labelledby="collapse-item-1"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      <p className="faq-text">
                        A business plan serves as a roadmap for your business. It clearly outlines your goals, strategies, target market, and financial plans. A well-prepared business plan helps you stay focused, make informed decisions, and measure progress over time. It is also essential when seeking funding, as investors and lenders use it to understand your business model, growth potential, and long-term vision.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-card style3">
                  <div className="accordion-header" id="collapse-item-2">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-2"
                      aria-expanded="false"
                      aria-controls="collapse-2"
                    >
                      {" "}
                      How Can I Register My Business Name Legally?
                    </button>
                  </div>
                  <div
                    id="collapse-2"
                    className="accordion-collapse collapse "
                    aria-labelledby="collapse-item-2"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      <p className="faq-text">
                       Registering your business name involves choosing a unique name and ensuring it is not already in use. You must then register it with the relevant government authority in your country or state. This process may include business name availability checks, submitting required documents, and paying a registration fee. Once registered, your business name is legally protected and can be used for branding, banking, and official operations.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-card style3">
                  <div className="accordion-header" id="collapse-item-3">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-3"
                      aria-expanded="false"
                      aria-controls="collapse-3"
                    >
                      {" "}
                      How Can I Protect My Intellectual Property Rights?
                    </button>
                  </div>
                  <div
                    id="collapse-3"
                    className="accordion-collapse collapse "
                    aria-labelledby="collapse-item-3"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      <p className="faq-text">
                        Protecting your intellectual property helps secure your business ideas, brand identity, and creative assets. This can be done through trademarks for brand names and logos, copyrights for written or creative content, and patents for inventions or unique products. Registering your intellectual property ensures legal ownership and prevents unauthorized use by others, giving your business a competitive advantage and long-term security.
                      </p>
                    </div>
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

export default FaqAreaThree;
