import 'dotenv/config';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';
import fs from 'fs';

const app = express();
const PORT = process.env.PORT || 5000;
const API_KEY = process.env.API_KEY;
const NODE_ENV = process.env.NODE_ENV || 'development';

app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

app.use(cors());
app.use(express.json());

app.post('/api/contact', (req, res) => {
  console.log('Contact form submission:', req.body);
  if (req.headers['x-api-key'] !== API_KEY) {
    console.warn('Unauthorized contact attempt');
    return res.status(401).json({ message: 'Unauthorized' });
  }
  console.log('Pesan dari:', req.body.name, '-', req.body.message);
  res.json({ success: true, message: 'Pesan Anda telah terkirim! (demo)' });
});

app.get('/api/test', (req, res) => {
  console.log('Test endpoint hit');
  res.json({ status: 'OK', timestamp: new Date() });
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve gambar dari folder public (untuk development)
if (NODE_ENV === 'development') {
  const publicPath = path.join(__dirname, '..', 'client', 'public');
  if (fs.existsSync(publicPath)) {
    app.use('/images', express.static(path.join(publicPath, 'images')));
    console.log('🖼️  Serving images from client/public/images');
  }
}

if (NODE_ENV === 'production') {
  const distPath = path.join(__dirname, '..', 'client', 'dist');
  const optPath = path.join(__dirname, '..', 'opt');

  let staticPath = null;
  if (fs.existsSync(distPath)) {
    staticPath = distPath;
    console.log(`✅ Production mode: serving static files from ${distPath}`);
  } else if (fs.existsSync(optPath)) {
    staticPath = optPath;
    console.log(`✅ Production mode: serving static files from ${optPath}`);
  } else {
    console.error('❌ Production mode: no dist/ or opt/ folder found!');
    process.exit(1);
  }

  app.use(express.static(staticPath));

  app.get('*', (req, res) => {
    res.sendFile(path.join(staticPath, 'index.html'), (err) => {
      if (err) {
        console.error('Error serving index.html:', err);
        res.status(500).send('Server error');
      }
    });
  });
} else {
  console.log('🛠️  Development mode: API only. Use Vite dev server for frontend.');
  app.get('/', (req, res) => {
    res.send('ExclusiveKost API is running. Frontend should be accessed via Vite dev server.');
  });
}

app.listen(PORT, () => {
  console.log(`✅ Server berjalan di http://localhost:${PORT}`);
  console.log(`Environment: ${NODE_ENV}`);
});