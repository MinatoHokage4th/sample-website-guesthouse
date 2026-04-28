import { useState } from 'react';

export default function RoomCard({ type, price, bed, facilities, images = [] }) {
  const [currentImg, setCurrentImg] = useState(0);
  console.log(`RoomCard: ${type}`);

  const nextImg = () => setCurrentImg((prev) => (prev + 1) % images.length);
  const prevImg = () => setCurrentImg((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="room-card" data-aos="fade-up">
      {images.length > 0 && (
        <div className="room-image-carousel">
          <img src={images[currentImg]} alt={`${type} room`} />
          <button className="prev-img" onClick={prevImg}>&#10094;</button>
          <button className="next-img" onClick={nextImg}>&#10095;</button>
          <div className="img-indicator">{currentImg + 1}/{images.length}</div>
        </div>
      )}
      <div className="room-info">
        <h3>{type}</h3>
        <p className="price">{price}</p>
        <p><strong>Kasur:</strong> {bed}</p>
        <p><strong>Fasilitas:</strong> {facilities}</p>
        <div className="room-actions">
          <button className="btn-book">Booking</button>
          <a href="https://wa.me/62812XXXX?text=Saya%20tertarik%20kamar%20{type}" className="btn-wa-kecil" target="_blank" rel="noopener">WA</a>
        </div>
      </div>
    </div>
  );
}