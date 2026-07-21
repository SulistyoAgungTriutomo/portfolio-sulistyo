import { Typewriter } from 'react-simple-typewriter';
import { Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-dark-bg">
      {/* 1. Video Background (Full sampai ke atas layar) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-75 pointer-events-none z-0"
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
        Browser kamu tidak mendukung pemutaran video background.
      </video>

      {/* 2. Gradient Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_rgba(10,10,10,0.5)_95%)] pointer-events-none z-0"></div>

      {/* 3. Konten Utama (Diberi pt-20 di dalam container agar teks tidak tertutup navbar) */}
      <div className="z-10 space-y-5 flex flex-col items-start text-left max-w-3xl mx-auto pt-20">
        {/* Nama Utama */}
        <h1 className="text-3xl md:text-5xl font-semibold text-white tracking-tight leading-tight drop-shadow-lg">
          Sulistyo Agung Triutomo
        </h1>

        {/* Subtitle / Animasi Ketik */}
        <div className="text-lg md:text-2xl text-white font-medium flex items-center gap-2 drop-shadow-md">
          <span>I'm a</span>
          <span className="text-white border-b-2 border-accent-green pb-0.5 inline-block">
            <Typewriter
              words={[
                'BINUS Student',
                'Computer Science Student',
                'Cloud & DevOps Enthusiast',
                'Backend Developer'
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </div>

        {/* Tombol Aksi & Sosial Media */}
        <div className="flex items-center gap-4 pt-2">
          <a
            href="https://www.linkedin.com/in/sulistyo-agung-triutomo"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-card-bg/80 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-white/20 transition duration-300"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.72a1.47 1.47 0 1 0 0 2.94 1.47 1.47 0 0 0 0-2.94Z" />
            </svg>
          </a>

          <a
            href="mailto:triutomosulistyo@gmail.com"
            className="w-10 h-10 rounded-full bg-card-bg/80 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-white/20 transition duration-300"
          >
            <Mail size={18} />
          </a>

          <a
            href="/SulistyoAgungTriutomo_CV.pdf"
            target="_blank"
            className="px-5 py-2 rounded-full bg-accent-green text-black font-semibold hover:brightness-110 transition duration-300 text-xs md:text-sm shadow-lg shadow-accent-green/20"
          >
            Sulistyo's CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;