import React, { useState } from 'react';

function FaqHomeOne({ className }) {
    const [showQues, setQues] = useState(1);

    const openQuestion = (value) => {
        setQues(value);
    };

    return (
        <>
            <section className={`appie-faq-area pb-95 ${className || ''}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="appie-section-title text-center">
                                <h3 className="appie-title">Frequently Asked Questions</h3>
                                <p>Find answers to common questions about Tuyyoo.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {/* Left Column */}
                        <div className="col-lg-6">
                            <div className="faq-accordion wow fadeInRight mt-30" data-wow-duration="1500ms">
                                <div className="accrodion-grp animated fadeIn faq-accrodion wow" data-wow-duration="1500ms" data-grp-name="faq-accrodion">
                                    
                                    {/* Question 1 */}
                                    <div onClick={() => openQuestion(1)} className={`accrodion ${showQues === 1 ? 'active' : ''}`}>
                                        <div className="accrodion-inner">
                                            <div className="accrodion-title">
                                                <h4>How can I list my property on Tuyyoo?</h4>
                                            </div>
                                            <div className="accrodion-content" style={{ display: showQues === 1 ? 'block' : 'none' }}>
                                                <div className="inner">
                                                    <p>
                                                        To list your property, Download and sign up on Tuyyoo, navigate to the "Add Property" section, and fill in the necessary details such as location, pricing, and images.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Question 2 */}
                                    <div onClick={() => openQuestion(2)} className={`accrodion ${showQues === 2 ? 'active' : ''}`}>
                                        <div className="accrodion-inner">
                                            <div className="accrodion-title">
                                                <h4>Is there a fee for listing properties?</h4>
                                            </div>
                                            <div className="accrodion-content" style={{ display: showQues === 2 ? 'block' : 'none' }}>
                                                <div className="inner">
                                                    <p>
                                                        Tuyyoo offers both free and premium listing options. Free listings allow basic visibility, while premium listings provide higher exposure with added features.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="col-lg-6">
                            <div className="faq-accordion wow fadeInRight mt-30" data-wow-duration="1500ms">
                                <div className="accrodion-grp animated fadeIn faq-accrodion wow" data-wow-duration="1500ms" data-grp-name="faq-accrodion">
                                    
                                    {/* Question 3 */}
                                    <div onClick={() => openQuestion(3)} className={`accrodion ${showQues === 3 ? 'active' : ''}`}>
                                        <div className="accrodion-inner">
                                            <div className="accrodion-title">
                                                <h4>How does Tuyyoo handle property management?</h4>
                                            </div>
                                            <div className="accrodion-content" style={{ display: showQues === 3 ? 'block' : 'none' }}>
                                                <div className="inner">
                                                    <p>
                                                        Tuyyoo provides a property management dashboard where owners can track inquiries, manage bookings, and communicate with tenants efficiently.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Question 4 */}
                                    <div onClick={() => openQuestion(4)} className={`accrodion ${showQues === 4 ? 'active' : ''}`}>
                                        <div className="accrodion-inner">
                                            <div className="accrodion-title">
                                                <h4>Can I receive notifications about new inquiries?</h4>
                                            </div>
                                            <div className="accrodion-content" style={{ display: showQues === 4 ? 'block' : 'none' }}>
                                                <div className="inner">
                                                    <p>
                                                        Yes, Tuyyoo sends real-time email and push notifications whenever you receive an inquiry or booking request for your property.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        {/* Contact Section */}
                        <div className="col-lg-12">
                            <div className="faq-text text-center pt-40">
                                <p>
                                    Can't find an answer?{' '}
                                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=Office@tuyyoo.com" target="_blank" rel="noopener noreferrer">
                                        Email us
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default FaqHomeOne;
