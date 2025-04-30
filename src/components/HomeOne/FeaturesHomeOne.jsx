import React, { useState } from "react";

function FeaturesHomeOne({ className }) {
  const [tab, setTab] = useState("buy-rent");

  const handleClick = (e, value) => {
    e.preventDefault();
    setTab(value);
  };

  return (
    <section className={`appie-features-area pt-100 ${className}`} id="features">
      <div className="container">
        <div className="row align-items-center">
          {/* Sidebar Navigation */}
          <div className="col-lg-3">
            <div className="appie-features-tabs-btn">
              <div className="nav flex-column nav-pills" id="v-pills-tab" aria-orientation="vertical">
                <a
                  onClick={(e) => handleClick(e, "buy-rent")}
                  className={`nav-link ${tab === "buy-rent" ? "active" : ""}`}
                  href="#"
                >
                  <i className="fas fa-home" /> Buy & Rent
                </a>
                <a
                  onClick={(e) => handleClick(e, "list-property")}
                  className={`nav-link ${tab === "list-property" ? "active" : ""}`}
                  href="#"
                >
                  <i className="fas fa-list" /> List Property
                </a>
                <a
                  onClick={(e) => handleClick(e, "connect")}
                  className={`nav-link ${tab === "connect" ? "active" : ""}`}
                  href="#"
                >
                  <i className="fas fa-comments" /> Connect
                </a>
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="col-lg-9">
            <div className="tab-content" id="v-pills-tabContent">
              {/* Buy & Rent Tab */}
              {tab === "buy-rent" && (
                <div className="tab-pane show active fade">
                  <div className="row align-items-center">
                    <div className="col-lg-6 text-center">
                      <img src="/assets/images/image5.png" className="appie-feature-img" alt="Property Search" />
                    </div>
                    <div className="col-lg-6">
                      <div className="appie-features-content">
                        <span>Find Your Perfect Home</span>
                        <h3 className="title">Buy or Rent with Ease</h3>
                        <p>
                          Discover a wide range of properties with intuitive search tools and filters. Browse listings
                          with high-quality images, detailed descriptions, and key insights.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* List Property Tab */}
              {tab === "list-property" && (
                <div className="tab-pane show active fade">
                  <div className="row align-items-center">
                    <div className="col-lg-6 text-center">
                      <img src="/assets/images/image2.png" className="appie-feature-img" alt="List Property" />
                    </div>
                    <div className="col-lg-6">
                      <div className="appie-features-content">
                        <span>Instant Property Listings</span>
                        <h3 className="title">List Your Property in Seconds</h3>
                        <p>
                          Upload your property details quickly and attract potential buyers or renters. Our easy-to-use
                          interface ensures your listing gets visibility in minutes.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Connect Tab */}
              {tab === "connect" && (
                <div className="tab-pane show active fade">
                  <div className="row align-items-center">
                    <div className="col-lg-6 text-center">
                      <img src="/assets/images/image3.png" className="appie-feature-img" alt="Direct Messaging" />
                    </div>
                    <div className="col-lg-6">
                      <div className="appie-features-content">
                        <span>Seamless Communication</span>
                        <h3 className="title">Connect Directly with Owners & Renters</h3>
                        <p>
                          Skip the middlemen and chat directly with property owners, buyers, and renters. Our in-app
                          messaging ensures smooth and transparent communication.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Background Shapes */}
      <div className="features-shape-1">
        <img src="/assets/images/shape/shape-6.png" alt="" />
      </div>
      <div className="features-shape-2">
        <img src="/assets/images/shape/shape-7.png" alt="" />
      </div>
      <div className="features-shape-3">
        <img src="/assets/images/shape/shape-8.png" alt="" />
      </div>
    </section>
  );
}

export default FeaturesHomeOne;
