'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { School, Award } from 'lucide-react'

const educationItems = [
  {
    icon: School,
    year: '2020 - 2024',
    degree: 'Bachelor of Science in Computer Science',
    institution: 'University Name',
    description:
      'Relevant coursework: Data Structures, Algorithms, Web Development, Database Systems, Software Engineering',
    gpa: 'GPA: 3.8/4.0',
  },
  {
    icon: Award,
    year: '2018 - 2020',
    degree: 'High School Diploma',
    institution: 'High School Name',
    description: 'Focused on Mathematics, Physics, and Computer Science',
    gpa: null,
  },
]

export default function Education() {
  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-5">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Education
        </motion.h2>

        <div className="max-w-3xl mx-auto mt-12">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-gray-300 hidden md:block" />

            {educationItems.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.degree}
                  className="flex gap-6 mb-12 relative"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  {/* Icon */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <Card className="shadow-md">
                      <CardContent className="p-6">
                        <span className="inline-block px-3 py-1 bg-indigo-600 text-white text-sm rounded-full mb-2">
                          {item.year}
                        </span>
                        <h3 className="text-2xl font-semibold mb-2 text-gray-800">
                          {item.degree}
                        </h3>
                        <h4 className="text-lg text-indigo-600 mb-2">
                          {item.institution}
                        </h4>
                        <p className="text-gray-600 mb-2">{item.description}</p>
                        {item.gpa && (
                          <p className="font-semibold text-gray-800">
                            {item.gpa}
                          </p>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

