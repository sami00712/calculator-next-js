'use client'
import { useState } from 'react';

const Calculator: React.FC = () => {
  const [display, setDisplay] = useState<string>('');

  const handleClick = (value: string) => {
    setDisplay((prev) => prev + value);
  };

  const calculate = () => {
    try {
      setDisplay(eval(display).toString());
    } catch {
      setDisplay('Error');
    }
  };

  const clearDisplay = () => {
    setDisplay('');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-800 text-white">
      <div className="bg-gray-900 p-5 rounded-lg w-80">
        <div className="text-right text-3xl bg-gray-700 p-3 rounded mb-5">{display || '0'}</div>
        <div className="grid grid-cols-4 gap-4">
          {['7', '8', '9', '/'].map((val) => (
            <button
              key={val}
              onClick={() => handleClick(val)}
              className="bg-gray-600 hover:bg-gray-500 py-2 rounded text-xl font-semibold"
            >
              {val}
            </button>
          ))}
          {['4', '5', '6', '*'].map((val) => (
            <button
              key={val}
              onClick={() => handleClick(val)}
              className="bg-gray-600 hover:bg-gray-500 py-2 rounded text-xl font-semibold"
            >
              {val}
            </button>
          ))}
          {['1', '2', '3', '-'].map((val) => (
            <button
              key={val}
              onClick={() => handleClick(val)}
              className="bg-gray-600 hover:bg-gray-500 py-2 rounded text-xl font-semibold"
            >
              {val}
            </button>
          ))}
          <button
            onClick={clearDisplay}
            className="col-span-2 bg-red-600 hover:bg-red-500 py-2 rounded text-xl font-semibold"
          >
            C
          </button>
          <button
            onClick={() => handleClick('0')}
            className="bg-gray-600 hover:bg-gray-500 py-2 rounded text-xl font-semibold"
          >
            0
          </button>
          <button
            onClick={() => handleClick('+')}
            className="bg-gray-600 hover:bg-gray-500 py-2 rounded text-xl font-semibold"
          >
            +
          </button>
          <button
            onClick={calculate}
            className="col-span-4 bg-blue-600 hover:bg-blue-500 py-2 rounded text-xl font-semibold"
          >
            =
          </button>
        </div>
      </div>
      <h1 className='mt-10'>Calculator with Next JS</h1>
      <h1>Made by Muhammad Sami.</h1>
    </div>
  );
};

export default Calculator;
