import React from 'react';
import { FaArrowRight } from "react-icons/fa";

const cards = [
  "Jobs for you",
  "Hire with us",
  "Advertise with Us",
  "Placement Training..."
];

const MustExplore = () => {
  return (
    <div className="w-[70vw] mx-auto mt-10 mb-20">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Must Explore</h2>
      <div className="flex gap-6">
        {cards.map((title, index) => (
          <div
            key={index}
            className="text-xl h-[130px] relative w-[250px] px-5 py-8 bg-purple-400 text-white font-semibold rounded-lg shadow-md "
          >
            <span>{title}</span>
            <FaArrowRight className='absolute right-[20px] bottom-[20px]' />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MustExplore;
