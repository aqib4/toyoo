import React, { useEffect } from 'react';
import HomeOneHeader from '../HomeOne/HomeOneHeader';
import Drawer from '../Mobile/Drawer';
import useToggle from '../../Hooks/useToggle';
import FooterHomeOne from '../HomeOne/FooterHomeOne';
import BackToTop from '../BackToTop';

function DetailsPrivacy() {
    const [drawer, drawerAction] = useToggle(false);
    const [darkMode, setDarkMode] = useToggle(true);

    useEffect(() => {
        document.body.classList.add('appie-init');
        if (darkMode) {
            document.body.classList.add('appie-dark');
        } else {
            document.body.classList.remove('appie-dark');
        }
        return () => {
            document.body.classList.remove('appie-dark');
        };
    });

    return (
        <>
            <HomeOneHeader
                className={darkMode ? 'appie-header-area-dark' : ''}
                dark={darkMode}
                darkEnable
                changeMode={setDarkMode.toggle}
                action={drawerAction.toggle}
            />
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <section className={`appie-service-details-area pt-100 pb-100 ${darkMode ? 'appie-dark' : ''}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="service-details-content">
                                <div className="thumb">
                                    <img src="/assets/images/Rectangle5.png" alt="Privacy Policy" />
                                </div>
                                <div className="content">
                                    <h3 className="title">Privacy Policy</h3>
                                    <p>
                                        This Privacy Policy describes Our policies and procedures on the collection, use, and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
                                    </p>
                                    <p>
                                        We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.
                                    </p>

                                    <h4>Interpretation and Definitions</h4>
                                    <p>
                                        <strong>Interpretation:</strong> The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or plural.
                                    </p>
                                    <p>
                                        <strong>Definitions:</strong> For the purposes of this Privacy Policy, the following definitions apply: Account, Affiliate, Application, Company, Country, Device, Personal Data, Service, Service Provider, Usage Data, and You (the individual accessing or using the Service).
                                    </p>

                                    <h4>Collecting and Using Your Personal Data</h4>
                                    <p>
                                        While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:
                                    </p>
                                    <ul>
                                        <li>Usage Data</li>
                                        <li>Personal Data</li>
                                    </ul>
                                    <p>
                                        Usage Data is collected automatically when using the Service and may include information such as Your Device's Internet Protocol address (IP address), browser type, browser version, pages of our Service visited, and other diagnostic data.
                                    </p>

                                    <h4>Use of Your Personal Data</h4>
                                    <p>
                                        The Company may use Personal Data for various purposes, such as providing and maintaining the Service, managing Your Account, contacting You, and other necessary activities to improve the Service.
                                    </p>

                                    <h4>Retention of Your Personal Data</h4>
                                    <p>
                                        The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy.
                                    </p>
                                    <p>
                                        If you wish to delete your Personal Data, you have the right to request it.
                                    </p>

                                    <h4>Security of Your Personal Data</h4>
                                    <p>
                                        While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.
                                    </p>

                                    <h4>Contact Us</h4>
                                    <p>
                                        If you have any questions about this Privacy Policy, You can contact us <a href='/contact'>here</a>.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="service-details-sidebar mr-50">
                                <div className="service-category-widget">
                                    <ul>
                                        <li>
                                            <i className="fal fa-home"></i>Privacy Policy
                                        </li>
                                        <li className={darkMode ? 'appie-header-area-dark' : ''}>
                                            <i className="fal fa-calendar"></i>Last Updated: January 28, 2025
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <FooterHomeOne className={darkMode ? 'appie-footer-area-dark' : ''} dark={darkMode} darkEnable changeMode={setDarkMode.toggle} action={drawerAction.toggle} />
            <BackToTop />
        </>
    );
}

export default DetailsPrivacy;
