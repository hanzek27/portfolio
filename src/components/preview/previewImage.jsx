import React from "react";
import { motion } from "framer-motion";
import useImagePosition from "../../hooks/useImagePosition";

//components
import { previewAnimation } from "../animations/previewAnimation";
//import SwitchImageButtons from "../buttons/SwitchImageButtons";

export default function PreviewImage({ images, selectedImg, setselectedImg }) {
  const imagePosition = useImagePosition(selectedImg.item)
  const animationObject = previewAnimation(imagePosition);
  return (
    <motion.div
      className="rounded-medium overflow-hidden"
      variants={animationObject}
      drag="y"
      dragSnapToOrigin={true}
      onDragEnd={() => setselectedImg(null)}
    >
      <img
        className="w-full h-full object-cover"
        onClick={(e) => e.stopPropagation()}
        src={images[selectedImg.index - 1].img}
      />
    </motion.div>
  );
}

// function shiftIndex(setCurrentIndex, maxIndex, direction) {
//   setCurrentIndex((prev) => {
//     if (direction === "down") {
//       return prev === 1 ? maxIndex : prev - 1;
//     } else {
//       return prev === maxIndex ? 1 : prev + 1;
//     }
//   });
// }