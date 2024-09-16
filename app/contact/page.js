import React from 'react'
import Topbar from '../components/Topbar'
import Header from '../components/Header'
import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const page = () => {
    return (
        <div>
            <Topbar />
            <Header />

            <section className="page-header">
                <div className="page-header__bg"></div>
                {/* /.page-header__bg */}
                <div className="container">
                    <h2 className="page-header__title">Contact</h2>
                    <ul className="kidearn-breadcrumb list-unstyled">
                        <li>
                            <Link href="/">
                                Home
                            </Link>
                        </li>
                        <li><span>Contact</span></li>
                    </ul>
                    {/* /.kidearn-breadcrumb list-unstyled */}
                </div>
                {/* /.container */}
            </section>


            <ContactForm />




            <section className="contact-info-one">
                <div className="container">
                    <div className="contact-info-one__inner">
                        <div className="row">
                            <div className="col-md-12 col-lg-4">
                                <div className="contact-info-one__item" style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                    <i><FontAwesomeIcon icon={faPhone} width={40} height={40} color='#f25334' /></i>
                                    <p className="contact-info-one__text">Have any question?</p>
                                    <h3 className="contact-info-one__title">
                                        <Link href="tel:+23(000)-8050">Free + 23 (000)-8050</Link>
                                    </h3>
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-4">
                                <div className="contact-info-one__item" style={{
                                    "--accent-color": "#2390FF", display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                    <i><FontAwesomeIcon icon={faEnvelope} width={40} height={40} color='#2390FF' /></i>
                                    <p className="contact-info-one__text">Send Email</p>
                                    <h3 className="contact-info-one__title">
                                        <Link href="mailto:kidearn@envato.com">kidearn@envato.com</Link>
                                    </h3>
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-4">
                                <div className="contact-info-one__item" style={{
                                    "--accent-color": "#75C137", display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                    <i><FontAwesomeIcon icon={faMapMarkerAlt} width={40} height={40} color='#75C137' /></i>
                                    <p className="contact-info-one__text">Visit Anytime</p>
                                    <h3 className="contact-info-one__title">
                                        <Link href="#">6391 Elgin St. Delaware 10299</Link>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>




            <section className="contact-map">
                <div className="container-fluid">
                    <div className="google-map google-map__contact">
                        <iframe
                            title="template google map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4562.753041141002!2d-118.80123790098536!3d34.152323469614075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82469c2162619%3A0xba03efb7998eef6d!2sCostco+Wholesale!5e0!3m2!1sbn!2sbd!4v1562518641290!5m2!1sbn!2sbd"
                            className="map__contact"
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </section>




            <Footer />





        </div>
    )
}

export default page