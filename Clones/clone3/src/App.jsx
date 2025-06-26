import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center p-4">
      <form className="bg-white p-8 rounded-xl shadow-md w-full max-w-2xl space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">Contact Us</h2>

        <div className="flex space-x-4">
          <div className="w-1/2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          <div className="w-1/2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Query Type <span className="text-red-500">*</span>
          </label>
          <div className="flex space-x-4">
            <label className="flex items-center border border-gray-300 rounded-md px-4 py-2 cursor-pointer w-full">
              <input type="radio" name="query" className="mr-2" />
              General Enquiry
            </label>
            <label className="flex items-center border border-gray-300 rounded-md px-4 py-2 cursor-pointer w-full">
              <input type="radio" name="query" className="mr-2" />
              Support Request
            </label>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            rows="4"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          ></textarea>
        </div>

        <div className="flex items-center space-x-2">
          <input type="checkbox" id="consent" className="h-4 w-4" />
          <label htmlFor="consent" className="text-sm text-gray-700">
            I consent to being contacted by the team <span className="text-red-500">*</span>
          </label>
        </div>

        <div>
          <button
            type="submit"
            className="w-full bg-green-700 hover:bg-green-800 text-white font-medium py-2 px-4 rounded-md transition duration-200"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default App;
