import React from "react";

function HeroHomeOne({ className }) {
  return (
    <>
      <section className={`appie-hero-area ${className || ""}`}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div id="download" className="appie-hero-content">
                <span>The Ultimate Property Platform</span>
                <h1 className="appie-title">
                  Buy, Rent & Showcase Properties <br /> with Ease.
                </h1>
                <p>
                  Tuyyoo simplifies property transactions by connecting buyers, renters,
                  and owners directly. Discover, list, and manage properties effortlessly
                  with smart AI tools designed for a seamless experience.
                </p>
                <ul>
                  <li>
                    <a href="https://apps.apple.com/pk/app/tuyyoo-your-home-simplified/id6739342952">
                      <i className="fab fa-apple" /> Download for iOS
                    </a>
                  </li>
                  <li>
                    <a className="item-2 bg-transparent hover:text-primary " href="#">
                      <i className="fab fa-google-play hover:underline-none" /> Download for Android
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="appie-hero-thumb">
                <div
                  className="thumb wow animated fadeInUp"
                  data-wow-duration="2000ms"
                  data-wow-delay="200ms"
                >
                  <img src="/assets/images/image4.png" className="round appie-feature-img" alt="App screenshot" />
                </div>
                <div
                  className="thumb-2 wow animated fadeInRight"
                  data-wow-duration="2000ms"
                  data-wow-delay="600ms"
                >
                  <img src="/assets/images/image1.png" className="round " alt="App interface" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-shape-1">
          <img src="/assets/images/shape/shape-2.png" alt="Decorative shape" />
        </div>
        <div className="hero-shape-2">
          <img src="/assets/images/shape/shape-3.png" alt="Decorative shape" />
        </div>
        <div className="hero-shape-3">
          <img src="/assets/images/shape/shape-4.png" alt="Decorative shape" />
        </div>
      </section>
    </>
  );
}

export default HeroHomeOne;
