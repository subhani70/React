import React from 'react'

const App = () => {
  return (
<div className="min-h-screen flex items-center justify-center bg-[#f5f8fc]">
  <div className="flex w-[700px] bg-white rounded-2xl shadow-xl overflow-hidden">
    <div className="w-1/3">
      <img
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
        alt="Furniture"
        className="h-full w-full object-cover"
      />
    </div>
    <div className="w-2/3 p-8 flex flex-col justify-between">
      <div>
        <h2 className="text-2xl font-semibold text-gray-700 mb-3 leading-snug">
          Shift the overall look and feel by adding these wonderful touches to furniture in your home
        </h2>
        <p className="text-gray-500 text-sm mb-6">
          Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uniniviting. I've got some simple tips to help you make any room feel complete.
        </p>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="Michelle Appleton"
            className="w-10 h-10 rounded-full mr-3"
          />
          <div>
            <div className="text-gray-700 font-semibold text-sm">Michelle Appleton</div>
            <div className="text-gray-400 text-xs">28 Jun 2020</div>
          </div>
        </div>
        <button className="bg-[#f5f8fc] hover:bg-gray-200 p-3 rounded-full transition">
          <svg width="18" height="18" fill="none" stroke="#6e7a8a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-share">
            <circle cx="9" cy="9" r="8" />
            <path d="M6 9l6-3v6z" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</div>
  )
}

export default App