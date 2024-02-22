import React from 'react';
import Tile from '../components/mobile/tiles';
import mountain from '../assests/mountain.jpg';
import kathmandu from '../assests/kathmandu.jpg'
// import himal from '../assests/himal.jpg';
import himal from '../assests/himal.jpg';
import pokhara from '../assests/pokhara.jpg';
import Logo from '../components/logo';
import logo from '../assests/shield.svg'
// import Map from '../components/map.jsx';

const Home = () => {
  return (
    <div className='pr-50'>
      <div className='flex flex-row ml-5 pt-4 pl-100 gap-2  scroll-auto overflow-x-auto border-r border-gray-300' style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        <Tile imageUrl={mountain} text='Village Data Set'/>
        <Tile imageUrl={kathmandu} text='Urban Data Set'/>
        <Tile imageUrl={himal} text='Snowfall Dataset'/>
        <Tile imageUrl={pokhara} text='Tourism Data Source'/>
        <Tile imageUrl={mountain} text='Mid western Data Source'/>
        
      </div>
     
      <div className='threeD'>
      </div>

      <div>
      </div>

      <div className='inter mt-4 ml-5 flex flex-center text-center flex-center'>
        <div className='mt-8 w-screen'>
          <h1 className='font-inter font-bold text-4xl text-center'>DATA BANK NEPAL</h1>
          <div className='sm:text-center my-4 w-auto'>
            <h1 className='font-inter font-bold'>Leave Proverb | Use Data</h1>
          </div>
          <div className='flex justify-center'>
            <img className='flex m-0 p-0 w-[100px]' src={logo} alt='logoPicture' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
