import React, { useState } from 'react';
import logo from '../assests/shield.svg'
import { Link } from 'react-router-dom';

export default function Logo(){
    
// Overlay menu component
const OverlayMenu = ({ isOpen, onClose }) => {
  return (
    <div className={`overlay ${isOpen ? 'block' : 'hidden'} fixed inset-0 z-50 bg-black bg-opacity-50`} onClick={onClose}>
      <div className="menu-container absolute top-0 right-0 h-full bg-white p-4">
        <ul>
          <li>Home</li>
          <li>Insights</li>
          <li>Download</li>
          <li>API</li>
          <li>Contact</li>
          <li>About</li>
        </ul>
      </div>
    </div>
  );
};

const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
    
return(
    // <div className='flex p-2 w-auto'>
    //       <button className="material-symbols-outlined p-5  sm:hidden" onClick={menuOverlay}>menu</button>
    //     <img className='flex-none mr-0 w-[40px]' src={logo} alt='logoPicture'/>
    //     <div className='ml-5 hidden sm:flex flex-col mt-2'>
    //         <h2 className='font-inter font-bold text-base'>DATA BANK NEPAL</h2>    
    //         <p className='text-xs font-inter'>Leave Proverb, Use Data</p>
    //     </div>
    // </div>
    <div className='flex p-2 w-auto'>
      <button className="material-symbols-outlined  sm:hidden hamburger-menu" onClick={toggleMenu}>menu</button>
      <OverlayMenu isOpen={isMenuOpen} onClose={toggleMenu} />
      <img className='flex-none mr-0 w-[40px]' src={logo} alt='logoPicture' />
      <div className='ml-5 hidden sm:flex flex-col mt-2'>
        <h2 className='font-inter font-bold text-base'>DATA BANK NEPAL</h2>
        <p className='text-xs font-inter'>Leave Proverb, Use Data</p>
      </div>
    </div>
  );
}