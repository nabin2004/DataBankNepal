import React from 'react';
import Tile from '../components/mobile/tiles';

const Home = () => {
  return (
    <div className=''>
      <div className='flex flex-row ml-5 pt-4 w-s gap-2 scroll-auto overflow-x-auto border-r border-gray-300' style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        <Tile />
        <Tile />
        <Tile />
        <Tile />
        <Tile />
      </div>
      <div className=' sm:text-center mt-10 w-auto'>
        <h1 className='font-inter pt-4 ml-5'>Leave Proverb | Use Data</h1>
      </div>

      <div className='inter mt-4 ml-5 '>
        <div className='mt-8'>
          <h1 className='font-inter font-bold sm:text-center text-2xl '>DATA BANK NEPAL</h1>
          <h1 className='sm:text-center text-lg mt-4'>Ukhaan Tukka Hoina<br/> Data Prayog Garcha Nepali ley</h1>
        </div>
      </div>

    </div>
  );
};

export default Home;
