import React, { useContext } from 'react'
import { CiSearch } from "react-icons/ci";
import { LuJapaneseYen } from "react-icons/lu";
import { RxSwitch } from "react-icons/rx";
import { FaGithub } from "react-icons/fa";
import { SiWebtrees } from "react-icons/si";
import { mycontext } from './context/ThemeContext';

const App = () => {

  let { theme, toggleTheme } = useContext(mycontext);

  return (
    <>
    <section className={`h-[100vh] w-[100%] text-xl duration-700 ${theme == "light" ? 'bg-red-500 text-black':'bg-black text-red-500'}`}>
      <h1>Hello World</h1>
      <button onClick={() => toggleTheme(theme === "light" ? "dark" : "light")}>click</button>
      </section>
    </>
  )
}

export default App;