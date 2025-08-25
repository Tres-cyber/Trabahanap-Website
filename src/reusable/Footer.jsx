import React from 'react'
import { 
  Handshake, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Youtube, 
  MapPin, 
  Mail, 
  Phone, 
  Clock 
} from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Left Column - Branding */}
          <div className="space-y-4">
            {/* Logo and Brand */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <Handshake className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-white">TrabaHanap</h3>
                <p className="text-gray-400 text-sm">Connecting Job Seekers and Employers</p>
              </div>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex space-x-3 pt-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-gray-900 hover:text-white" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-gray-900 hover:text-white" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-gray-900 hover:text-white" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5 text-gray-900 hover:text-white" />
              </a>
            </div>
          </div>

          {/* Second Column - Get In Touch */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-white">Get In Touch</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                <p className="text-gray-400 text-sm">
                  San Gabriel, Bagay Road, Tuguegarao City
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <a 
                  href="mailto:support@trabahanap.com" 
                  className="text-gray-400 text-sm hover:text-yellow-400 transition-colors duration-300"
                >
                  support@trabahanap.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <a 
                  href="tel:+639123456789" 
                  className="text-gray-400 text-sm hover:text-yellow-400 transition-colors duration-300"
                >
                  +63 912 345 6789
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <p className="text-gray-400 text-sm">
                  Mon–Fri, 8:00 AM – 5:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Third Column - Quicklinks */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-white">Quicklinks</h3>
            <div className="space-y-2">
              <a 
                href="#" 
                className="block text-gray-400 text-sm hover:text-yellow-400 transition-colors duration-300"
              >
                Home
              </a>
              <a 
                href="/about" 
                className="block text-gray-400 text-sm hover:text-yellow-400 transition-colors duration-300"
              >
                About
              </a>
              <a 
                href="/jobs" 
                className="block text-gray-400 text-sm hover:text-yellow-400 transition-colors duration-300"
              >
                Find Jobs
              </a>
              <a 
                href="/contacts" 
                className="block text-gray-400 text-sm hover:text-yellow-400 transition-colors duration-300"
              >
                Contacts
              </a>
            </div>
          </div>

          {/* Fourth Column - Support */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-white">Support</h3>
            <div className="space-y-2">
              <a 
                href="#" 
                className="block text-gray-400 text-sm hover:text-yellow-400 transition-colors duration-300"
              >
                Help Center
              </a>
              <a 
                href="#" 
                className="block text-gray-400 text-sm hover:text-yellow-400 transition-colors duration-300"
              >
                FAQs
              </a>
              <a 
                href="#" 
                className="block text-gray-400 text-sm hover:text-yellow-400 transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="block text-gray-400 text-sm hover:text-yellow-400 transition-colors duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              Copyright © 2025 TrabaHanap Project
            </div>
            
            {/* Legal Links */}
            <div className="flex space-x-6 text-sm">
              <a 
                href="#" 
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <span className="text-gray-600">|</span>
              <a 
                href="#" 
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                Terms & Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer


