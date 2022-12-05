import React from 'react'
import {
  motion,
  AnimatePresence,
  useAnimationControls,
  useTransform,
  useMotionValue,
  useMotionTemplate,
} from "framer-motion";

//components
import PreviewBackdrop from './previewBackdrop';
import PreviewImage from './PreviewImage'

export default function Preview({ images, selectedImg, setselectedImg }) {
  return (
    <PreviewBackdrop>
      <PreviewImage images={images} selectedImg={selectedImg} />
    </PreviewBackdrop>
  )
}


function shiftIndex(setCurrentIndex, maxIndex, direction) {
  setCurrentIndex((prev) => {
    if (direction === "down") {
      return prev === 1 ? maxIndex : prev - 1;
    } else {
      return prev === maxIndex ? 1 : prev + 1;
    }
  });
}