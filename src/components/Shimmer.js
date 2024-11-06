import React from 'react'
// import './shimmer.css' // Custom CSS for shimmer effect

function ShimmerUI() {
  return (
    <div data-testid="shimmer" className="shimmer-ui-container grid grid-cols-2 gap-4 p-4 md:grid-cols-5">
      {[...Array(10)].map((_, index) => (
        <div key={index} className="shimmer-card bg-gray-200 p-4 rounded-lg shadow animate-pulse">
          <div className="shimmer-image bg-gray-300 h-24 w-full rounded-md mb-4"></div>
          <div className="shimmer-text bg-gray-300 h-4 w-3/4 rounded-md mb-2"></div>
          <div className="shimmer-text bg-gray-300 h-4 w-1/2 rounded-md mb-2"></div>
          <div className="shimmer-text bg-gray-300 h-4 w-2/3 rounded-md"></div>
        </div>
      ))}
    </div>
  );
}

export default ShimmerUI;
