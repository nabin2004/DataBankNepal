// Insights.js
import React from 'react';
import ContentBox from '../components/ContentBox'
import InsightsBox from '../components/insightsBox';

const Insights = () => {
  return(
    <div className='flex flex-col h-screen w-screen pr-10 gap-2 overflow-auto scroll-smooth pt-4 pb-20' style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          <InsightsBox text='Health Data 2021 Nepal' />
          <InsightsBox text='Education Trends Analysis' />
          <InsightsBox text='Economic Outlook Report' />
          <InsightsBox text='Climate Change Impact Study' />
          <InsightsBox text='Technology Adoption Survey' />
          <InsightsBox text='Social Media Usage Statistics' />
          <InsightsBox text='Covid-19 Vaccination Progress' />
          <InsightsBox text='Community Well-being Index' />
          <InsightsBox text='Digital Transformation Insights' />
          <InsightsBox text='Demographic Shifts Analysis' />
          <InsightsBox text='Environmental Sustainability Report' />
          <InsightsBox text='Global Market Trends 2022' />
          <InsightsBox text='Workplace Productivity Research' />
          <InsightsBox text='Mental Health Awareness Data' />
          <InsightsBox text='Future of Transportation Survey' />
          <InsightsBox text='Urban Planning Analytics' />
  </div>
  );
};

export default Insights;
