"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParallax } from 'react-scroll-parallax';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const BlogThree = () => {
  const parallaxRight = useParallax({
    speed: 10,
    scale: [1, 3.5],
    easing: 'ease',
  });

  const parallaxLeft = useParallax({
    speed: -10,
    scale: [1, 3.5],
    easing: 'ease',
  });

  const blogPosts = [
    {
      id: 1,
      title: '10 easy steps to more learn about play',
      category: 'Kindergarten',
      date: '30 Mar, 2023',
      image: '/images/blog-3-1.jpg',
      author: {
        name: 'Wade Warren',
        designation: 'CEO',
        image: '/images/blog-3-author-1.png',
      },
      accentColor: '#F25334',
    },
    {
      id: 2,
      title: 'The complete kindearn design guideline 2023',
      category: 'Painting',
      date: '26 Mar, 2023',
      image: '/images/blog-3-2.jpg',
      author: {
        name: 'Darlene Robertson',
        designation: 'Art Teacher',
        image: '/images/blog-3-author-2.png',
      },
      accentColor: '#2390FF',
    },
    {
      id: 3,
      title: 'Choose the best child care center for you!',
      category: 'Gaming',
      date: '28 Mar, 2023',
      image: '/images/blog-3-3.jpg',
      author: {
        name: 'Cody Fisher',
        designation: 'CEO',
        image: '/images/blog-3-author-3.png',
      },
      accentColor: '#75C137',
    },
  ];

  return (
    <section className="blog-three">
      <div ref={parallaxRight.ref} className="blog-three__shape-right">
        <Image src="/images/blog-3-shape-1.png" alt="kidearn" width={200} height={200} />
      </div>
      <div ref={parallaxLeft.ref} className="blog-three__shape-left">
        <Image src="/images/blog-3-shape-2.png" alt="kidearn" width={200} height={200} />
      </div>
      <div className="container">
        <div className="sec-title text-center">
          <h6 className="sec-title__tagline">Latest Blog</h6>
          <h3 className="sec-title__title">
            Checkout our latest news<br /> updates & articles
          </h3>
        </div>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            576: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
            },
          }}
        >
          {blogPosts.map((post) => (
            <SwiperSlide key={post.id}>
              <div className="blog-card-three" style={{ '--accent-color': post.accentColor }}>
                <div className="blog-card-three__bg"></div>
                <div className="blog-card-three__image">
                  <Image src={post.image} alt={post.title} width={400} height={300} />
                  <div className="blog-card-three__image__layer-wrapper">
                    {[...Array(4)].map((_, index) => (
                      <div key={index} className="blog-card-three__image__layer" style={{ backgroundImage: `url(${post.image})` }}></div>
                    ))}
                  </div>
                  <Link href="/blog-details-left" className="blog-card-three__image__link">
                    <span className="sr-only">{post.title}</span>
                  </Link>
                </div>
                <div className="blog-card-three__content">
                  <div className="blog-card-three__content__top">
                    <Link href="/blog-list" className="blog-card-three__category">{post.category}</Link>
                    <div className="blog-card-three__date">{post.date}</div>
                  </div>
                  <h3 className="blog-card-three__title">
                    <Link href="/blog-details-left">{post.title}</Link>
                  </h3>
                  <div className="blog-card-three__content__bottom">
                    <div className="blog-card-three__author">
                      <div className="blog-card-three__author__image">
                        <Image src={post.author.image} alt={post.author.name} width={50} height={50} />
                      </div>
                      <div className="blog-card-three__author__content">
                        <h4 className="blog-card-three__author__name">{post.author.name}</h4>
                        <p className="blog-card-three__author__designation">{post.author.designation}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <style jsx>{`
        .blog-three {
          position: relative;
          padding: 100px 0;
        }
        .blog-three__shape-right,
        .blog-three__shape-left {
          position: absolute;
          top: 0;
          z-index: -1;
        }
        .blog-three__shape-right {
          right: 0;
        }
        .blog-three__shape-left {
          left: 0;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 15px;
        }
        .sec-title {
          margin-bottom: 50px;
        }
        .sec-title__tagline {
          color: var(--accent-color);
          font-size: 1rem;
          margin-bottom: 10px;
        }
        .sec-title__title {
          font-size: 2.5rem;
          margin-bottom: 20px;
        }
        .blog-card-three {
          background-color: #fff;
          border-radius: 15px;
          overflow: hidden;
          // box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }
        .blog-card-three:hover {
          transform: translateY(-10px);
        }
        .blog-card-three__image {
          position: relative;
          overflow: hidden;
        }
        .blog-card-three__image__layer-wrapper {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        .blog-card-three__image__layer {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          opacity: 0;
          transition: all 0.3s ease;
        }
        .blog-card-three:hover .blog-card-three__image__layer {
          opacity: 1;
        }
        .blog-card-three__content {
          padding: 30px;
        }
        .blog-card-three__category {
          color: var(--accent-color);
          font-weight: bold;
        }
        .blog-card-three__date {
          color: #888;
        }
        .blog-card-three__title {
          font-size: 1.5rem;
          margin: 15px 0;
        }
        .blog-card-three__author {
          display: flex;
          align-items: center;
        }
        .blog-card-three__author__image {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          overflow: hidden;
          margin-right: 15px;
        }
        .blog-card-three__author__name {
          font-weight: bold;
          margin-bottom: 5px;
        }
        .blog-card-three__author__designation {
          color: #888;
        }
      `}</style>
    </section>
  );
};

export default BlogThree;