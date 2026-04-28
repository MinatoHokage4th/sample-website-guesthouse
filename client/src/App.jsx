import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import Facilities from './pages/Facilities';
import Contact from './pages/Contact';
import Testimonials from './pages/Testimonials';
import RoomDetail from './pages/RoomDetail';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppButton from './components/WhatsAppButton';

function AnimatedRoutes() {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState('fadeIn');

  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      setTransitionStage('fadeOut');
    }
  }, [location, displayLocation]);

  useEffect(() => {
    if (transitionStage === 'fadeOut') {
      const timeout = setTimeout(() => {
        setDisplayLocation(location);
        setTransitionStage('fadeIn');
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [transitionStage, location]);

  return (
    <div className={`page-transition ${transitionStage}`}>
      <Routes location={displayLocation}>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/rooms/:slug" element={<RoomDetail />} />
        <Route path="/fasilitas" element={<Facilities />} />
        <Route path="/kontak" element={<Contact />} />
        <Route path="/testimoni" element={<Testimonials />} />
        <Route path="*" element={
          <div className="not-found" data-aos="fade-up">
            <h2>404 - Halaman Tidak Ditemukan</h2>
            <p>Maaf, halaman yang Anda cari tidak ada.</p>
          </div>
        } />
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <div className="app-container">
      <ScrollToTop />
      <Navbar />
      <main className="main-content">
        <AnimatedRoutes />
      </main>
      <WhatsAppButton />
      <Footer />
    </div>
  );
}