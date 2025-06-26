import React from 'react';
import hulk from './img/hulk.webp'

const App = () => {
  return (
    <div className="min-h-screen bg-sky-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-md w-[300px] text-center p-4">
        <img
          src={hulk}
          alt="QR Code"
          className="rounded-lg w-full mb-4"
        />
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Improve your front-end skills by building projects
        </h1>
        <p className="text-sm text-gray-500">
          Scan the QR code to visit Frontend <br /> Mentor and take your coding skills to <br />the next level
        </p>
      </div>
    </div>
  );
};

export default App;
