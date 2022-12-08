import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
//components
import UI from "./components/UI";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Contacts from "./pages/Contacts";
import Webdevelopement from "./pages/Webdevelopement";
import GraphicDesign from "./pages/GraphicDesign";
import WhatIlike from "./pages/WhatIlike";

import CreateWebContext from "./hooks/useCreateWebContext";

export default function Root() {
  const location = useLocation();
  return (
    <CreateWebContext>
      <AnimatePresence mode="wait" key="pages">
        <Routes location={location} key={location.pathname}>
          <Route 
            path="/" 
            element={<UI />}
          >
            <Route index element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/work/webdev" element={<Webdevelopement />} />
            <Route path="/work/design" element={<GraphicDesign />} />
            <Route path="/work/whatilike" element={<WhatIlike />} />
          </Route>
          <Route path='/*' element={<Navigate to="/" replace={true} />} />
        </Routes>
      </AnimatePresence>
    </CreateWebContext>
  );
}