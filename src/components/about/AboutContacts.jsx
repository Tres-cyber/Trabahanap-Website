import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Globe, Facebook, Twitter, Youtube, Linkedin } from 'lucide-react'

const AboutContacts = () => {
  return (
    <section className='w-full px-6 py-16'>
      <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8'>
        {/* Left: Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className='rounded-2xl p-8 md:p-10  bg-blue-500 text-white flex flex-col justify-between'
        >
          <div className='space-y-6'>
            <div>
              <h3 className='text-2xl font-bold'>Contact information</h3>
              <p className='text-purple-100 mt-1'>Reach out to the Trabahanap team anytime.</p>
            </div>

            <div className='space-y-5'>
              <div className='flex items-start gap-3'>
                <div className='p-2 rounded-full bg-white/10'>
                  <MapPin className='w-5 h-5' />
                </div>
                <div>
                  <div className='font-bold text-white'>Address</div>
                  <div className='text-sm text-gray-200'>San Gabriel, Bagay Road, Tuguegarao City</div>
                </div>
              </div>

              <div className='flex items-start gap-3'>
                <div className='p-2 rounded-full bg-white/10'>
                  <Phone className='w-5 h-5' />
                </div>
                <div>
                  <div className='font-bold text-white'>Contact</div>
                  <div className='text-sm text-gray-200'>+63 912 345 6789</div>
                </div>
              </div>

              <div className='flex items-start gap-3'>
                <div className='p-2 rounded-full bg-white/10'>
                  <Mail className='w-5 h-5' />
                </div>
                <div>
                  <div className='font-bold text-white'>Email</div>
                  <div className='text-sm text-gray-200'>support@trabahanap.com</div>
                </div>
              </div>

              <div className='flex items-start gap-3'>
                <div className='p-2 rounded-full bg-white/10'>
                  <Globe className='w-5 h-5' />
                </div>
                <div>
                  <div className='font-bold text-white'>Website</div>
                  <div className='text-sm text-gray-200'>www.trabahanap.com</div>
                </div>
              </div>
            </div>
          </div>

          <div className='mt-8 flex items-center gap-3'>
            <motion.a whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.97 }} href='#' className='p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors'>
              <Facebook className='w-5 h-5' />
            </motion.a>
            <motion.a whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.97 }} href='#' className='p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors'>
              <Twitter className='w-5 h-5' />
            </motion.a>
            <motion.a whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.97 }} href='#' className='p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors'>
              <Youtube className='w-5 h-5' />
            </motion.a>
            <motion.a whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.97 }} href='#' className='p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors'>
              <Linkedin className='w-5 h-5' />
            </motion.a>
          </div>
        </motion.div>

        {/* Right: Form */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          className='rounded-2xl bg-white p-8 md:p-10 shadow-xl'
        >
          <h3 className='text-2xl md:text-3xl font-bold text-gray-900'>
            Get in touch with <span className='bg-yellow-300 px-2 rounded text-black font-extrabold'>Trabahanap</span>
          </h3>
          <p className='text-gray-500 mt-2'>
            Questions about jobs or hiring? Send us a message and our team will reply shortly.
          </p>

          <form className='mt-8 space-y-5'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <input
                type='text'
                placeholder='First name'
                className='w-full bg-purple-50 rounded-full px-4 py-3 border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder:text-gray-400'
              />
              <input
                type='text'
                placeholder='Last name'
                className='w-full bg-purple-50 rounded-full px-4 py-3 border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder:text-gray-400'
              />
            </div>
            <input
              type='email'
              placeholder='Email address'
              className='w-full bg-purple-50 rounded-full px-4 py-3 border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder:text-gray-400'
            />
            <textarea
              placeholder='Your message'
              rows='5'
              className='w-full bg-purple-50 rounded-2xl px-4 py-3 border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder:text-gray-400'
            />
            <button
              type='submit'
              className='inline-flex items-center justify-center bg-black text-white rounded-full px-6 py-3 font-medium hover:bg-gray-800 active:bg-black/90 focus:outline-none focus:ring-2 focus:ring-black/30'
            >
              Send message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutContacts


