"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const bannerImages = [
        { src: '/images/hero-banner-1-rtl.jpg', alt: 'Hero Banner 1' },
        { src: '/images/hero-banner-1-2-rtl.jpg', alt: 'Hero Banner 2' },
        { src: '/images/hero-banner-1-3-rtl.jpg', alt: 'Hero Banner 3' },
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % bannerImages.length);
        }, 7000);

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="banner-one">
            <div className="banner-one__carousel">
                {bannerImages.map((image, index) => (
                    <div
                        key={index}
                        className={`banner-one__item ${index === currentSlide ? 'active' : ''}`}
                        style={{
                            opacity: index === currentSlide ? 1 : 0,
                            transition: 'opacity 0.5s ease-in-out',
                            position: index === currentSlide ? 'relative' : 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                        }}
                    >
                        <div className="banner-one__bg">
                            <Image src={image.src} alt={image.alt} layout="fill" objectFit="cover" />
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="banner-one__content">
                                        <div className="banner-one__shape2"></div>
                                        <div className="banner-one__shape3"></div>
                                        <div className="banner-one__shape4">
                                            <Image src="/images/banner-1-shape-2.png" alt="kidearn" width={651} height={666} />
                                        </div>
                                        <div className="banner-one__shape5">
                                            <div className="banner-one__shape5-inner"></div>
                                        </div>
                                        <div className="banner-one__shape6">
                                            <div className="banner-one__shape6-inner"></div>
                                        </div>
                                        <div className="banner-one__content__bg"></div>
                                        <h2 className="banner-one__content__title">
                                            Embrace<br /> confidence<br /> for a lifetime
                                        </h2>
                                        <Link href="/contact" className="kidearn-btn">
                                            <span>Book a Visit</span>
                                        </Link>
                                        <div
                                            className="banner-one__shape1 kidearn-splax"
                                            style={{ backgroundImage: "url(/images/banner-1-shape-1.png)" }}
                                            data-para-options='{"orientation": "down", "scale": 1.9, "overflow": true}'
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Banner;