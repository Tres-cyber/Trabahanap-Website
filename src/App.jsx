import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './reusable/Navbar.jsx'
import Footer from './reusable/Footer.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Jobs from './components/Jobs.jsx'
import Contacts from './components/Contacts.jsx'

const App = () => {
  return (
    <BrowserRouter>
      <div className='min-h-screen flex flex-col bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100'>
        <Navbar />
        <main className='flex-1 max-w-7xl mx-auto w-full p-4'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/jobs' element={<Jobs />} />
            <Route path='/contacts' element={<Contacts />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App