import React, { useEffect, useRef, useState } from 'react'

const teamMembers = [
  {
    id: 't1',
    name: 'Alex Johnson',
    role: 'Frontend Engineer',
    image:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 't2',
    name: 'Priya Sharma',
    role: 'Backend Engineer',
    image:
      'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 't3',
    name: 'Miguel Santos',
    role: 'Full-Stack Developer',
    image:
      'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 't4',
    name: 'Sara Lee',
    role: 'DevOps Engineer',
    image:
      'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 't5',
    name: 'David Kim',
    role: 'Mobile Developer',
    image:
      'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 't6',
    name: 'Emily Carter',
    role: 'QA Automation Engineer',
    image:
      'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 't7',
    name: 'Omar Hassan',
    role: 'Data Engineer',
    image:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 't8',
    name: 'Hana Suzuki',
    role: 'Cloud Architect',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1200&auto=format&fit=crop',
  },
]

const TeamMemberCard = ({ name, role, image, index = 0 }) => {
  const cardRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = cardRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={cardRef}
      className={
        'bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-700 transition-all duration-700 ease-out will-change-transform ' +
        (isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6') +
        ' hover:shadow-lg'
      }
      style={{ transitionDelay: `${index * 90}ms` }}
    >
      <img src={image} alt={name} className='w-full h-64 object-cover' />
      <div className='px-4'>
        <h3 className='text-lg font-semibold text-center mt-4 text-gray-900 dark:text-gray-100'>{name}</h3>
        {role && <p className='text-sm text-gray-500 dark:text-gray-400 text-center mb-4'>{role}</p>}
      </div>
    </div>
  )
}

const MeetOurTeam = () => {
  return (
    <section className='w-full bg-white dark:bg-gray-900 px-6 py-16'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col md:flex-row md:items-center md:justify-between'>
          <h2 className='text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-center md:text-left text-gray-900 dark:text-gray-100 transition-all duration-700 ease-out opacity-100'>
            Meet our <span className='bg-yellow-300 px-1 rounded'>team</span>
          </h2>
          <div className='md:self-end'>
            <button className='bg-black text-white px-5 py-2 rounded-full font-medium hover:bg-gray-900 active:bg-black/90 focus:outline-none focus:ring-2 focus:ring-black/30 dark:bg-white dark:text-black dark:hover:bg-gray-200 w-full md:w-auto'>
              View More
            </button>
          </div>
        </div>

        <div className='mt-6 md:mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
            {teamMembers.map((person, idx) => (
              <TeamMemberCard
                key={person.id}
                name={person.name}
                role={person.role}
                image={person.image}
                index={idx}
              />
            ))}
        </div>
      </div>
    </section>
  )
}

export default MeetOurTeam


