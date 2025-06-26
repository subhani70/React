import React from 'react'
import hulk from './img/hulk.webp'
const App = () => {
  return (
  <div className="min-h-screen flex items-center justify-center bg-[#e0e7ff]">
    <div className="bg-white rounded-2xl shadow-xl w-full max-w-sm">
      <div className="bg-[#3b28cc] rounded-t-2xl flex items-center justify-center h-40 relative">
        <img className='rounded-t-2xl' src={hulk} alt="" />
      </div>
      <div className="px-8 py-8 flex flex-col items-center">
        <h2 className="mt-10 text-2xl font-bold text-[#22223b] mb-2 text-center">Order Summary</h2>
        <p className="text-[#6c6f7d] text-center mb-6 text-sm">
          You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!
        </p>
        <div className="flex items-center bg-[#f5f7ff] rounded-xl px-4 py-3 mb-6 w-full">
          <div className="bg-[#e0e7ff] rounded-full p-3 mr-4">
            <svg className="w-6 h-6 text-[#3b28cc]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M9 19V6.5a3.5 3.5 0 117 0V19" />
              <circle cx="12" cy="19" r="2" />
            </svg>
          </div>
          <div className="flex-1">
            <div className="font-bold text-[#22223b] text-sm">Annual Plan</div>
            <div className="text-[#6c6f7d] text-xs">$59.99/year</div>
          </div>
          <button className="text-[#3b28cc] text-xs font-bold underline ml-4 hover:text-[#22223b] transition">Change</button>
        </div>
        <button className="w-full bg-[#3b28cc] text-white font-bold py-3 rounded-xl shadow-md hover:bg-[#22223b] transition mb-4">
          Proceed to Payment
        </button>
        <button className="text-[#6c6f7d] font-bold text-sm hover:underline">Cancel Order</button>
      </div>
    </div>
  </div>
  )
}

export default App