"use client"; // Ensures this is a client-side component

import React from 'react';
import ExportedImage from 'next-image-export-optimizer';

const VideoOne = () => {
    return (
        <section className="video-one">
            <div className="video-one__bg"></div>
            <div
                className="video-one__bg-shape1 kidearn-splax"
                data-para-options='{"orientation": "down", "scale": 1.9, "delay": ".6", "transition": "cubic-bezier(0,0,0,1)", "overflow": true}'
            >
                <ExportedImage src="/images/video-shape-1.png" alt="kidearn" width={100} height={100} />
            </div>
            <div
                className="video-one__bg-shape2 kidearn-splax"
                data-para-options='{"orientation": "up", "scale": 1.7, "delay": ".6", "transition": "cubic-bezier(0,0,0,1)", "overflow": true}'
            >
                <ExportedImage src="/images/video-shape-2.png" alt="kidearn" width={100} height={100} />
            </div>
            <div
                className="video-one__bg-shape3 kidearn-splax"
                data-para-options='{"orientation": "right", "scale": 1.8, "delay": ".6", "transition": "cubic-bezier(0,0,0,1)", "overflow": true}'
            >
                <ExportedImage src="/images/video-shape-3.png" alt="kidearn" width={100} height={100} />
            </div>
            <div
                className="video-one__bg-shape4 kidearn-splax"
                data-para-options='{"orientation": "right", "scale": 1.6, "delay": ".6", "transition": "cubic-bezier(0,0,0,1)", "overflow": true}'
            >
                <ExportedImage src="/images/video-shape-4.png" alt="kidearn" width={100} height={100} />
            </div>
            <div
                className="video-one__bg-shape5 kidearn-splax"
                data-para-options='{"orientation": "left", "scale": 1.6, "delay": ".6", "transition": "cubic-bezier(0,0,0,1)", "overflow": true}'
            >
                <ExportedImage src="/images/video-shape-5.png" alt="kidearn" width={100} height={100} />
            </div>
            <div
                className="video-one__bg-shape6 kidearn-splax"
                data-para-options='{"orientation": "right", "scale": 1.7, "delay": ".6", "transition": "cubic-bezier(0,0,0,1)", "overflow": true}'
            >
                <ExportedImage src="/images/video-shape-6.png" alt="kidearn" width={100} height={100} />
            </div>
            <div
                className="video-one__bg-shape7 kidearn-splax"
                data-para-options='{"orientation": "left", "scale": 1.3, "delay": ".6", "transition": "cubic-bezier(0,0,0,1)", "overflow": true}'
            >
                <ExportedImage src="/images/video-shape-7.png" alt="kidearn" width={100} height={100} />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 d-flex align-items-center">
                        <div className="video-one__content">
                            <h3 className="video-one__content__title">
                                Let’s discover the best campus through a video tour
                            </h3>
                            <a href="contact.html" className="kidearn-btn">
                                <span>Visit Now</span>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="video-one__btn-shape">
                            <div className="video-one__btn">
                                <ExportedImage src="/images/video-bg-1.jpg" alt="kidearn" width={600} height={400} />
                                <a href="https://www.youtube.com/watch?v=0MuL8fd3pb8" className="video-popup">
                                    <i className="fa fa-play"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VideoOne;
