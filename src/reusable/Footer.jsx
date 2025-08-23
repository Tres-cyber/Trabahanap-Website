import React from 'react'

const Footer = () => {
  return (
    <footer className='w-full border-t mt-6'>
      <div className='max-w-5xl mx-auto p-4 text-sm text-gray-600'>
        © {new Date().getFullYear()} Brand. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer


