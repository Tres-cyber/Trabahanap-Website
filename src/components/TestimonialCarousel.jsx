import React from 'react'
import { motion } from 'framer-motion'
import { Star, ArrowRight } from 'lucide-react'

const TestimonialCarousel = () => {
  // Testimonial data
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Software Engineer",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Trabahanap helped me find my dream job in just 2 weeks! The app is incredibly user-friendly and the job matching is spot on."
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Product Manager",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "As a hiring manager, I love how easy it is to find qualified candidates. The platform has revolutionized our recruitment process."
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "UX Designer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "The chat feature with recruiters is amazing! I got hired within days of starting conversations. Highly recommend!"
    },
    {
      id: 4,
      name: "David Kim",
      role: "Data Scientist",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Found my perfect remote position through Trabahanap. The job recommendations are incredibly accurate."
    },
    {
      id: 5,
      name: "Lisa Thompson",
      role: "Marketing Director",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "The app's interface is beautiful and intuitive. I've recommended it to all my colleagues looking for new opportunities."
    },
    {
      id: 6,
      name: "James Wilson",
      role: "DevOps Engineer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Trabahanap's AI-powered matching is incredible. It found me a role that perfectly matches my skills and career goals."
    },
    {
      id: 7,
      name: "Maria Garcia",
      role: "Frontend Developer",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "The application process is so streamlined. I applied to multiple jobs in minutes and got responses quickly."
    },
    {
      id: 8,
      name: "Alex Turner",
      role: "Sales Manager",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Best job platform I've ever used. The quality of job postings and the ease of application is unmatched."
    }
  ]

  // Duplicate testimonials for seamless infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials]

  // Calculate animation distance based on card width and gap
  // Responsive card widths: mobile (320px), tablet (384px), desktop (384px)
  const cardWidth = 320 // w-80 = 320px on mobile, w-96 = 384px on md+
  const gap = 24 // gap-6 = 24px
  const totalWidth = (cardWidth + gap) * duplicatedTestimonials.length

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  }

  return (
    <section className="py-16 px-4 md:px-12 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          className="flex flex-col md:flex-row md:items-center md:justify-between mb-12"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What <span className="bg-yellow-300 dark:bg-yellow-400 px-1">they</span> say about our{' '}
              <span className="bg-blue-300 dark:bg-blue-400 px-1">platform</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Real stories from job seekers and employers who found success
            </p>
          </div>
          
          <motion.button
            className="bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-full font-medium hover:scale-105 transition-transform duration-200 flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View More
            <ArrowRight size={16} />
          </motion.button>
        </motion.div>

        {/* Testimonial Cards Container */}
        <div className="space-y-8">
          {/* Top Row - Scrolls Right */}
          <div className="relative overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{
                x: [0, -totalWidth]
              }}
              transition={{
                duration: 60,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {duplicatedTestimonials.map((testimonial, index) => (
                <motion.div
                  key={`top-${testimonial.id}-${index}`}
                  className="flex-shrink-0 w-80 md:w-96 bg-purple-50 dark:bg-gray-800 rounded-2xl shadow-lg p-6 hover:scale-105 hover:shadow-xl hover:bg-purple-100 dark:hover:bg-gray-700 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  {/* Star Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-gray-800 dark:text-gray-200 text-sm md:text-base mb-6 line-clamp-3">
                    "{testimonial.text}"
                  </p>

                  {/* Profile */}
                  <div className="flex items-center gap-3">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-xs">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Bottom Row - Scrolls Left */}
          <div className="relative overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{
                x: [-totalWidth, 0]
              }}
              transition={{
                duration: 60,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {duplicatedTestimonials.map((testimonial, index) => (
                <motion.div
                  key={`bottom-${testimonial.id}-${index}`}
                  className="flex-shrink-0 w-80 md:w-96 bg-purple-50 dark:bg-gray-800 rounded-2xl shadow-lg p-6 hover:scale-105 hover:shadow-xl hover:bg-purple-100 dark:hover:bg-gray-700 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  {/* Star Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-gray-800 dark:text-gray-200 text-sm md:text-base mb-6 line-clamp-3">
                    "{testimonial.text}"
                  </p>

                  {/* Profile */}
                  <div className="flex items-center gap-3">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-xs">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialCarousel
