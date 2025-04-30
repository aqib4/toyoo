import React from 'react';

function FooterHomeOne({ darkEnable = false, dark, className }) {
    console.log("Dark Mode Enabled:", darkEnable, "Dark Mode Active:", dark); // Debugging

    return (
        <section className={`appie-footer-area ${className || ''}`}>
            <div className="container">
                <div className="row">
                    {/* Logo & About Section */}
                    <div className="col-lg-4 col-md-6">
                        <div className="footer-about-widget flex justify-content-between">
                            <div className="appie-logo-box  ">    
                                <a href="/">
                                    <img 
                                        src={darkEnable && dark 
                                            ? "/assets/images/logo.png" 
                                            : "/assets/images/logo-l.png"} 
                                        alt="Logo" 
                                    />
                                </a>
                            </div>
                            <p className='text-left '>
                                Tuyyoo is a platform that connects people with the best in their city. 
                                We provide a platform for businesses to list their services 
                                and for customers to find the best services in their city.
                            </p>
                            
                            {/* Social Media Links */}
                            <div className="social mt-30 ">
                                <ul className='flex '>
                                    <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                                    <li><a href="#"><i className="fab fa-twitter" /></a></li>
                                    <li><a href="#"><i className="fab fa-pinterest-p" /></a></li>
                                    <li><a href="#"><i className="fab fa-linkedin-in" /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Company Navigation */}
                    <div className="col-lg-4 col-md-6 mt-10">
                        <div className="footer-navigation">
                            <h4 className="title">Company</h4>
                            <ul>
                                <li><a href="/home-dark">Home</a></li>
                                <li><a href="/privacy">Privacy</a></li>
                                <li><a href="/contact">Contact</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="col-lg-4 col-md-6 mt-10">
                        <div className="footer-widget-info">
                            <h4 className="title">Get In Touch</h4>
                            <ul>
                                <li><a className='' href="#"><i className="fal fa-envelope" /> Office@tuyyoo.com</a></li>
                                <li><a href="#"><i className="fal fa-phone" /> +40 730 020 002</a></li>
                                <li><a href="#"><i className="fal fa-map-marker-alt" /> Bucharest, Romania</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom Section */}
                <div className="row">
                    <div className="col-lg-12">
                        <div className="footer-copyright  align-items-center justify-content-between pt-35">
                            <div className="apps-download-btn">
                                <ul>
                                    <li>
                                        <a href="https://apps.apple.com/pk/app/tuyyoo-your-home-simplified/id6739342952">
                                            <i className="fab fa-apple" /> Download for iOS
                                        </a>
                                    </li>
                                    <li>
                                        <a className="item-2" href="#">
                                            <i className="fab fa-google-play" /> Download for Android
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="copyright-text">
                                <p>Copyright © 2025 Tuyyoo. All rights reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FooterHomeOne;
