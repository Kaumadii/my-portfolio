'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Github, Linkedin, Mail } from 'lucide-react'

const socialLinks = [
  { icon: Github, href: 'https://github.com/Kaumadii', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/kaumadi-amasha-783276313', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:kaumadiama77@gmail.com', label: 'Email' },
]

export default function Home() {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='100' height='100' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 100 0 L 0 0 0 100' fill='none' stroke='rgba(255,255,255,0.1)' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-5 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-4 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Hi, I'm <span className="text-yellow-300">Kaumadi Amasha</span>
            </motion.h1>
            <motion.h2
              className="text-2xl md:text-4xl mb-4 opacity-90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Full Stack Developer
            </motion.h2>
            <motion.p
              className="text-xl mb-8 opacity-90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              I love turning ideas into beautiful and functional digital products. From frontend design to backend logic, I enjoy crafting complete solutions that work fast and feel great to use.
              I'm always exploring new tools and techniques to grow as a developer and build meaningful projects.
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Button
                onClick={() => handleNavClick('#contact')}
                size="lg"
                className="bg-white text-indigo-600 hover:bg-gray-100"
              >
                Get In Touch
              </Button>
              <Button
                onClick={() => handleNavClick('#projects')}
                size="lg"
                className="bg-white text-indigo-600 hover:bg-gray-100"
              >
                View Projects
              </Button>
            </motion.div>
            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-12 h-12 flex items-center justify-center bg-white/20 rounded-full hover:bg-white hover:text-indigo-600 transition-colors"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                  >
                    <Icon className="h-5 w-5" />
                  </motion.a>
                )
              })}
            </motion.div>
          </motion.div>

          {/* Image Placeholder */}
          <div className="flex justify-center items-center">
  <div
    className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-white/20 backdrop-blur-sm border-4 border-white/30 flex items-center justify-center overflow-hidden"
  >
    <img
      src="/me.jpeg"
      alt="Profile"
      className="w-full h-full object-cover"
    />
  </div>
</div>
          
        </div>
      </div>
    </section>
  )
}

