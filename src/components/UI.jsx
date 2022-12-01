import { useState, useEffect } from "react";
import { Outlet, useLocation, createBrowserRouter, RouterProvider, } from "react-router-dom";
import { AnimatePresence } from "framer-motion"

import LineNumbers from "./LineNumbers";
import NavButton from "./buttons/NavButton";
import Nav from "./navigation/Nav";
import BackButton from "./buttons/BackButton";
import {AnimatedText} from "./animatedText";
import { Home, Cli, Dark } from "./Icons";

export default function UI() {

  const [mode, setMode] = useState(()=> !localStorage.mode ? 'dark' : JSON.parse(localStorage.getItem('mode')) )
  const changeMode = () => setMode(prev => prev === 'dark' ? 'light' : 'dark')

  useEffect(()=>{
    localStorage.setItem('mode', JSON.stringify(mode))
    if (mode === 'dark') return document.documentElement.classList.add(mode)
    if (mode === 'light') return document.documentElement.removeAttribute('class')
  },[mode])

  const { pathname } = useLocation()
  const [nav, setNav] = useState(false)

  return (
    <main className="h-full grid grid-cols-layout grid-rows-layout bg-light dark:bg-dark overflow-hidden p-page-sm md:p-page-md lg:p-page-lg">
      <div className="flex items-center justify-center">
        <BackButton />
      </div>
      <div className="flex justify-between px-sm items-center">
        <AnimatedText text={`home${ pathname }`} />
        <span className="font-console text-console text-decor-light dark:text-decor-dark">--nav</span>
      </div>
      <div className="flex items-center relative">
        <NavButton onClick={()=> setNav(prev => !prev)} nav={nav} />
        <AnimatePresence key='navigation'>
          {nav && (<Nav changeMode={changeMode} setNav={setNav} />)}
        </AnimatePresence>
      </div>
      <div id='numbersContainer' className="overflow-hidden py-3">
        <LineNumbers/>
      </div>
      <div className="w-full h-full">
        <Outlet context={[setNav]} />
      </div>
      <div className="flex flex-col justify-start items-center py-sm">
        <span className="relative top-[20px] w-max font-console text-console text-decor-light dark:text-decor-dark rotate-side origin-top-center">--open</span>
        <span className="relative w-max font-console text-console text-decor-light dark:text-decor-dark rotate-side my-auto">all rights reserved</span>
      </div>
      <div className="flex items-center justify-center">
        <Cli width='30px' />
      </div>
      <div className="flex items-center">
        <h3 className="font-console text-console text-main-light dark:text-main-dark mr-auto pl-text-sm">my\portfolio</h3>
      </div>
      <div>
        <Dark width='25px' mode={mode} onClick={changeMode} />
      </div>
    </main>
  );
}
