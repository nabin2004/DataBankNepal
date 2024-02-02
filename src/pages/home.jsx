import React from 'react';
import Tile from '../components/mobile/tiles';

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <div className='flex flex-row ml-5 pt-4 w-s gap-2 scroll-auto overflow-x-auto border-r border-gray-300' style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        <Tile />
        <Tile />
        <Tile />
        <Tile />
        <Tile />
      </div>
    </div>
  );
};

export default Home;
