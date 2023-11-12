import React from 'react';
import { RiHome5Line } from 'react-icons/ri';
import { FcAbout } from 'react-icons/fc';
import { TbSettings2 } from 'react-icons/tb';

function Sidebar() {
  return (
    <div className="absolute h-full w-1/4 bg-[#1389A3] text-white flex flex-col items-start mt-0 rounded-r-lg sidebar">
      <div className="relative mt-5 ml-10 w-40 flex flex-col flex-grow">
        <div className="relative ml-0 flex flex-col">
          <div className="flex items-center p-5">
            <div className="flex items-center font-bold text-white">
              <div className="mr-2">
                <RiHome5Line className='text-2xl' />
              </div>
              Home
            </div>
          </div>
          <div className="flex items-center p-5">
            <div className="flex items-center font-bold text-white">
              <div className="mr-2">
                <FcAbout className='text-2xl color-white' />
              </div>
              About
            </div>
          </div>
          <div className="flex items-center p-5">
            <div className="flex items-center font-bold text-white">
              <div className="mr-2">
                <TbSettings2 className='text-2xl' />
              </div>
              Settings
            </div>
          </div>
        </div>
        
        <div className="mt-auto">
          <div className="text-white font-bold mb-5">Translate it to your lingo</div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
