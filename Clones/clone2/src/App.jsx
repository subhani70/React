import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 ">
      <div className="bg-white w-full max-w-xl p-8 rounded-t-xl rounded-bl-xl rounded-br-[70px] relative shadow-md">
        <div className="flex gap-4 mb-6">
          <div className="flex flex-col w-1/3">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Day</label>
            <input
              type="text"
              placeholder="DD"
              className="w-full border border-gray-300 rounded-md py-2 px-2 text-center font-bold text-lg focus:outline-none"
            />
          </div>
          <div className="flex flex-col w-1/3">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Month</label>
            <input
              type="text"
              placeholder="MM"
              className="w-full border border-gray-300 rounded-md py-2 px-2 text-center font-bold text-lg focus:outline-none"
            />
          </div>
          <div className="flex flex-col w-1/3">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Year</label>
            <input
              type="text"
              placeholder="YYYY"
              className="w-full border border-gray-300 rounded-md py-2 px-2 text-center font-bold text-lg focus:outline-none"
            />
          </div>
        </div>

        <div className="relative mb-6">
          <hr className="border-t-2 border-gray-200 mt-8" />
          <button className="absolute right-0 -top-6 bg-purple-600 w-15 h-15 rounded-full flex items-center justify-center text-white shadow-lg">
            <span className="text-2xl transform rotate-90">↓</span>
          </button>
        </div>

        <div className="space-y-4">
          <p className="text-7xl italic font-extrabold">
            <span className="text-purple-600 mr-3">--</span>years
          </p>
          <p className="text-7xl italic font-extrabold">
            <span className="text-purple-600 mr-3">--</span>months
          </p>
          <p className="text-7xl italic font-extrabold">
            <span className="text-purple-600 mr-3">--</span>days
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
