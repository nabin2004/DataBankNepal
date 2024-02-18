import './App.css';
import Navbar from './components/navbar';
import LeftPanel from './components/leftcomponent';
// import CustomBox from './components/box'
// import Trending from './components/trending'
// import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
//mobile
// import Tile from './components/mobile/tiles'
// import Button from './components/button';
import React from 'react';
// import ContentBox from './components/ContentBox';
import ReactDOM from 'react-dom';
// import Home from './pages/home';
// import APIs from './pages/api';
// import Download from './pages/download';
// import Insights from './pages/insights';
// import About from './pages/about';
// import Errored from './pages/Errored';


function App() {
  return (
    <div>
      <div className='border-b border-solid border-opacity-15 shadow-md'>
        <Navbar />
      </div>
      <div className='fixed mt-20'>
       <LeftPanel/>

          </div>
        </div>
  );
}

const root = document.getElementById('root');
ReactDOM.createRoot(root).render(<LeftPanel />);

export default App;
