import React, { useState } from 'react';
import iconsData from '../iconData' 

const Main2 = ({ filter }) => {
  const [iconSize, setIconSize] = useState('w-32 h-32');

  // Define your SVG data and text here
  const icons = [
    {  text: 'Icon 1' },
    {  text: 'Icon 2' },
    // Add more icons as needed
  ];

  // Function to toggle the icon size
  const toggleIconSize = () => {
    // Toggle between w-32 h-32 and w-64 h-64
    setIconSize(iconSize === 'w-32 h-32' ? 'w-64 h-64' : 'w-32 h-32');
  };
  return (
    <div className="w-3/4 p-4 mt-12">
    <div className="flex flex-wrap mt-2">
      {icons.map((icon, index) => (
        <div key={index} className="p-4">
          <div className="text-center">
            <div
              className={`rounded-lg p-7 ${iconSize} flex flex-col items-center justify-center transition-all duration-300 ease-in-out cursor-pointer bg-white hover:bg-yellow-400`}
            >
              {/* Increase the height and width of the SVG here */}
              {React.cloneElement(icon.svg, { height: 40, width: 40 })}
              <div className="text-center mt-2 text-xs">{icon.text}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
    <button onClick={toggleIconSize}>Toggle Size</button>
  </div>

  )
}

export default Main2