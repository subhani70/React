import React, { useState } from 'react';

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const App = () => {
  const [selectedDay, setSelectedDay] = useState('');

  const handleSelectDay = (day) => {
    setSelectedDay(day);
  };

  const handleClear = () => {
    setSelectedDay('');
  };

  return (
    <>
      <h1 className="text-5xl p-5">Select a Day</h1>
      {selectedDay && (
        <h2 className="text-3xl text-blue-600 p-5 mb-5">You selected: {selectedDay}</h2>
      )}
      <div className="mb-5">
        {days.map((day) => (
          <button
            key={day}
            className={`mx-2 px-4 py-2 text-white text-xl rounded-2xl ${selectedDay === day ? 'bg-gray-600' : 'bg-blue-600'}`}
            onClick={() => handleSelectDay(day)}
            disabled={selectedDay === day}
          >
            {day}
          </button>
        ))}
      </div>
      {selectedDay && (
        <button
          className="px-4 py-2 bg-red-600 text-white text-xl rounded-2xl"
          onClick={handleClear}
        >
          Clear Selection
        </button>
      )}
    </>
  );
};

export default App;