// pages/_app.js
// import '../styles/globals.css'; // Import global styles
import Script from 'next/script';

function Scripts({ Component, pageProps }) {
    return (
        <>
            <Component {...pageProps} />
            {/* Include your scripts here */}
            <Script src="/js/jquery-3.7.0.min.js" strategy="beforeInteractive" />
            <Script src="/js/bootstrap.bundle.min.js" strategy="beforeInteractive" />
            <Script src="/js/bootstrap-select.min.js" strategy="beforeInteractive" />
            <Script src="/js/jarallax.min.js" strategy="beforeInteractive" />
            <Script src="/js/jquery-ui.js" strategy="beforeInteractive" />
            {/* Add other scripts similarly */}
            <Script src="/js/kidearn.js" strategy="beforeInteractive" />
            <Script src="/js/js.cookie.min.js" strategy="beforeInteractive" />
            <Script src="/js/jQuery.style.switcher.min.js" strategy="beforeInteractive" />
            <Script src="/js/lang.js" strategy="beforeInteractive" />
            <Script src="/js/element.js" strategy="beforeInteractive" />
            <Script src="/js/kidearn-toolbar.js" strategy="beforeInteractive" />
        </>
    );
}

export default Scripts;
