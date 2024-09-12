import React, { useState } from 'react';

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="hamburger-container">
            {/* Button to trigger the offcanvas */}
            <button
                style={{
                    backgroundColor: 'white',
                    color: 'black',
                    border: 'none',
                }}
                className="btn btn-primary"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasWithBothOptions"
                aria-controls="offcanvasWithBothOptions"
            >
                {/* Hamburger menu icon */}
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="hamburger-icon"
                >
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
            </button>
            {/* <button className="hamburger-icon" onClick={toggleMenu} aria-label="Toggle menu">
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
            </button> */}
            {isOpen && (
                <div className="menu-overlay">
                    <div className="navbar">
                        <ul className="Header-NavContainer">
                            <li className="home-li">Home</li>
                            <li>About</li>
                            <li>Pages</li>
                            <li>Events</li>
                            <li>Programs</li>
                            <li>Shop</li>
                            <li>News</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default HamburgerMenu;