import './App.css';
import Navbar from './components/navbar';
import LeftPanel from './components/leftcomponent';
import CustomBox from './components/box'
import Trending from './components/trending'
//mobile
import Tile from './components/mobile/tiles'
import Button from './components/button';
import React from 'react';

function App() {


  return (
    <div>
    <div className='border border-solid border-opacity-15 shadow-md'>
    <Navbar/>
    </div>
    <div className=' mr-4 gap-4'>
      <div className='flex '>
      <LeftPanel/>
      <div className='ml-4 w-full'>
      <div className='flex mt-20 pt-4 gap-2 overflow-auto  scroll-smooth  border-r border-gray-300' style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} >
            <Tile/>
            <Tile/>
            <Tile/>
            <Tile/>
      </div>
      </div>

      </div>
   


      </div>


      </div>
  
  );
}

export default App;
