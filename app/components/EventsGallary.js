"use client";

import React from 'react';
import ExportedImage from 'next-image-export-optimizer';

const EventsGallery = () => {
    const galleryImages = [
        '/images/gallery-1-1.jpg',
        '/images/gallery-1-2.jpg',
        '/images/gallery-1-3.jpg',
        '/images/gallery-1-4.jpg',
        '/images/gallery-1-5.jpg',
        '/images/gallery-1-6.jpg',
        '/images/gallery-1-7.jpg',
        '/images/gallery-1-8.jpg',
        '/images/gallery-1-9.jpg',
    ];

    return (
        <section className="gallery-one gallery-one--page">
            <div className="container">
                <div className="row">
                    {galleryImages.map((image, index) => (
                        <div key={index} className="col-md-6 col-lg-4">
                            <div className="gallery-one__card">
                                <ExportedImage
                                    src={image}
                                    alt=""
                                    width={370}
                                    height={367}
                                />
                                <div className="gallery-one__card__hover">
                                    <a href={`assets/images/gallery/${image.split('/').pop()}`} className="img-popup">
                                        <span className="gallery-one__card__icon"></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EventsGallery;