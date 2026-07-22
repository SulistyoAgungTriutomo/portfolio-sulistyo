const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 px-6 md:px-16 bg-dark-bg">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Judul Section */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 md:mb-16 tracking-tight">
          About
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center w-full">
          {/* Bagian Kiri: Foto Profil */}
          <div className="md:col-span-4 flex justify-center">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 group w-full max-w-xs md:max-w-sm">
              <img
                src="/profile.jpg"
                alt="Sulistyo Agung Triutomo"
                className="rounded-xl object-cover w-full shadow-lg"
              />
            </div>
          </div>

          {/* Bagian Kanan: Teks & Detail Info */}
          <div className="md:col-span-8 space-y-6 text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-white leading-snug">
              Computer Science Student at BINUS University
            </h3>

            <p className="text-text-muted leading-relaxed text-sm md:text-base">
              I am a Computer Science student at Bina Nusantara University specializing in Computer Networks and Infrastructure. Driven by a passion for practical technology and collaborative problem-solving, I have built a strong foundation in IT through active involvement in organizations like HIMTI and BINUS TV Club. Combined with strong communication skills and a team-first mindset, I thrive in dynamic environments where technology and teamwork intersect.
            </p>

            {/* Grid Detail Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 text-sm md:text-base pt-6 border-t border-white/10">
              <div className="flex items-center gap-2">
                <span className="text-accent-green font-bold text-lg">&gt;</span>
                <strong className="text-white shrink-0">Name:</strong>
                <span className="text-text-muted truncate">Sulistyo Agung Triutomo</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-accent-green font-bold text-lg">&gt;</span>
                <strong className="text-white shrink-0">Age:</strong>
                <span className="text-text-muted">21</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-accent-green font-bold text-lg">&gt;</span>
                <strong className="text-white shrink-0">City:</strong>
                <span className="text-text-muted">Tangerang</span>
              </div>
              <div className="flex items-center gap-2 overflow-hidden">
                <span className="text-accent-green font-bold text-lg">&gt;</span>
                <strong className="text-white shrink-0">Email:</strong>
                <span className="text-text-muted truncate break-all">triutomosulistyo@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-accent-green font-bold text-lg">&gt;</span>
                <strong className="text-white shrink-0">University:</strong>
                <span className="text-text-muted truncate">Bina Nusantara University</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-accent-green font-bold text-lg">&gt;</span>
                <strong className="text-white shrink-0">LinkedIn:</strong>
                <span className="text-text-muted truncate">Sulistyo Agung Triutomo</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-accent-green font-bold text-lg">&gt;</span>
                <strong className="text-white shrink-0">Major:</strong>
                <span className="text-text-muted">Computer Science</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-accent-green font-bold text-lg">&gt;</span>
                <strong className="text-white shrink-0">Status:</strong>
                <span className="text-text-muted">Open to work</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;