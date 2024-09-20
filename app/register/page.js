"use client";

import React, { useState } from 'react';
import Topbar from '../components/Topbar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

const page = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted', formData);
    };
    return (
        <div>
            <Topbar />
            <Header />
            <section className="page-header">
                <div className="page-header__bg"></div>
                <div className="container">
                    <h2 className="page-header__title">Register</h2>
                    <ul className="kidearn-breadcrumb list-unstyled">
                        <li><Link href="/">Home</Link></li>
                        <li><span>Register</span></li>
                    </ul>
                </div>
            </section>



            <section className="contact-one" style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
                margin: 'auto',
                marginBottom: '75px',
            }}>
                <div className="container">
                    <div className="sec-title text-center">
                        <h6 className="sec-title__tagline">Register with us</h6>
                        <h3 className="sec-title__title">Create your account</h3>
                    </div>
                    <form className="contact-one__form contact-form-validated form-one" onSubmit={handleSubmit} style={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}>
                        <div className="form-one__group" style={{
                            display: 'flex',
                            flexDirection: 'column',
                        }}>
                            <div className="form-one__control" style={{
                                display: 'flex',
                                flexDirection: 'column',
                            }}>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-one__control">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email address"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div style={{
                                width: '100%',
                                backgroundColor: '#faf5f2',
                            }}>
                                <input style={{
                                    width: '100%',
                                    backgroundColor: 'transparent',
                                    padding: '0px 30px',
                                    height: '60px',
                                }}
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    required
                                />
                            </div>
                            <div className="form-one__control form-one__control--full text-center">
                                <button
                                    type="submit"
                                    className="kidearn-btn kidearn-btn--xl"
                                >
                                    <span>Register</span>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default page