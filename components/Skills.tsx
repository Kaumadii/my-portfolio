'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code, Server, Wrench } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const skillCategories = [
  {
    icon: Code,
    title: 'Frontend',
    skills: [
      { name: 'HTML/CSS', progress: 90 },
      { name: 'JavaScript', progress: 85 },
      { name: 'React', progress: 80 },
      { name: 'Vue.js', progress: 75 },
    ],
  },
  {
    icon: Server,
    title: 'Backend',
    skills: [
      { name: 'Node.js', progress: 85 },
      { name: 'Python', progress: 80 },
      { name: 'Express', progress: 75 },
      { name: 'MongoDB', progress: 70 },
    ],
  },
  {
    icon: Wrench,
    title: 'Tools & Others',
    skills: [
      { name: 'Git', progress: 85 },
      { name: 'Docker', progress: 70 },
      { name: 'AWS', progress: 65 },
      { name: 'Figma', progress: 75 },
    ],
  },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-5">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Skills
        </motion.h2>

        <div
          ref={ref}
          className="grid md:grid-cols-3 gap-8 mt-12"
        >
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-indigo-600">
                      <Icon className="h-6 w-6" />
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between">
                          <span className="font-semibold text-gray-800">
                            {skill.name}
                          </span>
                          <span className="text-sm text-gray-500">
                            {skill.progress}%
                          </span>
                        </div>
                        <div className="h-2.5 bg-gray-200 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"
                            initial={{ width: 0 }}
                            animate={
                              isInView
                                ? { width: `${skill.progress}%` }
                                : { width: 0 }
                            }
                            transition={{
                              duration: 1,
                              delay: categoryIndex * 0.1 + skillIndex * 0.1,
                              ease: 'easeOut',
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

