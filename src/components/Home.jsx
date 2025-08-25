import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { Briefcase, Star, Heart, ThumbsUp, Sparkles, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import StatsSection from './home/StatsSection'
import PostStatsHero from './home/PostStatsHero'
import Timeline from './home/Timeline'
import AppShowcase from './home/AppShowcase'
import TestimonialCarousel from './home/TestimonialCarousel'
import ParallaxHero from './home/ParallaxHero'
import Button from '../reusable/Button'
import heroImage from '../assets/hero_sectio_image.svg'

const Home = () => {
	const controls = useAnimation()

	useEffect(() => {
		controls.start('show')
	}, [controls])
	const textContainer = {
		hidden: {},
		show: {
			transition: { staggerChildren: 0.15 }
		}
	}

	const fadeUp = {
		hidden: { opacity: 0, y: 24 },
		show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
	}

	const scaleUp = {
		hidden: { opacity: 0, scale: 0.95 },
		show: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } }
	}

	return (
		<>
		<section className='grid grid-cols-1 md:grid-cols-2 items-center gap-10 py-8 md:py-16'>
			<div className='space-y-6'>
				<motion.h1
					className='text-4xl md:text-6xl font-extrabold leading-tight tracking-tight'
					variants={textContainer}
					initial='hidden'
					animate={controls}
				>
					<motion.span className='block' variants={fadeUp}>We are the most</motion.span>
					<motion.span className='block' variants={fadeUp}>
						<motion.span className='bg-yellow-300 px-2 rounded inline-block' variants={scaleUp}>inspiring</motion.span>
					</motion.span>
					<motion.span className='block' variants={fadeUp}>
						and friendly <motion.span className='bg-blue-400 px-2 rounded inline-block' variants={scaleUp}>job-matching</motion.span> platform
					</motion.span>
				</motion.h1>
				<motion.p
					className='text-gray-600 text-base md:text-lg font-lato'
					initial={{ opacity: 0, y: 8 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.5, duration: 0.6, ease: 'easeOut' }}
				>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at dui nec tortor ultricies laoreet. Phasellus a lectus id nisl interdum dictum.
				</motion.p>
				<div className='flex items-center gap-4 pt-2'>
					<motion.div 
						initial={{ opacity: 0 }} 
						animate={{ opacity: 1 }} 
						transition={{ delay: 0.6, duration: 0.6, ease: 'easeOut' }}
					>
						<Link to='/jobs'>
							<Button className='rounded-full px-8 py-4 text-lg font-lato'>
								<Briefcase size={18} className='mr-2' />
								Find jobs
							</Button>
						</Link>
					</motion.div>
					<motion.div 
						initial={{ opacity: 0 }} 
						animate={{ opacity: 1 }} 
						transition={{ delay: 0.75, duration: 0.6, ease: 'easeOut' }}
					>
						<Link to='/about' className='inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 active:text-blue-800 font-lato'>
							<span className='font-medium'>Learn more</span>
							<ArrowUpRight size={20} />
						</Link>
					</motion.div>
				</div>
			</div>
			<div className='relative overflow-visible'>
				<motion.img
					src={heroImage}
					alt='Happy professional smiling'
					className='w-full h-80 md:h-[28rem] transition duration-300 ease-out z-0'
					loading='lazy'
					initial={{ opacity: 0, x: 48 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, ease: 'easeOut' }}
					whileHover={{ scale: 1.05 }}
				/>

				{/* Floating icon shapes */}
				<div className='pointer-events-none select-none absolute inset-0 z-20'>
				

					{/* Top-right */}
					<motion.div
						className='absolute top-6 right-6 md:top-8 md:right-10'
						initial={{ y: 24, scale: 0.85 }}
						animate={{ y: 0, scale: 1 }}
						transition={{ type: 'spring', stiffness: 120, damping: 14, delay: 0.15 }}
					>
						<motion.div
							className='w-12 h-12 md:w-16 md:h-16 rounded-lg bg-cyan-300 border-2 border-black shadow-lg flex items-center justify-center text-black opacity-100'
							animate={{ y: [0, 10, 0, -10, 0], rotate: [0, -10, 0, 10, 0] }}
							transition={{ duration: 12, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
						>
							<Star size={24} />
						</motion.div>
					</motion.div>

					{/* Bottom-left */}
					<motion.div
						className='absolute bottom-6 left-10 md:bottom-8 md:left-16'
						initial={{ y: 24, scale: 0.85 }}
						animate={{ y: 0, scale: 1 }}
						transition={{ type: 'spring', stiffness: 120, damping: 14, delay: 0.25 }}
					>
						<motion.div
							className='w-12 h-12 md:w-16 md:h-16 rounded-lg bg-emerald-300 border-2 border-black shadow-lg flex items-center justify-center text-black opacity-100'
							animate={{ y: [0, 12, 0, -12, 0], rotate: [0, 12, 0, -12, 0] }}
							transition={{ duration: 13, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
						>
							<ThumbsUp size={24} />
						</motion.div>
					</motion.div>

					{/* Bottom-right */}
					<motion.div
						className='absolute bottom-5 right-4 md:bottom-7 md:right-8'
						initial={{ y: 24, scale: 0.85 }}
						animate={{ y: 0, scale: 1 }}
						transition={{ type: 'spring', stiffness: 120, damping: 14, delay: 0.2 }}
					>
						<motion.div
							className='w-11 h-11 md:w-14 md:h-14 rounded-md bg-purple-300 border-2 border-black shadow-lg flex items-center justify-center text-black opacity-100'
							animate={{ y: [0, -10, 0, 10, 0], rotate: [0, -6, 0, 6, 0] }}
							transition={{ duration: 9.5, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
						>
							<Sparkles size={22} />
						</motion.div>
					</motion.div>
				</div>
			</div>
		</section>
		<div className='pt-20'>
			<StatsSection
				stats={[
					{ label: 'Jobseekers', value: 50000 },
					{ label: 'Employers', value: 12000 },
					{ label: 'Jobs Posted', value: 8500 },
					{ label: 'Successful Matches', value: 32000 }
				]}
			/>
		</div>
		<div className='pt-20'>
			<PostStatsHero />
		</div>
		<div className='pt-20'>
			<Timeline />
		</div>
		<div className='pt-20'>
			<AppShowcase />
		</div>
		<div className='pt-20'>
			<TestimonialCarousel />
		</div>
		<div className='-mx-4'>
			<ParallaxHero />
		</div>
	
		</>
	)
}

export default Home


