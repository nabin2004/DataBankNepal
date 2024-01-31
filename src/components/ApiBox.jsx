import React from 'react';

export default function ApiBox(props) {
  return (
    <button
      className="w-40 font-inter dark:hover:md:bg-[#A41034] dark:hover:md:text-white font-bold texr-2xl p-5 flex-shrink-0 rounded-12 border border-solid border-black bg-white shadow-md focus:outline-none "
    >
      {props.text}
    </button>
  );
}
