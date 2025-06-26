import React from 'react';

const Resume = () => {
  return (
    <section id="resume" className="bg-gradient-to-br from-white to-blue-100 py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-blue-700 mb-16">Resume Overview</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Education */}
          <div className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-blue-400 hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">🎓 Education</h3>
            <p className="text-gray-700 mb-1 font-medium">Itahari International College</p>
            <p className="text-sm text-gray-500 mb-2">BIT – 2nd Year (London Metropolitan University)</p>
            <p className="text-gray-600 text-sm italic">Exploring web development and software engineering fundamentals.</p>
          </div>

          {/* Skills */}
          <div className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-pink-400 hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold text-pink-600 mb-4">🛠 Skills</h3>
            <div className="flex flex-wrap gap-3">
              {['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'MySQL', 'Git'].map((skill, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Experience / Projects */}
        <div className="mt-16 bg-white p-10 rounded-2xl shadow-md border-l-4 border-blue-500">
          <h3 className="text-2xl font-semibold text-blue-700 mb-6">💻 Projects & Experiences</h3>
          <ul className="list-disc pl-5 space-y-3 text-gray-700">
            <li><strong>Lawyer Hiring Website (SYP):</strong> Client booking, category filtering, admin dashboard. Built using HTML, CSS, JS & MySQL.</li>
            <li><strong>Donut Landing Page:</strong> Colorful, animated page using React & Tailwind. Focus on responsive design.</li>
            <li><strong>College Event Manager:</strong> Allows admins to post and students to register for college events.</li>
            <li><strong>Furniture Store CLI (Python):</strong> Command-line tool to manage inventory and invoices.</li>
          </ul>
        </div>

        {/* Download Resume */}
        <div className="text-center mt-16">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full shadow-lg hover:bg-blue-700 transition"
          >
            Download Full Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
