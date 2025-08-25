import React from 'react'
import { Briefcase, Users, Search, CheckCircle } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const IconCircle = ({ children, bgClass }) => (
	<div className={`w-24 h-24 md:w-32 md:h-32 rounded-lg border-2 border-black shadow-lg flex items-center justify-center text-black ${bgClass}`}>
		{children}
	</div>
)

const PostStatsHero = () => {
	const ref = useRef(null)
	const isInView = useInView(ref, { margin: "-100px" })

	return (
		<section ref={ref} className='bg-white dark:bg-gray-900 py-12 px-6 md:px-12'>
			<div className='grid md:grid-cols-2 gap-8 items-center'>
				{/* Left: 2x2 icons grid */}
				<div className='grid grid-cols-2 gap-x-4 md:gap-x-6 gap-y-12 md:gap-y-14 place-items-center md:place-items-start'>
					<motion.div
						className='mt-0 md:mt-2'
						initial={{ opacity: 0, y: 50, scale: 0.8 }}
						animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.8 }}
						transition={{ duration: 0.6, delay: 0.1 }}
					>
						<motion.div
							animate={{ y: [0, 10, 0, -10, 0], rotate: [0, -8, 0, 8, 0] }}
							transition={{ duration: 12, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
						>
							<IconCircle bgClass='bg-cyan-300'>
								<Briefcase size={48} />
							</IconCircle>
						</motion.div>
					</motion.div>
					<motion.div
						className='mt-6 md:mt-10'
						initial={{ opacity: 0, y: 50, scale: 0.8 }}
						animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.8 }}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						<motion.div
							animate={{ y: [0, 12, 0, -12, 0], rotate: [0, 12, 0, -12, 0] }}
							transition={{ duration: 13, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
						>
							<IconCircle bgClass='bg-emerald-300'>
								<Users size={48} />
							</IconCircle>
						</motion.div>
					</motion.div>
					<motion.div
						className='-mt-2 md:-mt-4'
						initial={{ opacity: 0, y: 50, scale: 0.8 }}
						animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.8 }}
						transition={{ duration: 0.6, delay: 0.3 }}
					>
						<motion.div
							animate={{ y: [0, -10, 0, 10, 0], rotate: [0, -6, 0, 6, 0] }}
							transition={{ duration: 9.5, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
						>
							<IconCircle bgClass='bg-purple-300'>
								<Search size={48} />
							</IconCircle>
						</motion.div>
					</motion.div>
					<motion.div
						className='mt-4 md:mt-8'
						initial={{ opacity: 0, y: 50, scale: 0.8 }}
						animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.8 }}
						transition={{ duration: 0.6, delay: 0.4 }}
					>
						<motion.div
							animate={{ y: [0, 8, 0, -8, 0], rotate: [0, 8, 0, -8, 0] }}
							transition={{ duration: 11, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
						>
							<IconCircle bgClass='bg-rose-300'>
								<CheckCircle size={48} />
							</IconCircle>
						</motion.div>
					</motion.div>
				</div>

				{/* Right: text content */}
				<motion.div 
					className='text-center md:text-left'
					initial={{ opacity: 0, x: 50 }}
					animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
					transition={{ duration: 0.8, delay: 0.5 }}
				>
					<h2 className='text-4xl md:text-5xl font-bold text-gray-900 dark:text-white'>
						Find and <span className='bg-yellow-300 px-1'>apply</span> to jobs across all <span className='bg-blue-300 px-1'>industries</span>
					</h2>
					<p className='text-gray-600 dark:text-gray-300 mt-4 font-lato text-lg md:text-xl'>
						Discover curated opportunities that match your skills and goals. Filter roles, compare benefits, and apply with confidence.
					</p>
					<motion.button
						className='bg-blue-600 text-white rounded-full px-6 py-3 font-medium mt-6 hover:bg-blue-700 active:bg-blue-800 transition ease-in-out w-full md:w-auto font-lato'
						initial={{ opacity: 0, y: 20 }}
						animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
						transition={{ duration: 0.6, delay: 0.7 }}
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
					>
						Get Started
					</motion.button>
				</motion.div>
			</div>
		</section>
	)
}

export default PostStatsHero



