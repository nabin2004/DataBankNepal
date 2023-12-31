import './App.css';


function App(){
  return(
    <div className='App'>  
    <div className='header'>
      <Button text='Login'/>
      <Button text='Sign Up'/>
      <ThreeDot/>
    </div>
     <div class="parent">
      <div class="div1">
             <Logo /> 
             </div>

        <div class="div2"> 
            <SearchBar /> 
        </div>
        
<div class="div3"> </div>
            <Button text='Login'/>
            <Button text='Sign Up'/>
            <ThreeDot/>
<div class="div4"> </div>
<div class="div5"> </div>
<div class="div6"> </div>
</div> 


    </div>
  )
}

function Dotprof() {
  return <div style={{ width: 25, height: 25, background: '#0D0D0D', borderRadius: '9999px', marginRight: '10px' }} />;
}




function Logo(){
  return(
    <div className='logo'>
      <svg width="57" height="68" viewBox="0 0 57 68" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.672653 0.435593H55.5573V18.2949H0.672653V0.435593Z" fill="#A41034" stroke="black" stroke-width="0.871185"/>
        <path d="M35.2597 62.942L28.545 66.696L23.2138 64.6158L19.269 61.6572L14.8068 57.9949L10.3381 52.7253L6.86433 48.2589L5.38928 45.6104L3.90998 42.3494L2.92085 38.8874L1.92897 34.9199L1.4328 30.9506L0.911975 25.8947L0.702152 18.9369L55.5644 18.7282L55.5644 23.7885L55.0685 29.7392L53.5788 36.195L52.0907 41.155L50.1098 45.612L47.6247 50.0853L45.1492 54.0461L41.7004 57.9875L35.2597 62.942Z" fill="#D9D9D9" stroke="black" stroke-width="0.871185"/>
      </svg>
      <div className='text'>
      <p className='name'>DATA BANK NEPAL</p>
      <p className='tag-line'>Leave Proverb, Use Data</p>
      </div>

    </div>
  )
}

function ThreeDot(){
  return(
    <div className='tripledot'>
      <svg width="44" height="20" viewBox="0 0 44 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g filter="url(#filter0_d_7_194)">
    <circle cx="21.6002" cy="4.64997" r="4.05" fill="black"/>
  </g>
  <g filter="url(#filter1_d_7_194)">
    <circle cx="9.45014" cy="4.64997" r="4.05" fill="black"/>
  </g>
  <g filter="url(#filter2_d_7_194)">
    <circle cx="33.7502" cy="4.64997" r="4.05" fill="black"/>
  </g>
  <defs>
    <filter id="filter0_d_7_194" x="12.1502" y="0.599976" width="18.9" height="18.9" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="5.4"/>
      <feGaussianBlur stdDeviation="2.7"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_7_194"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_7_194" result="shape"/>
    </filter>
    <filter id="filter1_d_7_194" x="0.000150204" y="0.599976" width="18.9" height="18.9" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="5.4"/>
      <feGaussianBlur stdDeviation="2.7"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_7_194"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_7_194" result="shape"/>
    </filter>
    <filter id="filter2_d_7_194" x="24.3002" y="0.599976" width="18.9" height="18.9" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="5.4"/>
      <feGaussianBlur stdDeviation="2.7"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_7_194"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_7_194" result="shape"/>
    </filter>
  </defs>
</svg>
    </div>
  )
}

function Button(props) {
  return (
      <div className='button'>
        <button>{props.text}</button>
      </div>
  );
}

function SearchBar(){
  return(
  <div className="SearchBar">
  <input placeholder='Search..'></input>
</div>
  )
}

function Trending(){
  return(
    <div className='trending'>
        <text>Trending</text>
    </div>
  )
}

function Xbutton(){
  return(
    <div className='Xbutton'>
      <button>X</button>
    </div>
  )
}

function DataLabel(){
  return(
    <div className='dataLabel'>
        Data Science best Datasets
    </div>
  )
}

function InputBox(){
  return(
    <div className='InputBox'>
      <input placeholder='Name of Dataset'></input>
    </div>
  )
}

function DragNdrop(){
  return(
    <div className='dragNdrop'>
      Drag and Drop dataset
    </div>
  )
}

export default App;
