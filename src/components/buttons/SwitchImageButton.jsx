import React from "react";
import { motion } from "framer-motion";
import { Arrow } from "../Icons";

export default function SwitchImageButton({ onClick, addStyles, direction }) {
  return (
    <motion.button
      className={`w-max py-2 px-3 rounded-full absolute z-10 ${addStyles}`}
      onClick={(event) => {
        event.stopPropagation();
        onClick();
      }}
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      transition={{duration: 0.1}}
    >
      <Arrow width='20px' fill='white' direction={direction} />
    </motion.button>
  );
}