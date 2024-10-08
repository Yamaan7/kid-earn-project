import localFont from "next/font/local";
import "./globals.css";
import Script from 'next/script';

// Define your local fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Set metadata for your application
export const metadata = {
  title: "Home RTL || Kidearn || HTML Template For Kindergarten & Baby Care",
  description:
    "Kidearn is a modern HTML Template for kindergarten, preschool, nursery and primary schools. The template perfectly fits for child care, babysitting, education and children related schools, websites and businesses.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Bootstrap CSS (CDN) */}
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossOrigin="anonymous" />

        {/* Font Awesome (CDN) */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />

        {/* Google Fonts (Combined) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Fredoka:wght@700&family=Schoolbell&display=swap"
          rel="stylesheet"
        />


        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@300..700&display=swap" rel="stylesheet" />

        {/* CSS Links (Consolidated) */}
        <link rel="stylesheet" href="/styles/bootstrap-select.min.css" />
        <link rel="stylesheet" href="/styles/animate.min.css" />
        <link rel="stylesheet" href="/styles/jquery-ui.css" />
        <link rel="stylesheet" href="/styles/jarallax.css" />
        <link rel="stylesheet" href="/styles/jquery.magnific-popup.css" />
        <link rel="stylesheet" href="/styles/nouislider.min.css" />
        <link rel="stylesheet" href="/styles/nouislider.pips.css" />
        <link rel="stylesheet" href="/styles/tiny-slider.css" />
        <link rel="stylesheet" href="/styles/owl.carousel.min.css" />
        <link rel="stylesheet" href="/styles/owl.theme.default.min.css" />
        <link rel="stylesheet" href="/styles/headerStyles.css" />
        <link rel="stylesheet" href="/styles/kidearn-rtl.css" />
        <link rel="stylesheet" href="/styles/kidearn-custom-rtl.css" />
        <link rel="stylesheet" href="/styles/kidearn-toolbar.css" />
        <link rel="stylesheet" href="/styles/style.css" />

        <Script src="https://cdn.jsdelivr.net/npm/simple-parallax-js@5.5.1/dist/simpleParallax.min.js" />
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}

        {/* JavaScript libraries */}
        <Script src="/js/jquery-3.7.0.min.js" strategy="beforeInteractive" />
        <Script src="/js/bootstrap-select.min.js" strategy="beforeInteractive" />
        <Script src="/js/jarallax.min.js" strategy="beforeInteractive" />
        <Script src="/js/jquery-ui.js" strategy="beforeInteractive" />
        <Script src="/js/jquery.ajaxchimp.min.js" strategy="beforeInteractive" />
        <Script src="/js/jquery.appear.min.js" strategy="beforeInteractive" />
        <Script src="/js/jquery.circle-progress.min.js" strategy="beforeInteractive" />
        <Script src="/js/jquery.magnific-popup.min.js" strategy="beforeInteractive" />
        <Script src="/js/jquery.validate.min.js" strategy="beforeInteractive" />
        <Script src="/js/nouislider.min.js" strategy="beforeInteractive" />
        <Script src="/js/tiny-slider.js" strategy="beforeInteractive" />
        <Script src="/js/wNumb.min.js" strategy="beforeInteractive" />
        <Script src="/js/owl.carousel.min.js" strategy="beforeInteractive" />
        <Script src="/js/wow.js" strategy="beforeInteractive" />
        <Script src="/js/tilt.jquery.js" strategy="beforeInteractive" />
        <Script src="/js/imagesloaded.min.js" strategy="beforeInteractive" />
        <Script src="/js/isotope.js" strategy="beforeInteractive" />
        <Script src="/js/countdown.min.js" strategy="beforeInteractive" />
        <Script src="/js/jquery.circleType.js" strategy="beforeInteractive" />
        <Script src="/js/jquery.lettering.min.js" strategy="beforeInteractive" />

        {/* Template js */}
        <Script src="/js/kidearn.js" strategy="beforeInteractive" />

        {/* Toolbar js */}
        <Script src="/js/js.cookie.min.js" strategy="beforeInteractive" />
        <Script src="/js/jQuery.style.switcher.min.js" strategy="beforeInteractive" />
        <Script src="/js/lang.js" strategy="beforeInteractive" />
        <Script src="/js/element.js" strategy="beforeInteractive" />
        <Script src="/js/kidearn-toolbar.js" strategy="beforeInteractive" />

        {/* Bootstrap JS (CDN) */}
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossOrigin="anonymous" strategy="beforeInteractive" />
      </body>
    </html>
  );
}
