export const buildings = [
  {
    id: 1,
    name: 'Gedung 1 (3 Lantai)',
    location: 'Dekat Kampus ITS Surabaya',
    address: 'Jl. Teknik Kimia No.10, Sukolilo',
    description: 'Ideal untuk yang Simpel & Efisien',
    mapLink: 'https://goo.gl/maps/ITSexample',
    rooms: ['Ruang tamu: 1 unit', 'Dapur kering: 2 unit', 'CCTV: 16 kamera', 'WiFi: Up to 100 Mbps/lantai'],
    roomTypes: [
      {
        type: 'Basic',
        slug: 'gedung-1-basic',
        price: 1800000,
        priceFormatted: 'Rp1.800.000/bln',
        bed: 'Springbed 120x200 cm',
        facilities: 'Lemari baju, meja kerja, AC, 3 stopkontak, kamar mandi dalam (water heater + hanger)',
        facilitiesArray: ['AC', 'Water Heater', 'Lemari', 'Meja Kerja', '3 Stopkontak', 'Kamar Mandi Dalam'],
        available: 5,
        description: 'Kamar Basic kami dirancang untuk penghuni yang menginginkan kenyamanan esensial dengan harga terjangkau. Springbed 120x200 cm yang empuk, meja kerja luas, dan AC memberikan suasana istirahat dan produktivitas yang seimbang.',
        images: {
          room: ['/images/room-basic1.jpg', '/images/room-basic2.jpg', '/images/room-basic3.jpg'],
          layout: ['/images/layout-basic.jpg'],
          bed: ['/images/bed-basic1.jpg', '/images/bed-basic2.jpg'],
          furniture: ['/images/furniture-basic1.jpg', '/images/furniture-basic2.jpg'],
          toilet: ['/images/toilet-basic1.jpg', '/images/toilet-basic2.jpg']
        },
        specs: {
          listrik: '1300 VA (Token)',
          sumberAir: 'PDAM',
          wifi: 'Up to 100 Mbps',
          parkir: 'Motor & Mobil',
          keamanan: 'CCTV 24/7 + RFID Card',
          laundry: 'Gratis 10 potong/2 hari'
        }
      },
      {
        type: 'Superior',
        slug: 'gedung-1-superior',
        price: 2400000,
        priceFormatted: 'Rp2.400.000/bln',
        bed: 'Springbed 160x200 cm',
        facilities: 'Lemari baju, meja kerja, AC, 4 stopkontak, kamar mandi dalam (water heater + hanger)',
        facilitiesArray: ['AC', 'Water Heater', 'Lemari', 'Meja Kerja', '4 Stopkontak', 'Kamar Mandi Dalam'],
        available: 3,
        description: 'Kamar Superior menawarkan ruang lebih lega dengan springbed 160x200 cm. Cocok untuk Anda yang menginginkan kenyamanan ekstra dengan 4 stopkontak untuk mendukung berbagai perangkat elektronik.',
        images: {
          room: ['/images/room-superior1.jpg', '/images/room-superior2.jpg'],
          layout: ['/images/layout-superior.jpg'],
          bed: ['/images/bed-superior1.jpg'],
          furniture: ['/images/furniture-superior1.jpg'],
          toilet: ['/images/toilet-superior1.jpg']
        },
        specs: {
          listrik: '1300 VA (Token)',
          sumberAir: 'PDAM',
          wifi: 'Up to 100 Mbps',
          parkir: 'Motor & Mobil',
          keamanan: 'CCTV 24/7 + RFID Card',
          laundry: 'Gratis 10 potong/2 hari'
        }
      }
    ]
  },
  {
    id: 2,
    name: 'Gedung 2 (5 Lantai)',
    location: 'Dekat Kampus UBAYA Surabaya',
    address: 'Jl. Raya Ngagel No.25, Wonokromo',
    description: 'Premium untuk Kenyamanan Maksimal',
    mapLink: 'https://goo.gl/maps/UBAYAexample',
    rooms: ['Ruang tamu: 2 unit', 'Dapur kering: 3 unit', 'CCTV: 32 kamera', 'WiFi: Up to 125 Mbps/lantai'],
    roomTypes: [
      {
        type: 'Basic',
        slug: 'gedung-2-basic',
        price: 1900000,
        priceFormatted: 'Rp1.900.000/bln',
        bed: 'Springbed 120x200 cm',
        facilities: 'Lemari baju, meja kerja, AC, 3 stopkontak, kamar mandi dalam (water heater + hanger)',
        facilitiesArray: ['AC', 'Water Heater', 'Lemari', 'Meja Kerja', '3 Stopkontak', 'Kamar Mandi Dalam'],
        available: 8,
        description: 'Kamar Basic di Gedung 2 menawarkan kenyamanan maksimal dengan akses ke fasilitas premium gedung. Lokasi strategis dekat UBAYA, cocok untuk mahasiswa maupun pekerja.',
        images: {
          room: ['/images/room-basic1.jpg', '/images/room-basic2.jpg'],
          layout: ['/images/layout-basic.jpg'],
          bed: ['/images/bed-basic1.jpg'],
          furniture: ['/images/furniture-basic1.jpg'],
          toilet: ['/images/toilet-basic1.jpg']
        },
        specs: {
          listrik: '1300 VA (Token)',
          sumberAir: 'PDAM',
          wifi: 'Up to 125 Mbps',
          parkir: 'Motor & Mobil',
          keamanan: 'CCTV 24/7 + RFID Card',
          laundry: 'Gratis 10 potong/2 hari'
        }
      },
      {
        type: 'Superior',
        slug: 'gedung-2-superior',
        price: 2600000,
        priceFormatted: 'Rp2.600.000/bln',
        bed: 'Springbed 160x200 cm',
        facilities: 'Lemari baju, meja kerja, AC, 4 stopkontak, kamar mandi dalam (water heater + hanger)',
        facilitiesArray: ['AC', 'Water Heater', 'Lemari', 'Meja Kerja', '4 Stopkontak', 'Kamar Mandi Dalam'],
        available: 4,
        description: 'Kamar Superior di Gedung 2 memberikan ruang ekstra dengan springbed 160x200 cm dan 4 stopkontak. Nikmati kecepatan WiFi hingga 125 Mbps untuk mendukung aktivitas online Anda.',
        images: {
          room: ['/images/room-superior1.jpg', '/images/room-superior2.jpg'],
          layout: ['/images/layout-superior.jpg'],
          bed: ['/images/bed-superior1.jpg'],
          furniture: ['/images/furniture-superior1.jpg'],
          toilet: ['/images/toilet-superior1.jpg']
        },
        specs: {
          listrik: '1300 VA (Token)',
          sumberAir: 'PDAM',
          wifi: 'Up to 125 Mbps',
          parkir: 'Motor & Mobil',
          keamanan: 'CCTV 24/7 + RFID Card',
          laundry: 'Gratis 10 potong/2 hari'
        }
      },
      {
        type: 'Deluxe',
        slug: 'gedung-2-deluxe',
        price: 3000000,
        priceFormatted: 'Rp3.000.000/bln',
        bed: 'Springbed 200x200 cm',
        facilities: '2 lemari baju, meja kerja, AC, 6 stopkontak, kamar mandi dalam (water heater + hanger)',
        facilitiesArray: ['AC', 'Water Heater', '2 Lemari', 'Meja Kerja', '6 Stopkontak', 'Kamar Mandi Dalam'],
        available: 2,
        description: 'Kamar Deluxe adalah pilihan termewah kami. Dengan springbed king size 200x200 cm, 2 lemari baju, dan 6 stopkontak, kamar ini dirancang untuk kenyamanan tanpa kompromi. Tersisa 2 kamar saja!',
        images: {
          room: ['/images/room-deluxe1.jpg', '/images/room-deluxe2.jpg', '/images/room-deluxe3.jpg'],
          layout: ['/images/layout-deluxe.jpg'],
          bed: ['/images/bed-deluxe1.jpg', '/images/bed-deluxe2.jpg'],
          furniture: ['/images/furniture-deluxe1.jpg', '/images/furniture-deluxe2.jpg'],
          toilet: ['/images/toilet-deluxe1.jpg', '/images/toilet-deluxe2.jpg']
        },
        specs: {
          listrik: '1300 VA (Token)',
          sumberAir: 'PDAM',
          wifi: 'Up to 125 Mbps',
          parkir: 'Motor & Mobil',
          keamanan: 'CCTV 24/7 + RFID Card',
          laundry: 'Gratis 10 potong/2 hari'
        }
      }
    ]
  }
];

export const facilitiesList = [
  { icon: '🅿️', title: 'Parkir Gratis', desc: 'Motor & mobil, area luas.' },
  { icon: '🔌', title: 'Listrik Token', desc: 'Per kamar, lebih hemat dan fleksibel.' },
  { icon: '🛋️', title: 'Ruang Tamu Cozy', desc: 'Tempat bersantai dan menerima tamu.' },
  { icon: '🍽️', title: 'Dapur Kering', desc: 'Lengkap: kulkas + dispenser.' },
  { icon: '📹', title: 'CCTV 24/7', desc: '16-32 kamera super aman.' },
  { icon: '📶', title: 'WiFi Unlimited', desc: 'Up to 125 Mbps per lantai.' },
  { icon: '🛡️', title: 'RFID Card', desc: 'Keamanan tinggi, denda jika hilang.' },
  { icon: '🧺', title: 'Laundry Gratis', desc: 'Cuci + setrika 10 potong/2 hari.' },
  { icon: '👮', title: 'Penjaga 24 Jam', desc: 'Petugas ramah siap membantu.' },
];

export const testimonials = [
  { name: 'Rina', role: 'Mahasiswi ITS', text: 'Kostnya nyaman banget, dekat kampus dan fasilitas laundry sangat membantu. AC dingin, WiFi kencang!' },
  { name: 'Andi', role: 'Karyawan Swasta', text: 'Lokasi strategis ke kantor, parkir mobil luas. Sistem token listrik lebih hemat.' },
  { name: 'Sinta', role: 'Mahasiswi UBAYA', text: 'Keamanan super ketat dengan kartu RFID, jadi tenang ninggalin barang. Kamar mandi water heater mantap.' },
  { name: 'Budi', role: 'Freelancer', text: 'Dapurnya bersih lengkap, enak untuk masak ringan. Ruang tamunya cozy banget buat nongkrong.' },
];

// Fungsi pembantu untuk mencari room berdasarkan slug
export function getRoomBySlug(slug) {
  for (const building of buildings) {
    const room = building.roomTypes.find(r => r.slug === slug);
    if (room) return { building, room };
  }
  return null;
}