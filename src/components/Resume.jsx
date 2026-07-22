import React from 'react';

const Resume = () => {
  return (
    <section id="resume" className="py-12 px-6 md:px-16 bg-dark-bg text-white">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Header Section */}
        <div className="space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            Resume
          </h2>
          <p className="text-text-muted text-sm md:text-base max-w-3xl leading-relaxed">
            A snapshot of my professional journey featuring work experience, educational background, and organizational involvement.
          </p>
        </div>

        {/* Grid Layout 2 Kolom */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          
          {/* === KOLOM KIRI: EXPERIENCE === */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white border-l-4 border-accent-green pl-4 ml-0">
              Experience
            </h3>

            <div className="border-l-2 border-accent-green ml-[1px] pt-2 space-y-8">
              
              {/* 1. Mobile Application Developer Intern */}
              <div className="relative pl-6 md:pl-8">
                <span className="absolute -left-2 top-[38px] -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-dark-bg border-2 border-accent-green shadow-[0_0_8px_#00e676]"></span>

                <div className="bg-[#141414] border border-white/5 rounded-xl p-5 md:p-6 hover:border-accent-green/40 transition duration-300">
                  <div className="flex flex-col xl:flex-row xl:items-start justify-between gap-2 mb-2">
                    <h4 className="text-lg md:text-xl font-bold text-white leading-tight">
                      Mobile Application Developer Intern
                    </h4>
                    <span className="w-fit shrink-0 text-[11px] md:text-xs font-semibold px-3 py-1 rounded-full bg-accent-green/10 text-accent-green border border-accent-green/20">
                      September 2025 – February 2026
                    </span>
                  </div>

                  <p className="text-accent-green text-sm font-medium mb-3">
                    Bina Nusantara University
                  </p>

                  <ul className="list-disc list-outside ml-4 space-y-2 text-text-muted text-xs md:text-sm leading-relaxed">
                    <li>Developed "STRIVE", a gamified habit-tracking app using React Native and Node.js/Express.</li>
                    <li>Managed Supabase (PostgreSQL) database schema and implemented secure features using Supabase Auth & JWT.</li>
                    <li>Integrated Groq AI for smart scheduling, optimized database performance, and conducted Unit Testing.</li>
                    <li>Executed full SDLC from Figma design to final deployment and documentation.</li>
                  </ul>
                </div>
              </div>

              {/* 2. IT Support Intern */}
              <div className="relative pl-6 md:pl-8">
                <span className="absolute -left-2 top-[38px] -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-dark-bg border-2 border-accent-green shadow-[0_0_8px_#00e676]"></span>

                <div className="bg-[#141414] border border-white/5 rounded-xl p-5 md:p-6 hover:border-accent-green/40 transition duration-300">
                  <div className="flex flex-col xl:flex-row xl:items-start justify-between gap-2 mb-2">
                    <h4 className="text-lg md:text-xl font-bold text-white leading-tight">
                      IT Support Intern
                    </h4>
                    <span className="w-fit shrink-0 text-[11px] md:text-xs font-semibold px-3 py-1 rounded-full bg-accent-green/10 text-accent-green border border-accent-green/20">
                      Februari 2025 - August 2025
                    </span>
                  </div>

                  <p className="text-accent-green text-sm font-medium mb-3">
                    Tzu Chi Foundation (Tzu Chi School)
                  </p>

                  <ul className="list-disc list-outside ml-4 space-y-2 text-text-muted text-xs md:text-sm leading-relaxed">
                    <li>Analyzed user requirements for community outreach projects to deliver effective technical solutions.</li>
                    <li>Designed solutions according to requirement gathering to meet user needs.</li>
                    <li>Demonstrated Digital and Technology Fluency by effectively troubleshooting IT issues and supporting system maintenance.</li>
                    <li>Applied a Growth Mindset by proactively learning new tools and technologies to enhance support strategies.</li>
                    <li>Showed Initiative by identifying potential system improvements and suggesting solutions to enhance user experience.</li>
                    <li>Utilized Social Awareness to effectively communicate technical information to non-technical users, ensuring clear understanding.</li>
                  </ul>
                </div>
              </div>

            </div>
          </div>

          {/* === KOLOM KANAN: EDUCATION & ORGANIZATION === */}
          <div className="space-y-10">
            
            {/* === EDUCATION === */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white border-l-4 border-accent-green pl-4 ml-0">
                Education
              </h3>

              <div className="border-l-2 border-accent-green ml-[1px] pt-2 space-y-8">
                <div className="relative pl-6 md:pl-8">
                  <span className="absolute -left-2 top-[38px] -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-dark-bg border-2 border-accent-green shadow-[0_0_8px_#00e676]"></span>

                  <div className="bg-[#141414] border border-white/5 rounded-xl p-5 md:p-6 hover:border-accent-green/40 transition duration-300">
                    <div className="flex flex-col xl:flex-row xl:items-start justify-between gap-2 mb-2">
                      <h4 className="text-lg md:text-xl font-bold text-white leading-tight">
                        Bachelor of Computer Science
                      </h4>
                      <span className="w-fit shrink-0 text-[11px] md:text-xs font-semibold px-3 py-1 rounded-full bg-accent-green/10 text-accent-green border border-accent-green/20">
                        2022 - 2026
                      </span>
                    </div>

                    <p className="text-accent-green text-sm font-medium mb-3">
                      Bina Nusantara University, Tangerang
                    </p>

                    <p className="text-text-muted text-xs md:text-sm leading-relaxed">
                      My journey at Bina Nusantara University has been all about growth — diving deep into Computer Science with a focus on Networking, while also stepping outside the classroom to join communities like HIMTI and Binus TV Club. Through projects, events, and real-world experiences, I’ve built not just technical skills, but also a mindset that's always ready to learn, collaborate, and take on new challenges.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* === ORGANIZATION === */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white border-l-4 border-accent-green pl-4 ml-0">
                Organization
              </h3>

              <div className="border-l-2 border-accent-green ml-[1px] pt-2 space-y-8">
                
                {/* 1. HIMTI */}
                <div className="relative pl-6 md:pl-8">
                  <span className="absolute -left-2 top-[38px] -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-dark-bg border-2 border-accent-green shadow-[0_0_8px_#00e676]"></span>

                  <div className="bg-[#141414] border border-white/5 rounded-xl p-5 md:p-6 hover:border-accent-green/40 transition duration-300">
                    <div className="flex flex-col xl:flex-row xl:items-start justify-between gap-2 mb-2">
                      <h4 className="text-lg md:text-xl font-bold text-white leading-tight">
                        Himpunan Mahasiswa Teknik Informatika (HIMTI)
                      </h4>
                      <span className="w-fit shrink-0 text-[11px] md:text-xs font-semibold px-3 py-1 rounded-full bg-accent-green/10 text-accent-green border border-accent-green/20">
                        February 2023 - March 2024
                      </span>
                    </div>

                    <div className="mt-4 space-y-2">
                      <p className="text-xs font-semibold text-text-muted uppercase tracking-wider">
                        Events & Projects Involved:
                      </p>
                      <ul className="space-y-2 text-xs md:text-sm text-text-muted">
                        <li className="flex items-center gap-2">
                          <span className="text-accent-green font-bold">&gt;</span>
                          <span>Techfest 2023</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-accent-green font-bold">&gt;</span>
                          <span>Community Service HIMTI 2023 (SMK Yadika 4)</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-accent-green font-bold">&gt;</span>
                          <span>HIMTI meet</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* 2. BINUS TV CLUB */}
                <div className="relative pl-6 md:pl-8">
                  <span className="absolute -left-2 top-[38px] -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-dark-bg border-2 border-accent-green shadow-[0_0_8px_#00e676]"></span>

                  <div className="bg-[#141414] border border-white/5 rounded-xl p-5 md:p-6 hover:border-accent-green/40 transition duration-300">
                    <div className="flex flex-col xl:flex-row xl:items-start justify-between gap-2 mb-2">
                      <h4 className="text-lg md:text-xl font-bold text-white leading-tight">
                        BINUS TV CLUB
                      </h4>
                    </div>

                    <div className="flex items-center gap-2 flex-wrap mb-4">
                      <span className="text-[11px] md:text-xs font-semibold px-3 py-1 rounded-full bg-accent-green/10 text-accent-green border border-accent-green/20">
                        Technical Division
                      </span>
                      <span className="text-xs font-medium text-text-muted">
                        March 2024 - February 2025
                      </span>
                    </div>

                    <div className="space-y-2">
                      <p className="text-xs font-semibold text-text-muted uppercase tracking-wider">
                        Events Involved:
                      </p>
                      <ul className="space-y-2 text-xs md:text-sm text-text-muted">
                        <li className="flex items-center gap-2">
                          <span className="text-accent-green font-bold">&gt;</span>
                          <span>Buram & Expo BTVC 2024</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-accent-green font-bold">&gt;</span>
                          <span>Media Journey 2024</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;