import React, { useContext, useState } from 'react'
import { LanguageContext } from './LanguageContext'

const ResultCard = () => {

  const {translatedText} = useContext(LanguageContext);
  const [copy, setCopy] = useState("Copy")

  async function copyAction(text) {
    if (!translatedText) {
      setCopy("Nothing Copy!!!");
      
      setTimeout(() => {
            setCopy("Copy")
          }, 2000);
    } else {
        try {
          await navigator.clipboard.writeText(text)
          setCopy("Copied!")

          setTimeout(() => {
            setCopy("Copy")
          }, 2000);
        } catch (error) {
          console.log(error)
        }
      }
  }

  return (
    <div className='pr-md-30 mx-auto mx-md-0 w-95 md:w-full mb-10'>
      <div className='border border-slate-300 rounded-xl p-6 bg-bg-secondary shadow-xl h-100 flex flex-col'>
        <h1 className='font-medium text-lg mb-4'>Translated Text</h1>
        <textarea className='bg-bg-primary w-full border border-slate-200 rounded-xl p-2 mb-8 focus:outline-accent flex-1' defaultValue={translatedText} placeholder='Translated Text...' style={{resize: "none"}}></textarea>
        <div className='text-end'>
            <button onClick={() => copyAction(translatedText)} 
            className='bg-accent py-2.5 w-60 rounded-xl font-semibold text-lg text-white shadow-lg cursor-pointer hover:shadow-lg hover:shadow-blue-500/25 active:scale-95'><i className="fa-solid fa-copy mr-1.5"></i>{copy}</button>
        </div>
      </div>
    </div>
  )
}

export default ResultCard
