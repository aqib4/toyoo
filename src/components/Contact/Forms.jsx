import React, { useState } from "react";

const Forms = ({ darkMode }) => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const formData = new FormData(e.target);

    const response = await fetch("https://formspree.io/f/mwpvwgel", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      setStatus("Message sent successfully!");
      e.target.reset();
    } else {
      setStatus("Failed to send message. Try again later.");
    }
  };

  return (
    <>
    <section className={`contact-section mt-120 ${darkMode ? "appie-dark" : ""}`}>
      <div className="container">
        <div className="row">
          {/* Contact Info */}
          <div className="col-md-3 flex justify-center ">
            <div className={`contact--info-area  ${darkMode ? "appie-dark" : ""}`}>
              <h3 className="p-3">Get in touch</h3>
              <p>Looking for help? Fill the form and start a new adventure.</p>

              <div className="flex flex-col">
                <h5>Office</h5>
                <p>
                  <i className="fal fa-home "></i> Bucharest, Romania
                </p>
              </div>

              <div>
                <h5>Phone</h5>
                <p>
                  <i className="fal fa-phone"></i> (+40) 730 020 002
                </p>
              </div>

              <div>
                <h5>Support</h5>
                <p>
                  <i className="fal fa-envelope"></i> Office@tuyyoo.com
                </p>
              </div>

              <div className="ab-social p-3">
                <h5>Follow Us</h5>
                <a className="fac" href="https://facebook.com" aria-label="Facebook">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a className="twi" href="https://twitter.com" aria-label="Twitter">
                  <i className="fab fa-twitter"></i>
                </a>
                <a className="you" href="https://youtube.com" aria-label="YouTube">
                  <i className="fab fa-youtube"></i>
                </a>
                <a className="lin" href="https://linkedin.com" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-md-8">
            <div className={`contact-form ${darkMode ? "appie-dark" : ""}`}>
              <h4>Let’s Connect</h4>
              <p>Looking for help? Fill out the form and start a new journey.</p>

              <form onSubmit={handleSubmit} className="row">
                <div className="col-md-6">
                  <input
                    type="text"
                    name="f-name"
                    placeholder="First Name"
                    required
                    className={darkMode ? "dark-input" : ""}
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    name="l-name"
                    placeholder="Last Name"
                    required
                    className={darkMode ? "dark-input" : ""}
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                    className={darkMode ? "dark-input" : ""}
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    required
                    className={darkMode ? "dark-input" : ""}
                  />
                </div>
                <div className="col-md-12">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                    className={darkMode ? "dark-input" : ""}
                  />
                </div>
                <div className="col-md-12">
                  <textarea
                    name="message"
                    placeholder="How can we help?"
                    required
                    className={darkMode ? "dark-input" : ""}
                  ></textarea>
                </div>

                <div className="col-md-6">
                  <div className="condition-check">
                    <input id="terms-conditions" type="checkbox" required />
                    <label htmlFor="terms-conditions">
                      I agree to the{" "}
                      <a href="/privacy" target="_blank" rel="noopener noreferrer">
                        Terms & Conditions
                      </a>
                    </label>
                  </div>
                </div>

                <div className="col-md-6 text-right">
                  <input
                    type="submit"
                    value="Send Message"
                    className={darkMode ? "dark-btn" : ""}
                  />
                </div>
              </form>

              {status && <p className="form-status">{status}</p>}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Google Map */}
    <div className="bisylms-map">
      <iframe
        title="Office Location"
        src="https://maps.google.com/maps?width=720&height=600&hl=en&coord=39.966528,-75.158284&q=1%20Grafton%20Street%2C%20Dublin%2C%20Ireland+(My%20Business%20Name)&ie=UTF8&t=p&z=16&iwloc=B&output=embed"
        style={{ width: "100%", height: "400px", border: "0" }}
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
    
    </>
  );
};

export default Forms;
