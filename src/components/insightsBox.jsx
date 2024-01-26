export default function InsightsBox({ text }) {
    return (
      <button
        className="dark:md:hover:bg-[#A41034] dark:md:hover:text-white font-inter text-2xl  p-4 w-[90%] flex-shrink-0 rounded-12 border border-solid border-black bg-white shadow-md text-left"
      >
        {text}
      </button>
    );
  }
  