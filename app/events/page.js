import React from 'react'
import Topbar from '../components/Topbar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Link from 'next/link';
import ExportedImage from 'next-image-export-optimizer';
import EventsGallery from '../components/EventsGallary';


const page = () => {
    const events = [
        {
            id: 1,
            color: '#F25334',
            image: '/images/event-1-3.jpg',
            date: '16 March 2023',
            category: 'Kindergarten',
            time: '08:00am - 05:00pm',
            location: '6391 Elgin St. Celina, Delaware',
            title: "Let's spend summer together with your teachers",
        },
        {
            id: 2,
            color: '#2390FF',
            image: '/images/event-1-4.jpg',
            date: '16 March 2023',
            category: 'Kindergarten',
            time: '08:00am - 05:00pm',
            location: '6391 Elgin St. Celina, Delaware',
            title: "The complete web developer guideline 2023",
        },
        {
            id: 3,
            color: '#75C137',
            image: '/images/event-1-5.jpg',
            date: '16 March 2023',
            category: 'Kindergarten',
            time: '08:00am - 05:00pm',
            location: '6391 Elgin St. Celina, Delaware',
            title: "Gathering & welcome speech marketing strategy",
        },
        {
            id: 4,
            color: '#FFAA23',
            image: '/images/event-1-6.jpg',
            date: '16 March 2023',
            category: 'Kindergarten',
            time: '08:00am - 05:00pm',
            location: '6391 Elgin St. Celina, Delaware',
            title: "How a business can handle a business strategy",
        },
        {
            id: 5,
            color: '#26A6A1',
            image: '/images/event-1-7.jpg',
            date: '16 March 2023',
            category: 'Kindergarten',
            time: '08:00am - 05:00pm',
            location: '6391 Elgin St. Celina, Delaware',
            title: "Let's spend summer together with your teachers",
        },
        {
            id: 6,
            color: '#5F7999',
            image: '/images/event-1-8.jpg',
            date: '16 March 2023',
            category: 'Kindergarten',
            time: '08:00am - 05:00pm',
            location: '6391 Elgin St. Celina, Delaware',
            title: "The complete web developer guideline 2023",
        },
    ];
    return (
        <div>
            <Topbar />
            <Header />
            <section className="page-header">
                <div className="page-header__bg"></div>
                <div className="container">
                    <h2 className="page-header__title">Events</h2>
                    <ul className="kidearn-breadcrumb list-unstyled">
                        <li><Link href="/">Home</Link></li>
                        <li><span>Events</span></li>
                    </ul>
                </div>
            </section>



            <section className="event-page">
                <div className="container">
                    <div className="row gutter-y-30">
                        {events.map((event, index) => (
                            <div key={event.id} className="col-md-12 col-lg-6 wow fadeInUp" data-wow-delay={`${(index + 1) * 100}ms`}>
                                <div className="event-card-two" style={{ '--accent-color': event.color }}>
                                    <div className="row">
                                        <div className="col-md-5">
                                            <div className="event-card-two__image">
                                                <ExportedImage src={event.image} alt={event.title} width={500} height={300} layout="responsive" />
                                                <div className="event-card-two__date">
                                                    <span className="event-card-two__date-left">{event.date.split(' ')[0]}</span>
                                                    {event.date.split(' ').slice(1).join(' ')}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-7 d-flex align-items-center">
                                            <div className="event-card-two__content">
                                                <div className="event-card-two__cats">
                                                    <Link href="/events-grid">
                                                        {event.category}
                                                    </Link>
                                                </div>

                                                <ul className="event-card-two__lists">
                                                    <li>
                                                        <span>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={event.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                                <circle cx="12" cy="12" r="10" />
                                                                <polyline points="12 6 12 12 16 14" />
                                                            </svg>
                                                        </span>
                                                        {event.time}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={event.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                                                <circle cx="12" cy="10" r="3" />
                                                            </svg>
                                                        </span>
                                                        {event.location}
                                                    </li>
                                                </ul>

                                                {/* <ul className="event-card-two__lists">
                                                    <li><span ><Image src="/images/icon-clock1.png" width={16} height={16}></Image></span>{event.time}</li>
                                                    <li><span ><Image src="/images/icon-location-fill.png" width={16} height={16}></Image></span>{event.location}</li>
                                                </ul> */}
                                                <h3 className="event-card-two__title">
                                                    <Link href="/events-details">
                                                        {event.title}
                                                    </Link>
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <h3>Grid Gallery</h3>
            </div>

            <EventsGallery />
            <Footer />
        </div>
    )
}

export default page