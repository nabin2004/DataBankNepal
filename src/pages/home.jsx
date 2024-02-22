import React from 'react';
import Tile from '../components/mobile/tiles';
import mountain from '../assests/mountain.jpg';
import kathmandu from '../assests/kathmandu.jpg'
// import himal from '../assests/himal.jpg';
import himal from '../assests/himal.jpg';
import pokhara from '../assests/pokhara.jpg';
// import Map from '../components/map.jsx';

const Home = () => {
  return (
    <div className=''>
      <div className='flex flex-row ml-5 pt-4 gap-2 scroll-auto overflow-x-auto border-r border-gray-300' style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        <Tile imageUrl={mountain} text='Village Data Set'/>
        <Tile imageUrl={kathmandu} text='Urban Data Set'/>
        <Tile imageUrl={himal} text='Snowfall Dataset'/>
        <Tile imageUrl={pokhara} text='Tourism Data Source'/>
        <Tile imageUrl={mountain} text='Mid western Data Source'/>
        
      </div>
     

      
      <div className='threeD'>
       
      </div>

      <div>
    
      </div>

      <div className='>inter mt-4 ml-5 flex flex-center text-center flex-center'>
        <div className='mt-8 w-screen'>
          
          <h1 className='font-inter font-bold sm:text-center text-4xl text-center'>DATA BANK NEPAL</h1>

           <div className='sm:text-center my-4 w-auto'>
        {/* <h1 className='font-inter font-bold'>Leave Proverb | Use Data</h1> */}

      </div>


      <div className='sm:mr-20 mr-3 flex flex-auto'>
        <p className='sm:mr-20 sm:w-30% text-justify sm:pr-10 flex-grow'>Welcome to our company's About Us page! We are a team of dedicated professionals committed to providing valuable data and insights to our users. Our company's GitHub repository serves as a central hub for our codebase and project documentation. It allows us to collaborate, track changes, and manage our software development process efficiently. Our mission is to empower individuals and organizations with accurate and up-to-date data. We believe that data-driven decision-making is crucial for success in today's fast-paced world. We envision a future where everyone has easy access to reliable data and can make informed choices based on evidence. By providing a comprehensive repository of data, we aim to foster a culture of data literacy and enable data-driven decision-making at all levels. We collect data from a wide range of reputable sources, including government websites, international organizations, research institutions, news articles, and other publicly available datasets. We carefully vet all data sources to ensure accuracy and reliability. If you have any questions, suggestions, or partnership opportunities, please feel free to reach out to us.</p>
      </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
