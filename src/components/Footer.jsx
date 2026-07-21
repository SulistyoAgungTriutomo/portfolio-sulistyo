import React from 'react';
import { Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-dark-bg pb-12 pt-8">
      <div className="max-w-6xl mx-auto px-6 md:px-16">
        <div className="bg-[#141414] border border-white/5 rounded-2xl p-8 text-center space-y-4 shadow-xl flex flex-col items-center justify-center">
          <h4 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
            Sulistyo Agung Triutomo
          </h4>
          
          <p className="text-white italic font-medium text-sm md:text-base tracking-wide">
            "Exploring Tech, Ready for New Opportunities!"
          </p>

          {/* Tombol LinkedIn & Email */}
          <div className="flex items-center justify-center gap-4 pt-2">
            <a
              href="https://www.linkedin.com/in/sulistyo-agung-triutomo"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="w-11 h-11 rounded-full bg-accent-green flex items-center justify-center text-black hover:scale-110 transition duration-300 shadow-md shadow-accent-green/20"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.72a1.47 1.47 0 1 0 0 2.94 1.47 1.47 0 0 0 0-2.94Z" />
              </svg>
            </a>

            <a
              href="mailto:triutomosulistyo@gmail.com"
              aria-label="Send Email"
              className="w-11 h-11 rounded-full bg-accent-green flex items-center justify-center text-black hover:scale-110 transition duration-300 shadow-md shadow-accent-green/20"
            >
              <Mail size={22} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;