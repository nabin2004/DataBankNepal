// Insights.js
import React from 'react';
import ContentBox from '../components/ContentBox'
import InsightsBox from '../components/insightsBox';
import { Link } from 'react-router-dom';

const Insights = () => {
  return(
    <div className='flex flex-col h-screen w-screen pr-10 gap-2 overflow-auto scroll-smooth pt-4 pb-20' style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
      <Link to="/insights/datacard"><InsightsBox text='Health Data 2021 Nepal' /></Link>
      <Link to="/insights/datacard"><InsightsBox text='Education Trends Analysis' /></Link>
      <Link to="/insights/datacard"><InsightsBox text='Economic Outlook Report' /></Link>
      <Link to="/insights/datacard"><InsightsBox text='Climate Change Impact Study' /></Link>
      <Link to="/insights/datacard"><InsightsBox text='Technology Adoption Survey' /></Link>
      <Link to="/insights/datacard"><InsightsBox text='Social Media Usage Statistics' /></Link>
      <Link to="/insights/datacard"><InsightsBox text='Covid-19 Vaccination Progress' /></Link>
      <Link to="/insights/datacard"><InsightsBox text='Community Well-being Index' /></Link>
      <Link to="/insights/datacard"><InsightsBox text='Digital Transformation Insights' /></Link>
      <Link to="/insights/datacard"><InsightsBox text='Demographic Shifts Analysis' /></Link>
      <Link to="/insights/datacard"><InsightsBox text='Environmental Sustainability Report' /></Link>
      <Link to="/insights/datacard"><InsightsBox text='Global Market Trends 2022' /></Link>
      <Link to="/insights/datacard"><InsightsBox text='Workplace Productivity Research' /></Link>
      <Link to="/insights/datacard"><InsightsBox text='Mental Health Awareness Data' /></Link>
      <Link to="/insights/datacard"><InsightsBox text='Future of Transportation Survey' /></Link>
      <Link to="/insights/datacard"><InsightsBox text='Urban Planning Analytics' /></Link>
    </div>
  );
};

export default Insights;
