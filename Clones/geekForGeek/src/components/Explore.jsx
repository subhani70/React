import React from "react";
import { FaArrowRight } from "react-icons/fa";

const exploreCards = [
  {
    title: "Data Structure and Algorithms",
    color: "from-teal-400 to-green-400",
  },
  {
    title: "Practice DSA",
    color: "from-indigo-700 to-indigo-500",
  },
  {
    title: "Web Development",
    color: "from-rose-700 to-rose-400",
  },
  {
    title: "AI ML & Data Science",
    color: "from-purple-800 to-purple-400",
  },
  {
    title: "Python",
    color: "from-cyan-700 to-cyan-400",
  },
  {
    title: "Machine Learning",
    color: "from-blue-700 to-blue-400",
  },
  {
    title: "System Design",
    color: "from-orange-700 to-orange-300",
  },
  {
    title: "DevOps",
    color: "from-pink-600 to-pink-300",
  },
];

const Explore = () => {
  return (
    <div className="w-[70vw] mx-auto mt-10 mb-20">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">Explore</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {exploreCards.map((card, index) => (
          <div
            key={index}
            className={`rounded-xl p-8 h-[260px] flex flex-col justify-center items-center text-white font-semibold bg-gradient-to-br ${card.color}`}
          >
            <h3 className="text-lg sm:text-xl md:text-2xl mb-6 text-center">
              {card.title}
            </h3>
            <button className="flex items-center gap-2 px-6 py-2 border rounded-full text-white border-white hover:bg-white hover:text-black transition">
              View more <FaArrowRight />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
