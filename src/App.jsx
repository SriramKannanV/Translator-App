import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import ResultCard from "./components/ResultCard"
import Rights from "./components/Rights"
import SelectLanguage from "./components/SelectLanguage"
import TranslatorCard from "./components/TranslatorCard"
import { LanguageContext } from "./components/LanguageContext"
import { useState } from "react"

function App() {

  const [selectLang, setSelectLang] = useState("");
  const [displayLang, setDisplayLang] = useState("Select Language");
  const [translatedText, setTranslatedText] = useState("");

  return (
    <LanguageContext.Provider value={{selectLang, setSelectLang, translatedText, setTranslatedText, displayLang, setDisplayLang}}>
      <Navbar />
      <Hero />
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 items-center md:mx-30">
        <TranslatorCard />
        <ResultCard />
      </div>
      <Rights />
    </LanguageContext.Provider>
  )
}

export default App
