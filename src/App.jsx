import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Contact from './components/Contact'; 
import Portfolio from './components/Portfolio';
import Footer from './components/Footer'; // 1. Import Footer

function App() {
  const [activeNav, setActiveNav] = useState('Home');

  return (
    // Tambahkan class flex, flex-col, dan min-h-screen agar footer selalu di bawah
    <div className="bg-dark-bg text-white min-h-screen flex flex-col selection:bg-accent-green selection:text-black">
      <Navbar activeNav={activeNav} setActiveNav={setActiveNav} />

      {/* Tambahkan flex-grow agar konten utama mengisi ruang kosong */}
      <main className="flex-grow">
        {activeNav === 'Home' && <Hero />}

        {activeNav === 'About' && (
          <div className="pt-24 pb-12">
            <About />
            <Skills />
          </div>
        )}

        {activeNav === 'Resume' && (
          <div className="pt-24 pb-12">
            <Resume />
          </div>
        )}

        {activeNav === 'Portfolio' && (
          <div className="pt-24 pb-12">
            <Portfolio />
          </div>
        )}

        {activeNav === 'Contact' && (
          <div className="pt-24 pb-12">
            <Contact />
          </div>
        )}
      </main>

      {/* 2. Pasang Footer di sini. (Tidak akan muncul di Home/Hero agar desain awal tetap clean) */}
      {activeNav !== 'Home' && <Footer />}
      
    </div>
  );
}

export default App;