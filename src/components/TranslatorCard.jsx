import React, { useContext, useState, useSyncExternalStore } from 'react'
import SelectLanguage from './SelectLanguage'
import { LanguageContext } from './LanguageContext';
import { translateText } from "../services/translateApi"

const Translator = () => {

  const [dropdDown, setDropDown] = useState(false);
  const [char, setChar] = useState(0);
  const [inputVal, setInputVal] = useState("");
  const [loading, setLoading] = useState("Translate")
  const [error, setError] = useState("");

  const {selectLang, setSelectLang, setTranslatedText, translatedText, displayLang, setDisplayLang} = useContext(LanguageContext);

  const handleTranlate = async () => {
    if (inputVal === "" || selectLang === "Select Language") {
      setError("Please Enter Value");
    } else {
      setError(false);
      setLoading("Translating...")

      const translation = await translateText(inputVal, selectLang);
      setTranslatedText(translation.data.translations.translatedText);
      // console.log(translation.data.translations.translatedText);

      setLoading("Translate")
    }
  }

  const handleClear = () => {
    setInputVal("");
    setSelectLang("");
    setTranslatedText("");
    setDisplayLang("Select Language")
    setChar(0);
  }

  return (
    <div className='pl-md-30 mx-auto mx-md-0 mb-md-20 w-115 md:w-full mb-10 relative'>
      <div className='border border-slate-300 rounded-xl p-6 bg-bg-secondary shadow-xl h-100'>
        <h1 className='font-medium text-lg mb-4'>From: English <i className="fa-solid fa-flag-usa"></i></h1>
        <textarea onChange={(e) => {setChar(e.target.value.length); setInputVal(e.target.value)}} value={inputVal} 
        className={`bg-bg-primary h-38 w-full border border-slate-200 rounded-xl p-2 -mb-10 focus:outline-accent ${error ? "ring-2 ring-red-500 border-transparent" : ""}`} 
        placeholder='Enter Your Text Here...' style={{resize: "none"}}></textarea>
        <h1 className='font-normal text-md text-slate-400 mb-4 text-end pr-3'>Character: {char}</h1>
        {/* {console.log(inputVal)} */}

        <div>
          <h1 className='font-medium text-lg'>Translate to</h1>

          <div onClick={() => setDropDown((prev) => !prev)} 
          className={`flex justify-between my-1 border border-text-primary w-42 py-1.5 px-3 rounded-md content-center mb-8 cursor-pointer ${error ? "ring-2 ring-red-500 border-transparent" : ""}`}>
            <p className='text-sm'>{displayLang}</p>
            <i className="fa-solid fa-sort-down"></i>
          </div>
          {/* {console.log(dropdDown)} */}

          <div className='flex space-x-4 justify-center'>
            <button onClick={handleTranlate} 
            className='bg-accent py-2.5 w-60 rounded-xl font-semibold text-lg text-white shadow-lg cursor-pointer hover:shadow-lg hover:shadow-blue-500/25 active:scale-95'><i className="fa-solid fa-language mr-1.5"></i>{loading}</button>
            <button onClick={handleClear} 
            className='bg-text-secondary py-2.5 w-60 rounded-xl font-semibold text-lg text-white shadow-lg cursor-pointer hover:shadow-lg hover:shadow-slate-500/25 active:scale-95'><i className="fa-solid fa-trash mr-1.5"></i>Clear</button>
          </div>

          <div className='text-center mt-10 text-xl font-bold text-red-500'>
            {error}
          </div>
        </div>
      </div>

      {dropdDown ? (
        <div onClick={() => setDropDown(false)} className='absolute top-73 left-36'>
          <SelectLanguage />
        </div>
      ) : ""}

    </div>
  )
}

export default Translator
