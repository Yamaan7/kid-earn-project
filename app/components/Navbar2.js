import React from 'react';
import Link from 'next/link';
import OffcanvasNavbar from './OffCanvasNavbar';

const Navbar = () => {
    return (
        <>
            <ul className="nav justify-content-end">
                <li className="nav-item">
                    <Link href="#" className="nav-link active" aria-current="page">Active</Link>
                </li>
                <li className="nav-item">
                    <Link href="#" className="nav-link">Link</Link>
                </li>
                <li className="nav-item">
                    <Link href="#" className="nav-link">Link</Link>
                </li>
                <li className="nav-item">
                    <span className="nav-link disabled" aria-disabled="true">Disabled</span>
                </li>
            </ul>

            <OffcanvasNavbar />
        </>
    );
};

export default Navbar;
