const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const MONGO_URI = process.env.MONGO_URI;

// 1. Log to prove the file started
console.log("Starting the server script...");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('School Website Server is Running!');
});

// 2. Fallback to 5001 if 5000 is busy
const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`>>> SUCCESS: Server is live on http://localhost:${PORT}`);
}).on('error', (err) => {
  console.log(">>> ERROR: Port might be busy:", err.message);
});