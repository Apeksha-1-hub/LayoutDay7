import React from 'react'
import { Link } from 'react-router-dom'


const About = () => {
  return (
   <section id="about" className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Profile image */}
        <div className="flex justify-center">
          <img
            src="img.jpeg" 
            alt="Apekshya profile"
            className="w-72 h-72 rounded-xl object-cover shadow-lg border-4 border-blue-200 transition duration-500 hover:scale-105"
          />
        </div>

        {/* Right: About text */}
        <div>
          <h2 className="text-4xl font-bold text-blue-600 mb-4">About Me</h2>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            Hey! I'm <span className="text-pink-600 font-semibold">Apekshya</span>, a passionate and creative 2nd-year BIT student at Itahari International College. My journey into tech started with curiosity — and quickly turned into a love for designing and developing beautiful web interfaces.
          </p>

          <p className="text-md text-gray-600 mb-4">
            As a frontend developer, I love turning complex ideas into intuitive user experiences. I primarily work with <span className="font-medium text-gray-800">HTML, CSS, JavaScript, and React</span>. I also enjoy using <span className="text-blue-500">Tailwind CSS</span> to make my designs clean and responsive.
          </p>

          <p className="text-md text-gray-600 mb-4">
            I’m currently improving my React skills and starting to explore backend technologies to become a full-stack developer in the near future. I enjoy working on real-world projects, solving UI challenges, and learning something new every day.
          </p>

          <p className="text-md text-gray-600 mb-6">
            Besides tech, I enjoy creating content, exploring design trends, and challenging myself with side projects. I believe in learning by doing, and I’m excited to keep growing in this field.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link
              to="/resume" // Replace with actual path to your CV
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full shadow-md transition duration-300"
            >
              Download CV
            </Link>
            <Link
              to="/contact"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-2 rounded-full shadow-md transition duration-300"
            >
              Let’s Connect
            </Link>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="max-w-6xl mx-auto mt-16 text-center">
        <h3 className="text-3xl font-bold text-blue-600 mb-6">My Skills</h3>
        <div className="flex flex-wrap justify-center gap-6 text-white">
          <span className="bg-blue-500 px-4 py-2 rounded-full shadow-md text-sm font-medium">HTML</span>
          <span className="bg-blue-500 px-4 py-2 rounded-full shadow-md text-sm font-medium">CSS</span>
          <span className="bg-blue-500 px-4 py-2 rounded-full shadow-md text-sm font-medium">JavaScript</span>
          <span className="bg-blue-500 px-4 py-2 rounded-full shadow-md text-sm font-medium">React</span>
          <span className="bg-blue-500 px-4 py-2 rounded-full shadow-md text-sm font-medium">Tailwind CSS</span>
          <span className="bg-blue-500 px-4 py-2 rounded-full shadow-md text-sm font-medium">Git & GitHub</span>
        </div>
      </div>
    </section>
  )
}

export default About
