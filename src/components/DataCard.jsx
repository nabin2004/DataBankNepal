import React from 'react';

const DataCard = () => {
  return (
      <div className='flex flex-row justify-between w-[50%] p-4 '>
        <div className='flex flex-col gap-5 overflow-auto scroll-smooth' style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>

          <div>
            <h2 className='font-bold'>About Data</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum harum accusantium sed accusamus non distinctio, debitis numquam, vel dolorum illo dolorem itaque odio aut laudantium. Eius dignissimos ut eos doloremque enim minima qui nesciunt! Autem inventore repudiandae odit nesciunt sapiente!</p>
          </div>

          <div>
            <h2 className='font-bold'>Data Info</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, distinctio nostrum adipisci incidunt ipsam quo. Repellendus provident deserunt ab perferendis modi expedita ullam reprehenderit neque enim? Suscipit, dolorum, iusto nostrum, pariatur fugit accusamus aliquam fugiat culpa mollitia debitis soluta unde perspiciatis error omnis quae deserunt natus dolores. Quae, illo sequi!</p>
          </div>

          <div>
            <h2 className='font-bold'>Research Methodologies</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam praesentium ex modi ipsa assumenda sunt eligendi dignissimos atque, iure obcaecati cumque placeat mollitia in sapiente esse nostrum officia id vitae.</p>
          </div>
        </div>
      </div>
  );
};

export default DataCard;
