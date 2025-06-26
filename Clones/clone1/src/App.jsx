import React from 'react';
import hulk from './img/hulk.webp'

const App = () => {
  return (
    <div className="min-h-screen bg-yellow-400 flex items-center justify-center px-4">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-sm overflow-hidden relative">
        <img
          src={hulk}
          alt="Hulk"
          className="w-full h-44 object-cover"
        />

        {/* Content */}
        <div className="p-5 space-y-3">
          {/* Tag */}
          <span className="inline-block bg-yellow-400 text-black text-xs font-semibold px-2 py-1 rounded">
            Learning
          </span>

          {/* Date */}
          <p className="text-xs text-gray-500">Published 21 Dec 2023</p>

          {/* Title */}
          <h2 className="text-lg font-bold text-black">
            HTML & CSS foundations
          </h2>

          {/* Description */}
          <p className="text-sm text-gray-600">
            These languages are the backbone of every website, defining structure,
            content, and presentation.
          </p>

          {/* Author */}
          <div className="flex items-center mt-4">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Greg Hooper"
              className="w-6 h-6 rounded-full mr-2"
            />
            <p className="text-sm font-semibold text-gray-800">Greg Hooper</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
