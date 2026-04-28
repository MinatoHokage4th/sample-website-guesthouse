export default function Footer() {
  console.log('Footer rendered');
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <h3>ExclusiveKost Surabaya</h3>
          <p>Hunian nyaman, aman, dan modern di lokasi strategis.</p>
          <p>📞 WA: 0812-XXXX-XXXX</p>
          <p>📷 IG: @exclusivekostsurabaya</p>
        </div>
        <div className="footer-links">
          <h4>Menu</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/rooms">Kamar</a></li>
            <li><a href="/fasilitas">Fasilitas</a></li>
            <li><a href="/testimoni">Testimoni</a></li>
            <li><a href="/kontak">Kontak</a></li>
          </ul>
        </div>
        <div className="footer-newsletter">
          <h4>Dapatkan Info Promo</h4>
          <form onSubmit={(e) => { e.preventDefault(); console.log('Subscribe email:', e.target.email.value); alert('Demo: Email terdaftar!'); }}>
            <input type="email" placeholder="Email Anda" required />
            <button type="submit">Kirim</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 ExclusiveKost Surabaya. All rights reserved.</p>
      </div>
    </footer>
  );
}