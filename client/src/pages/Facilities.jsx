import { useEffect } from 'react';
import { facilitiesList } from '../data/content';

export default function Facilities() {
  useEffect(() => {
    console.log('Facilities page loaded');
  }, []);

  return (
    <div className="facilities-page">
      <h2 data-aos="fade-up">Fasilitas Unggulan</h2>
      <div className="facilities-grid">
        {facilitiesList.map((item, index) => (
          <div className="facility-card" key={index} data-aos="flip-left" data-aos-delay={index * 100}>
            <span className="facility-icon">{item.icon}</span>
            <h4>{item.title}</h4>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}