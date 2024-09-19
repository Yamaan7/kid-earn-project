import ExportedImage from 'next-image-export-optimizer';
import Link from 'next/link';

const TeamTwoSection = () => {
    return (
        <section className="team-two team-two--about-page">
            <div className="team-two__shape-left kidearn-splax" data-para-options='{"orientation": "left", "scale" : 2.1, "overflow" : true}'>
                <ExportedImage src="/images/team-2-shape-1.png" alt="kidearn" width={200} height={200} />
            </div>
            <div className="team-two__shape-right kidearn-splax" data-para-options='{"orientation": "right", "scale" : 2.1, "overflow" : true}'>
                <ExportedImage src="/images/team-2-shape-2.png" alt="kidearn" width={200} height={200} />
            </div>
            <div className="container">
                <div className="sec-title text-center">
                    <h6 className="sec-title__tagline">Our Teacher</h6>
                    <h3 className="sec-title__title">Meet our expert &amp; smart<br /> superheroes!</h3>
                </div>
                <div className="team-grid">
                    {/* Team Member 1 */}
                    <div className="team-card-two wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="00ms" style={{ '--accent-color': '#F25334' }}>
                        <div className="team-card-two__svg-top">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 198 150">
                                <path d="M0.298312 1.27145C0.922648 0.466318 11.8598 0.0331889 28.3325 0.0553685..." />
                            </svg>
                        </div>
                        <div className="team-card-two__image kidearn-tilt" data-tilt-options='{"glare": false, "maxglare" : 0, "maxtilt" : 5, "speed" : 700, "scale" : 1}'>
                            <ExportedImage src="/images/team-2-1.jpg" alt="Jane Cooper" width={300} height={300} />
                        </div>
                        <div className="team-card-two__content">
                            <h3 className="team-card-two__title">
                                <Link href="/team-details">
                                    Jane Cooper
                                </Link>
                            </h3>
                            <p className="team-card-two__designation">Swimming Teacher</p>
                            <div className="list-unstyled team-card-two__social__list">
                                <a className="fb" href="https://facebook.com">
                                    <span className="social-bg">
                                        <svg viewBox="0 0 32 33" xmlns="http://www.w3.org/2000/svg" stroke="currentColor">
                                            <path d="M31.5 16.3589C31.5 20.5911 29.4895 24.2963..." />
                                        </svg>
                                    </span>
                                    <i className="fab fa-facebook-f" aria-hidden="true"></i>
                                    <span className="sr-only">Facebook</span>
                                </a>
                                <a className="li" href="https://www.linkedin.com/">
                                    <span className="social-bg">
                                        <svg viewBox="0 0 32 33" xmlns="http://www.w3.org/2000/svg" stroke="currentColor">
                                            <path d="M31.5 16.3589C31.5 20.5911 29.4895 24.2963..." />
                                        </svg>
                                    </span>
                                    <i className="fab fa-linkedin-in" aria-hidden="true"></i>
                                    <span className="sr-only">Linkedin</span>
                                </a>
                                <a className="yo" href="https://www.youtube.com">
                                    <span className="social-bg">
                                        <svg viewBox="0 0 32 33" xmlns="http://www.w3.org/2000/svg" stroke="currentColor">
                                            <path d="M31.5 16.3589C31.5 20.5911 29.4895 24.2963..." />
                                        </svg>
                                    </span>
                                    <i className="fab fa-youtube" aria-hidden="true"></i>
                                    <span className="sr-only">YouTube</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Team Member 2 */}
                    <div className="team-card-two wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="100ms" style={{ '--accent-color': '#75C137' }}>
                        <div className="team-card-two__svg-top">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 198 150">
                                <path d="M0.298312 1.27145C0.922648 0.466318 11.8598 0.0331889..." />
                            </svg>
                        </div>
                        <div className="team-card-two__image kidearn-tilt" data-tilt-options='{"glare": false, "maxglare" : 0, "maxtilt" : 5, "speed" : 700, "scale" : 1}'>
                            <ExportedImage src="/images/team-2-2.jpg" alt="Cody Fisher" width={300} height={300} />
                        </div>
                        <div className="team-card-two__content">
                            <h3 className="team-card-two__title">
                                <Link href="/team-details">
                                    Cody Fisher
                                </Link>
                            </h3>
                            <p className="team-card-two__designation">Art Teacher</p>
                            <div className="list-unstyled team-card-two__social__list">
                                <a className="fb" href="https://facebook.com">
                                    <span className="social-bg">
                                        <svg viewBox="0 0 32 33" xmlns="http://www.w3.org/2000/svg" stroke="currentColor">
                                            <path d="M31.5 16.3589C31.5 20.5911 29.4895 24.2963..." />
                                        </svg>
                                    </span>
                                    <i className="fab fa-facebook-f" aria-hidden="true"></i>
                                    <span className="sr-only">Facebook</span>
                                </a>
                                <a className="li" href="https://www.linkedin.com/">
                                    <span className="social-bg">
                                        <svg viewBox="0 0 32 33" xmlns="http://www.w3.org/2000/svg" stroke="currentColor">
                                            <path d="M31.5 16.3589C31.5 20.5911 29.4895 24.2963..." />
                                        </svg>
                                    </span>
                                    <i className="fab fa-linkedin-in" aria-hidden="true"></i>
                                    <span className="sr-only">Linkedin</span>
                                </a>
                                <a className="yo" href="https://www.youtube.com">
                                    <span className="social-bg">
                                        <svg viewBox="0 0 32 33" xmlns="http://www.w3.org/2000/svg" stroke="currentColor">
                                            <path d="M31.5 16.3589C31.5 20.5911 29.4895 24.2963..." />
                                        </svg>
                                    </span>
                                    <i className="fab fa-youtube" aria-hidden="true"></i>
                                    <span className="sr-only">YouTube</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Team Member 3 */}
                    <div className="team-card-two wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="200ms" style={{ '--accent-color': '#FFC326' }}>
                        <div className="team-card-two__svg-top">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 198 150">
                                <path d="M0.298312 1.27145C0.922648 0.466318 11.8598 0.0331889..." />
                            </svg>
                        </div>
                        <div className="team-card-two__image kidearn-tilt" data-tilt-options='{"glare": false, "maxglare" : 0, "maxtilt" : 5, "speed" : 700, "scale" : 1}'>
                            <ExportedImage src="/images/team-2-3.jpg" alt="Esther Howard" width={300} height={300} />
                        </div>
                        <div className="team-card-two__content">
                            <h3 className="team-card-two__title">
                                <Link href="/team-details">
                                    Esther Howard
                                </Link>
                            </h3>
                            <p className="team-card-two__designation">Music Teacher</p>
                            <div className="list-unstyled team-card-two__social__list">
                                <a className="fb" href="https://facebook.com">
                                    <span className="social-bg">
                                        <svg viewBox="0 0 32 33" xmlns="http://www.w3.org/2000/svg" stroke="currentColor">
                                            <path d="M31.5 16.3589C31.5 20.5911 29.4895 24.2963..." />
                                        </svg>
                                    </span>
                                    <i className="fab fa-facebook-f" aria-hidden="true"></i>
                                    <span className="sr-only">Facebook</span>
                                </a>
                                <a className="li" href="https://www.linkedin.com/">
                                    <span className="social-bg">
                                        <svg viewBox="0 0 32 33" xmlns="http://www.w3.org/2000/svg" stroke="currentColor">
                                            <path d="M31.5 16.3589C31.5 20.5911 29.4895 24.2963..." />
                                        </svg>
                                    </span>
                                    <i className="fab fa-linkedin-in" aria-hidden="true"></i>
                                    <span className="sr-only">Linkedin</span>
                                </a>
                                <a className="yo" href="https://www.youtube.com">
                                    <span className="social-bg">
                                        <svg viewBox="0 0 32 33" xmlns="http://www.w3.org/2000/svg" stroke="currentColor">
                                            <path d="M31.5 16.3589C31.5 20.5911 29.4895 24.2963..." />
                                        </svg>
                                    </span>
                                    <i className="fab fa-youtube" aria-hidden="true"></i>
                                    <span className="sr-only">YouTube</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamTwoSection;