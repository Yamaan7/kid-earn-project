"use client";

import dynamic from 'next/dynamic';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RightArrowIcon from './RightArrowIcon';

const Slider = dynamic(() => import("react-slick"), { ssr: false });

const TestimonialOne = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
        nextArrow: <span> <RightArrowIcon /> </span>,
        prevArrow: <span></span>,
    };

    return (
        <section className="testimonial-one">
            <div
                className="testimonial-one__pen kidearn-splax"
                data-para-options='{"orientation": "left", "scale": 2.5, "overflow": true}'
            >
                <img src="images/pen-rtl.png" alt="kidearn" />
            </div>
            <div className="container">
                <div className="testimonial-one__area">
                    <div className="testimonial-one__bg"></div>
                    <div
                        className="testimonial-one__bg-shape kidearn-splax"
                        style={{ backgroundImage: 'url(images/testimonial-shape-1.png)' }}
                        data-para-options='{"orientation": "down", "scale": 1.5, "delay": ".3", "transition": "cubic-bezier(0,0,0,1)", "overflow": true}'
                    ></div>
                    <div className="testimonial-one__star-left">
                        <img src="images/star1.png" alt="kidearn" />
                    </div>
                    <div className="testimonial-one__star-right">
                        <img src="images/star2.png" alt="kidearn" />
                    </div>
                    <div className="sec-title text-center">
                        <h6 className="sec-title__tagline">Testimonial</h6>
                        <h3 className="sec-title__title">
                            Parents' words are the key
                            <br /> to happy kids
                        </h3>
                    </div>
                    <Slider {...settings}>
                        <div className="item">
                            <div className="testimonial-one__item">
                                <div className="testimonial-one__item__quote">
                                    Flexible Classes refers to the process of acquiring knowledge or skills through the use of digital
                                    technologies and the internet. Flexible Classes refers to the process flexible Classes refers to the
                                    process
                                </div>
                                <div className="testimonial-one__item__author">
                                    <img src="images/testi-author-1.png" alt="kidearn" />
                                    <h5 className="testimonial-one__item__author__name">Savannah Nguyen</h5>
                                    <p className="testimonial-one__item__author__designation">Martin’s Father</p>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="testimonial-one__item">
                                <div className="testimonial-one__item__quote">
                                    Flexible Classes refers to the process of acquiring knowledge or skills through the use of digital
                                    technologies and the internet. Flexible Classes refers to the process flexible Classes refers to the
                                    process
                                </div>
                                <div className="testimonial-one__item__author">
                                    <img src="images/testi-author-2.png" alt="kidearn" />
                                    <h5 className="testimonial-one__item__author__name">Sarah Taylor</h5>
                                    <p className="testimonial-one__item__author__designation">Martin’s Mother</p>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default TestimonialOne;
