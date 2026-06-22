import { Link } from 'react-router-dom';
import Hero from '../components/home/Hero';
import WhoWeHelp from '../components/home/WhoWeHelp';
import Conditions from '../components/home/Conditions';
import Supplements from '../components/home/Supplements';
import Community from '../components/home/Community';
import './Home.css';

const Home = () => {
  return (
    <main className="home-page">
      <Hero />
      <WhoWeHelp />
      <Conditions />
      <Supplements />
      <Community />
      
      {/* Bottom Mission Statement */}
      <section className="mission-statement section">
        <div className="container">
          <div className="mission-content">
            <div className="mission-icon">
              <img src="/icon.png" alt="Saintly Supplements" />
            </div>
            
            <h2>Our Focus</h2>
            
            <p className="mission-text">
              <strong>Saintly Supplements</strong> exists to provide free, high-quality vitamins and 
              supplements to people with chronic medical conditions who can't afford them. 
              With help from generous partners and donors, we supply trusted products for 
              conditions like neuropathy, back pain, heart disease, osteoporosis, and eye health. 
              Volunteers, including youth, support our mission by helping bring these essential 
              resources to those in need.
            </p>
            
            <div className="mission-actions">
              <Link to="/donate" className="btn btn-primary">
                Make a Donation
              </Link>
              <Link to="/partners" className="btn btn-outline">
                Become a Partner
              </Link>
              <Link to="/get-involved" className="btn btn-outline">
                Become a Corporate Sponsor
              </Link>
            </div>

            <p className="fiscal-sponsor-note">
              Saintly Supplements is a program of the Indo-American Foundation of Tampa Bay (IAFTB).{' '}
              <a href="https://iaftb.org" target="_blank" rel="noopener noreferrer">
                Learn more
              </a>{' '}
              about Saintly Supplements' 501(c)(3) organization.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;