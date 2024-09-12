"use client";

import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import Image from 'next/image';
import { useParallax } from 'react-scroll-parallax';

const MailSubscriptionSection = () => {
  const parallaxBorder = useParallax({
    speed: -5,
    scale: [1, 1.2],
    easing: 'cubic-bezier(0,0,0,1)',
  });

  const parallaxShape = useParallax({
    speed: 5,
    scale: [1, 1.5],
    easing: 'cubic-bezier(0,0,0,1)',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
  };

  return (
    <ParallaxProvider>
      <section className="mail-one">
        <div className="mail-one__bg-shape" />
        <div ref={parallaxBorder.ref} className="mail-one__border-shape" />
        <div className="container">
          <div className="mail-one__area">
            <div className="mail-one__bg" />
            <div className="mail-one__content">
              <h3 className="mail-one__title">
                Subscribe to our newsletter
                <br /> for daily updates
              </h3>
              <form onSubmit={handleSubmit} className="mail-one__form">
                <input
                  type="email"
                  name="EMAIL"
                  placeholder="Email Address"
                  required
                />
                <button type="submit" className="kidearn-btn">
                  <span>Subscribe</span>
                </button>
              </form>
              <div className="mc-form__response"></div>
            </div>
            <div ref={parallaxShape.ref} className="mail-one__shape">
              <Image
                src="/images/mail-shape-3.png"
                alt="kidearn"
                width={200}
                height={200}
              />
            </div>
          </div>
        </div>
        <style jsx>{`
          .mail-one {
            position: relative;
            overflow: hidden;
          }
          .mail-one__bg-shape {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-image: url('/images/mail-shape-1-rtl.png');
            background-size: cover;
            background-position: center;
            z-index: -1;
          }
          .mail-one__border-shape {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-image: url('/images/mail-shape-2.png');
            background-size: cover;
            background-position: center;
            z-index: -1;
          }
          .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 2rem;
          }
          .mail-one__area {
            position: relative;
            background-color: #ffffff;
            border-radius: 10px;
            padding: 3rem;
          }
          .mail-one__title {
            font-size: 2rem;
            margin-bottom: 1.5rem;
          }
          .mail-one__form {
            display: flex;
            gap: 1rem;
          }
          .mail-one__form input {
            flex-grow: 1;
            padding: 0.5rem 1rem;
            border: 1px solid #ccc;
            border-radius: 5px;
          }
          .kidearn-btn {
            // background-color: #007bff;
            color: white;
            border: none;
            padding: 0.5rem 1rem;
            border-radius: 5px;
            cursor: pointer;
          }
          .mail-one__shape {
            position: absolute;
            bottom: -50px;
            right: -50px;
          }
        `}</style>
      </section>
    </ParallaxProvider>
  );
};

export default MailSubscriptionSection;
