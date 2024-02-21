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
      <div className='flex flex-row ml-5 pt-4 w-s gap-2 scroll-auto overflow-x-auto border-r border-gray-300' style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
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
        <h1 className='font-inter font-bold'>Leave Proverb | Use Data</h1>

      </div>


      <div className='sm:mr-20 mr-3 flex flex-auto'>
        <p className='sm:mr-20 sm:w-30% text-justify sm:pr-10 flex-grow'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa quaerat fuga, praesentium a debitis illo quae placeat delectus sint veritatis officia ipsam optio totam facere officiis laboriosam vitae voluptate inventore provident adipisci velit impedit sequi! Ad, quibusdam non ab blanditiis tempora modi saepe. Magni quasi ex reprehenderit, repellendus beatae inventore blanditiis doloribus perspiciatis eaque dicta ullam alias veritatis adipisci, asperiores veniam quia similique. Aspernatur temporibus quo necessitatibus vitae quod id quasi cum distinctio laudantium qui suscipit, quam nobis libero et pariatur neque quia. Blanditiis, porro officia deleniti, temporibus voluptatum repellat deserunt similique sed corrupti laborum ut? Unde, necessitatibus modi nisi soluta quia commodi deleniti odio dolore labore quod perferendis. Ut aperiam maxime eaque id dignissimos autem, ipsam est consequuntur, vero repudiandae sapiente! Necessitatibus aperiam, sapiente mollitia doloribus eum at debitis laboriosam modi iste illum accusantium nobis est itaque dolor explicabo iure optio numquam animi temporibus ullam culpa quia possimus repellendus! Hic accusamus reiciendis eum, esse inventore repudiandae dignissimos facere quam nesciunt natus doloremque quo corrupti quidem provident eius nam corporis asperiores quasi laudantium excepturi ipsa! Repudiandae, laudantium expedita omnis vel odit quam! Voluptate possimus doloribus tempora corrupti voluptas quo, sint amet, minima in obcaecati hic enim, officia delectus soluta molestiae?</p>
      </div>
        </div>
      </div>

    </div>
  );
};

export default Home;
