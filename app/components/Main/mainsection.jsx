"use client"
import React, { useState } from 'react';

function MainSection() {
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');

  // You can implement translation logic here when the user enters text and clicks a button.

  const handleTranslate = () => {
    // Implement translation logic here, e.g., using an API or your translation model.
    // Update the 'translatedText' state with the translated text.
  };

  return (
    <div className=" absolute flex-grow p-40 ml-60 mt-10 h-full">
      <h2 className="text-2xl font-semibold mb-4 color-black">Translation Model</h2>

      <textarea
        className="w-full h-40 mb-4 p-2o rounded-lg"
        placeholder="Enter text to translate..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />

      <button className="bg-blue-500 text-white px-14 py-2 rounded-lg" onClick={handleTranslate}>
        Translate
      </button>

      <div className="mt-4 ml-15">
        <h3 className="text-lg font-semibold">Translated Text</h3>
        <p>{translatedText}</p>
      </div>
    </div>
  );
}

export default MainSection;
