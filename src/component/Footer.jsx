import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-blue-500 to-white text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        
        {/* Column 1 - About */}
        <div>
          <h2 className="text-2xl text-black font-bold mb-2">Apekshya</h2>
          <p className="text-sm text-black/80 leading-relaxed">
            BIT student at Itahari International College. I specialize in crafting responsive and user-friendly websites using modern frontend tools like React and Tailwind CSS.
          </p>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h3 className="text-xl text-black font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <Link to="/home" className="hover:text-pink-300 text-black transition">Home</Link>
            </li>
            <li>
              <Link to="/projects" className="hover:text-pink-300 text-black transition">Projects</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-pink-300 text-black transition">AboutMe</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-pink-300 text-black transition">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Column 3 - Contact Info */}
        <div>
          <h3 className="text-xl text-black font-semibold mb-2">Get in Touch</h3>
          <p className="text-sm text-black/80 mb-1">
            📍 Itahari, Nepal
          </p>
          <p className="text-sm text-black/80 mb-1">
            📧 apekshya@example.com
          </p>
          <p className="text-sm text-black/80">
            🌐 www.apekshya-portfolio.com
          </p>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="mt-10 text-center text-sm text-black/70">
        <p>
          Made with 💙 using React & Tailwind CSS • © {new Date().getFullYear()} Apekshya. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
