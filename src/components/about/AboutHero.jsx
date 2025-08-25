import React from 'react'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'

const AboutHero = () => {
  return (
    <section 
      className="relative min-h-[50vh] md:min-h-[60vh] flex items-center justify-center px-4 py-20 w-full"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        marginLeft: 'calc(-50vw + 50%)',
        marginRight: 'calc(-50vw + 50%)'
      }}
    >
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-white/80"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About{' '}
            <span className="bg-yellow-300 text-black px-2 rounded">Us</span>
          </h1>
          
          {/* Breadcrumb Navigation */}
          <div className="flex items-center justify-center text-sm md:text-base text-gray-700">
            <a 
              href="/" 
              className="text-blue-600 hover:underline transition-colors"
            >
              Home
            </a>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span>About</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutHero
