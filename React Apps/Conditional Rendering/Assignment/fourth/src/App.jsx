import React, { useState } from 'react';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleAuth = () => {
    setIsLoggedIn((prev) => !prev);
  };

  return (
    <>
      <h1 className="text-5xl p-5">Conditional Rendering Example</h1>
      {isLoggedIn ? (
        <div className="text-3xl text-green-600 p-5 mb-5">
          Hello, User! You are logged in.
        </div>
      ) : (
        <div className="text-3xl text-red-600 p-5 mb-5">
          Please log in to continue.
        </div>
      )}
      <button
        className={`mx-5 px-4 py-2 text-white text-xl rounded-2xl ${isLoggedIn ? 'bg-red-600' : 'bg-green-600'}`}
        onClick={handleAuth}
      >
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
    </>
  );
};

export default App;