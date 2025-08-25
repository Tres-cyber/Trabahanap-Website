import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './reusable/Navbar.jsx'
import Footer from './reusable/Footer.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Jobs from './components/Jobs.jsx'
import Contacts from './components/Contacts.jsx'

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname])

  return null
}

const RoutedContent = () => {
  const location = useLocation()
  return (
    <div className='min-h-screen flex flex-col bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100'>
      <Navbar />
      <main className='flex-1 max-w-7xl mx-auto w-full p-4 pt-24'>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/jobs' element={<Jobs />} />
          <Route path='/contacts' element={<Contacts />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <RoutedContent />
    </BrowserRouter>
  )
}

export default App