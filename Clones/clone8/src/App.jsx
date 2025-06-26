import React from 'react'

const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0a15]">
      <div className="flex w-[900px] rounded-xl overflow-hidden shadow-lg">
        {/* Left Section */}
        <div className="bg-[#23213a] flex flex-col justify-between p-10 w-1/2">
          <div>
            <h1 className="text-3xl font-bold text-white mb-4">
              Get <span className="text-purple-400">insights</span> that help<br />your business grow.
            </h1>
            <p className="text-[#b3b3c6] mb-8">
              Discover the benefits of data analytics and make<br />
              better decisions regarding revenue, customer<br />
              experience, and overall efficiency.
            </p>
          </div>
          <div className="flex gap-10">
            <div>
              <div className="text-white text-xl font-bold">10k+</div>
              <div className="text-[#b3b3c6] text-xs tracking-widest mt-1">COMPANIES</div>
            </div>
            <div>
              <div className="text-white text-xl font-bold">314</div>
              <div className="text-[#b3b3c6] text-xs tracking-widest mt-1">TEMPLATES</div>
            </div>
            <div>
              <div className="text-white text-xl font-bold">12M+</div>
              <div className="text-[#b3b3c6] text-xs tracking-widest mt-1">QUERIES</div>
            </div>
          </div>
        </div>
        {/* Right Section */}
        <div className="w-1/2 bg-purple-700 bg-opacity-40 relative">
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80"
            alt="People working"
            className="w-full h-full object-cover mix-blend-multiply"
          />
          <div className="absolute inset-0 bg-purple-700 opacity-50"></div>
        </div>
      </div>
    </div>
  )
}

export default App