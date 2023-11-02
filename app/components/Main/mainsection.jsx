"use client"
import React, { useState } from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { AiFillThunderbolt } from 'react-icons/ai';
import { FaPaperPlane } from 'react-icons/fa';

function MainSection() {
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');

  const handleTranslate = () => {
    // Your translation logic here
  };

  return (
    <div className="absolute right-0 flex-grow p-0 ml-60 mt-2 max-h-[100%] overflow-y-auto w-[80%] bg-[#fffffffa] text-[#767878]">
      <p className='relative font-bold text-4xl py-3 pt-5 pl-20'>The Future is AI</p>
      <div className="relative bg-[#7678780F] p-10 w-[90%] h-[90%] ml-20 mt-5 rounded-lg">
        <div className="pt-35 font-bold text-3xl pl-25 text-customGrayText">Translate Result</div>
        {!inputText ? (
          <div className="pt-5 text-lg pl-25 text-customGrayText">
            Ohoro... Timoru Mani . Wadhie Heko. Nie de Mani. Mai mahiu ne ha ha.
          </div>
        ) : null}
        <div className="pt-5 pl-25 bg-opacity-10" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', pointerEvents: 'none' }}>
          {!inputText ? (
            <span className="text-white-opacity-50">
              Ohoro... Timoru Mani . Wadhie Heko. Nie de Mani. Mai mahiu ne ha ha.
            </span>
          ) : null}
        </div>
        <div className="pt-5 font-bold pl-25 text-customGrayText">
          {inputText ? 'generating ...' : null}
        </div>
        <div className="flex mt-10">
          <div className="h-20 w-50 mt-5 flex items-center">
            Translate From:
          </div>
          <div className="flex space-x-10 items-center">
            <button className="h-16 w-60 text-customGrayText border border-[#138AA4] rounded-full flex items-center justify-center">
              English
              <RiArrowDropDownLine className="font-bold text-4xl" />
            </button>
            <button className="h-16 w-60 text-customGrayText border border-[#138AA4] rounded-full flex items-center justify-center">
              Kikuyu
              <RiArrowDropDownLine className="font-bold text-4xl pl-2" />
            </button>
          </div>
        </div>
        <div className="mt-12 relative flex items-start">
  <div className="w-[731px] h-[55px] bg-white rounded-[20px] shadow-lg inline-flex gap-[18.36px] pl-[40px] pr-0 py-[23px]">
    <div className="w-15 h-20 relative flex-col justify-center items-start flex" />
    <div className="flex items-center pl-0 py-0 text-neutral-500 text-opacity-75 text-base font-normal font-['Inter']">
      <AiFillThunderbolt className="text-blue-500 text-lg mr-2" />
      <input
        type="text"
        className="w-full outline-none"
        placeholder="Type anything you want, literally anything!"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
            </div>
          </div>
          <div className="ml-0 mt-2 w-[40px] h-[40px] bg-blue-500 rounded-[10px] shadow-lg inline-flex gap-[18.36px] pl-[10px] pr-0 py-[10px] items-center">
  <FaPaperPlane className="text-white text-xl" />
</div>

        </div>
        <div className="py-2 w-[100%] flex items-center justify-center">
          <div className="w-[210px] h-[18px] text-center">
            <span className="font-inter text-xs font-normal">
              Powered by <span className="text-blue-500">code challenge</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainSection;
