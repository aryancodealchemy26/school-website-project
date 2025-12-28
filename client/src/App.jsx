import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center p-10">
        <div className="text-center max-w-2xl">
          <h2 className="text-5xl font-black text-gray-900 mb-6">
            Welcome to the <span className="text-blue-600">Future of Learning</span>
          </h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Our portal is now structured and ready for content. We have successfully 
            implemented a responsive Layout Wrapper using Tailwind v4.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50">
              Learn More
            </button>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 shadow-lg">
              Get Started
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default App;