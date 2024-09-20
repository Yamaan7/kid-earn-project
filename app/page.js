"use client";

import { ParallaxProvider } from 'react-scroll-parallax';

import Topbar from "./components/Topbar";
import Header from "./components/Header";
import Banner from "./components/Banner";
import ServiceOne from "./components/ServiceOne";
import AboutOne from "./components/AboutOne";
import TestimonialOne from "./components/TestimonialOne";
import VideoOne from "./components/VideoOne";
import ProgramOne from "./components/ProgramOne";
import TeamOne from "./components/TeamOne";
import MailSubscriptionSection from "./components/MailOne";
import BlogThree from "./components/BlogThree";
import Footer from "./components/Footer";
import MobileNav from "./components/MobileNav";
import SearchPopup from "./components/SearchPopUp";
import ExportedImage from 'next-image-export-optimizer';
import register from './register/page';
import Link from 'next/link';

export default function Home() {
  return (
    <ParallaxProvider>
      <div className="custom-cursor">
        <div className="page-wrapper">
          <Topbar />
          <Header />
          <Banner />
          <ServiceOne />
          <AboutOne />
          <TestimonialOne />
          <VideoOne />
          <ProgramOne />
          <TeamOne />
          <MailSubscriptionSection />
          <section className="pricing-one">
            <div className="container">
              <div className="sec-title text-center">
                <h6 className="sec-title__tagline">Our Pricings</h6>
                <h3 className="sec-title__title">Select a plan according to <br /> your requirements</h3>
              </div>

              <div className="row gutter-y-30">
                <PricingCard
                  accentColor="#F25334"
                  tagline="Open Play"
                  month="8 - 1 Year"
                  icon="/images/crawling.png"
                  price="Free"
                />
                <PricingCard
                  accentColor="#2390FF"
                  tagline="Toddler Program"
                  month="9 - 3 Years"
                  icon="/images/fun.png"
                  price="$20"
                />
                <PricingCard
                  accentColor="#75C137"
                  tagline="Kindergarten Program"
                  month="3 - 7 Years"
                  icon="/images/playtime.png"
                  price="$30"
                />
              </div>
            </div>
          </section>
          <BlogThree />
          <Footer />
        </div>
        <MobileNav />
        <SearchPopup />

      </div>
    </ParallaxProvider>
  );
}




const PricingCard = ({ accentColor, tagline, month, icon, price }) => {
  const getIconFilter = (color) => {
    switch (color) {
      case "#F25334": // Orange
        return "invert(39%) sepia(95%) saturate(1866%) hue-rotate(339deg) brightness(100%) contrast(105%)";
      case "#2390FF": // Blue
        return "invert(46%) sepia(98%) saturate(2242%) hue-rotate(198deg) brightness(102%) contrast(101%)";
      case "#75C137": // Green
        return "invert(58%) sepia(10%) saturate(2288%) hue-rotate(58deg) brightness(97%) contrast(84%)";
      default:
        return "none";
    }
  };

  return (
    <div className="col-md-12 col-lg-4 d-flex">
      <div className="pricing-one__card d-flex flex-column" style={{
        '--accent-color': accentColor,
        height: '100%', // Ensure full height
        width: '100%',
      }}>
        <div className="pricing-one__card__content" style={{
          display: 'flex',
          flexDirection: 'column',
          height: '500px', // Fixed height, adjust as needed
        }}>
          <h4 className="pricing-one__card__tagline">{tagline}</h4>
          <h4 className="pricing-one__card__month">{month}</h4>
          <div className="pricing-one__card__icon">
            <ExportedImage
              src={icon}
              alt={tagline}
              width={35}
              height={35}
              style={{
                width: '35px',
                height: '35px',
                filter: getIconFilter(accentColor)
              }}
            />
          </div>

          <ul className="list-unstyled pricing-one__card__list" style={{
            flexGrow: 1,
            overflowY: 'auto', // Allow scrolling if content exceeds fixed height
          }}>

            <li><i className="fa fa-check-circle"></i>Open Play</li>
            <li><i className="fa fa-check-circle"></i>Parent Supervision</li>
            <li><i className="fa fa-check-circle"></i>Unlimited Playtime</li>
            <li><i className="fa fa-check-circle"></i>Adult Entry is Free</li>
          </ul>
          <h3>{price}</h3>
          <h3 className="pricing-one__card__price mt-auto" style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 'auto',
          }}>
            <Link href="/register">
              <button className="pricing-one__card__button mt-auto" style={{
                backgroundColor: accentColor,
                color: 'white',
                border: '2px solid white',
                padding: '10px 20px',
                borderRadius: '10px',
                cursor: 'pointer',
                fontWeight: 'bold',
                fontSize: '20px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.2s, box-shadow 0.2s'
              }}>

                Register Now
              </button>
            </Link>
          </h3>

        </div>
      </div>
    </div>
  );
};