import { Link } from 'react-router-dom';
import './PageStyles.css';

const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Coming Soon: Health Tips & Community Stories',
      excerpt: 'We\'re working on bringing you valuable content about nutrition, supplementation, and inspiring stories from our community.',
      date: 'Coming Soon',
      category: 'Updates',
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&q=80',
      isPlaceholder: true,
    },
    {
      id: 2,
      title: 'Volunteer Spotlight Series',
      excerpt: 'Stay tuned for stories highlighting the amazing volunteers who make our mission possible every day.',
      date: 'Coming Soon',
      category: 'Community',
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&q=80',
      isPlaceholder: true,
    },
    {
      id: 3,
      title: 'Supplement Education Resources',
      excerpt: 'Learn about the supplements we provide and how they can support various health conditions.',
      date: 'Coming Soon',
      category: 'Education',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&q=80',
      isPlaceholder: true,
    },
  ];

  return (
    <main className="page blogs-page">
      <section className="page-hero">
        <div className="page-hero-bg">
          <div className="page-blob page-blob-1"></div>
          <div className="page-blob page-blob-2"></div>
        </div>
        <div className="container">
          <div className="page-hero-content">
            <span className="page-badge">
              <svg className="badge-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10 9 9 9 8 9"/>
              </svg>
              News & Stories
            </span>
            <h1>Our Blog</h1>
            <p>
              Stories of impact, health tips, and updates from our community.
            </p>
          </div>
        </div>
        <div className="page-wave">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path d="M0,40 C320,100 640,0 960,60 C1280,120 1440,40 1440,40 L1440,120 L0,120 Z" fill="var(--soft-white)"/>
          </svg>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="blog-intro">
            <p>Our blog is coming soon! Check back for health tips, community stories, and updates about our mission.</p>
          </div>
          <div className="blog-grid">
            {blogPosts.map((post) => (
              <article key={post.id} className={`blog-card ${post.isPlaceholder ? 'placeholder-card' : ''}`}>
                <div className="blog-image">
                  <img src={post.image} alt={post.title} />
                  <span className="blog-category">{post.category}</span>
                  {post.isPlaceholder && <div className="placeholder-overlay">Coming Soon</div>}
                </div>
                <div className="blog-content">
                  <span className="blog-date">{post.date}</span>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <Link to={`/blog/${post.id}`} className="blog-link">
                    {post.isPlaceholder ? 'Preview' : 'Read More'}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blogs;

