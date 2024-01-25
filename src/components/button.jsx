export default function Button({ text }) {
    return (
        <div className="w-auto">
            <button className="pl-2 pr-12 p-1 mt-4 w-10 bg-[#A41034] font-inter text-sm font-bold text-white rounded-full border border-solid border-[1.35px] border-gray-900 shadow-md">
                {text}
            </button>
        </div>
    );
}
