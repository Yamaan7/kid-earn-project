import React from 'react'
import Banner from '../components/Banner'
import Header from '../components/Header'
import Footer from '../components/Footer'
import OffcanvasNavbar from '../components/OffCanvasNavbar'

const page = () => {
    return (
        <>
            <OffcanvasNavbar />
            <h1>About Page</h1>
            <Footer />
        </>
    )
}

export default page