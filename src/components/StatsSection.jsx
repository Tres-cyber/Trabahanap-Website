import React, { useEffect, useRef, useState } from 'react'

const useCountUp = (targetValue, durationMs = 1200) => {
	const [currentValue, setCurrentValue] = useState(0)
	const frameRef = useRef(0)
	const startRef = useRef(null)

	useEffect(() => {
		cancelAnimationFrame(frameRef.current)
		setCurrentValue(0)
		startRef.current = null

		const step = (timestamp) => {
			if (startRef.current === null) startRef.current = timestamp
			const elapsed = timestamp - startRef.current
			const progress = Math.min(elapsed / durationMs, 1)
			const eased = 1 - Math.pow(1 - progress, 3)
			setCurrentValue(Math.floor(eased * targetValue))
			if (progress < 1) {
				frameRef.current = requestAnimationFrame(step)
			}
		}

		frameRef.current = requestAnimationFrame(step)
		return () => cancelAnimationFrame(frameRef.current)
	}, [targetValue, durationMs])

	return currentValue
}

const formatCompact = (value) => {
	return new Intl.NumberFormat(undefined, { notation: 'compact', maximumFractionDigits: 1 }).format(value)
}

const StatItem = ({ label, value, shouldStart }) => {
	const animatedValue = useCountUp(shouldStart ? value : 0)
	return (
		<div className='text-center'>
			<div className='text-6xl md:text-7xl font-bold text-gray-700'>{formatCompact(animatedValue)}</div>
			<div className='text-base md:text-lg text-gray-500 mt-1'>{label}</div>
		</div>
	)
}

const useInView = (options) => {
	const elementRef = useRef(null)
	const [inView, setInView] = useState(false)
	const hasTriggeredRef = useRef(false)

	useEffect(() => {
		const element = elementRef.current
		if (!element) return

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setInView(true)
					if (options?.once) {
						hasTriggeredRef.current = true
						observer.unobserve(element)
					}
				} else if (!hasTriggeredRef.current) {
					setInView(false)
				}
			},
			{ threshold: options?.threshold ?? 0.2 }
		)

		observer.observe(element)
		return () => observer.disconnect()
	}, [options?.threshold, options?.once])

	return [elementRef, inView]
}

const StatsSection = ({ stats }) => {
	const [sectionRef, inView] = useInView({ once: true, threshold: 0.2 })
	return (
		<section ref={sectionRef} className='py-12 bg-gray-100 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]'>
			<div className='max-w-6xl mx-auto'>
				<div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
					{stats.map((stat) => (
						<StatItem key={stat.label} label={stat.label} value={stat.value} shouldStart={inView} />
					))}
				</div>
			</div>
		</section>
	)
}

export default StatsSection


