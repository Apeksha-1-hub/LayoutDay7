import React from 'react'


const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center bg-gradient-to-b from-white to-blue-500 px-6 py-10 relative overflow-hidden"
    >
      {/* Decorative Blobs */}
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-blue-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse"></div>

      {/* Text Section */}
      <div className="md:w-1/2 text-center md:text-left z-10 ">
      <div className="animate-bounce">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4">
          Hi, I'm{' '}
          <span className="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-blue-600">
            <span className="relative text-white dark:text-gray-950">Apekshya</span>
          </span>
        </h1>
        </div>

        <h2 className="text-2xl md:text-3xl text-gray-700 mb-6">
          Frontend Developer | BIT Student | Creative Web Enthusiast
        </h2>

        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          Passionate about building accessible, responsive, and beautiful user interfaces using modern web technologies.
          Currently exploring React, Tailwind CSS, and building real-world web apps.
        </p>

        <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-6">
          <a
            href="/projects"
            className="bg-black hover:bg-pink-700 text-white font-medium px-6 py-3 rounded-full transition duration-300 shadow-lg"
          >
            View My Work
          </a>
        </div>

        
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 mb-10 md:mb-0 flex justify-center  ">
        <img
          src="img.jpeg" 
          alt="Apekshya profile"
          className="w-75 h-85 object-cover rounded-full shadow-xl border-4 border-black-300 transition-transform duration-500 hover:scale-105"
        />
      </div>
    </section>
  )
}

export default Home
