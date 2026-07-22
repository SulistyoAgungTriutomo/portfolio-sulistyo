import React from 'react';

const skillsData = [
  // Programming Languages
  { name: 'Golang', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
  { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },

  // Frameworks & Libraries
  { name: 'React Native', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', invert: true },

  // Backend & Database
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'Supabase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg' },

  // Cloud & DevOps
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Terraform', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg' },
  { name: 'Azure', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },

  // Design
  { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
];

const Skills = () => {
  return (
    <section className="py-12 md:py-16 px-6 md:px-16 bg-dark-bg">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-10">
          <div className="flex items-center gap-4 mb-2">
            <span className="text-xs font-semibold tracking-widest text-text-muted uppercase">
              SKILLS
            </span>
            <div className="h-[2px] w-12 bg-accent-green"></div>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">MY SKILLS</h3>
        </div>

        {/* Grid Skill Cards (2 kolom di HP, 3 di tablet, 4 di laptop) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="bg-[#161616] border border-white/5 rounded-xl p-4 md:p-5 flex items-center gap-4 hover:border-white/20 transition-all duration-300"
            >
              <div className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center shrink-0">
                <img 
                  src={skill.icon} 
                  alt={skill.name} 
                  className={`w-full h-full object-contain ${skill.invert ? 'invert' : ''}`} 
                />
              </div>
              <span className="text-white font-semibold text-sm md:text-base truncate">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;