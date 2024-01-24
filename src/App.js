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
    <div className=''>
    <Navbar/>
    </div>
    <div className='flex  w-auto h-full ml-4 mr-4'>
    <LeftPanel/>

 
    

      <div className='flex w-full mt-20 pt-4 p-4 pl-3 gap-4 overflow-auto  scroll-smooth  border border-gray-300' style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} >
            <Tile/>
            <Tile/>
            <Tile/>
            <Tile/>
            <Tile/>
            <Tile/>
      </div> 
      </div>

      </div>
  
  );
}

export default App;
