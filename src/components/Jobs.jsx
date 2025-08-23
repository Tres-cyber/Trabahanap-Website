import React from 'react'

const Jobs = () => {
  const jobs = [
    { id: 1, title: 'Frontend Developer', location: 'Remote' },
    { id: 2, title: 'Backend Developer', location: 'Hybrid' },
    { id: 3, title: 'UI/UX Designer', location: 'On-site' },
  ]

  return (
    <section>
      <h1 className='text-3xl font-bold mb-4'>Jobs</h1>
      <ul className='space-y-2'>
        {jobs.map(job => (
          <li key={job.id} className='p-4 border rounded-md'>
            <p className='font-semibold'>{job.title}</p>
            <p className='text-sm text-gray-600'>{job.location}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Jobs


