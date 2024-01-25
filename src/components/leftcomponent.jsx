import React from 'react';
import { Link, Routes, Route, BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Home from '../pages/home';
import APIs from '../pages/api';
import Download from '../pages/download';
import Insights from '../pages/insights';
import About from '../pages/about';
import Errored from '../pages/Errored';

import Tile from '../components/mobile/tiles'; // Make sure to import or define the Tile component

export default function LeftPanel() {
  return (
    <BrowserRouter>
      <div className='flex'>
        <div className="bg-fixed flex-col justify-start gap-1 h-screen border-r border-gray-300 mt-20 text-xs ml-10 bg-white hidden sm:flex">
          <nav>
            <ul>
              <li>
                <Link to="/">
                  <div className="p-2 border-b">
                    <button className="flex gap-2 mt-10">
                      <div className='material-symbols-outlined mr-2'>home</div>
                      Home
                    </button>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/insights">
                  <div className="p-2">
                    <button className="flex gap-2 mt-10">
                      <div className='material-symbols-outlined mr-2'>Insights</div>
                      Insights
                    </button>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/download">
                  <div className="pr-4 p-2">
                    <button className="flex gap-2 mt-2">
                      <div className='material-symbols-outlined flex mr-2'>download_for_offline</div>Download
                    </button>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/api">
                  <div className="pr-4 p-2">
                    <button className="flex gap-2 mt-2">
                      <div className='material-symbols-outlined flex mr-2'>api</div>API
                    </button>
                  </div>
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className='ml-4 w-full'>
          <div className='flex mt-20 py-4 pt-4 gap-2 overflow-auto scroll-smooth border-r border-gray-300' style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} >
            <Tile />
            <Tile />
            <Tile />
            <Tile />
            <Tile />
            <Tile />
          </div>
          <div id='box2render' className='flex flex-col h-screen gap-2 overflow-auto scroll-smooth pt-4 pb-20' style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/api" element={<APIs />} />
              <Route path="/download" element={<Download />} />
              <Route path="/about" element={<About />} />
              <Route path="/insights" element={<Insights />} />
              <Route path="*" element={<Errored />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}
