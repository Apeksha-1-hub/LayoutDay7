import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
    <nav className=" bg-blue-400 shadow-md fixed top-0 left-0 w-full z-50">
    <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
    <h1 className="text-2xl font-bold text-black">Apekshya</h1>
    <ul className="hidden md:flex space-x-6 text-black-700 font-medium pr-25 gap-15">
      <li><Link to="/home" className="hover:text-amber-50">Home</Link></li>
      <li><Link to="/about" className="hover:text-amber-50">AboutMe</Link></li>
      <li><Link to="/projects" className="hover:text-amber-50">Projects</Link></li>
      <li><Link to="/resume" className="hover:text-amber-50">Resume</Link></li>
      <li><Link to="/contact" className="hover:text-amber-50">Contact</Link></li>
    </ul>
  </div>
</nav>
    </div>
  )
}

export default Navbar
