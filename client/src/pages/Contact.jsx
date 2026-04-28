import { useState, useEffect } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  useEffect(() => {
    console.log('Contact page mounted');
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted:', form);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': 'exclusivekost2025secret'
        },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      console.log('Server response:', data);
      if (data.success) {
        setStatus('Pesan terkirim! Kami akan menghubungi Anda segera.');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('Gagal mengirim. Coba lagi.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('Terjadi kesalahan jaringan.');
    }
  };

  return (
    <div className="contact-page">
      <h2 data-aos="fade-up">Kontak & Tentang Kami</h2>
      <div className="contact-wrapper">
        <div className="about-section" data-aos="fade-right">
          <h3>Tentang ExclusiveKost</h3>
          <p>ExclusiveKost Surabaya adalah pengelola kost premium dengan 2 gedung di lokasi strategis dekat kampus ITS dan UBAYA. Kami mengutamakan kenyamanan, keamanan, dan fasilitas modern untuk mendukung gaya hidup urban Anda.</p>
          <div className="contact-info">
            <h4>Alamat:</h4>
            <p><strong>Gedung 1:</strong> Jl. Teknik Kimia No.10, Sukolilo (Dekat ITS)</p>
            <p><strong>Gedung 2:</strong> Jl. Raya Ngagel No.25, Wonokromo (Dekat UBAYA)</p>
            <p>📞 WA: 0812-XXXX-XXXX</p>
            <p>📷 Instagram: @exclusivekostsurabaya</p>
            <div className="maps-embed">
              <iframe src="https://www.google.com/maps/embed?pb=..." width="100%" height="200" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
            </div>
          </div>
        </div>
        <form className="contact-form" data-aos="fade-left" onSubmit={handleSubmit}>
          <h3>Hubungi Kami</h3>
          <input type="text" name="name" placeholder="Nama Lengkap" value={form.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
          <textarea name="message" rows="5" placeholder="Pesan Anda" value={form.message} onChange={handleChange} required></textarea>
          <button type="submit" className="btn-primary">Kirim Pesan</button>
          {status && <p className="form-status">{status}</p>}
        </form>
      </div>
    </div>
  );
}