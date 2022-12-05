import React, { forwardRef } from "react";
import {
  motion,
  AnimatePresence,
  useAnimationControls,
  useTransform,
  useMotionValue,
  useMotionTemplate,
} from "framer-motion";

//components
import { previewAnimation } from "../animations/previewAnimation";
import SwitchImageButtons from "../buttons/SwitchImageButtons";

export default function PreviewImage({ images, selectedImg }) {
  const animationObject = previewAnimation(imagePosition(selectedImg.item));
  console.log(animationObject)
  return (
    <motion.div variants={animationObject} >
      <img
        onClick={(e) => e.stopPropagation()}
        src={images[selectedImg.index - 1].img}
        className="w-full h-full object-cover"
      />
    </motion.div>
  )
}

function imagePosition(item) {
  const imgPosition = item.getBoundingClientRect();
  return {
    top: imgPosition.top,
    left: imgPosition.left,
    width: item.offsetWidth,
    height: item.offsetHeight,
  }
}