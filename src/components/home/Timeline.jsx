import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { 
  UserPlus, 
  FileText, 
  Sparkles, 
  Send, 
  CalendarCheck, 
  BadgeCheck,
  Briefcase,
  Award,
  Target,
  Zap,
  Clock,
  CheckCircle
} from 'lucide-react'

const TimelineItem = ({ 
  icon: Icon, 
  title, 
  description, 
  imageSrc, 
  isLeft, 
  index,
  iconColor 
}) => {
  return (
    <motion.div
      className={`relative ${
        isLeft 
          ? 'md:pr-10 md:text-right' 
          : 'md:pl-10 md:text-left'
      }`}
      initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ amount: 0.1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      {/* Connector line (desktop only) */}
      <div className={`hidden md:block absolute top-8 ${
        isLeft ? 'right-0' : 'left-0'
      } w-10 h-px bg-gray-200 dark:bg-gray-600`} />
      
      {/* Card */}
      <div className={`rounded-2xl shadow-lg ring-1 ring-gray-100 dark:ring-gray-700 bg-white dark:bg-gray-800 p-6 md:p-8 relative min-h-[280px] overflow-hidden ${
        isLeft ? 'md:mr-auto md:max-w-md' : 'md:ml-auto md:max-w-md'
      }`}>
        {/* Background Icon */}
        <div className={`absolute inset-0 flex items-center opacity-50 ${
          isLeft ? 'justify-end -mr-20' : 'justify-start -ml-20'
        }`}>
          <Icon size={240} className={iconColor} />
        </div>
        
        {/* Content */}
        <div className="relative z-10">
          <h3 className="text-3xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
            {title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4" style={{ fontFamily: 'Lato, sans-serif' }}>
            {description}
          </p>
          
          {/* Image thumbnail */}
          {imageSrc && (
            <div className="rounded-xl overflow-hidden aspect-[16/10] shadow-inner bg-gray-50 dark:bg-gray-700">
              <img 
                src={imageSrc} 
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}

const Timeline = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.9", "end 0.1"]
  })

  const timelineData = [
    {
      icon: UserPlus,
      title: "Create",
      description: "Sign up and create your professional profile to get started with Trabahanap. It only takes a few minutes to set up your account.",
      imageSrc: null,
      iconColor: "text-blue-200 dark:text-blue-800"
    },
    {
      icon: FileText,
      title: "Build",
      description: "Showcase your skills, experience, and achievements. Add your portfolio, certifications, and professional summary to attract top employers.",
      imageSrc: null,
      iconColor: "text-green-200 dark:text-green-800"
    },
    {
      icon: Sparkles,
      title: "Match",
      description: "Our AI-powered algorithm analyzes your profile and preferences to suggest the best job opportunities that match your skills and career goals.",
      imageSrc: null,
      iconColor: "text-purple-200 dark:text-purple-800"
    },
    {
      icon: Send,
      title: "Apply",
      description: "Submit applications with one click and communicate directly with employers through our integrated messaging system for faster responses.",
      imageSrc: null,
      iconColor: "text-orange-200 dark:text-orange-800"
    },
    {
      icon: CalendarCheck,
      title: "Interview",
      description: "Once your application is reviewed, schedule interviews directly through the platform. Get reminders and preparation tips for your meetings.",
      imageSrc: null,
      iconColor: "text-pink-200 dark:text-pink-800"
    },
    {
      icon: BadgeCheck,
      title: "Hired",
      description: "Congratulations! You've successfully landed your dream job. Track your onboarding process and start your new career journey.",
      imageSrc: null,
      iconColor: "text-emerald-200 dark:text-emerald-800"
    }
  ]

  return (
    <motion.section 
      className="py-16 md:py-24"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Hero section */}
        <motion.div 
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.1 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
            Your Journey to Success
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto text-lg" style={{ fontFamily: 'Lato, sans-serif' }}>
            Follow these simple steps to find your perfect job match with Trabahanap
          </p>
        </motion.div>

        {/* Timeline container */}
        <motion.div 
          ref={containerRef}
          className="relative max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.05 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          {/* Center line */}
          <motion.div 
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-600"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ amount: 0.1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          />
          
          {/* Progress line */}
          <motion.div
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-blue-500 dark:bg-blue-400 origin-top"
            style={{ scaleY: scrollYProgress }}
          />
          
          {/* Timeline items */}
          <div className="space-y-12 md:space-y-16">
            {timelineData.map((item, index) => (
              <TimelineItem
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
                imageSrc={item.imageSrc}
                isLeft={index % 2 === 0}
                index={index}
                iconColor={item.iconColor}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Timeline


