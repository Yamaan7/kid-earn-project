"use client";

import React, { useState } from 'react';
import Modal from './Modal';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        program: 'Select programs',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [isSuccess, setIsSuccess] = useState(false); // Add this line
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        console.log('Form submitted'); // Debug log

        try {
            const response = await fetch('https://backend.selsla.net/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            console.log('Server response:', data); // Debug log

            if (response.ok) {
                setModalMessage(data.message || 'Message sent successfully!');
                setIsSuccess(true);
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    program: 'Select programs',
                    message: ''
                });
            } else {
                setModalMessage(data.message || 'Failed to send the message. Please try again later.');
                setIsSuccess(false);
            }
        } catch (error) {
            console.error('Error:', error);
            setModalMessage('An error occurred. Please try again.');
            setIsSuccess(false);
        } finally {
            setIsSubmitting(false);
            setIsModalOpen(true);
            console.log('Modal should open now'); // Debug log
            console.log('Modal message:', modalMessage); // Debug log
            console.log('Is success:', isSuccess); // Debug log
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <section className="contact-one">
            <div className="container">
                <div className="sec-title text-center">
                    <h6 className="sec-title__tagline">Contact with us</h6>
                    <h3 className="sec-title__title">Feel free to write us <br /> anytime</h3>
                </div>
                <form className="contact-one__form contact-form-validated form-one" onSubmit={handleSubmit}>
                    <div className="form-one__group">
                        <div className="form-one__control">
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
                        <div className="form-one__control">
                            <input
                                type="text"
                                name="phone"
                                placeholder="Your phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-one__control">
                            <div className="form-one__control__select">
                                <label className="sr-only" htmlFor="program-select">Select programs</label>
                                <select
                                    style={{
                                        width: '100%',
                                        background: '#faf5f2',
                                        height: '60px',
                                        padding: '0 35px 0 25px', // Increased right padding
                                        appearance: 'none', // Remove default arrow
                                        WebkitAppearance: 'none',
                                        MozAppearance: 'none',
                                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M10.293 3.293 6 7.586 1.707 3.293A1 1 0 0 0 .293 4.707l5 5a1 1 0 0 0 1.414 0l5-5a1 1 0 1 0-1.414-1.414z' fill='%23000000'/%3E%3C/svg%3E")`,
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'calc(100% - 15px) center', // Position arrow 15px from right
                                        backgroundSize: '12px',
                                    }}
                                    id="program-select"
                                    name="program"
                                    value={formData.program}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="Select programs">Select programs</option>
                                    <option value="Select programs 01">Select programs 01</option>
                                    <option value="Select programs 02">Select programs 02</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-one__control form-one__control--full">
                            <textarea
                                name="message"
                                placeholder="Write a message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <div className="form-one__control form-one__control--full text-center">
                            <button
                                type="submit"
                                className="kidearn-btn kidearn-btn--xl"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Sending...' : <span>Send a Message</span>}
                            </button>
                        </div>
                    </div>
                </form>

                {/* Debug information */}
                {/* <div style={{ marginTop: '20px', border: '1px solid #ccc', padding: '10px' }}>
                    <p>Is Modal Open: {isModalOpen ? 'Yes' : 'No'}</p>
                    <p>Modal Message: {modalMessage}</p>
                </div> */}

                <Modal
                    message={modalMessage}
                    isOpen={isModalOpen}
                    onClose={closeModal}
                />
            </div>
        </section>
    );
};

export default ContactForm;