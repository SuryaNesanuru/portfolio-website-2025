"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, ChevronRight } from 'lucide-react'
import { useState } from 'react'

const ProjectsSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const projects = [
    {
      title: 'Caterpillar Parts Platform',
      category: 'Enterprise Application',
      description: 'A comprehensive parts management system for global manufacturing operations with advanced search, inventory tracking, and real-time updates.',
      longDescription: 'Led the frontend development of Caterpillar\'s flagship parts platform, serving thousands of dealers worldwide. Implemented advanced filtering systems, real-time inventory updates, and interactive 3D part visualization using Three.js.',
      technologies: ['React', 'TypeScript', 'Redux', 'Three.js', 'GraphQL', 'Node.js'],
      features: [
        'Real-time inventory tracking across 200+ locations',
        '3D interactive part visualization and assembly guides',
        'Advanced search with ML-powered recommendations',
        'Multi-language support for global operations',
        'Responsive design optimized for mobile and tablet'
      ],
      metrics: {
        users: '50K+',
        performance: '40%',
        satisfaction: '95%'
      },
      image: 'https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: '#',
      demo: '#'
    },
    {
      title: 'Bed Bath & Beyond E-commerce',
      category: 'SaaS E-commerce',
      description: 'Modern e-commerce platform with advanced product visualization, personalized recommendations, and seamless checkout experience.',
      longDescription: 'Developed a scalable SaaS e-commerce solution for Bed Bath & Beyond, featuring AI-powered product recommendations, advanced filtering, and a streamlined checkout process that increased conversion rates by 35%.',
      technologies: ['Next.js', 'React', 'Styled Components', 'Redux Toolkit', 'Stripe', 'AWS'],
      features: [
        'AI-powered product recommendations engine',
        'Advanced product filtering and search',
        'One-click checkout with multiple payment options',
        'Inventory management dashboard',
        'Real-time analytics and reporting'
      ],
      metrics: {
        conversion: '35%',
        performance: '50%',
        revenue: '$2M+'
      },
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: '#',
      demo: '#'
    },
    {
      title: 'Desktime Productivity Tracker',
      category: 'Productivity App',
      description: 'Comprehensive time tracking and productivity analytics platform with real-time dashboards and team collaboration features.',
      longDescription: 'Built a comprehensive productivity tracking application that helps teams monitor work patterns, analyze productivity trends, and optimize workflows through intelligent insights and beautiful data visualizations.',
      technologies: ['React', 'D3.js', 'Node.js', 'MongoDB', 'Socket.io', 'Chart.js'],
      features: [
        'Real-time activity monitoring and tracking',
        'Interactive data visualizations with D3.js',
        'Team collaboration and project management',
        'Automated productivity insights and reports',
        'Cross-platform desktop and mobile apps'
      ],
      metrics: {
        accuracy: '99%',
        engagement: '85%',
        teams: '1000+'
      },
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpg?auto=compress&cs=tinysrgb&w=800',
      github: '#',
      demo: '#'
    }
  ]

  return (
    <section id="projects" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-large mb-6">Featured Projects</h2>
          <p className="text-body text-foreground/80 max-w-3xl mx-auto">
            A showcase of innovative applications and platforms I've built, demonstrating expertise 
            in modern web technologies and user experience design.
          </p>
        </motion.div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="glass rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-500 group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Project Image */}
                <div className="relative overflow-hidden h-64 lg:h-full">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    whileHover={{ scale: 1.05 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-teal-600/20" />
                  
                  {/* Project Category Badge */}
                  <div className="absolute top-6 left-6">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium text-white">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-foreground">{project.title}</h3>
                    <p className="text-body text-foreground/80 mb-6">{project.description}</p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={inView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ delay: index * 0.2 + techIndex * 0.1 }}
                          className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-teal-500/20 
                                   rounded-full text-sm text-foreground/80 border border-blue-500/30"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    {/* Project Metrics */}
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      {Object.entries(project.metrics).map(([key, value], metricIndex) => (
                        <div key={key} className="text-center">
                          <div className="text-xl font-bold text-blue-400">{value}</div>
                          <div className="text-xs text-foreground/60 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <motion.button
                      onClick={() => setSelectedProject(selectedProject === index ? null : index)}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 
                               text-white font-medium px-6 py-3 rounded-xl transition-all duration-300 
                               hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {selectedProject === index ? 'Hide Details' : 'View Details'}
                      <ChevronRight size={16} className={`transform transition-transform duration-300 ${selectedProject === index ? 'rotate-90' : ''}`} />
                    </motion.button>

                    <motion.a
                      href={project.demo}
                      className="p-3 glass rounded-xl hover:bg-white/20 transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label="View Demo"
                    >
                      <ExternalLink size={20} />
                    </motion.a>

                    <motion.a
                      href={project.github}
                      className="p-3 glass rounded-xl hover:bg-white/20 transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label="View Code"
                    >
                      <Github size={20} />
                    </motion.a>
                  </div>
                </div>
              </div>

              {/* Expandable Details */}
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={selectedProject === index ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="p-8 lg:p-12 border-t border-white/10">
                  <p className="text-body text-foreground/80 mb-6">{project.longDescription}</p>
                  
                  <h4 className="text-lg font-semibold mb-4">Key Features</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full mt-2" />
                        <span className="text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <p className="text-body text-foreground/70 mb-8">
            Interested in seeing more of my work or discussing a potential collaboration?
          </p>
          <motion.a
            href="#contact"
            className="btn-primary inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Let's Connect
            <ChevronRight size={16} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default ProjectsSection