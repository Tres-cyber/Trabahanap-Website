import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App.jsx'

// Initialize theme before app renders
const storedTheme = typeof localStorage !== 'undefined' ? localStorage.getItem('theme') : null
const prefersDark = typeof window !== 'undefined' && window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)').matches : false

if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
  document.documentElement.classList.add('dark')
  document.body && document.body.classList.add('dark')
  document.documentElement.setAttribute('data-theme', 'dark')
  document.documentElement.style.colorScheme = 'dark'
} else {
  document.documentElement.classList.remove('dark')
  document.body && document.body.classList.remove('dark')
  document.documentElement.setAttribute('data-theme', 'light')
  document.documentElement.style.colorScheme = 'light'
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
