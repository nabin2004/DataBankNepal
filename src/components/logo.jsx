import logo from '../assests/shield.svg'

export default function Logo(){
return(
    <div className='flex p-2 w-auto'>
          <span className="material-symbols-outlined p-5 b-0">menu</span>
        <img className='flex-none mr-0 h-10 mt-4' src={logo} alt='logoPicture'/>
        {/* <div className='ml-5'>
            <h2 className='font-inter font-bold text-base'>DATA BANK NEPAL</h2>    
            <p className='text-xs'>Leave Proverb, Use Data</p>
        </div> */}
    </div>
)

}