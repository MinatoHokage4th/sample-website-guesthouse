import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { buildings } from "../data/content";

export default function Rooms() {
  const [selectedBuilding, setSelectedBuilding] = useState("1");
  useEffect(() => {
    // console.log("Rooms page loaded, buildings:", buildings);
  }, []);

  const filtered =
    selectedBuilding === "all"
      ? buildings
      : buildings.filter((b) => b.id.toString() === selectedBuilding);

  return (
    <div className="rooms-page">
      <h2 data-aos="fade-up">Pilihan Kamar Kami</h2>
      <div className="filter-bar" data-aos="fade-up">
        {buildings.map((b) => (
          <button
            key={b.id}
            onClick={() => setSelectedBuilding(b.id.toString())}
            className={selectedBuilding === b.id.toString() ? "active" : ""}
          >
            {b.name}
          </button>
        ))}
      </div>
      {filtered.map((building) => (
        <section
          key={building.id}
          className="building-section"
          data-aos="fade-up"
        >
          <div className="building-header">
            <h3>{building.name}</h3>
            <p className="building-location">
              {building.location} – {building.description}
            </p>
            <p className="address">{building.address}</p>
            <a
              href={building.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="map-link"
            >
              📍 Lihat di Google Maps
            </a>
            <ul className="building-details">
              {building.rooms.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
          <div className="room-grid">
            {building.roomTypes.map((room, idx) => (
              <Link
                to={`/rooms/${room.slug}`}
                key={idx}
                className="room-card-link"
              >
                <div className="room-card">
                  {room.images &&
                    room.images.room &&
                    room.images.room.length > 0 && (
                      <div className="room-image-carousel">
                        <div className="photo-placeholder">
                          <img src={room.images.room[0]} alt="" />
                        </div>
                      </div>
                    )}
                  <div className="room-info">
                    <h3>{room.type}</h3>
                    <p className="price">{room.priceFormatted}</p>
                    <div className="room-actions">
                      <span className="btn-book">Booking Sekarang</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
