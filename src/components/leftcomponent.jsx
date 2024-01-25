

export default function LeftPanel() {
    return (
      <div className=" flex-col justify-start gap-1 h-screen border-r border-gray-300 mt-20  text-xs ml-10 bg-white hidden sm:flex">

          <div className="">
          <button className="flex gap-2 mt-10"> 
          <div className='material-symbols-outlined mr-2'>Insights</div>
          Insights
          </button>
          </div>

          <div className="pr-4">
          <button className="flex gap-2 mt-2"> 
          <div className='material-symbols-outlined flex mr-2'>download_for_offline</div>Download
          </button>
          </div>

          <div>
          <button className="flex gap-2 mt-2"> 
          <div className='material-symbols-outlined flex mr-2'>key_visualizer</div>Data API</button>
      </div>
          </div>


    );
  }
  