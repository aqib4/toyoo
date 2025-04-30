import React from "react";
import Svg from "./Svg";

const Error = () => {
  const goBack = (e) => {
    e.preventDefault();
    window.history.back();
  };

  return (
    <div className="appie-error-area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="appie-error-content text-center">
              <Svg />
              <span>Sorry!</span>
              <h3 className="title">The page can’t be found.</h3>
              <p>The page you're looking for isn't available. Use the go back button below.</p>
              <a
                href="#"
                onClick={goBack}
                role="button"
                tabIndex="0"
                aria-label="Go back to the previous page"
              >
                Go Back <i className="fal fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
