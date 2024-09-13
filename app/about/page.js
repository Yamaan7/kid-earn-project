"use client";

import Link from 'next/link'
import Image from 'next/image';
import React from 'react'
import Tilt from 'react-tilt';
import Banner from '../components/Banner'
import Header from '../components/Header'
import Footer from '../components/Footer'
import OffcanvasNavbar from '../components/OffCanvasNavbar'
import Topbar from '../components/Topbar'
import { FaTrophy } from 'react-icons/fa';  // FontAwesome Trophy icon
import { GiMoneyStack } from 'react-icons/gi';  // Game Icons for Interest Rate equivalent
import FunfactOne from '../components/FunFactOne';
import Testimonials from '../components/TestimonialTwo';
import TeamTwoSection from '../components/TeamTwoSection';
import ClientCarousel from '../components/LastSectionAbout';


const page = () => {
    return (
        <>
            <Topbar />
            <Header />
            {/* About Us Header Image */}
            <section className="page-header">
                <div className="page-header__bg"></div>
                <div className="container">
                    <h2 className="page-header__title">About us</h2>
                    <ul className="kidearn-breadcrumb list-unstyled">
                        <li>
                            <Link href="/">
                                Home
                            </Link>
                        </li>
                        <li>
                            <span>About</span>
                        </li>
                    </ul>
                </div>
            </section>





            <section className="about-four">
                <div className="container">
                    <div className="row">
                        {/* Left Column: Images */}
                        <div className="col-xl-6 wow fadeInLeft" data-wow-delay="300ms">
                            <div className="about-four__image">
                                <div className="about-four__image__shape1">
                                    {/* Image Shape */}
                                    <Image
                                        src="/images/about-4-shape-1.png"
                                        alt="Kidearn Shape 1"
                                        width={100}
                                        height={100} // Adjust based on actual image size
                                    />
                                </div>

                                <div className="about-four__image__one kidearn-tilt">
                                    {/* Main Image */}
                                    <Image
                                        src="/images/about-4-1.jpg"
                                        alt="Kidearn Main Image"
                                        width={500}
                                        height={500} // Adjust based on actual image size
                                    />
                                    <div className="about-four__image__one-bottom"></div>
                                </div>

                                {/* Second Image */}
                                <div className="about-four__image__two wow fadeInUp" data-wow-delay="500ms">
                                    <Image
                                        src="/images/about-4-2.jpg"
                                        alt="Kidearn Image 2"
                                        width={500}
                                        height={500} // Adjust based on actual image size
                                    />
                                </div>

                                {/* Background Shape */}
                                <div className="about-four__image__bg-shape">
                                    <Image
                                        src="/images/about-4-shape-2.png"
                                        alt="Kidearn Background Shape"
                                        width={500}
                                        height={500} // Adjust based on actual image size
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Content */}
                        <div className="col-xl-6 wow fadeInRight" data-wow-delay="200ms">
                            <div className="about-four__content">
                                <div className="sec-title text-left">
                                    <h6 className="sec-title__tagline">About Us</h6>
                                    <h3 className="sec-title__title">Welcome to best Kidearn for your child</h3>
                                </div>

                                <p className="about-four__content__text">
                                    Lorem Ipsum is simply dummy text of the printing and<br />
                                    typesetting industry. Lorem Ipsum has been the industry's
                                </p>

                                {/* First Info Block */}
                                <div className="about-four__info" style={{ "--accent-color": "#F25334" }}>
                                    <div className="about-four__info__icon">
                                        <span>
                                            <img src="/images/trophy2.png" alt="trophy-icon" width={80} height={80} />
                                        </span>
                                        {/* Trophy icon */}
                                    </div>
                                    <h3 className="about-four__info__title" style={{ fontWeight: 'bold' }}>Award Winning Time</h3>
                                    <p className="about-four__info__text">
                                        Lorem Ipsum is simply dummy text of the printing and<br />
                                        typesetting industry. Lorem Ipsum
                                    </p>
                                </div>

                                {/* Second Info Block */}
                                <div className="about-four__info" style={{ "--accent-color": "#2390FF" }}>
                                    <div className="about-four__info__icon">
                                        <span>
                                            <img src="/images/interest-rate.png" alt="interest-rate-icon" width={80} height={80} />
                                        </span>
                                        {/* Interest rate icon */}
                                    </div>
                                    <h3 className="about-four__info__title" style={{ fontWeight: 'bold' }}>Highest Success Rates</h3>
                                    <p className="about-four__info__text">
                                        Lorem Ipsum is simply dummy text of the printing and<br />
                                        typesetting industry. Lorem Ipsum
                                    </p>
                                </div>

                                {/* Learn More Button */}
                                <Link href="/about" className="kidearn-btn">
                                    <span>Learn More</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>





            <section
                className="cta-one cta-one--about-page">
                <div className="container">
                    <div className="cta-one__inner">
                        <div
                            className="cta-one__shape1 kidearn-splax"
                            data-para-options={{
                                orientation: "right",
                                scale: 1.5,
                                delay: ".4",
                                transition: "cubic-bezier(0,0,0,1)",
                                overflow: true,
                            }}
                        >
                            <Image src="/images/cta-shape-1.png" alt="kidearn" width={296} height={360} />
                        </div>
                        <div
                            className="cta-one__shape2 kidearn-splax"
                            data-para-options={{
                                orientation: "down",
                                scale: 1.5,
                                delay: ".4",
                                transition: "cubic-bezier(0,0,0,1)",
                                overflow: true,
                            }}
                        >
                            <Image src="/images/cta-shape-2.png" alt="kidearn" width={82} height={90} />
                        </div>
                        <div className="row">
                            <div className="col-lg-6 wow fadeInLeft" data-wow-delay="100ms">
                                <div className="cta-one__content">
                                    <h3 className="cta-one__title" style={{ fontWeight: 'bold' }}>How to enroll your child to a class?</h3>
                                    <a href="/about" className="kidearn-btn">
                                        <span>Visit Now</span>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="cta-one__one wow fadeInUp" data-wow-delay="300ms">
                                    <Image src="/images/cta-1.png" alt="kidearn" width={435} height={492} />
                                    <div className="cta-one__one__text">
                                        All in
                                        <br /> One
                                    </div>
                                </div>
                                <div className="cta-one__thumb">
                                    <div className="cta-one__thumb__two">
                                        <Image src="/images/cta-2.png" alt="kidearn" width={535} height={329} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>





            <FunfactOne />
            <Testimonials />
            <TeamTwoSection />
            <ClientCarousel />



            <Footer />
        </>
    )
}

export default page