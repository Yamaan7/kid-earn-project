"use client";

import dynamic from 'next/dynamic';
import Image from 'next/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RightArrowIcon from './RightArrowIcon';

const Slider = dynamic(() => import("react-slick"), { ssr: false });

const TestimonialTwo = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        arrows: true,
        nextArrow: <span className="icon-right-arrow"><RightArrowIcon /></span>,
        prevArrow: <span className="icon-left-arrow"></span>,
    };

    return (
        <section className="testimonial-one testimonial-one--home-two testimonial-one--about-page">
            <div className="testimonial-one__left-shape kidearn-splax" data-para-options='{"orientation": "left", "scale": 2.5, "overflow": true}'>
                <Image src="/images/testimonial-shape-2.png" alt="kidearn" width={100} height={100} layout="responsive" />
            </div>
            <div className="testimonial-one__right-shape kidearn-splax" data-para-options='{"orientation": "right", "scale": 2.5, "overflow": true}'>
                <Image src="/images/testimonial-shape-3.png" alt="kidearn" width={100} height={100} layout="responsive" />
            </div>
            <div className="container">
                <div className="testimonial-one__area">
                    <div className="testimonial-one__bg"></div>
                    <div
                        className="testimonial-one__bg-shape kidearn-splax"
                        style={{ backgroundImage: "url(/images/testimonial-shape-4.png)" }}
                        data-para-options='{"orientation": "right", "scale": 1.2, "delay": ".3", "transition": "cubic-bezier(0,0,0,1)", "overflow": true}'
                    ></div>
                    <div className="sec-title text-center">
                        <h6 className="sec-title__tagline">Testimonial</h6>
                        <h3 className="sec-title__title">Parents' words are the<br /> key to happy kids</h3>
                    </div>
                    <Slider {...settings}>
                        <div className="item">
                            <div className="testimonial-one__item">
                                <div className="testimonial-one__item__quote">
                                    Flexible Classes refers to the process of acquiring knowledge or skills through the
                                    use of digital technologies and the internet.
                                    Flexible Classes refers to the process flexible Classes refers to the process
                                </div>
                                <div className="testimonial-one__item__author">
                                    <Image src="/images/testi-author-1.png" alt="kidearn" width={60} height={60} />
                                    <h5 className="testimonial-one__item__author__name">Savannah Nguyen</h5>
                                    <p className="testimonial-one__item__author__designation">Martin's Father</p>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="testimonial-one__item">
                                <div className="testimonial-one__item__quote">
                                    Flexible Classes refers to the process of acquiring knowledge or skills through the
                                    use of digital technologies and the internet.
                                    Flexible Classes refers to the process flexible Classes refers to the process
                                </div>
                                <div className="testimonial-one__item__author">
                                    <Image src="/images/testi-author-2.png" alt="kidearn" width={60} height={60} />
                                    <h5 className="testimonial-one__item__author__name">Sarah Taylor</h5>
                                    <p className="testimonial-one__item__author__designation">Martin's Mother</p>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default TestimonialTwo;