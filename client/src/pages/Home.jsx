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

