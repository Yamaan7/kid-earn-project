"use client";

import React from 'react';
import ExportedImage from 'next-image-export-optimizer';

const EventsGallery = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin: 'auto',
            marginBottom: '40px', // Added margin to the bottom of the gallery
        }}>
            <h2 style={{
                fontSize: '2rem',
                fontWeight: 'bold',
                marginBottom: '20px',
                textAlign: 'center',
            }}>
                Exhibition
            </h2>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                alignItems: 'center',
            }}>
                {[1, 4, 7].map((startIndex, rowIndex) => (
                    <div key={rowIndex} style={{
                        display: 'flex',
                        gap: '20px',
                        justifyContent: 'center',
                    }}>
                        {[0, 1, 2].map((offset) => (
                            <ExportedImage
                                key={startIndex + offset}
                                src={`/images/gallerynew${startIndex + offset}.webp`}
                                width={356}
                                height={280}
                                style={{
                                    width: '356px',
                                    height: '280px',
                                    borderRadius: '15px',
                                }}
                            />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EventsGallery;