import React from 'react'
import { motion } from 'framer-motion'
import { Play, Apple } from 'lucide-react'

const AppShowcase = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  }

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.95 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } }
  }

  return (
    <section className="py-16 md:py-24 px-6 md:px-12 bg-inherit">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16">
          {/* Left side - Smartphone mockups */}
          <motion.div 
            className="relative flex justify-center lg:justify-start gap-6"
            initial="hidden"
            whileInView="show"
            viewport={{ amount: 0.3 }}
            variants={fadeUp}
          >
            {/* First smartphone mockup (back) */}
            <motion.div 
              className="relative w-48 h-80 md:w-56 md:h-96 bg-gray-800 rounded-3xl shadow-xl border-4 border-gray-700 -rotate-6"
              variants={scaleUp}
            >
              {/* Screen */}
              <div className="absolute inset-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                <div className="text-white text-center p-4">
                  <div className="w-8 h-8 bg-white rounded-lg mx-auto mb-2"></div>
                  <div className="text-xs font-medium">Trabahanap</div>
                </div>
              </div>
              {/* Home button */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gray-600 rounded-full"></div>
            </motion.div>

            {/* Second smartphone mockup (front) */}
            <motion.div 
              className="relative w-48 h-80 md:w-56 md:h-96 bg-gray-800 rounded-3xl shadow-xl border-4 border-gray-700 rotate-6 -ml-8 md:-ml-12"
              variants={scaleUp}
              transition={{ delay: 0.1 }}
            >
              {/* Screen */}
              <div className="absolute inset-2 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center">
                <div className="text-white text-center p-4">
                  <div className="w-8 h-8 bg-white rounded-lg mx-auto mb-2"></div>
                  <div className="text-xs font-medium">Jobs</div>
                </div>
              </div>
              {/* Home button */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gray-600 rounded-full"></div>
            </motion.div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div 
            className="text-center lg:text-left"
            initial="hidden"
            whileInView="show"
            viewport={{ amount: 0.3 }}
            variants={fadeUp}
            transition={{ delay: 0.2 }}
          >
                         {/* Heading */}
             <motion.h2 
               className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight"
               variants={fadeUp}
             >
               Find jobs through your{' '}
               <span className="bg-yellow-300 dark:bg-yellow-400 px-1">phone</span>
             </motion.h2>

             {/* Description */}
             <motion.p 
               className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-md mx-auto lg:mx-0 font-['Lato']"
               variants={fadeUp}
               transition={{ delay: 0.1 }}
             >
               Apply to jobs, chat with recruiters, and get hired — all inside the Trabahanap app.
             </motion.p>

            {/* Store buttons */}
            <motion.div 
              className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
              variants={fadeUp}
              transition={{ delay: 0.2 }}
            >
                             {/* Google Play button */}
               <motion.a
                 href="#"
                 className="bg-black dark:bg-white text-white dark:text-black px-5 py-3 rounded-lg inline-flex items-center space-x-2 font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-200 font-['Lato']"
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95 }}
               >
                 <Play size={20} />
                 <div className="text-left">
                   <div className="text-xs opacity-75">GET IT ON</div>
                   <div className="text-sm font-semibold">Google Play</div>
                 </div>
               </motion.a>

               {/* App Store button */}
               <motion.a
                 href="#"
                 className="bg-white dark:bg-gray-800 text-black dark:text-white border border-gray-300 dark:border-gray-600 px-5 py-3 rounded-lg inline-flex items-center space-x-2 font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 font-['Lato']"
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95 }}
               >
                 <Apple size={20} />
                 <div className="text-left">
                   <div className="text-xs opacity-75">Download on the</div>
                   <div className="text-sm font-semibold">App Store</div>
                 </div>
               </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AppShowcase
