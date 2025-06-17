import React, { useState } from 'react';

const App = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscription = () => {
    setIsSubscribed((prev) => !prev);
  };

  return (
    <>
      <h1 className="text-5xl p-5">Conditional Rendering Example</h1>
      {isSubscribed ? (
        <div className="text-3xl text-blue-600 p-5 mb-5">
          Thank you for subscribing!
        </div>
      ) : (
        <div className="text-3xl text-gray-600 p-5 mb-5">
          Subscribe to our newsletter for updates.
        </div>
      )}
      <button
        className={`mx-5 px-4 py-2 text-white text-xl rounded-2xl ${isSubscribed ? 'bg-gray-600' : 'bg-blue-600'}`}
        onClick={handleSubscription}
      >
        {isSubscribed ? 'Unsubscribe' : 'Subscribe'}
      </button>
    </>
  );
};

export default App;