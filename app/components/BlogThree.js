import Image from 'next/image';
import Link from 'next/link';

const BlogCard = ({ post }) => (
  <div className="item">
    <div className="blog-card-three" style={{ '--accent-color': post.accentColor }}>
      <div className="blog-card-three__bg"></div>
      <div className="blog-card-three__image">
        <Image src={post.image} alt={post.title} width={400} height={300} />
        <div className="blog-card-three__image__layer-wrapper">
          {[1, 2, 3, 4].map((_, index) => (
            <div
              key={index}
              className="blog-card-three__image__layer"
              style={{ backgroundImage: `url(${post.image})` }}
            ></div>
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
  </div>
);

const BlogThree = () => {
  const blogPosts = [
    {
      id: 1,
      category: 'Kindergarten',
      date: '30 Mar, 2023',
      title: '10 easy steps to more learn about play',
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
      category: 'Painting',
      date: '26 Mar, 2023',
      title: 'The complete kindearn design guideline 2023',
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
      category: 'Gaming',
      date: '28 Mar, 2023',
      title: 'Choose the best child care center for you!',
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
      <div className="blog-three__shape-right">
        <Image src="/images/blog-3-shape-1.png" alt="shape" width={200} height={200} />
      </div>
      <div className="blog-three__shape-left">
        <Image src="/images/blog-3-shape-2.png" alt="shape" width={200} height={200} />
      </div>
      <div className="container">
        <div className="sec-title text-center">
          <h6 className="sec-title__tagline">Latest Blog</h6>
          <h3 className="sec-title__title">Checkout our latest news<br /> updates &amp; articles</h3>
        </div>
        <div className="blog-three__carousel">
          {blogPosts.map(post => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogThree;