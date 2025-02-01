import React from "react";

const CarAuctionHeader = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">
        2014 Porsche 911 GT3 • Reserve
      </h1>

      <div className="bg-gray-100 p-4 rounded-lg shadow-md flex flex-col sm:flex-row sm:justify-between items-start sm:items-center">
        <div className="mb-4 sm:mb-0">
          <p className="text-sm font-bold text-gray-600">Sold to</p>
          <div className="flex items-center ">
            <span className="font-bold text-gray-800">
              BlackdogPerformanceCars
            </span>
          </div>
          <p className="text-4xl font-bold text-gray-900 mt-2">$116,498</p>
        </div>

        <div className="flex flex-col space-y-2 text-sm text-gray-600">
          <div className="flex items-center space-x-2">
            <span className="font-bold">Seller:</span>
            <div className="flex items-center ">
              <span>DreidHail</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <span className="font-bold">Ended:</span>
            <span>Jan 27, 2025 11:35 PM</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="font-bold">Bids:</span>
            <span># 25</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="font-bold">Views:</span>
            <span>28,781</span>
          </div>
        </div>
      </div>

      <div className="flex space-x-4 mt-6 text-sm font-semibold border-b border-gray-300 pb-2">
        <button className="text-blue-600 border-b-2 border-blue-600">
          Newest
        </button>
        <button className="text-gray-500 hover:text-gray-800">
          Most Upvoted
        </button>
        <button className="text-gray-500 hover:text-gray-800">
          Seller Comments
        </button>
        <button className="text-gray-500 hover:text-gray-800">
          Bid History
        </button>
      </div>
    </div>
  );
};

export default CarAuctionHeader;
