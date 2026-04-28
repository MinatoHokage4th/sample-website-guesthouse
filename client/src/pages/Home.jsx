import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { buildings } from '../data/content';

// Data untuk carousel hero
const heroSlides = [
  {
    image: '/images/gedung1-hero.jpg',
    title: 'Gedung 1 — Dekat ITS',
    subtitle: 'Hunian simpel & efisien, parkir motor & mobil gratis, WiFi 100 Mbps',
    link: '/rooms',
    cta: 'Lihat Kamar Gedung 1',
  },
  {
    image: '/images/gedung2-hero.jpg',
    title: 'Gedung 2 — Dekat UBAYA',
    subtitle: 'Premium 5 lantai, CCTV 32 kamera, WiFi 125 Mbps, laundry gratis',
    link: '/rooms',
    cta: 'Lihat Kamar Gedung 2',
  },
  {
    image: '/images/kamar-deluxe.jpg',
    title: 'Kamar Deluxe — King Size 200x200',
    subtitle: 'Springbed mewah, 2 lemari, 6 stopkontak, water heater',
    link: '/rooms/gedung-2-deluxe',
    cta: 'Lihat Detail Deluxe',
  },
];

// Data untuk carousel kamar (thumbnail)
const roomSlides = [
  { image: '/images/room-basic1.jpg', title: 'Kamar Basic', price: 'Mulai Rp1.800.000/bln', slug: 'gedung-1-basic' },
  { image: '/images/room-superior1.jpg', title: 'Kamar Superior', price: 'Mulai Rp2.400.000/bln', slug: 'gedung-1-superior' },
  { image: '/images/room-deluxe1.jpg', title: 'Kamar Deluxe', price: 'Rp3.000.000/bln', slug: 'gedung-2-deluxe' },
  { image: '/images/dapur-kering.jpg', title: 'Dapur Kering Lengkap', price: 'Kulkas + Water Dispenser', slug: '/fasilitas' },
  { image: '/images/ruang-tamu.jpg', title: 'Ruang Tamu Cozy', price: 'Tempat bersantai & terima tamu', slug: '/fasilitas' },
];

// Data highlight keunggulan lokasi
const locationHighlights = [
  { icon: '🛒', name: 'Indomaret', distance: '1 menit jalan kaki', desc: 'Dua gerai Indomaret di utara dan selatan gedung' },
  { icon: '🍜', name: 'Depot Makan', distance: '2 menit jalan kaki', desc: 'Depot makan 24 jam, warteg, dan food court' },
  { icon: '🧺', name: 'Laundry Kiloan', distance: '3 menit jalan kaki', desc: 'Alternatif laundry satuan di luar paket gratis kost' },
  { icon: '🏥', name: 'Apotik & Klinik', distance: '5 menit jalan kaki', desc: 'Klinik 24 jam dan apotik lengkap' },
  { icon: '🎓', name: 'Kampus ITS', distance: '10 menit jalan kaki', desc: '3 menit dengan kendaraan bermotor' },
  { icon: '🎓', name: 'Kampus UBAYA', distance: '8 menit jalan kaki', desc: '2 menit dengan kendaraan bermotor' },
];

// Data fasilitas unggulan (highlight)
const facilityHighlights = [
  { icon: '🅿️', title: 'Parkir Gratis', desc: 'Motor & mobil, area luas dan aman' },
  { icon: '🔌', title: 'Listrik Token', desc: 'Per kamar, lebih hemat dan fleksibel' },
  { icon: '📹', title: 'CCTV 24/7', desc: '16 - 32 kamera di setiap lantai' },
  { icon: '📶', title: 'WiFi Unlimited', desc: 'Up to 125 Mbps per lantai' },
  { icon: '🛡️', title: 'RFID Card', desc: 'Keamanan tinggi, akses terbatas' },
  { icon: '🧺', title: 'Laundry Gratis', desc: 'Cuci + setrika 10 potong/2 hari' },
];

export default function Home() {
  const [heroIndex, setHeroIndex] = useState(0);
  const [roomIndex, setRoomIndex] = useState(0);
  const [heroFade, setHeroFade] = useState(true);

  // Auto-slide hero setiap 5 detik
  const nextHero = useCallback(() => {
    setHeroFade(false);
    setTimeout(() => {
      setHeroIndex((prev) => (prev + 1) % heroSlides.length);
      setHeroFade(true);
    }, 400);
  }, []);

  useEffect(() => {
    console.log('Home page loaded');
    const interval = setInterval(nextHero, 5000);
    return () => clearInterval(interval);
  }, [nextHero]);

  const goToHero = (idx) => {
    setHeroFade(false);
    setTimeout(() => {
      setHeroIndex(idx);
      setHeroFade(true);
    }, 400);
  };

  const nextRoom = () => setRoomIndex((prev) => (prev + 1) % roomSlides.length);
  const prevRoom = () => setRoomIndex((prev) => (prev - 1 + roomSlides.length) % roomSlides.length);

  // Hitung berapa slide yang terlihat berdasarkan viewport
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const updateSlides = () => {
      if (window.innerWidth < 640) setSlidesToShow(1);
      else if (window.innerWidth < 1024) setSlidesToShow(2);
      else setSlidesToShow(3);
    };
    updateSlides();
    window.addEventListener('resize', updateSlides);
    return () => window.removeEventListener('resize', updateSlides);
  }, []);

  const visibleRoomSlides = [];
  for (let i = 0; i < slidesToShow; i++) {
    visibleRoomSlides.push(roomSlides[(roomIndex + i) % roomSlides.length]);
  }

  return (
    <div className="home-page">
      {/* ========== HERO CAROUSEL ========== */}
      <section className="hero-carousel" data-aos="fade-in">
        <div className={`hero-slide ${heroFade ? 'fade-in' : 'fade-out'}`}>
          <div
            className="hero-bg"
            style={{ backgroundImage: `url(${heroSlides[heroIndex].image})` }}
          ></div>
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <h2>{heroSlides[heroIndex].title}</h2>
            <p className="hero-subtitle">{heroSlides[heroIndex].subtitle}</p>
            <Link to={heroSlides[heroIndex].link} className="btn-primary btn-hero">
              {heroSlides[heroIndex].cta}
            </Link>
          </div>
        </div>

        {/* Navigasi dots */}
        <div className="hero-dots">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              className={`hero-dot ${idx === heroIndex ? 'active' : ''}`}
              onClick={() => goToHero(idx)}
              aria-label={`Slide ${idx + 1}`}
            ></button>
          ))}
        </div>

        {/* Panah kiri/kanan */}
        <button
          className="hero-arrow hero-arrow-left"
          onClick={() => goToHero((heroIndex - 1 + heroSlides.length) % heroSlides.length)}
          aria-label="Slide sebelumnya"
        >
          &#10094;
        </button>
        <button
          className="hero-arrow hero-arrow-right"
          onClick={nextHero}
          aria-label="Slide berikutnya"
        >
          &#10095;
        </button>
      </section>

      {/* ========== TRUST BAR ========== */}
      <section className="trust-bar" data-aos="fade-up">
        <div className="trust-item"><span>💰</span><p>Harga Terjangkau</p></div>
        <div className="trust-item"><span>🔒</span><p>Keamanan 24/7</p></div>
        <div className="trust-item"><span>🧹</span><p>Kebersihan Terjaga</p></div>
        <div className="trust-item"><span>📍</span><p>Lokasi Strategis</p></div>
      </section>

      {/* ========== CAROUSEL KAMAR & FASILITAS ========== */}
      <section className="room-showcase" data-aos="fade-up">
        <div className="section-header">
          <h3>Kamar & Fasilitas Kami</h3>
          <p className="section-subtitle">
            Beragam pilihan kamar dengan fasilitas modern untuk kenyamanan Anda
          </p>
        </div>

        <div className="carousel-container">
          <button className="carousel-arrow carousel-arrow-left" onClick={prevRoom} aria-label="Slide sebelumnya">
            &#10094;
          </button>

          <div className="carousel-track">
            {visibleRoomSlides.map((slide, idx) => (
              <Link
                to={`/rooms/${slide.slug}`}
                key={`${slide.slug}-${idx}`}
                className="carousel-card"
              >
                <div className="carousel-card-image">
                  <div
                    className="carousel-card-bg"
                    style={{ backgroundImage: `url(${slide.image})` }}
                  ></div>
                </div>
                <div className="carousel-card-body">
                  <h4>{slide.title}</h4>
                  <p className="carousel-card-price">{slide.price}</p>
                </div>
              </Link>
            ))}
          </div>

          <button className="carousel-arrow carousel-arrow-right" onClick={nextRoom} aria-label="Slide berikutnya">
            &#10095;
          </button>
        </div>

        {/* Indicator dots */}
        <div className="carousel-dots">
          {roomSlides.map((_, idx) => (
            <button
              key={idx}
              className={`carousel-dot ${idx === roomIndex ? 'active' : ''}`}
              onClick={() => setRoomIndex(idx)}
              aria-label={`Slide ${idx + 1}`}
            ></button>
          ))}
        </div>
      </section>

      {/* ========== FASILITAS UNGGULAN ========== */}
      <section className="facility-highlights" data-aos="fade-up">
        <div className="section-header">
          <h3>Fasilitas Unggulan</h3>
          <p className="section-subtitle">
            Kenyamanan dan keamanan maksimal adalah prioritas kami. Semua fasilitas sudah termasuk dalam harga sewa
          </p>
        </div>
        <div className="facility-highlights-grid">
          {facilityHighlights.map((item, idx) => (
            <div
              className="facility-highlight-card"
              key={idx}
              data-aos="zoom-in"
              data-aos-delay={idx * 100}
            >
              <span className="facility-highlight-icon">{item.icon}</span>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ========== KEUNGGULAN LOKASI ========== */}
      <section className="location-advantages" data-aos="fade-up">
        <div className="section-header">
          <h3>Keunggulan Lokasi</h3>
          <p className="section-subtitle">
            Lokasi strategis kami dikelilingi berbagai fasilitas publik. Hanya beberapa menit berjalan kaki ke berbagai tempat penting
          </p>
        </div>
        <div className="location-grid">
          {locationHighlights.map((item, idx) => (
            <div
              className="location-card"
              key={idx}
              data-aos="fade-right"
              data-aos-delay={idx * 80}
            >
              <span className="location-icon">{item.icon}</span>
              <div className="location-info">
                <h5>{item.name}</h5>
                <span className="location-distance">{item.distance}</span>
                <p className="location-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========== CTA SECTION ========== */}
      <section className="cta-section" data-aos="zoom-in">
        <div className="cta-card">
          <h3>Sewa Sekarang & Dapatkan Kenyamanan Maksimal</h3>
          <p>
            Booking mudah via WhatsApp atau aplikasi kami. Tim kami siap membantu Anda
            memilih kamar yang sesuai kebutuhan.
          </p>
          <div className="cta-buttons">
            <Link to="/rooms" className="btn-primary btn-cta">
              🏢 Lihat Semua Kamar
            </Link>
            <a
              href="https://wa.me/62812XXXX?text=Halo,%20saya%20ingin%20tanya%20sewa%20kamar%20ExclusiveKost"
              className="btn-wa btn-cta"
              target="_blank"
              rel="noopener noreferrer"
            >
              💬 Chat via WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}