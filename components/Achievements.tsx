'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Trophy, Medal, Star, Award } from 'lucide-react'

interface Achievement {
  icon?: typeof Trophy
  title: string
  description: string
  date: string
  image?: string // Path to image in public folder (e.g., '/achievements/cert1.jpg')
}

const achievements: Achievement[] = [
  {
    icon: Trophy,
    title: 'Merit Award - National ICT Awards (NBQSA 2025) in Tertiary Student Project (Technology)',
    description: 'Organized by bcs Sri Lanka Section',
    date: 'Oct - 2025',
    image: '/1.jpg', // Add your image path here
  },
  {
    icon: Medal,
    title: 'Winners(Proposal submission Round) - DEV{thon} 2.0',
    description: 'Rotract Club of University of Moratuwa',
    date: 'Apr - 2025',
    image: '/2.jpeg', // Add your image path here
  },
  {
    icon: Star,
    title: 'Top 10 – IEEE INSL Sabaragamuwa Province Competition 2024   ',
    description: 'IEEE Student Branch og Sabaragamuwa University of Sri Lanka',
    date: 'Nov - 2024',
    image: '/3.jpeg', // Add your image path here
  },
]

export default function Achievements() {
  return (
    <section id="achievements" className="py-20">
      <div className="container mx-auto px-5">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Achievements
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon
            return (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 border-t-4 border-t-indigo-600 group">
                  {/* Image Section */}
                  <div className="relative w-full h-64 bg-gradient-to-br from-indigo-600 to-purple-600 overflow-hidden">
                    {achievement.image ? (
                      <Image
                        src={achievement.image}
                        alt={achievement.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        {Icon && (
                          <Icon className="h-24 w-24 text-white/80" />
                        )}
                      </div>
                    )}
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    {/* Date badge */}
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-indigo-600 text-white text-sm font-semibold rounded-full backdrop-blur-sm">
                        {achievement.date}
                      </span>
                    </div>
                  </div>

                  {/* Content Section */}
                  <CardHeader className="p-6">
                    <CardTitle className="text-2xl mb-3 text-left">
                      {achievement.title}
                    </CardTitle>
                    <CardDescription className="text-base text-gray-700 leading-relaxed text-left">
                      {achievement.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

