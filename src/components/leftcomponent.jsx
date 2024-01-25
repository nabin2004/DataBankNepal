import React from 'react';
import { Link } from 'react-router-dom';

import { BrowserRouter, Routes, Route } from 'react-router-dom';  // Updated import statement
import ReactDOM from 'react-dom';
import Home from '../pages/home';
import APIs from '../pages/api';
import Download from '../pages/download';
import Insights from '../pages/insights';
import About from '../pages/about';
import Errored from '../pages/Errored'


export default function LeftPanel() {
  return (
    <div className="bg-fixed flex-col justify-start gap-1 h-screen border-r border-gray-300 mt-20 text-xs ml-10 bg-white hidden sm:flex">
 <BrowserRouter>

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
        


          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/api" element={<APIs />} />
            <Route path="/download" element={<Download />} />
            <Route path="/about" element={<About />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="*" element={<Errored />} />
          </Routes>
        </BrowserRouter>
      






    </div>
  );
}
