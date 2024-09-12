"use client";

import React from "react";
import { FaWhatsapp, FaPhone } from "react-icons/fa"; // Importing icons from react-icons

const StickyContactButtons = () => {
    return (
        <div className="sticky-buttons">
            {/* WhatsApp Button */}
            <a href="https://wa.me/yourphonenumber" target="_blank" rel="noopener noreferrer" className="sticky-button whatsapp">
                <FaWhatsapp size={50} />
            </a>

            {/* Phone Button */}
            <a href="tel:+yourphonenumber" className="sticky-button phone">
                <FaPhone size={50} />
            </a>
        </div>
    );
};

export default StickyContactButtons;
