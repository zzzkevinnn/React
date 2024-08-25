import React, { useState } from "react";

export default function Accordian({
  accTitle,
  accItems
}) {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleClick = (index) => {
    setSelectedIndex(selectedIndex === index ? null : index);
  };

  return (
    <div className="py-20">
      <div className="container mx-auto px-10">
        <h2 className="text-4xl font-bold text-center pb-16">{accTitle}</h2>

        <div className="flex flex-col gap-4">
          {accItems.map((item, index) => (
            <div key={index} className="rounded-lg ring-1 shadow overflow-hidden">
              <button
                type="button"
                className={`font-semibold text-lg underline w-full p-4 focus:outline-none text-left flex justify-between items-center ${
                  selectedIndex === index ? 'bg-indigo-200 text-gray-800' : 'text-gray-600'
                }`}
                onClick={() => handleClick(index)}
              >
                {item.title}

                <svg
                  className={`transform transition duration-200 ease-in-out ${
                    selectedIndex === index ? 'rotate-180' : ''
                  }`}
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.586V14a1 1 0 11-2 0V5.586L5.293 7.707z"
                    clipRule="evenodd"
                  />
                  <path d="M9.707 5.707a1 1 0 00-1.414-1.414l-6 6a1 1 0 000 1.414l6 6a1 1 0 001.414-1.414L5.586 11H14a1 1 0 110 2H5.586l4.121 4.121a1 1 0 001.414-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {selectedIndex === index && (
                <div className="p-4">
                  <p className="text-gray-600">{item.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// const accItems = [
//   { title: 'Question 1', content: 'Answer 1' },
//   { title: 'Question 2', content: 'Answer 2' },
//   // ... more items
// ];