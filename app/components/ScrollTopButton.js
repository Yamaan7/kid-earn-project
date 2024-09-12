"use client";

import React from 'react';

const ScrollTopButton = () => {
    return (
        <a href="#" className="scroll-top">
            <svg className="scroll-top__circle" width="100%" height="100%" viewBox="-1 -1 102 102">
                <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"></path>
            </svg>
        </a>
    );
};

export default ScrollTopButton;
