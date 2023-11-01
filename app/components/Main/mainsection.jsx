"use client"
import React, { useState } from 'react';
import { RiArrowDropDownLine  } from 'react-icons/ri';
import { AiOutlineThunderbolt } from 'react-icons/ri';

function MainSection() {
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');

  // You can implement translation logic here when the user enters text and clicks a button.

  const handleTranslate = () => {
    // Implement translation logic here, e.g., using an API or your translation model.
    // Update the 'translatedText' state with the translated text.
  };

  return (
    <div className=" absolute right-0 flex-grow p-0 ml-60 mt-2 h-full w-[80%] bg-[#fffffffa]  text-[#767878]">
      <p className='relative font-bold text-4xl py-3 pt-5 pl-20'>The Future is AI</p>
   <div className=" relative bg-[#7678780F]  p-10 w-[90%]  h-[90%] ml-20 mt-5 rounded-lg" >
    <div className="pt-35 font-bold text-3xl pl-25 text-customGrayText">Translate Result</div>
    <div className="pt-5 text-lg pl-25 text-customGrayText"> 
    Ohoro... Timoru Mani . Wadhie Heko. Nie de Mani. Mai mahiu ne ha ha. 
    </div>
    <div className="pt-5 pl-25" style={{ background: 'rgba(255, 255, 255, 0.6)' }}>
  Ohoro... Timoru Mani . Wadhie Heko. Nie de Mani. Mai mahiu ne ha ha.
</div>


    <div className="pt-5  font-bold pl-25 text-customGrayText "> 
   generating ...
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

<div className="mt-3 relative w-[731px] h-[55px] pl-[40px] pr-[332px] py-[23px] bg-white rounded-[20px] shadow justify-start items-start gap-[18.36px] inline-flex">
  <div className="w-15 h-20 relative flex-col justify-center items-start flex" />
  <div className="pl-10 mb-5 mt-0 text-neutral-500 text-opacity-75 text-base font-normal font-['Inter']">Type anything you want, literally anything!</div>
</div>

<div className=" mt-0 w-[60px] h-[60px] p-[18px] bg-cyan-500 rounded-2xl shadow justify-center items-center inline-flex">
    <div className="w-[24px] h-[24px] relative flex-col justify-start items-start flex">
        <div className="w-[7px] h-[3px] bg-white" />
        <div className="w-[4px] h-[2px] bg-cyan-600 rounded-lg" />
    </div>
</div>
<div className=" py-2 w-[210px] h-[18px]"><span style={{ color: "text-neutral-200", fontSize: "text-sm", fontWeight: "font-normal", fontFamily: "font-['Inter']" }}>Powered by code challange</span>
</div>

   </div>
    </div>
  );
}

export default MainSection;
