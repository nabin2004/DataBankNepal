import React from 'react';
import backgroundImage from './image.png';

const Tile = () => {
  const boxStyles = {
    width: '90%',
    height: '8rem',
    flexShrink: 0,
    borderRadius: '30px',
    border: '1px solid #000',
    background: `url(${backgroundImage})`, 
    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)'
  };

  return (
    <div style={boxStyles} className='p-20'>
      Nabin Kripa Oli
    </div>
  );
};

export default Tile;
