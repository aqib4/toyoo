import React from 'react';

const services = [
    { title: "Effortless Search", description: "Find properties with advanced filters, high-quality images, and detailed insights." },
    { title: "Quick Property Listings", description: "List your property in just a few taps and reach potential buyers or renters instantly." },
    { title: "Direct Communication", description: "Connect with property owners, buyers, and renters without middlemen." },
    { title: "AI-Powered Insights", description: "Smart recommendations and price analytics to help you make informed decisions." }
];

function TrafficHomeOne({ className = '' }) {
    return (
        <section className={`appie-traffic-area pt-140 pb-180 ${className}`}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 ">
                        <div className="appie-traffic-title ">
                            <span>Why Tuyyoo?</span>
                            <h3 className="title p-0">Seamless Property Transactions at Your Fingertips</h3>
                            <p>
                                Tuyyoo is built for simplicity, speed, and convenience. Whether you're searching 
                                for a dream home, listing your property, or managing rentals, Tuyyoo offers 
                                powerful tools and direct communication to make the process effortless.
                            </p>
                        </div>
                        <div className="row p-0">
                            {services.map((service, index) => (
                                <div key={index} className="col-lg-6 col-md-6 p-0">
                                    <div className={`appie-traffic-service mb-30 item-${index + 1} flex`}>
                                        <div className="icon">
                                            <i className="fal fa-check" />
                                        </div>
                                        <div className='p-0 text-left'>
                                            <h5 className="title">{service.title}</h5>
                                            <p>{service.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="traffic-thumb">
                <img
                    className="wow animated fadeInRight"
                    data-wow-duration="2000ms"
                    data-wow-delay="200ms"
                    src='/assets/images/Rectangle5.png'
                    alt="Tuyyoo app interface"
                />
            </div>
        </section>
    );
}

export default TrafficHomeOne;
