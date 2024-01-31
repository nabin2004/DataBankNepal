import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import DataCard from '../components/DataCard';
import Tile from '../components/mobile/tiles';

const DataInfo = () => {
  return (
    <div>
      <div className='border-b flex flex-col w-screen'>
        <div className='flex justify-between p-7'>
          <div>
            <h1 className='text-black font-inter font-bold'>Nepal Yatayat Dataset</h1>
            <br />
            <div>
              <b className='font-bold text-xs flex flex-row'>Author</b>
              Nabin Oli<br />
              Nabraj Oli
            </div>
          </div>
        </div>

        <div className='flex flex-row gap-10 pl-4 font-bold'>
          <Link to='/datainfo/card'><button>Data Card</button></Link>
          <Link to='/datainfo'>Code</Link>
          <button>Discussion</button>
        </div>
      </div>
      {/*///////////////////////////////////////////////////////////////////////// */}
      <div className='flex flex-row justify-between w-[70%] p-4 '>
        <DataCard />

      </div>
    </div>
  );
};

export default DataInfo;
