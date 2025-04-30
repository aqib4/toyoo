import React from 'react';
import { Link } from 'react-router-dom';

function ProjectHomeOne({ className }) {
    return (
        <section className={`appie-project-area pb-100 ${className || ''}`}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div
                            className="appie-project-box wow animated slideInUp"
                            data-wow-duration="1000ms"
                            data-wow-delay="0ms"
                        >
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="appie-project-content">
                                        <h3 className="title">
                                            Start your project with Tuyyoo.
                                        </h3>
                                        <p>Contact us for inquiries or collaborations.</p>
                                        
                                        {/* Contact Us Button */}
                                        <div className="email-link mt-30">
                                            <Link to="/contact" className="main-btn">
                                                Contact Us
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Project Thumbnail */}
                            <div className="appie-project-thumb img-box">
                                <img 
                                    src="/assets/images/mbl-33.jpg" 
                                    className="appie-feature-imge"
                                    alt="Project Thumbnail" 
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProjectHomeOne;
