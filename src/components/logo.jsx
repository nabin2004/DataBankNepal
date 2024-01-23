import logo from '../assests/shield.svg'

export default function Logo(){
return(
    <div className='flex p-2 w-auto'>
        <img className='flex-none' src={logo} alt='logoPicture'/>
        <div className='ml-5'>
            <h2 className='font-inter font-bold text-base'>DATA BANK NEPAL</h2>    
            <p className='text-xs'>Leave Proverb, Use Data</p>
        </div>
    </div>
)

}