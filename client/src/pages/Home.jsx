import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

// Data untuk carousel hero
const heroSlides = [
  {
    image: "./image/gedung-1.jpg",
    title:
      "Hunian 5 menit menuju Institut Teknologi Sepuluh November (ITS) Surabaya",
    subtitle: "Hunian nyaman dan lengkap, khusus untuk mahasiswa pria",
    link: "/fasilitas",
    cta: "Lihat Fasilitas Gedung",
  },
  {
    image: "./image/gedung-2.jpg",
    title:
      "Kamar nyaman dengan fasilitas lengkap mendukung produktivitas mahasiswa",
    subtitle:
      "Dilengkapi Springbed, Lemari Pakaian, Pendingin Ruangan, Water-Heater di setiap kamar",
    link: "/rooms/gedung-1-basic",
    cta: "Lihat Kamar",
  },
];

// Data untuk carousel kamar (thumbnail)
const roomSlides = [
  {
    image: "./image/kamar-1.jpg",
    title: "Kamar",
    price: "Mulai Rp2.000.000/bln *)",
    slug: "gedung-1-basic",
  },
  {
    image: "./image/dapur-1.jpg",
    title: "Dapur Kering",
    price: "Kulkas + Water Dispenser",
    slug: "/fasilitas",
  },
  {
    image: "./image/ruang-tamu.jpg",
    title: "Ruang Tamu",
    price: "Tempat bersantai & menerima tamu",
    slug: "/fasilitas",
  },
];

// Data highlight keunggulan lokasi
const locationHighlights = [
  {
    icon: "🛒",
    name: "Indomaret",
    distance: "< 500 M",
    desc: "Dua gerai Indomaret di utara dan selatan gedung",
  },
  {
    icon: "🍜",
    name: "Depot Makan",
    distance: "< 500 M",
    desc: "Depot makan 24 jam, warteg, dan food court",
  },
  {
    icon: "🧺",
    name: "Laundry Kiloan",
    distance: "< 500 M",
    desc: "Alternatif laundry satuan di luar paket gratis kost",
  },
  {
    icon: "🏥",
    name: "Apotik & Klinik",
    distance: "< 1.0 KM",
    desc: "Klinik 24 jam dan apotik lengkap",
  },
  {
    icon: "🎓",
    name: "Kampus ITS",
    distance: "< 3.0 KM ",
    desc: "8 menit dengan kendaraan bermotor",
  },
  {
    icon: "🎓",
    name: "Pusat Belanja",
    distance: "< 2.0 KM ",
    desc: "5 menit dengan kendaraan bermotor",
  },
];

// Data fasilitas unggulan (highlight)
const facilityHighlights = [
  {
    icon: "🔌",
    title: "Listrik Token",
    desc: "Setiap kamar, lebih hemat dan fleksibel",
  },
  {
    icon: "📹",
    title: "Dilengkapi CCTV 24/7",
    desc: "Keamanan terjaga, penghuni aman",
  },
  {
    icon: "📶",
    title: "WiFi Unlimited",
    desc: "Kecepatan Internet UpTo 100 Mbps",
  },
  {
    icon: "🛡️",
    title: "Kartu Akses",
    desc: "Keamanan gedung dilengkapi smart-door-lock",
  },
  {
    icon: "🧺",
    title: "Laundry",
    desc: "Layanan Cuci + Setrika, Self-Service",
  },
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
    //console.log("Home page loaded");
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
  const prevRoom = () =>
    setRoomIndex((prev) => (prev - 1 + roomSlides.length) % roomSlides.length);

  // Hitung berapa slide yang terlihat berdasarkan viewport
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const updateSlides = () => {
      if (window.innerWidth < 640) setSlidesToShow(1);
      else if (window.innerWidth < 1024) setSlidesToShow(2);
      else setSlidesToShow(3);
    };
    updateSlides();
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  const visibleRoomSlides = [];
  for (let i = 0; i < slidesToShow; i++) {
    visibleRoomSlides.push(roomSlides[(roomIndex + i) % roomSlides.length]);
  }

  return (
    <div className="home-page">
      {/* ========== HERO CAROUSEL ========== */}
      <section className="hero-carousel" data-aos="fade-in">
        <div className={`hero-slide ${heroFade ? "fade-in" : "fade-out"}`}>
          <div
            className="hero-bg"
            style={{ backgroundImage: `url(${heroSlides[heroIndex].image})` }}
          ></div>
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <h2>{heroSlides[heroIndex].title}</h2>
            <p className="hero-subtitle">{heroSlides[heroIndex].subtitle}</p>
            <Link
              to={heroSlides[heroIndex].link}
              className="btn-primary btn-hero"
            >
              {heroSlides[heroIndex].cta}
            </Link>
          </div>
        </div>

        {/* Navigasi dots */}
        <div className="hero-dots">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              className={`hero-dot ${idx === heroIndex ? "active" : ""}`}
              onClick={() => goToHero(idx)}
              aria-label={`Slide ${idx + 1}`}
            ></button>
          ))}
        </div>

        {/* Panah kiri/kanan */}
        <button
          className="hero-arrow hero-arrow-left"
          onClick={() =>
            goToHero((heroIndex - 1 + heroSlides.length) % heroSlides.length)
          }
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
        <div className="trust-item">
          <span>💰</span>
          <p>Harga Terjangkau</p>
        </div>
        <div className="trust-item">
          <span>🔒</span>
          <p>Keamanan 24/7</p>
        </div>
        <div className="trust-item">
          <span>🧹</span>
          <p>Kebersihan Terjaga</p>
        </div>
        <div className="trust-item">
          <span>📍</span>
          <p>Lokasi Strategis</p>
        </div>
      </section>

      {/* ========== CAROUSEL KAMAR & FASILITAS ========== */}
      <section className="room-showcase" data-aos="fade-up">
        <div className="section-header">
          <h3>Kamar & Fasilitas Kami</h3>
          <p className="section-subtitle">
            Kamar dengan fasilitas modern untuk kenyamanan Anda
          </p>
        </div>

        <div className="carousel-container">
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={prevRoom}
            aria-label="Slide sebelumnya"
          >
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

          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={nextRoom}
            aria-label="Slide berikutnya"
          >
            &#10095;
          </button>
        </div>

        {/* Indicator dots */}
        <div className="carousel-dots">
          {roomSlides.map((_, idx) => (
            <button
              key={idx}
              className={`carousel-dot ${idx === roomIndex ? "active" : ""}`}
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
            Kenyamanan dan keamanan maksimal adalah prioritas kami. Semua
            fasilitas sudah termasuk dalam harga sewa
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
            Lokasi strategis kami dikelilingi berbagai fasilitas publik. Hanya
            beberapa menit berjalan kaki ke berbagai tempat penting
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
            Booking mudah via WhatsApp. <br />
            Tim kami siap membantu Anda memilih kamar yang sesuai kebutuhan.
          </p>
          <div className="cta-buttons">
            <Link to="/rooms" className="btn-primary btn-cta">
              🏢 Lihat Semua Kamar
            </Link>
            <a
              href="https://wa.me/+6289699600572?text=Halo%20Marviano%20bisakah%20saya%20dapat%20info%20ketersediaan%20kamar%20kost?"
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
