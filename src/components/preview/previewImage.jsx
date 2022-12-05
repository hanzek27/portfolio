import React from "react";
import { motion } from "framer-motion";
import useImagePosition from "../../hooks/useImagePosition";
//components
import { previewAnimation } from "../animations/previewAnimation";
import SwitchImageButtons from "../buttons/SwitchImageButtons";

export default function PreviewImage({ images, selectedImg, setselectedImg }) {
  const imageCount = images.length
  const imagePosition = useImagePosition(selectedImg.item);
  const animationObject = previewAnimation(imagePosition);
  return (
    <motion.div
      className="rounded-medium overflow-hidden relative"
      variants={animationObject}
      drag="y"
      dragSnapToOrigin={true}
      onDragEnd={() => setselectedImg(null)}
    >
      <div>
        {images.map(img => (
          <img
            className="w-full h-full object-cover"
            src={images[selectedImg.index - 1].img}
          />
        ))}
      </div>
    </motion.div>
  );
}