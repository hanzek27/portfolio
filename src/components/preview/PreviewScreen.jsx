import React from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";
//components
import { orchestrateObject } from "../animations/previewAnimation";
import PreviewBackdrop from "./PreviewBackdrop";
import FullscreenImage from "./FullScreenImage";

export default function PreviewScreen(props) {
  return ReactDOM.createPortal(
    <motion.div
      className="fixed w-full h-full z-10 flex justify-center items-center"
      variants={orchestrateObject}
      initial="initial"
      animate="fullScreen"
      exit="initial"
    >
      <PreviewBackdrop onClick={()=> props.setIdxSelected(null)} />
      <FullscreenImage props={props} />
    </motion.div>,
    document.getElementById("modals")
  );
}
