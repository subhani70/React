import React, { useState } from 'react';

const App = () => {
  const [message, setMessage] = useState('');

  const handleShow = () => {
    setMessage('Welcome to the site!');
  };

  const handleHide = () => {
    setMessage('');
  };

  return (
    <>
      <h1 className="text-5xl p-5">Toggle Message Task</h1>
      {message && (
        <h2 className="text-3xl text-blue-600 p-5 mb-5">{message}</h2>
      )}
      <button
        className={`mx-5 px-4 py-2 text-white text-xl rounded-2xl ${message ? 'bg-gray-600' : 'bg-blue-600'}`}
        onClick={message ? handleHide : handleShow}
      >
        {message ? 'Hide Message' : 'Show Message'}
      </button>
    </>
  );
};

export default App;