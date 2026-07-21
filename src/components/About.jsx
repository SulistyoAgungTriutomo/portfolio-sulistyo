const About = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-16 bg-dark-bg">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Judul Section */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 tracking-tight">
          About
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          {/* Bagian Kiri: Foto Profil */}
          <div className="md:col-span-4 flex justify-center">
            <div className="relative rounded-sm overflow-hidden border-2 border-white/10 group w-full max-w-sm">
              {/* Ganti URL di bawah dengan letak foto profil kamu nanti, misal: '/profile.jpg' */}
              <img
                src="/profile.jpg"
                alt="Sulistyo Agung Triutomo"
                className="rounded-xl object-cover w-full max-w-sm shadow-lg border border-white/10"
              />
            </div>
          </div>

          {/* Bagian Kanan: Teks & Detail Info */}
          <div className="md:col-span-8 space-y-6 text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Computer Science Student at BINUS University
            </h3>

            <p className="text-text-muted leading-relaxed text-sm md:text-base">
              I am a Computer Science student at Bina Nusantara University specializing in Computer Networks and Infrastructure. Driven by a passion for practical technology and collaborative problem-solving, I have built a strong foundation in IT through active involvement in organizations like HIMTI and BINUS TV Club. Combined with strong communication skills and a team-first mindset, I thrive in dynamic environments where technology and teamwork intersect.
            </p>

            {/* Grid Detail Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 text-sm md:text-base pt-6 border-t border-white/10">
              <div className="flex items-center gap-2">
                <span className="text-accent-green font-bold text-lg">&gt;</span>
                <strong className="text-white">Name:</strong>
                <span className="text-text-muted">Sulistyo Agung Triutomo</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-accent-green font-bold text-lg">&gt;</span>
                <strong className="text-white">Age:</strong>
                <span className="text-text-muted">21</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-accent-green font-bold text-lg">&gt;</span>
                <strong className="text-white">City:</strong>
                <span className="text-text-muted">Tangerang</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-accent-green font-bold text-lg">&gt;</span>
                <strong className="text-white">Email:</strong>
                <span className="text-text-muted">triutomosulistyo@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-accent-green font-bold text-lg">&gt;</span>
                <strong className="text-white">University:</strong>
                <span className="text-text-muted">Bina Nusantara University</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-accent-green font-bold text-lg">&gt;</span>
                <strong className="text-white">LinkedIn:</strong>
                <span className="text-text-muted">Sulistyo Agung Triutomo</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-accent-green font-bold text-lg">&gt;</span>
                <strong className="text-white">Major:</strong>
                <span className="text-text-muted">Computer Science</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-accent-green font-bold text-lg">&gt;</span>
                <strong className="text-white">Status:</strong>
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