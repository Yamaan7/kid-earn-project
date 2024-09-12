"use client";

import React from 'react';
// import styles from './AboutOne.module.css'; // Assuming you're using CSS modules

const AboutOne = () => {
    return (
        <section className="about-one">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 wow fadeInLeft" data-wow-delay="200ms">
                        <div className="about-one__content">
                            <div className="sec-title text-left">
                                <h6 className="sec-title__tagline">About Us</h6>
                                <h3 className="sec-title__title">
                                    Our passion is childhood,<br /> and we’re in kindergarten
                                </h3>
                            </div>
                            <p className="about-one__content__text">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                                scrambled it to make a type specimen book. It has survived not only five centuries, but also
                            </p>
                            <a href="about.html" className="kidearn-btn">
                                <span>Learn More</span>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-one__image">
                            <div
                                className="about-one__image__one kidearn-tilt"
                                data-tilt-options='{"glare": false, "maxglare": 0, "maxtilt": 5, "speed": 700, "scale": 1}'
                            >
                                <img src="images/about-1-1.jpg" alt="kidearn" />
                            </div>
                            <div className="about-one__image__border wow fadeInUp" data-wow-delay="200ms">
                                <img src="images/about-1-border.jpg" alt="kidearn" />
                            </div>
                            <div
                                className="about-one__image__leaf kidearn-splax"
                                data-para-options='{"orientation": "left", "scale": 1.5, "overflow": true}'
                            >
                                <img src="images/about-1-leaf-rtl.png" alt="kidearn" />
                            </div>
                            <div className="about-one__image__ball wow fadeInUp" data-wow-delay="100ms"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutOne;
