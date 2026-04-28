import { useState, useEffect } from 'react';

const sections = [
  { id: 'section-foto', label: 'Foto' },
  { id: 'section-fasilitas', label: 'Fasilitas' },
  { id: 'section-deskripsi', label: 'Deskripsi' },
  { id: 'section-spesifikasi', label: 'Spesifikasi' },
  { id: 'section-lokasi', label: 'Lokasi' },
];

export default function SubNavbar() {
  const [activeSection, setActiveSection] = useState('section-foto');

  useEffect(() => {
    console.log('SubNavbar mounted, starting IntersectionObserver');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log(`Section visible: ${entry.target.id}`);
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-80px 0px -60% 0px', // offset untuk sticky header
        threshold: 0.1,
      }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      console.log(`Scrolling to section: ${id}`);
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="sub-navbar">
      <div className="sub-navbar-container">
        {sections.map((section) => (
          <button
            key={section.id}
            className={`sub-nav-item ${activeSection === section.id ? 'active' : ''}`}
            onClick={() => scrollToSection(section.id)}
          >
            {section.label}
          </button>
        ))}
      </div>
    </nav>
  );
}