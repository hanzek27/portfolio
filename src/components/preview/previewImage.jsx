import React from "react";
import { motion } from "framer-motion";
import useImagePosition from "../../hooks/useImagePosition";
//components
import { previewAnimation } from "../animations/previewAnimation";

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
        src={images[selectedImg.index - 1].img}
      />
    </motion.div>
  );
}