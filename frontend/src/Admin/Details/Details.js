import React from 'react';

const Details = () => {
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-white bg-opacity-90">
      <div className="flex justify-between items-center p-4">
        <h2 className="text-xl font-semibold">Details</h2>
        <button className="text-gray-500 hover:text-gray-800 focus:outline-none">
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div className="px-4">
        <div className="flex mb-4">
          <div className="flex-grow mr-4">
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Title <span className="text-red-500">(Required)</span>
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md px-3 py-2"
              placeholder="Enter title..."
            />
            <span className="text-sm text-gray-500">0/100</span>
          </div>
          <div>
            <button className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-md">
              <svg
                className="w-6 h-6 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
              Add Audio
            </button>
          </div>
        </div>
        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            className="w-full border border-gray-300 rounded-md px-3 py-2"
            rows="4"
            placeholder="Enter description..."
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium text-gray-700">
            YouTube Link
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md px-3 py-2"
            placeholder="Insert your YouTube link here..."
          />
        </div>
        <div className="flex mb-4">
          <div className="flex-grow mr-4">
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Video Link
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md px-3 py-2"
              placeholder="Insert video link..."
            />
            <span className="block mt-2 text-sm text-gray-500">Filename</span>
            <span className="block text-sm text-gray-500">The Danger of Fear</span>
          </div>
          <div>
            <button className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-md">
              <svg
                className="w-6 h-6 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
              Upload PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
