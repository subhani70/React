import React from "react";
import { FaStar, FaChartLine } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";

const courses = [
  {
    title: "Placement Taiyari With DSA",
    subtitle: "Placement with DSA",
    rating: 3.5,
    level: "Beginner to Advance",
    interested: "14k+",
    bgColor: "from-blue-400 to-indigo-900",
  },
  {
    title: "DSA to Development: A Complete Guide",
    subtitle: "DSA To Development",
    rating: 4.4,
    level: "Beginner to Advance",
    interested: "617k+",
    bgColor: "from-green-400 to-green-700",
  },
  {
    title: "JAVA Backend Development - Live",
    subtitle: "Backend Development",
    rating: 4.7,
    level: "Intermediate and Advance",
    interested: "322k+",
    bgColor: "from-indigo-400 to-blue-900",
  },
  {
    title: "Tech Interview 101 - From DSA to System Design for Working Professionals",
    subtitle: "TECH INTERVIEW",
    rating: 4.9,
    level: "Beginner to Advance",
    interested: "344k+",
    bgColor: "from-indigo-400 to-indigo-800",
  },
  {
    title: "Full Stack Development with React & Node JS - Live",
    subtitle: "FSRNL",
    rating: 4.7,
    level: "Beginner to Advance",
    interested: "379k+",
    bgColor: "from-gray-500 to-gray-700",
  },
  {
    title: "Java Programming Online Course [Complete Beginner to Advance]",
    subtitle: "JAVA Programming",
    rating: 4.6,
    level: "Beginner to Advance",
    interested: "365k+",
    bgColor: "from-indigo-500 to-indigo-900",
  },
];

const Cards = () => {
  return (
    <div className="w-[70vw] mx-auto px-8 py-12 ">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Courses</h2>
        <button className="px-4 py-1 border border-black rounded-full hover:bg-black hover:text-white transition">
          View All
        </button>
      </div>

      <div className="grid h-[700px]  md:grid-cols-3 gap-8">
        {courses.map((course, index) => (
          <div
            key={index}
            className="group  rounded-xl overflow-hidden shadow-md border bg-white flex flex-col h-full"
          >
            {/* Card top */}
            <div className={`p-6 bg-gradient-to-r ${course.bgColor} relative min-h-[130px]`}>
              <p className="text-white text-sm font-semibold">{course.subtitle}</p>
              <div className="absolute top-3 right-3 bg-[#1e1e2e] text-white text-sm rounded-full px-2 py-1 flex items-center gap-1">
                <FaStar className="text-yellow-400" />
                {course.rating}
              </div>
            </div>

            {/* Card bottom */}
            <div className="p-5 flex flex-col justify-between flex-grow">
              <h3 className="text-lg font-semibold mb-3 line-clamp-2">{course.title}</h3>

              <p className="flex items-center text-sm text-gray-600 mb-2">
                <BsFillPeopleFill className="mr-2" />
                {course.level}
              </p>

              <div className="flex justify-between items-center text-sm text-gray-700 mt-auto">
                <span className="flex items-center gap-1 text-green-700 font-medium">
                  <FaChartLine /> {course.interested} interested Geeks
                </span>
                <span className="text-green-700 font-semibold cursor-pointer hover:underline group-hover:bg-green-700 group-hover:text-white px-2 rounded-[10px] py-1 duration-400">
                  Explore now
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
