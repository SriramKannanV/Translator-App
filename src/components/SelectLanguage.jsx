import React, { useContext } from 'react'
import { LanguageContext } from './LanguageContext'
import languageData from "../services/languages.json"

const SelectLanguage = () => {

  // const LANGUAGE = [
  //   {code: "ta", display: "Tamil"},
  //   {code: "hi", display: "Hindi"},
  //   {code: "te", display: "Telugu"},
  //   {code: "fr", display: "French"},
  // ]; 

    const {setSelectLang, setDisplayLang} = useContext(LanguageContext);

    const handleLanguage = (e) => {
        setSelectLang(e.currentTarget.dataset.language);
        setDisplayLang(e.currentTarget.dataset.display);
    }

  return (
    <div className='bg-bg-primary border border-text-primary w-42 rounded-xl overflow-hidden'>

        <ul className='md:h-40 h-120 overflow-auto'>
          {languageData.languages.map((lang, index) => {
            return <li key={index} onClick={handleLanguage} className='py-1 px-4 hover:bg-gray-200 cursor-pointer'
            data-language={lang.language} data-display={lang.name}>{lang.name}</li>
          })}
        </ul>
    </div>
  )
}

export default SelectLanguage
