"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Database, Palette, Zap } from 'lucide-react'

const SkillsSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code,
      color: 'from-blue-500 to-blue-600',
      skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3']
    },
    {
      title: 'Styling & Design',
      icon: Palette,
      color: 'from-teal-500 to-teal-600',
      skills: ['Tailwind CSS', 'Styled Components', 'SASS/SCSS', 'Responsive Design', 'UI/UX Design']
    },
    {
      title: 'State & Data',
      icon: Database,
      color: 'from-orange-500 to-orange-600',
      skills: ['Redux', 'GraphQL', 'REST APIs', 'React Query', 'Zustand']
    },
    {
      title: '3D & Animation',
      icon: Zap,
      color: 'from-purple-500 to-purple-600',
      skills: ['Three.js', 'React Three Fiber', 'Framer Motion', 'WebGL', 'GSAP']
    }
  ]

  const tools = [
    'Git & GitHub', 'Webpack', 'Vite', 'Jest', 'Storybook', 'Figma', 
    'VS Code', 'Chrome DevTools', 'Postman', 'Vercel', 'Netlify', 'Docker'
  ]

  return (
    <section id="skills" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-large mb-6">Technical Skills</h2>
          <p className="text-body text-foreground/80 max-w-3xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks that I use to build 
            exceptional web experiences and innovative 3D applications.
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-20">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  className={`p-3 bg-gradient-to-r ${category.color} rounded-xl group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 5 }}
                >
                  <category.icon size={24} className="text-white" />
                </motion.div>
                <h3 className="text-lg font-semibold">{category.title}</h3>
              </div>

              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.2 + skillIndex * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full" />
                    <span className="text-foreground/80">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools & Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="glass rounded-2xl p-8"
        >
          <h3 className="text-xl font-semibold mb-8 text-center">Tools & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => (
              <motion.div
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1 + index * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-teal-500/20 
                          rounded-full border border-blue-500/30 text-foreground/80 
                          hover:from-blue-500/30 hover:to-teal-500/30 hover:border-blue-500/50 
                          transition-all duration-300 cursor-pointer"
              >
                {tool}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Interactive 3D Skills Display */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-20 text-center"
        >
          <div className="glass rounded-2xl p-8 relative overflow-hidden">
            <h3 className="text-xl font-semibold mb-4">Always Learning</h3>
            <p className="text-body text-foreground/70 max-w-2xl mx-auto">
              The tech landscape evolves rapidly, and I'm committed to staying at the forefront of 
              innovation. Currently exploring AI integration in web development and advanced WebGL techniques.
            </p>
            
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-30"
                  animate={{
                    x: [0, Math.random() * 100],
                    y: [0, Math.random() * 100],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SkillsSection