import Logo from './logo'
import Button from './button'
import Tripledot from '../assests/tripledot.svg'
import React, { useState, useEffect } from 'react';


export default function Navbar() {
  const [isFixed, setIsFixed] = useState(false);

  // const handleScroll = () => {
  //   const scrollY = window.scrollY;
  //   const triggerScroll = 100; // Adjust this value based on when you want the navbar to become fixed
  //   setIsFixed(scrollY > triggerScroll);
  // };

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  return (
    <div className={`fixed w-full bg-white w-full min-w-screen transition-all duration-300 ${isFixed ? 'fixed top-0 left-0 right-0 z-50' : ''}`}>
      <div className={`fixed bg-white w-full min-w-screen border border-solid border-opacity-15 shadow-md bg-white ${isFixed ? 'relative' : 'absolute'}`}>
        <div className='flex justify-between'>
          <Logo />
 
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
