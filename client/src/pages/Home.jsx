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
              <svg viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path 
                  d="M30 12C25 8 18 6 10 8C14 12 16 18 16 24C18 20 22 16 30 12Z" 
                  fill="currentColor" 
                />
                <path 
                  d="M30 12C35 8 42 6 50 8C46 12 44 18 44 24C42 20 38 16 30 12Z" 
                  fill="currentColor" 
                />
                <ellipse cx="30" cy="6" rx="8" ry="2" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
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
              <a href="/donate" className="btn btn-primary">
                Make a Donation
              </a>
              <a href="/partners" className="btn btn-outline">
                Become a Partner
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;

