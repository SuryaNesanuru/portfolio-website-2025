"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, MapPin, Award } from 'lucide-react'

const AboutSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  const experiences = [
    {
      company: 'Caterpillar',
      role: 'Senior Frontend Developer',
      period: '2021 - Present',
      location: 'Bengaluru, India',
      description: 'Leading frontend development for the Caterpillar Parts platform, implementing modern React solutions and optimizing user experience for global manufacturing operations.',
      achievements: ['Improved platform performance by 40%', 'Led team of 5 developers', 'Implemented advanced 3D visualizations']
    },
    {
      company: 'Tata Consultancy Services (TCS)',
      role: 'Frontend Developer',
      period: '2019 - 2021',
      location: 'Chennai, India',
      description: 'Developed scalable e-commerce solutions for Bed Bath & Beyond, focusing on SaaS architecture and responsive design implementations.',
      achievements: ['Delivered 15+ client projects', 'Reduced load times by 35%', 'Mentored junior developers']
    },
    {
      company: 'Advanced Infoscan',
      role: 'Junior Frontend Developer',
      period: '2018 - 2019',
      location: 'Hyderabad, India',
      description: 'Built productivity tracking applications including Desktime, focusing on real-time data visualization and user interface optimization.',
      achievements: ['Implemented real-time dashboards', 'Improved user engagement by 50%', 'Optimized mobile responsiveness']
    }
  ]

  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-large mb-6">About Me</h2>
          <p className="text-body text-foreground/80 max-w-3xl mx-auto">
            I'm a passionate Frontend Developer with over 4 years of experience crafting exceptional 
            digital experiences. My journey spans across leading technology companies where I've honed 
            my expertise in modern web technologies and 3D web development.
          </p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="glass rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="p-2 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg"
                    >
                      <Award size={24} className="text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">{exp.role}</h3>
                      <p className="text-lg font-medium text-blue-400">{exp.company}</p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 mb-6">
                    <div className="flex items-center gap-2 text-foreground/70">
                      <Calendar size={16} />
                      <span className="text-small">{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-foreground/70">
                      <MapPin size={16} />
                      <span className="text-small">{exp.location}</span>
                    </div>
                  </div>

                  <p className="text-body text-foreground/80 mb-6">{exp.description}</p>

                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-foreground/90 uppercase tracking-wide">
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: index * 0.2 + i * 0.1 }}
                          className="flex items-center gap-3 text-small text-foreground/70"
                        >
                          <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full" />
                          {achievement}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-20 glass rounded-2xl p-8"
        >
          <h3 className="text-xl font-semibold mb-4">Currently Based In</h3>
          <div className="flex items-center justify-center gap-2 text-lg">
            <MapPin size={20} className="text-blue-400" />
            <span>Bengaluru, Karnataka, India</span>
          </div>
          <p className="text-body text-foreground/70 mt-4">
            Open to remote opportunities and exciting new challenges in frontend development and 3D web technologies.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection