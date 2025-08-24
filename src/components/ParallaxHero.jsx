import React from 'react'
import { motion } from 'framer-motion'

const ParallaxHero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden pt-16">
      {/* Background Image - Static */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80')"
        }}
      />
      
      {/* Dark Overlay for Better Text Contrast */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Content Container */}
      <div className="relative h-full flex items-center justify-center">
        <motion.div
          className="text-center max-w-2xl px-4 md:px-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Transform Your Career Journey
          </motion.h1>
          
                     <motion.p
             className="mt-4 text-lg md:text-xl text-gray-200 font-lato"
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
             viewport={{ once: true }}
           >
             Discover opportunities that match your skills and aspirations. Join thousands of professionals who found their dream careers with us.
           </motion.p>
          
                     <motion.button
             className="mt-6 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-full shadow-lg transition duration-300 ease-in-out font-lato"
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
             viewport={{ once: true }}
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
           >
             Get Started Today
           </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default ParallaxHero
