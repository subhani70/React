import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaXTwitter, FaYoutube } from 'react-icons/fa6';

const Footer = () => {
  const footerLinks = [
    {
      heading: 'Company',
      links: ['About Us', 'Legal', 'Privacy Policy', 'Careers', 'In Media', 'Contact Us', 'Corporate Solution', 'Campus Training Program']
    },
    {
      heading: 'Explore',
      links: ['Job-A-Thon', 'Offline Classroom Program', 'DSA in JAVA/C++', 'Master System Design', 'Master CP', 'Videos']
    },
    {
      heading: 'Tutorials',
      links: ['Python', 'Java', 'C++', 'PHP', 'GoLang', 'SQL', 'R Language', 'Android']
    },
    {
      heading: 'DSA',
      links: ['Data Structures', 'Algorithms', 'DSA for Beginners', 'Basic DSA Problems', 'DSA Roadmap', 'DSA Interview Questions', 'Competitive Programming']
    },
    {
      heading: 'Data Science & ML',
      links: ['Data Science With Python', 'Machine Learning', 'ML Maths', 'Data Visualisation', 'Pandas', 'NumPy', 'NLP', 'Deep Learning']
    },
    {
      heading: 'Web Technologies',
      links: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'ReactJS', 'NextJS', 'NodeJS', 'Bootstrap', 'Tailwind CSS']
    },
    {
      heading: 'Python Tutorial',
      links: ['Python Examples', 'Django Tutorial', 'Python Projects', 'Python Tkinter', 'Web Scraping', 'OpenCV Tutorial', 'Python Interview Question']
    },
    {
      heading: 'Computer Science',
      links: ['GATE CS Notes', 'Operating Systems', 'Computer Network', 'Database Management System', 'Software Engineering', 'Digital Logic Design', 'Engineering Maths']
    },
    {
      heading: 'DevOps',
      links: ['Git', 'AWS', 'Docker', 'Kubernetes', 'Azure', 'GCP', 'DevOps Roadmap']
    },
    {
      heading: 'System Design',
      links: ['High Level Design', 'Low Level Design', 'UML Diagrams', 'Interview Guide', 'Design Patterns', 'OOAD', 'System Design Bootcamp', 'Interview Questions']
    },
    {
      heading: 'School Subjects',
      links: ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'Social Science', 'English Grammar']
    },
    {
      heading: 'Databases',
      links: ['SQL', 'MYSQL', 'PostgreSQL', 'PL/SQL', 'MongoDB']
    },
    {
      heading: 'Preparation Corner',
      links: ['Company-Wise Recruitment Process', 'Aptitude Preparation', 'Puzzles', 'Company-Wise Preparation']
    },
    {
      heading: 'More Tutorials',
      links: ['Software Development', 'Software Testing', 'Product Management', 'Project Management', 'Linux', 'Excel', 'All Cheat Sheets']
    },
    {
      heading: 'Courses',
      links: ['IBM Certification Courses', 'DSA and Placements', 'Web Development', 'Data Science', 'Programming Languages', 'DevOps & Cloud']
    },
    {
      heading: 'Programming Languages',
      links: ['C Programming with Data Structures', 'C++ Programming Course', 'Java Programming Course', 'Python Full Course']
    },
    {
      heading: 'Clouds/Devops',
      links: ['DevOps Engineering', 'AWS Solutions Architect Certification', 'Salesforce Certified Administrator Course']
    },
    {
      heading: 'GATE 2026',
      links: ['GATE CS Rank Booster', 'GATE DA Rank Booster', 'GATE CS & IT Course - 2026', 'GATE DA Course 2026', 'GATE Rank Predictor']
    }
  ];

  return (
    <footer className="bg-white border-t mt-10 pt-10 px-4 md:px-20 text-sm text-gray-800">
      <div className="flex flex-col md:flex-row justify-between items-start gap-10">
        {/* Address & Social */}
        <div className="w-full md:w-1/3 space-y-4">
          <img src="https://media.geeksforgeeks.org/gfg-gg-logo.svg" alt="GFG Logo" className="h-10" />
          <p><strong>Corporate & Communications Address:</strong><br />
            A-143, 7th Floor, Sovereign Corporate Tower, Sector-136, Noida, Uttar Pradesh (201305)
          </p>
          <p><strong>Registered Address:</strong><br />
            K 061, Tower K, Gulshan Vivante Apartment, Sector 137, Noida, Uttar Pradesh (201305)
          </p>

          <div className="flex gap-4 text-lg text-gray-700">
            <FaFacebook />
            <FaInstagram />
            <FaLinkedin />
            <FaXTwitter />
            <FaYoutube />
          </div>

          <div className="flex gap-2 mt-2">
            <img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="Google Play" className="h-10" />
            <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" className="h-10" />
          </div>

          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Advertise with us</button>
        </div>

        {/* Links */}
        <div className="grid grid-cols-6 gap-6 w-full">
          {footerLinks.map((section, idx) => (
            <div key={idx}>
              <h3 className="font-semibold text-green-700 mb-2">{section.heading}</h3>
              <ul className="space-y-1">
                {section.links.map((link, i) => (
                  <li key={i} className="hover:underline cursor-pointer">{link}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center text-xs text-gray-600 py-4 border-t mt-10">
        @GeeksforGeeks, Sanchhaya Education Private Limited, All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
