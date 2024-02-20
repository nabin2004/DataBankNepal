import csvFile from '../Files/2023.csv';


export default function InsightsBox({ text }) {
  
  const downloadCsvFile = () => {
    const link = document.createElement('a');
    link.href = csvFile;
    link.download = '2023.csv';
    link.style.display = 'none'; // hide the link
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link); 
  };

  return (
    <button
      className="flex pl-4 dark:md:hover:bg-[#A41034] dark:md:hover:text-white font-inter text-2xl  py-1 w-[85%] flex-shrink-0 rounded-12 border border-solid border-black bg-white shadow-md text-left"
      onClick={downloadCsvFile}
    >
      {text}
    </button>
  );
}
