'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const infoItems = [
    { label: 'Name:', value: 'Your Name' },
    { label: 'Location:', value: 'Your City, Country' },
    { label: 'Email:', value: 'your.email@example.com' },
    { label: 'Availability:', value: 'Open to Opportunities' },
  ]

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-5">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <div ref={ref} className="grid md:grid-cols-3 gap-8 items-center mt-12">
          {/* Image */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="w-full max-w-md h-96 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center shadow-lg">
              <div className="text-8xl text-white">👤</div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-gray-600 text-lg mb-4">
              I am a passionate and dedicated developer with a strong foundation
              in web development and software engineering. I love creating
              innovative solutions and turning complex problems into simple,
              beautiful, and intuitive solutions.
            </p>
            <p className="text-gray-600 text-lg mb-6">
              With expertise in both frontend and backend technologies, I enjoy
              building full-stack applications that provide seamless user
              experiences. I'm always eager to learn new technologies and improve
              my skills.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {infoItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  className="flex flex-col"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                >
                  <span className="font-semibold text-gray-800">
                    {item.label}
                  </span>
                  <span className="text-gray-600">{item.value}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

