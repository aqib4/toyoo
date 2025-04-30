import React from 'react';

function ServicesHomeOne({ className }) {
    return (
        <section className={`appie-service-area pt-90 pb-100 ${className}`} id="service">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="appie-section-title text-center">
                            <h3 className="appie-title">
                                Discover, List & Connect <br /> Effortlessly with Tuyyoo.
                            </h3>
                            <p>
                                The ultimate platform for buying, renting, or showcasing properties with ease. 
                                Experience a seamless property management journey with smart AI tools, direct communication, 
                                and a user-friendly interface.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div
                            className="appie-single-service text-center mt-30 wow animated fadeInUp"
                            data-wow-duration="2000ms"
                            data-wow-delay="200ms"
                        >
                            <div className="icon">
                                <img src='/assets/images/icon/1.png' alt="" />
                                <span>1</span>
                            </div>
                            <h4 className="appie-title">Find Properties</h4>
                            <p>
                                Browse a wide range of properties with detailed descriptions and high-quality images. 
                                Use powerful filters to find your dream home effortlessly.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div
                            className="appie-single-service text-center mt-30 item-2 wow animated fadeInUp"
                            data-wow-duration="2000ms"
                            data-wow-delay="400ms"
                        >
                            <div className="icon">
                                <img src='/assets/images/icon/2.png' alt="" />
                                <span>2</span>
                            </div>
                            <h4 className="appie-title">List Your Property</h4>
                            <p>
                                List homes, apartments, or commercial spaces within minutes. 
                                Make your property visible to potential clients quickly and efficiently by uploading details.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div
                            className="appie-single-service text-center mt-30 item-3 wow animated fadeInUp"
                            data-wow-duration="2000ms"
                            data-wow-delay="600ms"
                        >
                            <div className="icon">
                                <img src='/assets/images/icon/3.png' alt="" />
                                <span>3</span>
                            </div>
                            <h4 className="appie-title">Connect Instantly</h4>
                            <p>
                                Communicate directly with buyers, renters, and property owners via instant messaging. 
                                No intermediaries, just seamless interactions.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div
                            className="appie-single-service text-center mt-30 item-4 wow animated fadeInUp"
                            data-wow-duration="2000ms"
                            data-wow-delay="800ms"
                        >
                            <div className="icon">
                                <img src='/assets/images/icon/4.png' alt="" />
                                <span>4</span>
                            </div>
                            <h4 className="appie-title">AI-Powered Insights</h4>
                            <p>
                                Get smart AI recommendations on pricing, trends, and market insights. 
                                Make informed decisions and save time with automated assistance.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ServicesHomeOne;
