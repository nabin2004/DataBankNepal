import React from 'react';

const CustomBox = ({ text, width, height, className }) => {
    const boxStyles = {
        width: '90%',
        height: '9rem',
        flexShrink: 0,
        borderRadius: '30px',
        border: '1px solid #000',
        background: '#D9D9D9',
        boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
      };
    
    return (
        <div>
          <button style={boxStyles}
            className={`rounded-lg text-6xl w-full px-4 font-normal font-inter bg-gray-300 shadow-md p-7 ${className}`}
          />
        </div>
      );
    };

export default CustomBox;
