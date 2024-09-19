"use client";

import React from 'react'
import Topbar from '../components/Topbar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Link from 'next/link';
import { useState } from 'react';


const page = () => {
    const [firstName, setFirstName] = useState('');
    const [fatherName, setFatherName] = useState('');
    const [familyName, setFamilyName] = useState('');
    const [email, setEmail] = useState('');
    const [desiredJob, setDesiredJob] = useState('');
    const [message, setMessage] = useState('');
    const [cv, setCV] = useState(null);
    return (
        <div>
            <Topbar />
            <Header />
            <section className="page-header">
                <div className="page-header__bg"></div>
                <div className="container">
                    <h2 className="page-header__title">Job Application Form</h2>
                    <ul className="kidearn-breadcrumb list-unstyled">
                        <li><Link href="/">Home</Link></li>
                        <li><span>Job Application Form</span></li>
                    </ul>
                </div>
            </section>


            <section className="login-page">
                <div className="container">
                    <div className="login-page__wrap">
                        <div className='row'>
                            <div className="wow fadeInUp animated" data-wow-delay="400ms" >
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                    <h3 className="login-page__wrap__title">Job Application Form</h3>
                                </div>

                                <form className="login-page__form">
                                    <div className="login-page__form-input-box">
                                        <label htmlFor="firstName">First Name</label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            placeholder="Enter First Name"
                                            value={firstName}
                                            onChange={(e) => setFirstName(e.target.value)}
                                            style={{
                                                background: '#faf5f2',
                                                width: '100%',
                                                padding: '0px 30px',
                                                borderRadius: '10px',
                                                height: '60px',
                                            }}
                                        />
                                    </div>
                                    <div className="login-page__form-input-box">
                                        <label htmlFor="fatherName">Father's Name</label>
                                        <input
                                            type="text"
                                            id="fatherName"
                                            placeholder="Enter Father's Name"
                                            value={fatherName}
                                            onChange={(e) => setFatherName(e.target.value)}
                                            style={{
                                                background: '#faf5f2',
                                                width: '100%',
                                                padding: '0px 30px',
                                                borderRadius: '10px',
                                                height: '60px',
                                            }}
                                        />
                                    </div>
                                    <div className="login-page__form-input-box">
                                        <label htmlFor="familyName">Family</label>
                                        <input
                                            type="text"
                                            id="familyName"
                                            placeholder="Enter Your Family Name"
                                            value={familyName}
                                            onChange={(e) => setFamilyName(e.target.value)}
                                            style={{
                                                background: '#faf5f2',
                                                width: '100%',
                                                padding: '0px 30px',
                                                borderRadius: '10px',
                                                height: '60px',
                                            }}
                                        />
                                    </div>
                                    <div className="login-page__form-input-box">
                                        <label htmlFor="email">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            placeholder="Enter Your Email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                    <div className="login-page__form-input-box">
                                        <label htmlFor="desiredJob">Desired Job</label>
                                        <select
                                            id="desiredJob"
                                            value={desiredJob}
                                            onChange={(e) => setDesiredJob(e.target.value)}
                                            style={{
                                                background: '#faf5f2',
                                                width: '100%',
                                                padding: '0px 30px',
                                                borderRadius: '10px',
                                                height: '60px',
                                            }}
                                        >
                                            <option value="" disabled>Select The Job</option>
                                            <option value="Sitter">Sitter</option>
                                            <option value="Family Teacher">Family Teacher</option>
                                            <option value="Administrative">Administrative</option>
                                            <option value="Cleaning Lady">Cleaning Lady</option>
                                            <option value="Volunteer">Volunteer</option>
                                        </select>
                                    </div>
                                    <div className="login-page__form-input-box">
                                        <label htmlFor="message">Write a Message</label>
                                        <textarea
                                            id="message"
                                            placeholder="Write Your Message"
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                            style={{
                                                height: '150px',
                                                background: '#faf5f2',
                                                width: '100%',
                                                padding: '0px 30px',
                                                borderRadius: '10px',
                                            }}
                                        ></textarea>
                                    </div>
                                    <div className="login-page__form-input-box">
                                        <label htmlFor="cv">Upload CV</label>
                                        <input
                                            type="file"
                                            id="cv"
                                            onChange={(e) => setCV(e.target.files[0])}
                                            style={{
                                                background: '#faf5f2',
                                                width: '100%',
                                                padding: '10px 30px',
                                                borderRadius: '10px',
                                                height: '60px',
                                            }}
                                        />
                                    </div>
                                    <div className="login-page__form-btn-box">
                                        <button type="submit" className="kidearn-btn kidearn-btn--xl">
                                            <span>Apply Now</span>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>





            <Footer />
        </div>
    )
}

export default page