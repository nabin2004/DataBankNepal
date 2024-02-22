import React from 'react';
import { Link } from 'react-router-dom';

const Tile = ({ imageUrl,text }) => {
  const boxStyles = {
    flexShrink: 0,
    borderRadius: '30px',
    border: '1px solid #000',
    background: `url(${imageUrl})`, 
    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
    transition: 'box-shadow 0.3s ease-in-out',
    ':hover': {
      boxShadow: '0px 8px 8px 0px rgba(0, 0, 0, 0.25)'
    }
  };

  return (
<div style={boxStyles} className='inter font-inter font-bold p-20 border border-white text-white flex justify-end'>
  <Link to='/insights/datacard'>
    <span style={{ textShadow: '4px 4px 8px rgba(0, 0, 0, 2)' }}>
      {text}<br/>
      <p>Data Bank Nepal</p>
    </span>
  </Link>
</div>


  );
};

export default Tile;
