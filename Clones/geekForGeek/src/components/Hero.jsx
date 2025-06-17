import React from 'react';
import { FaSearch } from 'react-icons/fa';

const Hero = () => {
  const suggestions = [
    "Full Stack Live Classes",
    "DSA: Basic To Advanced Course",
    "Master DS & ML"
  ];

  return (
    <div className="w-full min-h-[60vh] bg-gradient-to-b from-green-100 to-white flex flex-col justify-center items-center px-4 text-center">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">
        Hello, What Do You Want To Learn?
      </h1>

      {/* Search bar */}
      <div className="flex w-full max-w-3xl items-center bg-[#f7fffb] border border-gray-400 rounded-xl px-4 py-3 mb-6">
        <input
          type="text"
          placeholder="D"
          className="flex-1 bg-transparent outline-none text-lg placeholder-gray-400"
        />
        <FaSearch className="text-green-700 text-xl cursor-pointer" />
      </div>

      {/* Suggested tags */}
      <div className="flex flex-wrap gap-4">
        {suggestions.map((item, index) => (
          <span
            key={index}
            className="px-4 py-2 border border-gray-300 rounded-xl text-sm font-medium hover:bg-gray-100 cursor-pointer"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Hero;
