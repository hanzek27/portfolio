import { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
//components
import UI from './components/UI'
import Home from './routes/Home'
import Work from './routes/Work'
import AboutMe from './routes/AboutMe'
import Webdevelopement from './pages/Webdevelopement'
import GraphicDesign from './pages/GraphicDesign'
import WhatIlike from './pages/WhatIlike'

export default function Root() {
  const location = useLocation()
  return (
    <AnimatePresence mode='wait' key='pages'>
    <Routes location={location} key={location.pathname}>
      <Route path='/' element={<UI />}>
        <Route index element={<Home />} />
        <Route path='/work' element={<Work />} />
        <Route path='/aboutme' element={<AboutMe />} />
        <Route path='/work/webdevelopement' element={<Webdevelopement />} />
        <Route path='/work/graphicdesign' element={<GraphicDesign />} />
        <Route path='/work/whatilike' element={<WhatIlike />} />
      </Route>
    </Routes>
    </AnimatePresence>
  );
}


