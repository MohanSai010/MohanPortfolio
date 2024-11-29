import React from 'react';
import { ProjectCard } from './ProjectCard';

const projects = [
  {
    title: 'Field-Mate [Agriculture Platform]',
    description: 'A full-featured Agriculture platform built with Frontend , Node.js, and Firebase',
    image: 'https://i.ibb.co/5FXDZ48/Screenshot-2024-06-20-212702.png',
    tags: ['HTML','CSS','JavaScript', 'Node.js', 'FireBase', 'API'],
    githubUrl: 'https://github.com/MohanSai010/Fieldmate',
    demoUrl: 'https://mohansai010.github.io/Fieldmate/',
    category: ['web', 'all']
  },
  {
    title: 'TreeEconomy [Fundraising Platform]',
    description: 'Showcases the NGOs involved, their goals, and progress,Includes details like donation impact, reports, and progress tracking.',
    image: 'https://i.ibb.co/37VPNZv/Screenshot-2024-06-23-163411.png',
    tags: ['HTML','CSS','JavaScript', 'Node.js', 'PHP'],
    githubUrl: 'https://github.com/MohanSai010/TreeEconomy',
    demoUrl: 'https://mohansai010.github.io/TreeEconomy/',
    category: ['web', 'all']
  },
  {
    title: 'SolarSweep Control [IOT Integrated Platform]',
    description: 'Empowering sustainability through real-time energy monitoring and analytics for smarter energy usage',
    image: 'https://facilitymanagement.com/wp-content/uploads/Cleaning-Industry-1-1024x614.jpg',
    tags: ['ReactNative', 'TypeScript', 'MongoDB'],
    githubUrl: 'https://github.com',
    demoUrl: '',
    category: ['mobile', 'all']
  },
];

export function Projects() {
  const [filter, setFilter] = React.useState('all');

  const filteredProjects = projects.filter(project => 
    project.category.includes(filter)
  );

  return (
    <section id="projects" className="py-16 sm:py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12">
          Featured Projects
        </h2>
        
        <div className="flex justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 flex-wrap">
          {['all', 'web', 'mobile', 'react'].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 sm:px-6 py-1.5 sm:py-2 rounded-full capitalize text-sm sm:text-base transition-colors ${
                filter === category
                  ? 'bg-purple-600 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}