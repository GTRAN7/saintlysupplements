import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import ScrollToTop from './components/common/ScrollToTop';
import Home from './pages/Home';
import OurWork from './pages/OurWork';
import Blogs from './pages/Blogs';
import BlogPost from './pages/BlogPost';
import GetInvolved from './pages/GetInvolved';
import Partners from './pages/Partners';
import Shop from './pages/Shop';
import Donate from './pages/Donate';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import VeteranProgram from './pages/VeteranProgram';
import VeteranPolicy from './pages/VeteranPolicy';
import './styles/global.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-work" element={<OurWork />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/cart" element={<Shop />} />
          <Route path="/contact" element={<GetInvolved />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/veterans" element={<VeteranProgram />} />
          <Route path="/veteran-policy" element={<VeteranPolicy />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
