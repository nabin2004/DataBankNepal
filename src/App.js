import './App.css';
import Navbar from './components/navbar';
import LeftPanel from './components/leftcomponent';
import CustomBox from './components/box'
import Trending from './components/trending'

function App() {
  return (
    <div>
    <div className=''>
    <Navbar/>
    </div>

  
    <div className='flex'>
        <LeftPanel/>

      <div className='flex space-between'>
      <div className='p-5 mt-20'>
        <CustomBox text='उखान टुक्का  होइन,  DATA प्रयोग गर्छ नेपालिले  ' width='836px' height='310px'/>
        <div className='flex p-2 gap-2'>
        <CustomBox text='Data Insights' width='410px' height='300px'/>
        <CustomBox text='Data Source'  width='410px' height='300px'/>

        </div>

      </div>
      <div className='p-5 mt-20'>
        <Trending/>
      </div>
      </div>


      </div>

    </div>
  );
}

export default App;
