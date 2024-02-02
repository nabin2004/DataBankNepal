import Logo from './logo'
import Button from './button'
import Tripledot from '../assests/tripledot.svg'
import React from 'react';
import SearchBar from './searchBar'

export default function Navbar() {

  return (
    <div className=''>
      <div className={`overlay border border-solid border-opacity-15 shadow-md bg-white fixed w-full top-0 z-10`}>
        <div className='flex justify-between'>
          <Logo />
          
          <div>
              <SearchBar/>

          </div>
          
          <div className='flex gap-2 p-2 '>
            <Button text='Login' />
            <div className='p-4 h-auto w-auto mt-2'>
              <img src={Tripledot} alt='tripledot' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
