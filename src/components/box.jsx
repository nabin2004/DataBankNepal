import React from 'react';

const CustomBox = ({ text, width, height }) => {
  return (
    <div>
      <button style={{ width, height, flexShrink: 0 }} className="rounded-lg border-2 border-solid border-black bg-gray-300 shadow-md p-7">
        {text}
      </button>
    </div>
  );
};

export default CustomBox;
