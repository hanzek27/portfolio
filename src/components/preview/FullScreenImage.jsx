import React from "react";
import { motion } from "framer-motion";
//components
import { previewAnimation } from "../animations/previewAnimation";
import SwitchImageButton from "../buttons/SwitchImageButton";

export default function FullscreenImage({props}) {
  const {
    imagesCount,
    setIdxSelected,
    selectedImg,
  } = props
  const imagePosition = useImagePosition(selectedImg.item);
  const animationObject = previewAnimation(imagePosition);

  return (
    <motion.div
      className="rounded-medium overflow-visible relative bg-white"
      variants={animationObject}
      drag="y"
      dragSnapToOrigin={true}
      onDragEnd={() => setIdxSelected(null)}
    >
      <SwitchImageButton
        onClick={() => shiftImage(setIdxSelected, 'down', imagesCount)}
        addStyles="top-1/2 translate-y-[-50%] left-0 md:left-[-100px]"
        direction="left"
      />
      <div className="h-full w-full rounded-medium overflow-hidden">
        <img className="w-full h-full object-cover" src={selectedImg.path} />
      </div>
      <SwitchImageButton
        onClick={() => shiftImage(setIdxSelected, 'up', imagesCount)}
        addStyles="top-1/2 translate-y-[-50%] right-0 md:right-[-100px]"
        direction="right"
      />
    </motion.div>
  );
}

function useImagePosition(img) {
  const imgPosition = img.getBoundingClientRect();
  return {
    y: imgPosition.top,
    x: imgPosition.left,
    width: img.offsetWidth,
    height: img.offsetHeight,
  };
}

function shiftImage(setIdxSelected, direction, maxIndex) {
  setIdxSelected(prev => {
    if (direction === 'up') return prev === maxIndex ? 1 : prev + 1
    if (direction === 'down') return prev === 1 ? maxIndex : prev - 1
  })
}

