import { useParams, Link } from 'react-router-dom';
import './PageStyles.css';

const BlogPost = () => {
  const { id } = useParams();

  const blogPosts = {
    1: {
      title: 'Coming Soon: Health Tips & Community Stories',
      category: 'Updates',
      date: 'Coming Soon',
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&q=80',
      content: `
        We're excited to announce that our blog will soon be filled with valuable content 
        to support your health journey and keep you connected with our community.
        
        Stay tuned for articles covering:
        • The science behind the supplements we provide
        • Tips for managing chronic health conditions
        • Nutrition guidance and healthy lifestyle advice
        • Updates on our programs and impact
        
        Check back soon for our first official blog posts!
      `,
    },
    2: {
      title: 'Volunteer Spotlight Series',
      category: 'Community',
      date: 'Coming Soon',
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80',
      content: `
        Our volunteers are the heart of Saintly Supplements. Without their dedication, 
        compassion, and hard work, we couldn't fulfill our mission.
        
        Coming soon, we'll be sharing inspiring stories from our volunteer community:
        • Meet the individuals who pack and deliver supplements
        • Learn about our youth volunteer program
        • Discover what motivates people to give their time
        • Find out how you can get involved
        
        Want to be featured? Join our volunteer team today!
      `,
    },
    3: {
      title: 'Supplement Education Resources',
      category: 'Education',
      date: 'Coming Soon',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
      content: `
        Understanding the supplements you take is an important part of managing your health. 
        We're developing educational resources to help you make informed decisions.
        
        Upcoming topics include:
        • Vitamin D: The sunshine vitamin and why it matters
        • Omega-3 fatty acids and heart health
        • Calcium and Vitamin K2 for bone strength
        • Supplements for neuropathy support
        • Eye health vitamins explained
        
        Always consult with your healthcare provider before starting any new supplement regimen.
      `,
    },
  };

  const post = blogPosts[id] || blogPosts[1];

  return (
    <main className="page blog-post-page">
      <section className="page-hero page-hero-small">
        <div className="page-hero-bg">
          <div className="page-blob page-blob-1"></div>
          <div className="page-blob page-blob-2"></div>
        </div>
        <div className="container">
          <div className="page-hero-content">
            <Link to="/blogs" className="back-link">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
              Back to Blog
            </Link>
            <span className="blog-post-category">{post.category}</span>
            <h1>{post.title}</h1>
            <p className="blog-post-date">{post.date}</p>
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
          <article className="blog-post-content">
            <div className="blog-post-image">
              <img src={post.image} alt={post.title} />
              <div className="coming-soon-banner">Content Coming Soon</div>
            </div>
            
            <div className="blog-post-body">
              {post.content.split('\n').map((paragraph, index) => (
                paragraph.trim() && (
                  <p key={index}>{paragraph.trim()}</p>
                )
              ))}
            </div>

            <div className="blog-post-cta">
              <h3>Want to stay updated?</h3>
              <p>Follow us on social media or check back soon for new content.</p>
              <div className="cta-buttons">
                <Link to="/get-involved" className="btn btn-primary">Get Involved</Link>
                <Link to="/blogs" className="btn btn-outline">View All Posts</Link>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
};

export default BlogPost;

