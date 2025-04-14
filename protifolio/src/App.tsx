import React from 'react';
import { Github, Linkedin, Mail, Phone, ExternalLink, Menu, X } from 'lucide-react';
import { useState } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const skills = {
    'Programming & Scripting': ['Java/J2EE', 'Python', 'Go', 'Bash Script', 'Power script', 'SQL'],
    'Cloud & DevOps': ['Docker', 'Kubernetes', 'EKS', 'AKS', 'Terraform', 'Ansible', 'Puppet'],
    'Operating Systems': ['RHEL', 'CentOS', 'Ubuntu', 'Windows', 'Mac'],
    'Web Technologies': ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'React'],
    'Frameworks': ['Spring', 'Spring Boot', 'JSP', 'Hibernate', 'Spring Batch', 'JMS', 'Apache Kafka', 'Django', 'NodeJS'],
    'Databases': ['PostgreSQL', 'MySQL', 'MongoDB', 'Cassandra', 'Redis'],
    'CI/CD & Tools': ['Jenkins', 'Docker', 'SonarQube', 'Ansible', 'Gitlab', 'Github Actions'],
    'Cloud Platforms': ['AWS', 'Azure', 'SAP Cloud Platform']
  };

  const experiences = [
    {
      company: 'Nanosoft Technologies',
      role: 'Senior DevOps and Cloud Engineer',
      period: 'Sep 2024 - Mar 2025',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80'
    },
    {
      company: 'Tata Consultancy Services – Prudential',
      role: 'DevOps Cloud Engineer',
      period: 'June 2022 - Aug 2024',
      image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80'
    },
    {
      company: 'Tata Consultancy Services – Citibank',
      role: 'Cloud Engineer/DevOps',
      period: 'December 2019 - June 2022',
      image: 'https://images.unsplash.com/photo-1617791160588-241658c0f566?auto=format&fit=crop&q=80'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-gray-900">Purandhar Reddy</span>
            </div>
            
            {/* Mobile menu button */}
            <div className="flex items-center sm:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-500 hover:text-gray-600"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Desktop menu */}
            <div className="hidden sm:flex sm:items-center sm:space-x-8">
              <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
              <a href="#skills" className="text-gray-600 hover:text-gray-900">Skills</a>
              <a href="#experience" className="text-gray-600 hover:text-gray-900">Experience</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <a href="#about" className="block px-3 py-2 text-gray-600 hover:text-gray-900">About</a>
              <a href="#skills" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Skills</a>
              <a href="#experience" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Experience</a>
              <a href="#contact" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto pt-20 pb-16 text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-4">
            Hi, I'm Purandhar Reddy Ganapathi
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-8">
            DevOps and Cloud Engineer
          </p>
          <div className="flex justify-center space-x-4">
            <a href="#contact" className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition">
              Contact Me
            </a>
            <a href="#experience" className="bg-white text-indigo-600 px-6 py-3 rounded-lg border border-indigo-600 hover:bg-indigo-50 transition">
              View Experience
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&q=80"
                alt="Profile"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div>
              <p className="text-lg text-gray-600 mb-6">
                Software Engineer skilled in designing, developing, and deploying scalable, robust systems while managing secure CI/CD pipelines. Adept at fostering collaboration between development and operations teams to enhance efficiency and streamline processes. Proven ability to drive innovation, efficiency, and excellence across diverse projects and domains.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="font-semibold mr-2">Education:</span>
                  <span>Bachelor of Engineering - Electrical and Electronics Engineering</span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold mr-2">Certifications:</span>
                  <span>AZ-400, AZ-104, DP-203</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-4 text-indigo-600">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <span key={skill} className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Professional Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {experiences.map((exp) => (
              <div key={exp.company} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={exp.image}
                  alt={exp.company}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{exp.company}</h3>
                  <p className="text-indigo-600 mb-2">{exp.role}</p>
                  <p className="text-gray-600 mb-4">{exp.period}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <a href="mailto:Purandharreddy67@gmail.com" className="flex items-center text-gray-600 hover:text-gray-900">
                  <Mail size={20} className="mr-2" /> Purandharreddy67@gmail.com
                </a>
                <a href="tel:+17345796006" className="flex items-center text-gray-600 hover:text-gray-900">
                  <Phone size={20} className="mr-2" /> (734) 579-6006
                </a>
                <a href="https://linkedin.com/in/yourusername" className="flex items-center text-gray-600 hover:text-gray-900">
                  <Linkedin size={20} className="mr-2" /> LinkedIn
                </a>
              </div>
            </div>
            <div>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center text-gray-600">
          <p>© {new Date().getFullYear()} Purandhar Reddy Ganapathi. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;