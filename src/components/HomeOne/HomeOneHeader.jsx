import React, { useEffect } from 'react';
import Navigation from '../Navigation';

function HomeOneHeader({ 
    darkEnable = false, 
    action, 
    changeMode, 
    dark, 
    className 
}) {
    useEffect(() => {
        // Sticky menu logic (Ensure StickyMenu is properly implemented)
        const handleScroll = () => {
            const header = document.querySelector('.appie-header-area');
            if (window.scrollY > 50) {
                header.classList.add('sticky');
            } else {
                header.classList.remove('sticky');
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`appie-header-area appie-sticky ${className || ''}`}>
            <div className="container">
                <div className="header-nav-box">
                    <div className="row align-items-center">
                        {/* Logo Section */}
                        <div className="col-lg-2 col-md-4 col-sm-5 col-6 order-1 order-sm-1">
                            <div className="appie-logo-box">
                                <a href="/">
                                    <img 
                                        src={darkEnable && dark 
                                            ? "/assets/images/logo.png" 
                                            : "/assets/images/logo-l.png"} 
                                        alt="Logo" 
                                    />
                                </a>
                            </div>
                        </div>

                        {/* Navigation Section */}
                        <div className="col-lg-6 col-md-1 col-sm-1 order-3 order-sm-2">
                            <div className="appie-header-main-menu">
                                <Navigation />
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="col-lg-4 col-md-7 col-sm-6 col-6 order-2 order-sm-3">
                            <div className="appie-btn-box text-right">
                                {darkEnable && (
                                    <span 
                                        className={dark ? "dark__btn__sun" : "dark__btn__mon"} 
                                        onClick={changeMode}
                                    >
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d={dark 
                                                    ? "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" 
                                                    : "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"}
                                            ></path>
                                        </svg>
                                    </span>
                                )}
                                
                                <a className="main-btn ml-30" href="https://apps.apple.com/pk/app/tuyyoo-your-home-simplified/id6739342952">
                                    Download the APP
                                </a>
                                
                                <div 
                                    onClick={action} 
                                    className="toggle-btn ml-30 canvas_open d-lg-none d-block"
                                >
                                    <i className="fa fa-bars" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default HomeOneHeader;
