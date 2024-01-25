import './App.css';
import Navbar from './components/navbar';
import LeftPanel from './components/leftcomponent';
import CustomBox from './components/box'
import Trending from './components/trending'
//mobile
import Tile from './components/mobile/tiles'
import Button from './components/button';
import React from 'react';
import ContentBox from './components/ContentBox';
import { BrowserRouter, Routes, Route } from 'react-router-dom';  // Updated import statement
import ReactDOM from 'react-dom';
import Home from './pages/home';
import APIs from './pages/api';
import Download from './pages/download';
import Insights from './pages/insights';
import About from './pages/about';

function App() {
  return (
    <div>
      <div className='border border-solid border-opacity-15 shadow-md'>
       
        <Navbar />
      </div>
      <div className='fixed mr-4 gap-4'>
        <div className='flex '>
          <LeftPanel />
          <div className='ml-4 w-full'>
            <div className='flex mt-20 py-4 pt-4 gap-2 overflow-auto scroll-smooth border-r border-gray-300' style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} >
              <Tile />
              <Tile />
              <Tile />
              <Tile />
              <Tile />
              <Tile />
            </div>
            <div></div>
            <div className='flex flex-col h-screen gap-2 overflow-auto scroll-smooth pt-4 pb-20' style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} >
              <ContentBox />
              <ContentBox />
              <ContentBox />
              <ContentBox />
              <ContentBox />
              <ContentBox />
              <ContentBox />
              <ContentBox />
              <ContentBox />
              <ContentBox />
              <ContentBox />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const root = document.getElementById('root');
ReactDOM.createRoot(root).render(<App />);

export default App;
