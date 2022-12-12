import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Work, Contacts } from "../Icons";
import { useMotionContext } from "../../hooks/useCreateWebContext";
import reducedAnimations from "../animations/reducedAnimations";

export default function OutlineRouteButton({ text, to, icon }) {
  const reduceMotion = useMotionContext()
  const SelectedIcon =
    icon === "work" ? Work : icon === "contacts" ? Contacts : undefined;
  const navigate = useNavigate();
  return (
    <motion.button
      className={`flex gap-4 items-center py-3 px-5 rounded-medium border border-accent-blue text-console font-console text-accent-blue md:w-max`}
      onClick={() => navigate(to)}
      variants={reduceMotion ? reducedAnimations : buttonAnimation}
      initial='initiate'
      animate='onScreen'
      exit='out'
      whileHover={{scale: 1.1}}
      transition={{duration: 0.2}}
    >
      {icon && <SelectedIcon width="16px" />}
      {text}
    </motion.button>
  );
}

const buttonAnimation = {
  initiate: {
    opacity: 0
  },
  onScreen: {
    opacity: 1,
    transition: {
      duration: 0.7,
    }
  },
  out: {
    opacity: 0,
    transition: {
      duration: 0.7,
    }
  }
}
