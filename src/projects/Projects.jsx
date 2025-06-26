import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const projects = [
    {
      title: "Lawyer Hiring Website (SYP)",
      description:
        "A responsive lawyer hiring platform that allows users to browse, book, and communicate with lawyers based on legal categories. Includes client authentication, lawyer profiles, booking forms, and an admin dashboard. Developed as part of my final Software Year Project.",
      tech: ["HTML", "CSS", "JavaScript", "MySQL"],
      github: "https://github.com/yourusername/lawyer-hiring-site", // Replace if available
      demo: "", // Optional
    },
    {
      title: "Donut Landing Page",
      description:
        "A colorful and animated donut-themed landing page using React and Tailwind CSS. Focused on responsive design, CTA buttons, and user-friendly layout.",
      tech: ["React", "Tailwind CSS"],
      github: "https://github.com/yourusername/donut-page", // Replace if available
      demo: "",
    },
    {
      title: "College Event Management System",
      description:
        "Web application to manage and register for college events. Admins can create events, and students can view and register easily. Designed to replace manual Google Form-based event tracking.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "",
      demo: "",
    },
    {
      title: "Furniture Store CLI App",
      description:
        "A Python-based inventory management system for furniture sales. Includes purchase, sell, invoice generation, and display functionality.",
      tech: ["Python"],
      github: "",
      demo: "",
    },
  ];

  return (
    <section id="projects" className="bg-gradient-to-b from-white to-blue-50 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-600 mb-12">My Projects</h2>

        <div className="space-y-8 text-left">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md border-l-4 border-pink-400 transition hover:shadow-xl"
              data-aos="fade-up"
            >
              <h3 className="text-2xl font-semibold text-blue-700 mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-pink-100 text-pink-600 px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 text-sm">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    View Code
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="text-pink-600 hover:underline"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
