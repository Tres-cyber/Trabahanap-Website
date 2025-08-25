import React from 'react'
import { Briefcase, Users, Search, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'

const IconCircle = ({ children, bgClass }) => (
	<div className={`w-14 h-14 md:w-16 md:h-16 rounded-lg border border-black/20 shadow-md flex items-center justify-center text-black ${bgClass}`}>
		{children}
	</div>
)

const FloatingIcons = () => {
	return (
		<div className='pointer-events-none absolute inset-x-0 top-0 -mt-6 md:-mt-10 h-48 md:h-56 overflow-visible z-0 md:z-10'>
			<div className='relative max-w-6xl mx-auto'>
				{/* cluster left */}
				<motion.div
					className='absolute left-0 md:left-8 top-6'
					animate={{ y: [0, 10, 0, -10, 0], rotate: [0, -8, 0, 8, 0] }}
					transition={{ duration: 12, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
				>
					<IconCircle bgClass='bg-cyan-300/70'>
						<Briefcase size={28} />
					</IconCircle>
				</motion.div>

				{/* cluster left (green) */}
				<motion.div
					className='absolute left-24 md:left-32 top-2 md:top-16'
					animate={{ y: [0, 12, 0, -12, 0], rotate: [0, 12, 0, -12, 0] }}
					transition={{ duration: 13, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
				>
					<IconCircle bgClass='bg-emerald-300/70'>
						<Users size={28} />
					</IconCircle>
				</motion.div>

				{/* cluster right upper */}
				<motion.div
					className='absolute right-4 md:right-12 top-4'
					animate={{ y: [0, -10, 0, 10, 0], rotate: [0, -6, 0, 6, 0] }}
					transition={{ duration: 9.5, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
				>
					<IconCircle bgClass='bg-purple-300/70'>
						<Search size={28} />
					</IconCircle>
				</motion.div>

				{/* cluster right lower */}
				<motion.div
					className='absolute right-16 md:right-32 top-20'
					animate={{ y: [0, 8, 0, -8, 0], rotate: [0, 8, 0, -8, 0] }}
					transition={{ duration: 11, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
				>
					<IconCircle bgClass='bg-rose-300/70'>
						<CheckCircle size={28} />
					</IconCircle>
				</motion.div>
			</div>
		</div>
	)
}

export default FloatingIcons


