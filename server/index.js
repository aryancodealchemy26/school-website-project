const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const MONGO_URI = process.env.MONGO_URI;

// 1. Log to prove the file started
console.log("Starting the server script...");

app.use(cors());
app.use(express.json());

mongoose.connect(MONGO_URI)
  .then(() => console.log(">>> SUCCESS: Connected to MongoDB Atlas"))
  .catch((err) => console.log(">>> ERROR: Database connection failed:", err));

app.get('/', (req, res) => {
  res.send('School Website Server is Running!');
});
const Admin = require('./models/Admin');

// Login Route
app.post('/api/admin/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // 1. Find the admin by email
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(404).json({ message: "Admin account not found" });
    }

    // 2. Check if password matches (Plain text for now)
    if (admin.password !== password) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // 3. Success
    res.status(200).json({ 
      message: "Login successful!", 
      admin: { id: admin._id, email: admin.email } 
    });

  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});
// 2. Fallback to 5001 if 5000 is busy
const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`>>> SUCCESS: Server is live on http://localhost:${PORT}`);
}).on('error', (err) => {
  console.log(">>> ERROR: Port might be busy:", err.message);
});