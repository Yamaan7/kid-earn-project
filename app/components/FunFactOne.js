import React, { useEffect } from 'react';
import Image from 'next/image';
import WOW from 'wow.js';
import 'wow.js/css/libs/animate.css'; // Import WOW.js styles
import $ from 'jquery';
import 'jquery-parallax'; // Import jQuery Parallax

const FunFactOne = () => {
    useEffect(() => {
        // Initialize WOW.js
        new WOW().init();

        // Initialize Parallax
        $(document).ready(() => {
            // Check if parallax function exists
            if ($('.kidearn-splax').parallax) {
                $('.kidearn-splax').parallax();
            } else {
                console.error('Parallax function is not available');
            }
        });

        // Cleanup function
        return () => {
            // Any cleanup code for parallax or other libraries can go here
        };
    }, []);
}

const FunfactOne = () => {
    useEffect(() => {
        // Initialize WOW.js
        const wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: true,
            live: true
        });
        wow.init();

        // Initialize count animation
        $('.count-text').each(function () {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).data('stop')
            }, {
                duration: $(this).data('speed'),
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now * 10) / 10);
                }
            });
        });

        // Initialize parallax effect (assuming you're using a library like parallax.js)
        $('.kidearn-splax').parallax();

        // Cleanup function
        return () => {
            // Clean up any event listeners or animations if necessary
        };
    }, []);

    return (
        <section className="funfact-one">
            <div className="funfact-one__shape1 kidearn-splax" data-para-options='{"orientation": "down", "scale": 1.9, "delay": ".3", "transition": "cubic-bezier(0,0,0,1)", "overflow": true}'>
                <Image src="/images/funfact-shape-1.png" alt="kidearn" width={100} height={100} layout="responsive" />
            </div>
            <div className="funfact-one__shape2 kidearn-splax" data-para-options='{"orientation": "right", "scale": 1.9, "delay": ".4", "transition": "cubic-bezier(0,0,0,1)", "overflow": true}'>
                <Image src="/images/funfact-shape-2.png" alt="kidearn" width={100} height={100} layout="responsive" />
            </div>
            <div className="funfact-one__shape3 kidearn-splax" data-para-options='{"orientation": "right", "scale": 1.9, "delay": ".3", "transition": "cubic-bezier(0,0,0,1)", "overflow": true}'>
                <Image src="/images/funfact-shape-3.png" alt="kidearn" width={100} height={100} layout="responsive" />
            </div>
            <div className="funfact-one__shape4 kidearn-splax" data-para-options='{"orientation": "left", "scale": 1.9, "delay": ".4", "transition": "cubic-bezier(0,0,0,1)", "overflow": true}'>
                <Image src="/images/funfact-shape-4.png" alt="kidearn" width={100} height={100} layout="responsive" />
            </div>
            <div className="funfact-one__shape5 kidearn-splax" data-para-options='{"orientation": "left", "scale": 1.6, "delay": ".5", "transition": "cubic-bezier(0,0,0,1)", "overflow": true}'>
                <Image src="/images/funfact-shape-5.png" alt="kidearn" width={100} height={100} layout="responsive" />
            </div>
            <div className="container">
                <div className="row gutter-y-30">
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                        <div className="funfact-one__item text-center">
                            <div className="funfact-one__icon" style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                textAlign: 'center',
                            }}><span>
                                    <Image src="/images/graduated.png" width={70} height={70} style={{ filter: 'invert(1)' }} />
                                </span></div>
                            <div className="funfact-one__count">
                                <span className="count-box">
                                    <span className="count-text" data-stop="30.3" data-speed="1500"></span>
                                </span>k
                            </div>
                            <p className="funfact-one__title">Student Enrolled</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                        <div className="funfact-one__item funfact-one__item--smnone text-center">
                            <div className="funfact-one__icon" style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                textAlign: 'center',
                            }}><span>
                                    <Image src="/images/online-learning.png" width={70} height={70} style={{ filter: 'invert(1)' }} />
                                </span></div>
                            <div className="funfact-one__count">
                                <span className="count-box">
                                    <span className="count-text" data-stop="40.5" data-speed="1500"></span>
                                </span>k
                            </div>
                            <p className="funfact-one__title">Class completed</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                        <div className="funfact-one__item text-center">
                            <div className="funfact-one__icon" style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                textAlign: 'center',
                            }}><span>
                                    <Image src="/images/rating.png" width={70} height={70} style={{ filter: 'invert(1)' }} />
                                </span></div>
                            <div className="funfact-one__count">
                                <span className="count-box">
                                    <span className="count-text" data-stop="88.9" data-speed="1500"></span>
                                </span>%
                            </div>
                            <p className="funfact-one__title">satisfaction rate</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                        <div className="funfact-one__item funfact-one__item--noborder text-center">
                            <div className="funfact-one__icon" style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                textAlign: 'center',
                            }}><span>
                                    <Image src="/images/instructor.png" width={70} height={70} style={{ filter: 'invert(1)' }} />
                                </span></div>
                            <div className="funfact-one__count">
                                <span className="count-box">
                                    <span className="count-text" data-stop="6.30" data-speed="1500"></span>
                                </span>+
                            </div>
                            <p className="funfact-one__title">Top instructors</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FunfactOne;