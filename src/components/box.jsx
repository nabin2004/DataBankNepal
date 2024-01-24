import React from 'react';

const CustomBox = ({ text, width, height, className }) => {
  const formattedText = text.replace(/\n/g, '<br />');

  // Apply styles to different parts of the text
  const styledText = formattedText
    .replace(
      /(उखान टुक्का)/g,
      '<span style="color: #A41034; -webkit-text-stroke-width: 4; -webkit-text-stroke-color: #000; font-family: \'Tiro Devanagari Hindi\'; font-size: 62.365px; font-style: italic; font-weight: 400; line-height: normal;">$1</span>'
    )
    .replace(
      /(DATA)/g,
      '<span style="color: #A41034; -webkit-text-stroke-width: 1; -webkit-text-stroke-color: #000; font-family: \'Tiro Devanagari Hindi\'; font-size: 62.365px; font-style: italic; font-weight: 400; line-height: normal;">$1</span>'
    )
    .replace(
      /(नेपालिले)/g,
      '<span style="color: #A41034; -webkit-text-stroke-width: 1; -webkit-text-stroke-color: #000; font-family: \'Tiro Devanagari Hindi\'; font-size: 62.365px; font-style: italic; font-weight: 400; line-height: normal;">$1</span>'
    );

  return (
    <div>
      <button
  style={{
    width,
    height,
    flexShrink: 0,
    border: '1px solid black', // Add a border style
    fontStyle: 'italic',      // Make the text italic

  }}
        className={`rounded-lg font-6xl  font-normal font-inter bg-gray-300 shadow-md p-7 ${className}`}
        dangerouslySetInnerHTML={{ __html: styledText }}
      />
    </div>
  );
};

export default CustomBox;
