import React from "react";
import { motion } from "framer-motion";
//components
import { previewAnimation } from "../animations/previewAnimation";

export default function PreviewImage({ images, selectedImg, setselectedImg }) {
  const imagePosition = useImagePosition(selectedImg.item);
  const animationObject = previewAnimation(imagePosition);
  return (
    <motion.div
      className="rounded-medium overflow-scroll relative"
      variants={animationObject}
      drag="y"
      dragSnapToOrigin={true}
      onDragEnd={() => setselectedImg(null)}
    >
      <p>caaaaaaaaaau vole</p>
      <div>
        {images.map(image => (
          <img
            key={image.id}
            className=""
            src={image.img}
          />
        ))}
      </div>
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