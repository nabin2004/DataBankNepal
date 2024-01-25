// Insights.js
import React from 'react';
import ContentBox from '../components/ContentBox'

const Insights = () => {
  return(
    <div className='flex flex-col h-screen gap-2 overflow-auto scroll-smooth pt-4 pb-20' style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} >
    <ContentBox />
    <ContentBox />
    <ContentBox />
    <ContentBox />
    <ContentBox />
    <ContentBox />
    <ContentBox />
    <ContentBox />
    <ContentBox />
    <ContentBox />
    <ContentBox />
  </div>
  );
};

export default Insights;
