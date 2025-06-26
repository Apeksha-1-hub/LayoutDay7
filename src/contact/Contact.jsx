import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-b from-white via-blue-400 y-800 to-gray-700 px-6 py-16 relative overflow-hidden"
    >
      {/* Decorative Background Blob */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse"></div>

      {/* Contact Info */}
      <div className="md:w-1/2 z-10 text-center md:text-left mb-12 md:mb-0">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 animate-bounce">
          Get in Touch
        </h2>
        <p className="text-lg text-black mb-8 max-w-md leading-relaxed">
          I’d love to connect! Whether it’s a question, a project, or just to say hello,
          my inbox is always open. Let’s build something amazing together.
        </p>

        <div className="text-gray-300 space-y-4">
          <p className="flex items-center gap-3">
            <FaEnvelope className="text-black" /> apekshya@email.com
          </p>
          <p className="flex items-center gap-3">
            <FaPhoneAlt className="text-black" /> +977-9876543210
          </p>
          <p className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-black" /> Kathmandu, Nepal
          </p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="md:w-1/2 z-10 bg-white p-8 rounded-xl shadow-2xl w-full max-w-md">
        <form className="space-y-6 text-black">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-pink-700 text-white font-semibold px-6 py-3 rounded-full w-full transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
