import { useState, useEffect } from "react";
import { Outlet, useLocation, createBrowserRouter, RouterProvider, } from "react-router-dom";
import { motion, AnimatePresence, MotionConfig } from "framer-motion"

import LineNumbers from "./LineNumbers";
import NavButton from "./buttons/NavButton";
import Nav from "./navigation/Nav";
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
    <main className="relative h-screen grid grid-cols-layout grid-rows-layout p-page-sm md:p-page-md lg:p-page-lg bg-light dark:bg-dark overflow-hidden">
      <div className="flex items-center justify-center">
        <Home width='25px' height='25px' />
      </div>
      <div className="flex items-center pl-text-sm">
        <h3 className="font-main text-logo text-main-light dark:text-main-dark mr-auto">my\portfolio</h3>
        <NavButton onClick={()=> setNav(prev => !prev)} nav={nav} />
        <AnimatePresence key='navigation'>
        {nav && (<Nav changeMode={changeMode} setNav={setNav} />)}
        </AnimatePresence>
      </div>
      <div id='numbersContainer' className="overflow-hidden">
        <LineNumbers/>
      </div>
      <div className="w-full">
        <Outlet context={[setNav]} />
      </div>
      <div className="flex items-center justify-center">
        <Cli width='30px' />
      </div>
      <div className="flex items-center">
        <h3 className="font-console text-console text-main-light dark:text-main-dark mr-auto pl-text-sm">my\portfolio</h3>
        <Dark width='25px' mode={mode} onClick={changeMode} />
      </div>
    </main>
  );
}
