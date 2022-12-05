import React from "react";
import ReactDOM from "react-dom";
import { orchestrateObject } from "../animations/previewAnimation";
import {
  motion,
  AnimatePresence,
  useAnimationControls,
  useTransform,
  useMotionValue,
  useMotionTemplate,
} from "framer-motion";


export default function PreviewBackdrop({ children }) {
  return ReactDOM.createPortal(
    <motion.div
      variants={orchestrateObject}
      initial="initial"
      animate="fullScreen"
      exit="initial"
      className="fixed w-full h-full z-10 flex justify-center items-center bg-nav-dark"
    >
      {children}
    </motion.div>,
    document.getElementById("modals")
  );
}
