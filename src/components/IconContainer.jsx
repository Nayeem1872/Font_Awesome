import React, { useState } from 'react';

const IconContainer = () => {
    const [iconSize, setIconSize] = useState({ height: 40, width: 40 });

  const handleSizeChange = (newSize) => {
    setIconSize(newSize);
  };
  return (
    <div>
    <button onClick={() => handleSizeChange({ height: 40, width: 40 })}>
      Set Size X
    </button>
    <button onClick={() => handleSizeChange({ height: 100, width: 100 })}>
      Set Size Y
    </button>
    
  </div>
  )
}

export default IconContainer