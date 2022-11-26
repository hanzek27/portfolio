import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion"
//components
import LineNumbers from "./components/LineNumbers";
import NavButton from "./components/buttons/NavButton";
import Nav from "./components/navigation/Nav";
import { Home, Cli, Dark } from "./components/Icons";

export default function Root() {
  const [mode, setMode] = useState(()=> !localStorage.mode ? 'dark' : JSON.parse(localStorage.getItem('mode')) )
  const changeMode = () => setMode(prev => prev === 'dark' ? 'light' : 'dark')

  useEffect(()=>{
    localStorage.setItem('mode', JSON.stringify(mode))
    if (mode === 'dark') return document.documentElement.classList.add(mode)
    if (mode === 'light') return document.documentElement.removeAttribute('class')
  },[mode])

  const { pathname } = useLocation()
  const [nav, setNav] = useState(()=> (pathname === '/' && window.innerWidth > 900) ? true : false)
  console.log(nav)
  //console.log(pathname === '/' && window.innerWidth > 900)

  return (
    <main className="relative h-screen grid grid-cols-layout grid-rows-layout p-page-sm md:p-page-md lg:p-page-lg bg-light dark:bg-dark overflow-hidden">
      <div className="flex items-center justify-center">
        <Home width='25px' height='25px' />
      </div>
      <div className="flex items-center pl-text-sm">
        <h3 className="font-main text-logo text-main-light dark:text-main-dark mr-auto">my\portfolio</h3>
        <NavButton onClick={()=> setNav(prev => !prev)} nav={nav} />
        <AnimatePresence initial={true}>
        {nav && (<Nav changeMode={changeMode} />)}
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


