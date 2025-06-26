import React from 'react'

const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cyan-400 bg-gradient-to-br from-cyan-400 to-cyan-500">
      <div className="bg-white rounded-xl shadow-lg w-96">
        <div className="relative">
          <div className="h-28 rounded-t-xl bg-cyan-300 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.2)_1%,rgba(0,0,0,0)_70%)]"></div>
          <div className="absolute top-16 left-[37%] ">
            <img
              className="w-24 h-24 rounded-full border-4 border-white object-cover"
              src="https://randomuser.me/api/portraits/men/75.jpg"
              alt="Profile"
            />
          </div>
        </div>
        <div className="pt-16 pb-6 text-center">
          <h1 className="text-xl font-bold text-gray-800">
            Victor Crest <span className="font-normal text-gray-400">26</span>
          </h1>
          <p className="text-gray-400 text-sm mt-1">London</p>
        </div>
        <div className="border-t px-8 py-6 flex justify-between text-center">
          <div>
            <div className="font-bold text-gray-800 text-lg">80K</div>
            <div className="uppercase text-xs tracking-widest text-gray-400">Followers</div>
          </div>
          <div>
            <div className="font-bold text-gray-800 text-lg">803K</div>
            <div className="uppercase text-xs tracking-widest text-gray-400">Likes</div>
          </div>
          <div>
            <div className="font-bold text-gray-800 text-lg">1.4K</div>
            <div className="uppercase text-xs tracking-widest text-gray-400">Photos</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App