import React, { useState, useEffect } from 'react';
import { ExternalLink, FileText, ArrowLeft } from 'lucide-react';

// === DATA PORTOFOLIO ===
const portfolioData = [
  {
    id: 1,
    title: 'Bookminton',
    category: 'UI/UX Design / Web App / Booking System',
    shortDesc: 'Badminton Court Booking Website.',
    images: [
      '/Bookminton/1.png',
      '/Bookminton/2.png',
      '/Bookminton/3.png',
      '/Bookminton/4.png',
      '/Bookminton/5.png', 
      '/Bookminton/6.png',
      '/Bookminton/7.png',
      '/Bookminton/8.png',
      '/Bookminton/9.png',
      '/Bookminton/10.png' 
    ],
    techStack: 'Figma (UI/UX Design, Wireframing, Interactive Prototyping)',
    url: 'https://www.figma.com/proto/jtOUDBxx9g0a6hDy5SOOA2/HCI?node-id=1-2&p=f&t=dABesdghvtAXR98L-1&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2',
    fullDesc: [
      'Bookminton is a responsive web-based platform designed to streamline the process of booking badminton courts. Developed as part of a Human-Computer Interaction (HCI) course, this prototype prioritizes ease of use, visual clarity, and a frictionless user experience. The platform is tailored for sports enthusiasts looking for a convenient, fast, and transparent way to book courts in their area.',
      'The design centers around key UX principles such as user control, error prevention, visibility of system status, and minimalist design. With intuitive navigation and a clean interface, Bookminton allows users to search for nearby courts, check availability, view pricing, and make real-time reservations with just a few clicks.'
    ]
  },
  {
    id: 2,
    title: 'AI Sign Language Interpreter',
    category: 'Artificial Intelligence / Computer Vision',
    shortDesc: 'Real-time ASL gesture recognition using computer vision and ML.',
    images: [
      '/SignLanguage/1.png',
      '/SignLanguage/2.jpg',
      '/SignLanguage/3.png',
      '/SignLanguage/4.png'
    ],
    techStack: 'Python, MediaPipe, OpenCV, Scikit-learn, Random Forest Classifier, Jupyter Notebook',
    url: 'https://github.com/SulistyoAgungTriutomo/AI_SignLanguage_Interpreter_Project',
    publication: 'Paper Accepted at ICIMCIS (International Conference on Information Management and Computer Science) 2024', 
    paperUrl: '/SignLanguage/paper.pdf',
    fullDesc: [
      'An AI-powered system designed to interpret American Sign Language (ASL) hand gestures in real time using computer vision and machine learning. The project aims to support the deaf and hard-of-hearing community by enabling more accessible communication through a webcam interface.',
      'The system uses a custom-made dataset consisting of 2,700 images across 27 different ASL signs, manually collected under ideal conditions to ensure clarity and consistency. These images were processed using MediaPipe and OpenCV to extract hand landmarks, which were then used to train a Random Forest Classifier via the Scikit-learn library.',
      'The model achieved 100% accuracy, highlighting its ability to perfectly classify the gestures within the dataset. However, this unusually high accuracy is likely a result of overfitting, as the dataset was created under overly controlled conditions that may not reflect the variability of real-world use cases.',
      'Despite this, the project demonstrates strong potential for sign language recognition and serves as a valuable proof-of-concept for future enhancements involving more diverse and dynamic datasets.'
    ]
  },
  {
    id: 3,
    title: 'Azure Deployment with Terraform & Docker',
    category: 'Cloud Deployment, DevOps, Infrastructure Automation',
    shortDesc: 'Deployed full-stack app on AKS using Docker and Terraform.',
    images: [
      '/Cloud/1.jpg',
      '/Cloud/2.jpg',
      '/Cloud/3.jpg',
      '/Cloud/4.jpg',
      '/Cloud/5.jpg',
      '/Cloud/6.jpg',
      '/Cloud/7.jpg',
      '/Cloud/8.jpg'    
    ],
    techStack: 'React, Node.js with Prisma ORM, PostgreSQL (Azure-hosted), Docker, Terraform, Azure (ACR, AKS)',
    url: '-',
    fullDesc: [
      'This project was part of the hands-on quiz for the Platform Network Technology (PNT) course at Bina Nusantara University. The objective was to deploy a pre-built frontend and backend application using modern DevOps tools and cloud services. The deployment involved automating infrastructure provisioning with Terraform, containerizing applications using Docker, and hosting them on Microsoft Azure Kubernetes Service (AKS).',
      'Key activities included setting up Azure infrastructure, configuring Azure Container Registry (ACR), pushing Docker images, and deploying workloads to a Kubernetes cluster using manifest files.'
    ]
  },
  {
    id: 4,
    title: 'Data Mining for Discovering Consumer Behavioral Patterns in E-Commerce',
    category: 'Data Mining / Machine Learning / E-Commerce Analytics',
    shortDesc: 'Customer segmentation and market basket analysis using CRISP-DM framework to reduce cart abandonment.',
    images: [
      '/DataMining/1.png', 
      '/DataMining/2.png',
      '/DataMining/3.png',
      '/DataMining/4.png',
      '/DataMining/5.png',
      '/DataMining/6.png',
      '/DataMining/7.png',
    ],
    techStack: 'Python, CRISP-DM, Hierarchical Clustering, Apriori Algorithm, Scikit-learn, Analytics Dashboard',
    url: '-', 
    publication: 'Paper Accepted at ICCSCI (International Conference on Computer Science and Computational Intelligence) 2026 - Procedia Computer Science (Elsevier)', 
    paperUrl: '/DataMining/paper.pdf', 
    fullDesc: [
      'This research applies data mining methods based on the CRISP-DM framework to analyze 25,000 transaction interactions, addressing high shopping cart abandonment rates and designing targeted marketing strategies in e-commerce.',
      'Following an evaluation of K-Means, Gaussian Mixture Model (GMM), and Hierarchical Clustering, Hierarchical Clustering with five clusters (K=5) emerged as the optimal model for customer segmentation. Additionally, Association Rule Mining via the Apriori algorithm was applied to detect product association patterns for cross-selling and bundling packages.',
      'The research outputs were visualized in an interactive E-Commerce Behavioral Analytics Dashboard to support personalized promotions, optimize conversion funnels, and assist strategic decision-making for platform management.'
    ]
  },
  {
    id: 5,
    title: 'Strive',
    category: 'Web Application / Education & Productivity / Gamified Habit Tracker',
    shortDesc: 'Implementation of Gamification in Habit Tracking Applications for University Students.',
    images: [
      '/Strive/1.png',
      '/Strive/2.png',
      '/Strive/3.png',
      '/Strive/4.png',
      '/Strive/5.png',
      '/Strive/6.png',
      '/Strive/7.png',
      '/Strive/8.png',
      '/Strive/9.png',
      '/Strive/10.png',
      '/Strive/11.png',
      '/Strive/12.png',
      '/Strive/13.png',
      '/Strive/14.png'
    ],
    techStack: 'React.js / Next.js, Tailwind CSS, Supabase (Auth, PostgreSQL, Realtime), Git, Vercel',
    url: 'https://github.com/SulistyoAgungTriutomo/strive-app', 
    fullDesc: [
      'Strive App is a web-based habit-tracking application designed specifically to help university students build, manage, and sustain positive routines amidst demanding academic schedules. By incorporating gamification, Strive transforms the often monotonous process of habit building into an engaging, interactive, and motivating experience.',
      'Key Features & Highlights:',
      '• Gamified Progress System: Utilizes streak tracking, points, and visual rewards to encourage daily consistency and user retention.',
      '• Student-Centric Dashboard: Features a clean, intuitive interface tailored to align with student daily schedules and academic workflows.',
      '• Real-Time Analytics: Offers visual summaries of daily and weekly performance, allowing users to accurately assess their growth over time.',
      '• Reliable Data Infrastructure: Leverages Supabase for seamless user authentication, real-time updates, and secure data storage.'
    ]
  },
  {
    id: 6,
    title: 'Financial Outstanding Monitoring System & Executive Dashboard',
    category: 'Web Application / Enterprise System / Finance Automation',
    shortDesc: 'Centralized web-based monitoring, aging calculation, and reconciliation system for store outstanding & cash differences at Alfamart.',
    images: [
      '/Alfa/1.png',
      '/Alfa/2.png'
    ],
    techStack: 'Python 3.11, Flask, PostgreSQL, PyJWT, Pandas, OpenPyXL, JavaScript (ES6+), DataTables, Waitress WSGI',
    url: '-',
    fullDesc: [
      'Financial Outstanding Monitoring System & Executive Dashboard is an enterprise web application developed for the Finance Division at PT. Sumber Alfaria Trijaya, Tbk (Alfamart). The platform centralizes, categorizes (aging B to >B-3), reconciles, and reports store outstanding deposits and cash differences across national branches.',
      'Key Features & Technical Implementations:',
      '• Automated Aging Engine: Built using Python & Flask to calculate outstanding balances, automate netting of cash differences, and detect negative balance anomalies.',
      '• Centralized SSO & RBAC: Integrated PyJWT token-based Single Sign-On with Role-Based Access Control to restrict access to sensitive features like data imports.',
      '• Automated Reconciliation & Subsequent Detection: Processes monthly bulk Excel uploads with pre-storage validation and post-cutoff payment calculation.',
      '• Executive Dashboard & Reporting: Features real-time KPI cards, DataTables matrix views, and multi-tab Excel report generation (National Summary, Branch Recap, Transaction Details) via Pandas and OpenPyXL.',
      '• Measurable Business Impact: Reduced monthly reconciliation processing time from several days to just minutes while eliminating human calculation errors.'
    ]
  }
];

// Daftar Filter yang sudah disesuaikan
const filters = ['All', 'Web Apps', 'UI/UX', 'AI & Data', 'Cloud & DevOps'];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-Slider Logic
  useEffect(() => {
    let slideInterval;
    if (selectedProject && selectedProject.images.length > 1) {
      slideInterval = setInterval(() => {
        setCurrentSlide((prev) => (prev === selectedProject.images.length - 1 ? 0 : prev + 1));
      }, 3000);
    }
    return () => clearInterval(slideInterval);
  }, [selectedProject]);

  // Fungsi untuk memfilter proyek berdasarkan kategori
  const filteredProjects = portfolioData.filter((project) => {
    if (activeFilter === 'All') return true;
    
    const cat = project.category.toLowerCase();
    if (activeFilter === 'Web Apps') return cat.includes('web');
    if (activeFilter === 'UI/UX') return cat.includes('ui/ux');
    if (activeFilter === 'AI & Data') return cat.includes('artificial intelligence') || cat.includes('data mining') || cat.includes('machine learning');
    if (activeFilter === 'Cloud & DevOps') return cat.includes('cloud') || cat.includes('devops');
    
    return false;
  });

  return (
    <section id="portfolio" className="py-12 px-6 md:px-16 bg-dark-bg text-white min-h-screen">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* --- TAMPILAN 1: GRID PORTOFOLIO --- */}
        {!selectedProject && (
          <div className="space-y-12 animate-fade-in">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                Portfolio
              </h2>
              <p className="text-text-muted text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
                A collection of my work showcasing projects that highlight my skills, creativity, and passion for development.
              </p>
            </div>

            {/* Tombol Filter Kategori */}
            <div className="flex justify-center gap-3 flex-wrap mb-10">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                    activeFilter === filter
                      ? 'bg-accent-green text-black shadow-lg shadow-accent-green/20'
                      : 'bg-[#141414] text-text-muted hover:text-white border border-white/10'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* Grid Proyek (Menggunakan filteredProjects) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              {filteredProjects.map((project) => (
                <div 
                  key={project.id}
                  onClick={() => {
                    setSelectedProject(project);
                    setCurrentSlide(0); // Reset slider setiap kali buka project baru
                  }}
                  className="bg-[#141414] rounded-2xl overflow-hidden cursor-pointer border border-white/5 hover:border-accent-green/50 transition-all duration-300 group"
                >
                  <div className="h-64 overflow-hidden relative">
                    <img 
                      src={project.images[0]} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#141414] to-transparent opacity-80"></div>
                  </div>
                  
                  <div className="p-6 relative -mt-8">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-accent-green transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-text-muted text-sm">
                      {project.shortDesc}
                    </p>
                  </div>
                </div>
              ))}
              
              {/* Pesan jika filter tidak menemukan proyek */}
              {filteredProjects.length === 0 && (
                <div className="col-span-full text-center text-text-muted py-10">
                  No projects found in this category.
                </div>
              )}
            </div>
          </div>
        )}

        {/* --- TAMPILAN 2: DETAIL PROJECT --- */}
        {selectedProject && (
          <div className="space-y-10 animate-fade-in relative">
            
            {/* Tombol Back to Portfolio */}
            <button 
              onClick={() => setSelectedProject(null)}
              className="inline-flex items-center gap-2 text-text-muted hover:text-accent-green transition-colors duration-300 mb-4 font-medium"
            >
              <ArrowLeft size={20} />
              Back to Projects
            </button>
            
            {/* Judul Project Tengah */}
            <div className="text-center pt-2">
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                {selectedProject.title}
              </h2>
            </div>

            {/* Layout Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start pt-4">
              
              {/* KOLOM KIRI: SLIDER */}
              <div className="lg:col-span-7 relative rounded-2xl overflow-hidden border border-white/10 group aspect-video bg-[#0a0a0a]">
                <img 
                  src={selectedProject.images[currentSlide]} 
                  alt={`${selectedProject.title} screenshot`}
                  className="w-full h-full object-contain transition-opacity duration-500"
                />
                
                {selectedProject.images.length > 1 && (
                  <div className="absolute bottom-4 left-0 w-full flex justify-center gap-2 z-10">
                    {selectedProject.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 shadow-md ${
                          currentSlide === index ? 'bg-accent-green scale-125' : 'bg-white/40 hover:bg-white/80'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* KOLOM KANAN: INFO PROJECT */}
              <div className="lg:col-span-5 space-y-8">
                
                {/* Card Project Information */}
                <div className="bg-[#141414] border border-white/5 rounded-2xl p-6 md:p-8 space-y-6">
                  <h3 className="text-xl font-bold text-white border-b border-white/10 pb-4">
                    Project information
                  </h3>
                  
                  <div className="space-y-5 text-sm md:text-base">
                    <div>
                      <span className="font-bold text-white block mb-1">Category:</span>
                      <span className="text-text-muted">{selectedProject.category}</span>
                    </div>

                    {selectedProject.publication && (
                      <div>
                        <span className="font-bold text-white block mb-1">Research Paper:</span>
                        <span className="text-text-muted leading-relaxed block">
                          {selectedProject.publication}
                        </span>
                      </div>
                    )}

                    <div>
                      <span className="font-bold text-white block mb-1">Tech Stack:</span>
                      <span className="text-text-muted leading-relaxed">{selectedProject.techStack}</span>
                    </div>

                    {selectedProject.url !== '-' && (
                      <div>
                        <span className="font-bold text-white block mb-1">Project URL:</span>
                        <a 
                          href={selectedProject.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-accent-green hover:underline break-all"
                        >
                          {selectedProject.url}
                        </a>
                      </div>
                    )}
                  </div>

                  {/* Tombol Action (Visit & Read Paper) */}
                  <div className="pt-4 flex flex-wrap gap-3">
                    
                    {selectedProject.url !== '-' && (
                      <a 
                        href={selectedProject.url}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-accent-green text-black px-6 py-2.5 rounded-full font-bold hover:scale-105 transition duration-300 shadow-lg shadow-accent-green/20"
                      >
                        Visit <ExternalLink size={18} />
                      </a>
                    )}

                    {selectedProject.paperUrl && (
                      <a 
                        href={selectedProject.paperUrl}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#222222] text-white border border-white/20 px-6 py-2.5 rounded-full font-bold hover:border-accent-green hover:text-accent-green transition duration-300"
                      >
                        <FileText size={18} /> Read Paper
                      </a>
                    )}

                  </div>
                </div>

                {/* Deskripsi */}
                <div className="space-y-4 px-2">
                  <h3 className="text-2xl font-bold text-white">Description</h3>
                  <div className="space-y-4 text-text-muted text-sm md:text-base leading-relaxed text-justify">
                    {selectedProject.fullDesc.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default Portfolio;