export default function Button({ text }) {
    return (
        <div className="w-auto">
            <button className="w-24 bg-[#A41034] font-inter text-sm font-bold text-white rounded-full border border-solid border-[1.35px] border-gray-900 shadow-md px-4 py-2">
                {text}
            </button>
        </div>
    );
}
