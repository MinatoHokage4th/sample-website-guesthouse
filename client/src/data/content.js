export const buildings = [
  {
    id: 1,
    name: "Marviano Kost",
    location: "Dekat Kampus ITS Surabaya dan Area Pakuwon City",
    address:
      "Jl. Mulyosari Tengah IX No.3, RT.008/RW.06, Kalisari, Kec. Mulyorejo, Surabaya, Jawa Timur 60112",
    description: "Ideal untuk yang Simpel & Efisien",
    mapLink: "https://maps.app.goo.gl/y1hHsQYg7xyUjbph9",
    rooms: [
      "Tersedia Ruang tamu (public area)",
      "Tersedia Dapur kering (publi area)",
      "Dilengkapi CCTV di beberapa area gedung",
      "Dilengkapi WiFi UpTo 100 Mbps",
    ],
    roomTypes: [
      {
        type: "Mini Studio",
        slug: "gedung-1-basic",
        price: 2000000,
        priceFormatted: "Rp2.000.000/bln",
        bed: "Springbed",
        facilities:
          "Lemari baju, meja kerja, AC, 3 stopkontak, kamar mandi dalam",
        facilitiesArray: [
          "AC",
          "Lemari",
          "Meja Kerja",
          "3 Stopkontak",
          "Kamar Mandi Dalam + Water Heater",
        ],
        available: 10,
        description:
          "Kamar Basic kami dirancang untuk penghuni yang menginginkan kenyamanan esensial dengan harga terjangkau. Dilengkapi dengan springbed ukuran 120x200cm yang nyaman, meja kerja luas, dan AC memberikan suasana istirahat sejuk.",
        images: {
          room: ["../image/kamar-1.jpg", "../image/kamar-2.jpg"],
          layout: ["../image/layout-1.jpg"],
          bed: ["../image/bed-1.jpg", "../image/bed-2.jpg"],
          furniture: ["../image/furniture-1.jpg", "../image/furniture-2.jpg"],
          toilet: ["../image/toilet-1.jpg", "../image/toilet-2.jpg"],
        },
        specs: {
          listrik: "1300 VA (Token)",
          sumberAir: "PDAM",
          wifi: "Up to 100 Mbps",
          parkir: "Motor & Mobil",
          keamanan: "CCTV 24/7 + RFID Card",
          laundry: "Gratis 10 potong/2 hari",
        },
      },
    ],
  },
];

export const facilitiesList = [
  {
    icon: "🔌",
    title: "Listrik Token",
    desc: "Tiap kamar, lebih hemat dan praktis.",
  },
  {
    icon: "🛋️",
    title: "Ruang Tamu",
    desc: "Tempat bersantai dan menerima tamu.",
  },
  { icon: "🍽️", title: "Dapur Kering", desc: "Dilengkapi kulkas + dispenser." },
  {
    icon: "📹",
    title: "Dilengkapi CCTV",
    desc: "Keamanan terjaga, penghuni aman",
  },
  { icon: "📶", title: "WiFi Unlimited", desc: "UpTo 100 Mbps." },
  {
    icon: "🛡️",
    title: "RFID Card",
    desc: "Keamanan tinggi, denda jika hilang.",
  },
  {
    icon: "🧺",
    title: "Laundry",
    desc: "Cuci + setrika 10 potong/2 hari.",
  },
  { icon: "👮", title: "Penjaga 24 Jam", desc: "Petugas ramah siap membantu." },
];

export const testimonials = [
  {
    name: "Rina",
    role: "Mahasiswi ITS",
    text: "Kostnya nyaman banget, dekat kampus dan fasilitas laundry sangat membantu. AC dingin, WiFi kencang!",
  },
];

// Fungsi pembantu untuk mencari room berdasarkan slug
export function getRoomBySlug(slug) {
  for (const building of buildings) {
    const room = building.roomTypes.find((r) => r.slug === slug);
    if (room) return { building, room };
  }
  return null;
}
