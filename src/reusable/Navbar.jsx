import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/ediskarte-logo.png'

const linkClass =
	'px-3 py-2 rounded-md no-underline font-medium transition-colors text-2xl md:text-xl'

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [isDark, setIsDark] = useState(() => document.documentElement.classList.contains('dark'))
	const [isHamburgerHovered, setIsHamburgerHovered] = useState(false)

	const closeMenu = () => setIsOpen(false)

	const toggleTheme = () => {
		const nextIsDark = !isDark
		setIsDark(nextIsDark)
		if (nextIsDark) {
			document.documentElement.classList.add('dark')
			document.body && document.body.classList.add('dark')
			localStorage.setItem('theme', 'dark')
			document.documentElement.setAttribute('data-theme', 'dark')
			document.documentElement.style.colorScheme = 'dark'
		} else {
			document.documentElement.classList.remove('dark')
			document.body && document.body.classList.remove('dark')
			localStorage.setItem('theme', 'light')
			document.documentElement.setAttribute('data-theme', 'light')
			document.documentElement.style.colorScheme = 'light'
		}
	}

	return (
		<nav className={`w-full fixed top-0 left-0 z-50 border-b border-gray-200 dark:border-gray-700 shadow-sm transition-colors duration-300 ${
			isOpen
				? 'bg-white dark:bg-gray-900' 
				: isHamburgerHovered
					? 'bg-white dark:bg-gray-900 backdrop-blur-sm'
					: 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm'
		}`}>
			<div className='max-w-7xl mx-auto flex items-center justify-between px-6 py-4'>
				{/* Left column: Logo + Title */}
				<NavLink to='/' className='flex items-center gap-2 text-2xl md:text-3xl font-bold no-underline border-0' onClick={closeMenu}>
					<img src={logo} alt='Trabahanap logo' className='h-8 w-8' />
					<span>Trabahanap</span>
				</NavLink>

				{/* Right column (desktop): Links + CTA */}
				<div className='hidden md:flex items-center gap-6 text-[18px] md:text-xl font-medium text-gray-800 dark:text-gray-200'>
					<NavLink
						to='/'
						className={({ isActive }) => `no-underline border-0 hover:text-blue-500 transition ${isActive ? 'text-blue-700' : ''}`}
						end
					>
						Home
					</NavLink>
					<NavLink
						to='/about'
						className={({ isActive }) => `no-underline border-0 hover:text-blue-500 transition ${isActive ? 'text-blue-700' : ''}`}
					>
						About
					</NavLink>
					<NavLink
						to='/jobs'
						className={({ isActive }) => `no-underline border-0 hover:text-blue-500 transition ${isActive ? 'text-blue-700' : ''}`}
					>
						Jobs
					</NavLink>
					<NavLink
						to='/contacts'
						className={({ isActive }) => `no-underline border-0 hover:text-blue-500 transition ${isActive ? 'text-blue-700' : ''}`}
					>
						Contact
					</NavLink>
					<div className='flex items-center gap-3'>
						<NavLink
							to='/jobs'
							className='ml-1 inline-flex items-center rounded-full bg-black text-white px-5 py-2 md:px-7 md:py-3 no-underline border-0 hover:bg-gray-900 transition dark:bg-white dark:text-black dark:hover:bg-gray-200'
						>
							Start Now
						</NavLink>
						<button
							onClick={toggleTheme}
							className='inline-flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition'
							aria-label='Toggle dark mode'
							title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
						>
							{isDark ? (
								<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='w-5 h-5'>
									<path d='M21.752 15.002A9.718 9.718 0 0 1 12 21.75c-5.385 0-9.75-4.365-9.75-9.75 0-4.28 2.73-7.914 6.546-9.195a.75.75 0 0 1 .951.966 7.5 7.5 0 0 0 9.233 9.233.75.75 0 0 1 .772.998z' />
								</svg>
							) : (
								<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='w-5 h-5'>
									<path d='M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12z' />
									<path fillRule='evenodd' d='M12 2.25a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0V3A.75.75 0 0 1 12 2.25zm0 15a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0V18a.75.75 0 0 1 .75-.75zM4.72 4.72a.75.75 0 0 1 1.06 0l1.06 1.06a.75.75 0 1 1-1.06 1.06L4.72 5.78a.75.75 0 0 1 0-1.06zm12.44 12.44a.75.75 0 0 1 1.06 0l1.06 1.06a.75.75 0 1 1-1.06 1.06l-1.06-1.06a.75.75 0 0 1 0-1.06zM2.25 12a.75.75 0 0 1 .75-.75h1.5a.75.75 0 1 1 0 1.5H3A.75.75 0 0 1 2.25 12zm15 0a.75.75 0 0 1 .75-.75h1.5a.75.75 0 1 1 0 1.5H18a.75.75 0 0 1-.75-.75zM4.72 19.28a.75.75 0 0 1 1.06 0l1.06-1.06a.75.75 0 0 1 1.06 1.06L6.78 20.34a.75.75 0 0 1-1.06 0zM16.28 7.78a.75.75 0 0 1 1.06 0l1.06-1.06a.75.75 0 1 1-1.06-1.06L16.28 6.72a.75.75 0 0 1 0 1.06z' clipRule='evenodd' />
								</svg>
							)}
						</button>
					</div>
				</div>

				{/* Hamburger (mobile) */}
				<button
					className='md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:text-gray-200 dark:hover:bg-gray-800'
					aria-label='Toggle menu'
					aria-expanded={isOpen}
					onClick={() => setIsOpen((v) => !v)}
					onMouseEnter={() => setIsHamburgerHovered(true)}
					onMouseLeave={() => setIsHamburgerHovered(false)}
				>
					{isOpen ? (
						/* X icon */
						<svg className='h-6 w-6' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
							<line x1='18' y1='6' x2='6' y2='18' />
							<line x1='6' y1='6' x2='18' y2='18' />
						</svg>
					) : (
						/* Hamburger icon */
						<svg className='h-6 w-6' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
							<line x1='3' y1='6' x2='21' y2='6' />
							<line x1='3' y1='12' x2='21' y2='12' />
							<line x1='3' y1='18' x2='21' y2='18' />
						</svg>
					)}
				</button>
			</div>

			{/* Mobile side drawer */}
			{isOpen && (
				<div
					className='md:hidden fixed inset-0 z-40 bg-black/40'
					onClick={closeMenu}
					aria-hidden='true'
				/>
			)}
			<div
				className={`md:hidden fixed inset-y-0 right-0 z-50 w-[70vw] max-w-sm bg-white dark:bg-gray-900 shadow-xl transform transition-transform duration-300 ease-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
				role='dialog'
				aria-modal='true'
			>
				<div className='h-full flex flex-col px-4 py-6'>
					<div className='mb-4 flex justify-end'>
						<button
							className='inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:text-gray-200 dark:hover:bg-gray-800'
							aria-label='Close menu'
							onClick={closeMenu}
						>
							<svg className='h-6 w-6' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
								<line x1='18' y1='6' x2='6' y2='18' />
								<line x1='6' y1='6' x2='18' y2='18' />
							</svg>
						</button>
					</div>
					<div className='flex flex-col space-y-1'>
						<NavLink to='/' className={`${linkClass} block w-full text-left dark:text-gray-200`} end onClick={closeMenu}>Home</NavLink>
						<NavLink to='/about' className={`${linkClass} block w-full text-left dark:text-gray-200`} onClick={closeMenu}>About</NavLink>
						<NavLink to='/jobs' className={`${linkClass} block w-full text-left dark:text-gray-200`} onClick={closeMenu}>Jobs</NavLink>
						<NavLink to='/contacts' className={`${linkClass} block w-full text-left dark:text-gray-200`} onClick={closeMenu}>Contact</NavLink>
					</div>
					<div className='mt-auto grid grid-cols-2 gap-3'>
						<button
							onClick={toggleTheme}
							className='inline-flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition'
							aria-label='Toggle dark mode'
							title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
						>
							{isDark ? (
								<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='w-5 h-5'>
									<path d='M21.752 15.002A9.718 9.718 0 0 1 12 21.75c-5.385 0-9.75-4.365-9.75-9.75 0-4.28 2.73-7.914 6.546-9.195a.75.75 0 0 1 .951.966 7.5 7.5 0 0 0 9.233 9.233.75.75 0 0 1 .772.998z' />
								</svg>
							) : (
								<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='w-5 h-5'>
									<path d='M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12z' />
									<path fillRule='evenodd' d='M12 2.25a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0V3A.75.75 0 0 1 12 2.25zm0 15a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0V18a.75.75 0 0 1 .75-.75zM4.72 4.72a.75.75 0 0 1 1.06 0l1.06 1.06a.75.75 0 1 1-1.06 1.06L4.72 5.78a.75.75 0 0 1 0-1.06zm12.44 12.44a.75.75 0 0 1 1.06 0l1.06 1.06a.75.75 0 1 1-1.06 1.06l-1.06-1.06a.75.75 0 0 1 0-1.06zM2.25 12a.75.75 0 0 1 .75-.75h1.5a.75.75 0 1 1 0 1.5H3A.75.75 0 0 1 2.25 12zm15 0a.75.75 0 0 1 .75-.75h1.5a.75.75 0 1 1 0 1.5H18a.75.75 0 0 1-.75-.75zM4.72 19.28a.75.75 0 0 1 1.06 0l1.06-1.06a.75.75 0 0 1 1.06 1.06L6.78 20.34a.75.75 0 0 1-1.06 0zM16.28 7.78a.75.75 0 0 1 1.06 0l1.06-1.06a.75.75 0 1 1-1.06-1.06L16.28 6.72a.75.75 0 0 1 0 1.06z' clipRule='evenodd' />
								</svg>
							)}
						</button>
						<NavLink
							to='/jobs'
							className='inline-flex w-full justify-center items-center rounded-full bg-black text-white px-4 py-2 text-sm font-medium hover:bg-gray-900 active:bg-black/90 focus:outline-none focus:ring-2 focus:ring-black/30 dark:bg-white dark:text-black dark:hover:bg-gray-200'
							onClick={closeMenu}
						>
							Start Now
						</NavLink>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Navbar


