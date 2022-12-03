import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
//components
import UI from './components/UI'
import Home from './routes/Home'
import Work from './routes/Work'
import Contacts from './routes/Contacts'
import Webdevelopement from './pages/Webdevelopement'
import GraphicDesign from './pages/GraphicDesign'
import WhatIlike from './pages/WhatIlike'
import CarouselPage from './pages/carousel'

import CreateMotionContext from './hooks/useMotionContext'

export default function Root() {
  const location = useLocation()
  return (
    <CreateMotionContext>
      <AnimatePresence mode='wait' key='pages'>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<UI />}>
            <Route index element={<Home />} />
            <Route path='/work' element={<Work />} />
            <Route path='/contacts' element={<Contacts />} />
            <Route path='/work/webdev' element={<Webdevelopement />} />
            <Route path='/work/design' element={<GraphicDesign />} />
            <Route path='/work/whatilike' element={<WhatIlike />} />
            <Route path='/work/carousel' element={<CarouselPage />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </CreateMotionContext>
  );
}


