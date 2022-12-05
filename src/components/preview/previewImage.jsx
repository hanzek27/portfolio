import React from "react";
import {
  motion,
  useAnimationControls,
} from "framer-motion";

//components
import { previewAnimation } from "../animations/previewAnimation";
import SwitchImageButtons from "../buttons/SwitchImageButtons";

export default function PreviewImage({ images, selectedImg, setselectedImg }) {
  const animationObject = previewAnimation(imagePosition(selectedImg.item));
  return (
    <motion.div
      className="rounded-medium overflow-hidden"
      variants={animationObject}
      drag="y"
      dragSnapToOrigin={true}
      onDragEnd={() => setselectedImg(null)}
    >
      <img
        onClick={(e) => e.stopPropagation()}
        src={images[selectedImg.index - 1].img}
        className="w-full h-full object-cover"
      />
    </motion.div>
  );
}




function imagePosition(item) {
  const imgPosition = item.getBoundingClientRect();
  return {
    top: imgPosition.top,
    left: imgPosition.left,
    width: item.offsetWidth,
    height: item.offsetHeight,
  };
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