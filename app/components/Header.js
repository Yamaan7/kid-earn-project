"use client";

import { CallIcon } from "./CallIcon";
import HamburgerMenu from "./HamburgerMenu";
import React, { useState } from 'react';
import OffcanvasNavbar from "./OffCanvasNavbar";
import Link from "next/link";


export default function Header() {
    const [activeLink, setActiveLink] = useState('Home'); // Default active link

    const handleLinkClick = (linkName) => {
        setActiveLink(linkName); // Set the clicked link as active
    };
    return (
        <div
            className="headerContainer"
            style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: '100px',
                // padding: '0px 60px',
            }}>

            <div>
                <img src="/images/logo-dark.png" alt="KidEarn" width={160} height={56} />
            </div>

            <div
                className="navbar"
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <ul
                    className="Header-NavContainer"
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: '30px',
                        fontWeight: 'bold',
                        marginBottom: '0px',
                        fontSize: '16px',
                        cursor: 'pointer',
                    }}>
                    {/* Use map for dynamic links or handle each link separately */}
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <li>Pages</li>
                    <li>Events</li>
                    <li>Programs</li>
                    <li>Shop</li>
                    <li>News</li>
                    <li>Contact</li>
                </ul>
            </div>


            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    gap: '30px',
                    alignItems: 'center',
                }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    gap: '15px',
                    alignItems: 'center',
                    cursor: 'pointer',
                }}>
                    <div className="ToggleButton"><OffcanvasNavbar /></div>


                    <span className="CallIcon"> <CallIcon /> </span>


                    <div
                        className="headerContactInfo"
                        style={{
                            // display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-around',
                            alignItems: 'center',
                            gap: '0px',
                            margin: '0px',
                            padding: '0px',
                        }}>
                        <h5
                            class="main-header__call__number"
                            style={{
                                margin: '0',
                                padding: '0',
                                fontSize: '20px',
                                fontWeight: 'bold',
                                color: 'black',
                            }}>(303) 555-0105</h5>
                        <h6
                            class="main-header__call__text"
                            style={{
                                margin: '0',
                                padding: '0',
                                color: '#7E8185',
                                fontWeight: 'normal',
                                fontSize: '16px',
                            }}>Call to Questions</h6>
                    </div>
                </div>
                <div className="headerButton">
                    <button
                        style={{
                            width: '140px',
                            height: '49px',
                            backgroundColor: '#F25334',
                            color: 'white',
                            fontSize: '14px',
                            fontWeight: 'bold',
                            padding: '10px 10px',
                            borderRadius: '12px',
                            height: '49px',
                            textAlign: 'center',
                        }}>Book a Visit</button>
                </div>
            </div>

        </div>
    );
} 