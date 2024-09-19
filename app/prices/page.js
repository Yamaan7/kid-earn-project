"use client";

import React from 'react'
import Topbar from '../components/Topbar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Link from 'next/link'
import ExportedImage from 'next-image-export-optimizer';

const page = () => {
    return (
        <div>
            <Topbar />
            <Header />
            <section className="page-header">
                <div className="page-header__bg"></div>
                <div className="container">
                    <h2 className="page-header__title">Pricing</h2>
                    <ul className="kidearn-breadcrumb list-unstyled">
                        <li><Link href="/">Home</Link></li>
                        <li><span>Pricing</span></li>
                    </ul>
                </div>
            </section>

            <section className="pricing-one">
                <div className="container">
                    <div className="sec-title text-center">
                        <h6 className="sec-title__tagline">Our Pricings</h6>
                        <h3 className="sec-title__title">Select a plan according to <br /> your requirements</h3>
                    </div>

                    <div className="row gutter-y-30">
                        <PricingCard
                            accentColor="#F25334"
                            tagline="Open Play"
                            month="8 - 1 Year"
                            icon="/images/crawling.png"
                            price="Free"
                        />
                        <PricingCard
                            accentColor="#2390FF"
                            tagline="Toddler Program"
                            month="9 - 3 Years"
                            icon="/images/fun.png"
                            price="$20"
                        />
                        <PricingCard
                            accentColor="#75C137"
                            tagline="Kindergarten Program"
                            month="3 - 7 Years"
                            icon="/images/playtime.png"
                            price="$30"
                        />
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default page

const PricingCard = ({ accentColor, tagline, month, icon, price }) => {
    const getIconFilter = (color) => {
        switch (color) {
            case "#F25334": // Orange
                return "invert(39%) sepia(95%) saturate(1866%) hue-rotate(339deg) brightness(100%) contrast(105%)";
            case "#2390FF": // Blue
                return "invert(46%) sepia(98%) saturate(2242%) hue-rotate(198deg) brightness(102%) contrast(101%)";
            case "#75C137": // Green
                return "invert(58%) sepia(10%) saturate(2288%) hue-rotate(58deg) brightness(97%) contrast(84%)";
            default:
                return "none";
        }
    };

    return (
        <div className="col-md-12 col-lg-4 d-flex">
            <div className="pricing-one__card d-flex flex-column" style={{
                '--accent-color': accentColor,
                height: '100%', // Ensure full height
                width: '100%',
            }}>
                <div className="pricing-one__card__content" style={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '450px', // Fixed height, adjust as needed
                }}>
                    <h4 className="pricing-one__card__tagline">{tagline}</h4>
                    <h4 className="pricing-one__card__month">{month}</h4>
                    <div className="pricing-one__card__icon">
                        <ExportedImage
                            src={icon}
                            alt={tagline}
                            width={35}
                            height={35}
                            style={{
                                width: '35px',
                                height: '35px',
                                filter: getIconFilter(accentColor)
                            }}
                        />
                    </div>
                    <ul className="list-unstyled pricing-one__card__list" style={{
                        flexGrow: 1,
                        overflowY: 'auto', // Allow scrolling if content exceeds fixed height
                    }}>
                        <li><i className="fa fa-check-circle"></i>Open Play</li>
                        <li><i className="fa fa-check-circle"></i>Parent Supervision</li>
                        <li><i className="fa fa-check-circle"></i>Unlimited Playtime</li>
                        <li><i className="fa fa-check-circle"></i>Adult Entry is Free</li>
                    </ul>
                    <h3 className="pricing-one__card__price mt-auto">{price}</h3>
                </div>
            </div>
        </div>
    );
};