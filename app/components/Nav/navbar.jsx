import React from 'react';
import { RiMenu3Fill } from 'react-icons/ri';

function Navbar() {
  return (
    <div>
      <div className="h-20 mt-0 w-full bg-white">
        <div className="py-3 px-3 w-135 h-57 bg-white flex flex-row justify-between">
          <img
            src="/images/AppLogo.svg" // Replace with your ChatGPT logo
            alt="Elingo Logo"
            className="w-135 h-57 py-3 justify-start"
          />
  <div className="flex flex-row justify-end text-black font-bold text-3xl mr-4 mt-5">
  <RiMenu3Fill />
</div>


        </div>
      </div>
    </div>
  );
}

export default Navbar;
