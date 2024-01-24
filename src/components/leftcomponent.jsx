

export default function LeftPanel() {
    return (
      <div className="flex flex-col gap-1  border-r border-gray-300 mt-20  text-xs">
          
          <button className="flex gap-2 mt-10"> 
          <div className='material-symbols-outlined m-2'>Insights</div>
          Data Insights
          </button>

          <button className="flex gap-2 mt-2"> 
          <div className='material-symbols-outlined flex m-2'>download_for_offline</div>Data Download
          </button>

          <button className="flex gap-2 mt-2"> 
          <div className='material-symbols-outlined flex m-2'>key_visualizer</div>Data API Source</button>
      </div>
    );
  }
  