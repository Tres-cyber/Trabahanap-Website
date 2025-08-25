import React from 'react'
import { BriefcaseBusiness, Palette, BarChart3, ClipboardList, ShieldCheck, Cog, Megaphone, Handshake, Search } from 'lucide-react'
import { motion } from 'framer-motion'
import FloatingIcons from './FloatingIcons'

const roles = [
  { id: 1, title: 'Software Engineer', Icon: BriefcaseBusiness },
  { id: 2, title: 'UI/UX Designer', Icon: Palette },
  { id: 3, title: 'Data Analyst', Icon: BarChart3 },
  { id: 4, title: 'Project Manager', Icon: ClipboardList },
  { id: 5, title: 'QA Engineer', Icon: ShieldCheck },
  { id: 6, title: 'DevOps Engineer', Icon: Cog },
  { id: 7, title: 'Marketing Specialist', Icon: Megaphone },
  { id: 8, title: 'Sales Associate', Icon: Handshake }
]

const JobSearch = () => {
  return (
    <motion.section
      className='w-full py-12 relative'
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <FloatingIcons />
      <div className='max-w-6xl mx-auto px-4 text-center relative z-10 md:z-0'>
        <h2 className='text-3xl md:text-4xl font-bold dark:text-white'>Trabahanap</h2>
        <p className='text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mt-2'>
          Hanap trabaho? Discover roles, companies, and opportunities that fit you.
        </p>

        <div className='flex items-center justify-center gap-2 mt-6'>
          <motion.input
            type='text'
            placeholder='Search jobs, roles, or companies'
            className='w-full md:w-96 rounded-full border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-400'
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          />
          <motion.button
            aria-label='Search jobs'
            className='bg-indigo-600 text-white p-2 rounded-full hover:bg-indigo-700 dark:bg-indigo-600 dark:hover:bg-indigo-500'
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            whileTap={{ scale: 0.96 }}
            whileHover={{ scale: 1.03 }}
          >
            <Search className='w-5 h-5' />
          </motion.button>
        </div>

        <motion.div
          className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8'
          initial='hidden'
          animate='show'
          variants={{
            hidden: { opacity: 1 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.08, delayChildren: 0.15 }
            }
          }}
        >
          {roles.map(role => {
            const Icon = role.Icon
            return (
              <motion.div
                key={role.id}
                className='border rounded-lg p-4 hover:shadow-md transition dark:bg-gray-800 dark:border-gray-700'
                variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
                whileHover={{ translateY: -4, boxShadow: '0 8px 24px rgba(0,0,0,0.08)' }}
              >
                <div className='h-40 w-full flex items-center justify-center rounded-md bg-indigo-50 dark:bg-indigo-950'>
                  <Icon className='w-16 h-16 text-indigo-600 dark:text-indigo-400' strokeWidth={1.75} />
                </div>
                <div className='font-medium text-gray-700 dark:text-gray-200 mt-2'>{role.title}</div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </motion.section>
  )
}

export default JobSearch


