import React from "react";
import { FaArrowRight } from "react-icons/fa";

const courseSections = [
  {
    title: "Web Development",
    color: "bg-blue-500",
    courses: [
      "JavaScript", "HTML", "CSS", "ReactJS",
      "Node.js", "Django", "Frontend Development", "Backend Development",
    ],
  },
  {
    title: "AI ML & Data Science",
    color: "bg-purple-400",
    courses: [
      "Machine Learning", "Data Science", "Data Analysis", "Data Visualization",
      "Deep Learning", "Natural Language Processing", "Computer Vision", "Artificial Intelligence",
    ],
  },
   {
    title: "Programming Languages",
    color: "bg-amber-500",
    courses: [
      "Python", "Java", "C++", "C",
      "R", "PHP", "Swift", "Golang",
    ],
  },
  {
    title: "Interview Preparation",
    color: "bg-rose-400",
    courses: [
      "Company Preparation", "SDE Sheet", "Puzzles", "Aptitude",
      "GfG 160", "Problem Of The Day", "Topic Wise Practice Sheet", "Competitive Programming",
    ],
  },
   {
    title: "CS Subjects",
    color: "bg-cyan-400",
    courses: [
      "Operating System", "Computer Network", "DBMS", "Engineering Mathematics",
      "Software Engineering", "Digital Electronics", "Compiler Design", "Computer Organisation",
    ],
  },
  {
    title: "Databases",
    color: "bg-indigo-400",
    courses: [
      "SQL", "MySQL", "MongoDB", "PostgreSQL",
      "PL/SQL", "SQL Cheatsheet", "SQL Interview Questions", "MySQL Interview Questions",
    ],
  },
  {
    title: "DevOps",
    color: "bg-lime-400",
    courses: [
      "GIT", "Amazon Web Services", "Kubernetes", "Docker",
      "Microsoft Azure", "Google Cloud Platform", "DevOps Roadmap", "DevOps Interview Questions",
    ],
  },
  {
    title: "Tutorials",
    color: "bg-sky-400",
    courses: [
      "System Design", "Android", "Linux", "Design Pattern",
      "Software Testing", "Product Management", "Project Management", "Excel",
    ],
  },
  {
    title: "GfG School",
    color: "bg-blue-400",
    courses: [
      "Class 9 Study Material", "Class 10 Study Material", "Class 11 Study Material", "Class 12 Study Material",
      "Class 10 Computer", "Class 11 Computer", "Class 12 Computer", "Python - Class 11 & 12",
    ],
  },
];

const Courses = () => {
  return (
    <div className="w-[70vw] mx-auto mt-10 mb-20 space-y-12">
      {courseSections.map((section, idx) => (
        <div key={idx}>
          {/* Section header */}
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-800">{section.title}</h2>
            <button className="border px-4 py-1 rounded-full hover:bg-gray-200 transition">
              View All
            </button>
            
          </div>

          {/* Course cards */}
          <div className="grid grid-cols-4 gap-4">
            {section.courses.map((course, index) => (
              <div
                key={index}
                className={`h-[120px] relative text-white ${section.color} rounded-lg px-4 text-[19px] py-6 flex flex-col hover:opacity-90 transition`}
              >
                <span className="font-semibold">{course}</span>
                <FaArrowRight className='absolute right-[20px] bottom-[20px]'/>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Courses;
