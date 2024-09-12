"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const MobileNav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNav = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`mobile-nav__wrapper ${isOpen ? 'active' : ''}`}>
            <div className="mobile-nav__overlay mobile-nav__toggler" onClick={toggleNav}></div>
            <div className="mobile-nav__content">
                <span className="mobile-nav__close mobile-nav__toggler" onClick={toggleNav}>
                    <i className="fa fa-times"></i>
                </span>

                <div className="logo-box">
                    <Link href="/" aria-label="logo image">
                        <Image src="/images/logo-light.png" width={155} height={50} alt="Logo" />
                    </Link>
                </div>

                <div className="mobile-nav__container">
                    {/* Add your mobile navigation menu items here */}
                </div>

                <ul className="mobile-nav__contact list-unstyled">
                    <li>
                        <i className="fa fa-envelope"></i>
                        <a href="mailto:needhelp@kidearn.com">needhelp@kidearn.com</a>
                    </li>
                    <li>
                        <i className="fa fa-phone-alt"></i>
                        <a href="tel:666-888-0000">666 888 0000</a>
                    </li>
                </ul>

                <div className="mobile-nav__social">
                    {[
                        { href: 'https://twitter.com', icon: 'fa-twitter', label: 'Twitter' },
                        { href: 'https://facebook.com', icon: 'fa-facebook', label: 'Facebook' },
                        { href: 'https://pinterest.com', icon: 'fa-pinterest-p', label: 'Pinterest' },
                        { href: 'https://instagram.com', icon: 'fa-instagram', label: 'Instagram' },
                    ].map((social, index) => (
                        <a key={index} href={social.href}>
                            <i className={`fab ${social.icon}`} aria-hidden="true"></i>
                            <span className="sr-only">{social.label}</span>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MobileNav;