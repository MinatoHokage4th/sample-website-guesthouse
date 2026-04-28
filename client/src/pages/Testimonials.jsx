import { useState, useEffect } from 'react';
import { testimonials } from '../data/content';

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    console.log('Testimonials page loaded, data:', testimonials);
  }, []);

  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);

  return (
    <div className="testimonials-page">
      <h2 data-aos="fade-up">Testimoni Penghuni</h2>
      <div className="testimonial-carousel" data-aos="zoom-in">
        <button className="carousel-btn prev" onClick={prev}>&#10094;</button>
        <div className="testimonial-content">
          <p className="testimonial-text">"{testimonials[current].text}"</p>
          <p className="testimonial-author">— {testimonials[current].name}, {testimonials[current].role}</p>
        </div>
        <button className="carousel-btn next" onClick={next}>&#10095;</button>
        <div className="carousel-dots">
          {testimonials.map((_, idx) => (
            <span key={idx} className={idx === current ? 'dot active' : 'dot'} onClick={() => setCurrent(idx)}></span>
          ))}
        </div>
      </div>
    </div>
  );
}