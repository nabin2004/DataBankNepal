export default function InsightsBox({ text }) {
    return (
      <button
        className="flex justify-center dark:md:hover:bg-[#A41034] dark:md:hover:text-white font-inter text-2xl  py-1 w-[85%] flex-shrink-0 rounded-12 border border-solid border-black bg-white shadow-md text-left"
      >
        {text}
      </button>
    );
  }
  