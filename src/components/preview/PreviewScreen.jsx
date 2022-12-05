import React from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";
//components
import { orchestrateObject } from "../animations/previewAnimation";
import PreviewImage from "./previewImage";
import PreviewBackdrop from "./PreviewBackdrop";

export default function PreviewScreen({
  images,
  selectedImg,
  setselectedImg,
  setHideThumbnail,
}) {
  return ReactDOM.createPortal(
    <motion.div
      className="fixed w-full h-full z-10 flex justify-center items-center"
      variants={orchestrateObject}
      initial="initial"
      animate="fullScreen"
      exit="initial"
      onAnimationStart={() => setHideThumbnail(selectedImg.id)}
      onAnimationComplete={(status) =>
        status === "initial" && setHideThumbnail(null)
      }
    >
      <PreviewBackdrop setselectedImg={setselectedImg} />
      <PreviewImage
        images={images}
        selectedImg={selectedImg}
        setselectedImg={setselectedImg}
      />
    </motion.div>,
    document.getElementById("modals")
  );
}
