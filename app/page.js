"use client";

import { ParallaxProvider } from 'react-scroll-parallax';

import Image from "next/image";
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
import ScrollTopButton from "./components/ScrollTopButton";
import StickyContactButtons from './components/StickyContactButtons';

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
          <BlogThree />
          <Footer />
        </div>
        <MobileNav />
        <SearchPopup />
        <ScrollTopButton />
        <StickyContactButtons />
      </div>
    </ParallaxProvider>
  );
}
