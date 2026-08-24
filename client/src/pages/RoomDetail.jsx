import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getRoomBySlug } from "../data/content";
import SubNavbar from "../components/SubNavbar";

const photoCategories = [
  { key: "room", label: "Foto Kamar" },
  { key: "layout", label: "Layout Kamar" },
  { key: "bed", label: "Ranjang" },
  { key: "furniture", label: "Furniture" },
  { key: "toilet", label: "Toilet" },
];

export default function RoomDetail() {
  const { slug } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activePhotoCat, setActivePhotoCat] = useState("room");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [sewaData, setSewaData] = useState({
    durasi: "bulan",
    price: 0,
    mulaiSewa: "",
  });

  useEffect(() => {
    //console.log("RoomDetail page mounted, slug:", slug);
    const result = getRoomBySlug(slug);
    if (result) {
      // console.log(
      //   "Room data found:",
      //   result.room.type,
      //   "from",
      //   result.building.name,
      // );
      setData(result);
    } else {
      console.error("Room not found for slug:", slug);
    }
    setLoading(false);
  }, [slug]);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
    //console.log("Lightbox opened at index:", index);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    if (!data) return;
    const images = data.room.images[activePhotoCat];
    setLightboxIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    if (!data) return;
    const images = data.room.images[activePhotoCat];
    setLightboxIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const formatPrice = (price, durasi) => {
    const multipliers = { "1bulan": 1, "3bulan": 3, "6bulan": 6, "1tahun": 12 };
    const total = price * (multipliers[durasi] || 1);
    sewaData.price = total;
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(total);
  };

  const handleSewaChange = (e) => {
    setSewaData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleAjukanSewa = (e) => {
    e.preventDefault();
    const url =
      "https://wa.me/+6289699600572?text=Halo%20Admin%20Marviano%20bisakah%20saya%20sewa%20kamar%20kost%20selama%20" +
      sewaData.durasi.toString() +
      "%20mulai%20tanggal%20" +
      sewaData.mulaiSewa.toString() +
      "%20dengan%20estimasi%20total%20biaya%20" +
      new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
      })
        .format(sewaData.price)
        .toString() +
      "?";
    window.open(url, "_blank", "noopener,noreferrer");
  };

  if (loading) {
    return (
      <div className="detail-loading">
        <p>Memuat detail kamar...</p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="detail-not-found" data-aos="fade-up">
        <h2>Kamar Tidak Ditemukan</h2>
        <p>Maaf, kamar yang Anda cari tidak tersedia.</p>
        <Link to="/rooms" className="btn-primary">
          Kembali ke Daftar Kamar
        </Link>
      </div>
    );
  }

  const { building, room } = data;
  const currentImages = room.images[activePhotoCat];

  return (
    <div className="room-detail-page">
      {/* Breadcrumb */}
      <div className="breadcrumb" data-aos="fade-right">
        <Link to="/">Home</Link>
        <span>/</span>
        <Link to="/rooms">Kamar</Link>
        <span>/</span>
        <span className="current">
          {room.type} - {building.name}
        </span>
      </div>

      {/* Judul & Info Singkat */}
      <div className="detail-header" data-aos="fade-up">
        <h2>
          {room.type} - {building.name}
        </h2>
        <p className="detail-location">{building.location}</p>
        <div className="detail-badges">
          <span className="badge">🏢 {building.address}</span>
          <span className="badge">🟢 Tersedia {room.available} kamar</span>
          <span className="badge">⭐ {building.description}</span>
        </div>
      </div>

      {/* Sub Navbar */}
      <SubNavbar />

      {/* Layout 2 Kolom */}
      <div className="detail-layout">
        {/* ============= KOLOM KIRI (Konten Utama) ============= */}
        <div className="detail-main">
          {/* Section 1: Foto */}
          <section
            id="section-foto"
            className="detail-section"
            data-aos="fade-up"
          >
            <h3>Foto Kamar</h3>
            {/* Tab Kategori Foto */}
            <div className="photo-tabs">
              {photoCategories.map((cat) => (
                <button
                  key={cat.key}
                  className={`photo-tab ${activePhotoCat === cat.key ? "active" : ""}`}
                  onClick={() => setActivePhotoCat(cat.key)}
                >
                  {cat.label}
                </button>
              ))}
            </div>
            <div className="photo-grid">
              {currentImages.map((img, idx) => (
                <div
                  key={idx}
                  className="photo-thumb"
                  onClick={() => openLightbox(idx)}
                >
                  <div className="photo-placeholder">
                    <img src={img} alt={img.split("/").pop()} />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 2: Fasilitas */}
          <section
            id="section-fasilitas"
            className="detail-section"
            data-aos="fade-up"
          >
            <h3>Fasilitas Kamar</h3>
            <div className="facility-list-detail">
              {room.facilitiesArray.map((fac, idx) => (
                <div key={idx} className="facility-item-detail">
                  <span>✅</span> {fac}
                </div>
              ))}
            </div>
          </section>

          {/* Section 3: Deskripsi */}
          <section
            id="section-deskripsi"
            className="detail-section"
            data-aos="fade-up"
          >
            <h3>Deskripsi Kamar</h3>
            <p>{room.description}</p>
          </section>

          {/* Section 4: Spesifikasi */}
          <section
            id="section-spesifikasi"
            className="detail-section"
            data-aos="fade-up"
          >
            <h3>Spesifikasi</h3>
            <table className="specs-table">
              <tbody>
                <tr>
                  <td>Listrik</td>
                  <td>{room.specs.listrik}</td>
                </tr>
                <tr>
                  <td>Sumber Air</td>
                  <td>{room.specs.sumberAir}</td>
                </tr>
                <tr>
                  <td>WiFi</td>
                  <td>{room.specs.wifi}</td>
                </tr>
                <tr>
                  <td>Laundry</td>
                  <td>{room.specs.laundry}</td>
                </tr>
              </tbody>
            </table>
          </section>

          {/* Section 5: Lokasi */}
          <section
            id="section-lokasi"
            className="detail-section"
            data-aos="fade-up"
          >
            <h3>Lokasi</h3>
            <p>{building.address}</p>
            <p>{building.location}</p>
          </section>
        </div>

        {/* ============= KOLOM KANAN (Sidebar Pengajuan Sewa) ============= */}
        <aside className="detail-sidebar" data-aos="fade-left">
          <div className="sidebar-card">
            <h3 className="sidebar-title">Pengajuan Sewa</h3>
            <div className="sidebar-price">
              <span className="price-current">
                Mulai dari
                <br />
                {room.priceFormatted}
              </span>
            </div>
            <div className="sidebar-info">
              <p>🛏️ {room.bed}</p>
              <p>🟢 {room.available} kamar tersedia</p>
              <p>🏢 {building.name}</p>
            </div>

            <form className="sewa-form" onSubmit={handleAjukanSewa}>
              <label>Durasi Sewa</label>
              <select
                name="durasi"
                value={sewaData.durasi}
                onChange={handleSewaChange}
              >
                <option value="1bulan">1 Bulan</option>
                <option value="3bulan">3 Bulan</option>
                <option value="6bulan">6 Bulan</option>
                <option value="1tahun">1 Tahun</option>
              </select>

              <label>Tanggal Mulai Sewa</label>
              <input
                type="date"
                name="mulaiSewa"
                value={sewaData.mulaiSewa}
                onChange={handleSewaChange}
                required
              />

              <div className="sewa-total">
                <span>Estimasi Total:</span>
                <strong>{formatPrice(room.price, sewaData.durasi)}</strong>
              </div>

              <button type="submit" className="btn-primary btn-full">
                Ajukan Sewa
              </button>
            </form>

            <div className="sidebar-note">
              <p>ℹ️ Waijb Membayar DP 20% untuk sewa kamar</p>
              <p>ℹ️ Waijb Membayar Uang Deposit / Jaminan </p>
              <p>📋 Wajib Melampirkan KTP saat check-in</p>
            </div>
          </div>
        </aside>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <span className="lightbox-close" onClick={closeLightbox}>
            &times;
          </span>
          <button
            className="lightbox-nav prev"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
          >
            &#10094;
          </button>
          <img
            src={currentImages[lightboxIndex]}
            alt={`Foto ${lightboxIndex + 1}`}
            className="lightbox-image"
            onClick={(e) => e.stopPropagation()}
            onError={(e) => {
              e.target.style.display = "none";
              console.error(
                "Image failed to load:",
                currentImages[lightboxIndex],
              );
            }}
          />
          <button
            className="lightbox-nav next"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
          >
            &#10095;
          </button>
          <div className="lightbox-counter">
            {lightboxIndex + 1} / {currentImages.length}
          </div>
        </div>
      )}
    </div>
  );
}
