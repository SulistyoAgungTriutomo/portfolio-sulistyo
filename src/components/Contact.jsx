import React from 'react';
import { MapPin, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-12 px-6 md:px-16 bg-dark-bg text-white">
      <div className="max-w-6xl mx-auto space-y-12 md:space-y-16">
        
        {/* Header Section */}
        <div className="text-center space-y-3">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            Contact
          </h2>
          <p className="text-text-muted text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Let's connect — feel free to reach out for collaborations, opportunities, or just to say hello!
          </p>
        </div>

        {/* Grid Kartu Kontak */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto pt-4">
          
          {/* 1. Address */}
          <div className="flex items-center gap-4 md:gap-5 bg-[#141414] md:bg-transparent p-5 md:p-0 rounded-2xl border border-white/5 md:border-none">
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-accent-green flex items-center justify-center shrink-0 text-black shadow-lg shadow-accent-green/20">
              <MapPin size={24} strokeWidth={2.2} />
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-bold text-white">Address</h3>
              <p className="text-text-muted text-sm md:text-base mt-0.5">
                Kota Tangerang, Banten
              </p>
            </div>
          </div>

          {/* 2. Email Me */}
          <div className="flex items-center gap-4 md:gap-5 bg-[#141414] md:bg-transparent p-5 md:p-0 rounded-2xl border border-white/5 md:border-none">
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-accent-green flex items-center justify-center shrink-0 text-black shadow-lg shadow-accent-green/20">
              <Mail size={24} strokeWidth={2.2} />
            </div>
            <div className="overflow-hidden">
              <h3 className="text-lg md:text-xl font-bold text-white">Email Me</h3>
              <a
                href="mailto:triutomosulistyo@gmail.com"
                className="text-text-muted hover:text-accent-green text-sm md:text-base mt-0.5 transition duration-300 block break-all"
              >
                triutomosulistyo@gmail.com
              </a>
            </div>
          </div>

          {/* 3. LinkedIn */}
          <div className="flex items-center gap-4 md:gap-5 bg-[#141414] md:bg-transparent p-5 md:p-0 rounded-2xl border border-white/5 md:border-none">
            <a
              href="https://www.linkedin.com/in/sulistyo-agung-triutomo"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-accent-green flex items-center justify-center shrink-0 text-black hover:scale-105 transition duration-300 shadow-lg shadow-accent-green/20"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.72a1.47 1.47 0 1 0 0 2.94 1.47 1.47 0 0 0 0-2.94Z" />
              </svg>
            </a>
            <div className="overflow-hidden">
              <h3 className="text-lg md:text-xl font-bold text-white">LinkedIn</h3>
              <a
                href="https://www.linkedin.com/in/sulistyo-agung-triutomo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-accent-green text-sm md:text-base mt-0.5 transition duration-300 block truncate"
              >
                Sulistyo Agung Triutomo
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;