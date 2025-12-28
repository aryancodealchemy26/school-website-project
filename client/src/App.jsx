import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50 font-sans">
        {/* The Navbar stays at the top on every page */}
        <Navbar />
        
        {/* This area changes based on the URL */}
        <main className="flex-grow flex items-center justify-center p-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            {/* You can add /contact later here */}
          </Routes>
        </main>

        {/* The Footer stays at the bottom on every page */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;