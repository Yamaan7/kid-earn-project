"use client";

import { useState } from 'react';

const SearchPopup = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const toggleSearch = () => {
        setIsOpen(!isOpen);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Implement your search logic here
        console.log('Searching for:', searchQuery);
        // You might want to redirect to a search results page or update the current page with results
    };

    return (
        <div className={`search-popup ${isOpen ? 'active' : ''}`}>
            <div className="search-popup__overlay search-toggler" onClick={toggleSearch}></div>
            <div className="search-popup__content">
                <form role="search" onSubmit={handleSubmit} className="search-popup__form">
                    <input
                        type="text"
                        id="search"
                        placeholder="Search Here..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button type="submit" aria-label="search submit" className="kidearn-btn kidearn-btn--base">
                        <span><i className="icon-search"></i></span>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SearchPopup;