import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "/assets/images/logo.png"; // Direct public path

function Drawer({ drawer, action }) {
  const [itemSize, setSize] = useState("0px");
  const [item, setItem] = useState("home");

  const handler = (value) => {
    const getItems = document.querySelectorAll(`#${value} li`).length;
    if (getItems > 0) {
      setSize(`${43 * getItems}px`);
      setItem(value);
    }
  };

  return (
    <>
      {/* Overlay Background */}
      <div
        onClick={action}
        className={`off_canvars_overlay ${drawer ? "active" : ""}`}
      ></div>

      {/* Offcanvas Menu */}
      <div className="offcanvas_menu">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className={`offcanvas_menu_wrapper ${drawer ? "active" : ""}`}>
                {/* Close Button */}
                <div className="canvas_close">
                  <button onClick={action} className="close-btn">
                    <i className="fa fa-times"></i>
                  </button>
                </div>

                {/* Logo */}
                <div className="offcanvas-brand appie-logo-box text-center mb-40">
                  <img src={logo} alt="Logo" />
                </div>

                {/* Navigation Menu */}
                <div id="menu" className="text-left">
                  <ul className="offcanvas_main_menu">
                    <li
                      onClick={() => handler("home")}
                      id="home"
                      className="menu-item-has-children active"
                    >
                      <Link to="/home-dark">Home Dark</Link>
                      <ul
                        className="sub-menu"
                        style={{ height: item === "home" ? itemSize : "0px" }}
                      >
                        {/* Sub-menu items can go here */}
                      </ul>
                    </li>
                    <li onClick={() => handler("service")} id="service" className="active">
                      <Link to="/privacy">Privacy</Link>
                    </li>
                    <li onClick={() => handler("contact")} id="contact" className="active">
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                </div>

                {/* Social Icons */}
                <div className="offcanvas-social">
                  <ul className="text-center">
                    <li><Link to="#"><i className="fab fa-facebook-f"></i></Link></li>
                    <li><Link to="#"><i className="fab fa-twitter"></i></Link></li>
                    <li><Link to="#"><i className="fab fa-instagram"></i></Link></li>
                    <li><Link to="#"><i className="fab fa-dribbble"></i></Link></li>
                  </ul>
                </div>

                {/* Footer Contact Info */}
                <div className="footer-widget-info">
                  <ul>
                    <li>
                      <Link to="#">
                        <i className="fal fa-envelope"></i> Office@tuyyoo.com
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fal fa-phone"></i> +(40) 730 020 002
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fal fa-map-marker-alt"></i> Bucharest, Romania
                      </Link>
                    </li>
                  </ul>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Drawer;
