import React from "react";
import { motion } from "framer-motion";
import QUIpreview from "../assets/images/web-developement/QUI/QUI_preview.png";
import UsedTechStack from "../components/UsedTechStack";
import OutlineButton from "../components/buttons/OutlineButton";
import {
  orchestration,
  imageAnimation,
  textAnimation,
} from "../components/animations/quiAnimation";

export default function Qui() {
  return (
    <motion.div
      className="grid grid-cols-1 grid-rows-[auto_1fr] md:grid-cols-2 md:grid-rows-none lg:grid-cols-[auto_1fr] gap-20 w-full h-full px-xs py-lg md:py-none md:px-md lg:px-lg"
      variants={orchestration}
      initial="initiate"
      animate="onScreen"
      exit="initiate"
    >
      <motion.div
        variants={textAnimation}
        className="flex justify-start items-start md:items-center"
      >
        <div className="max-w-[400px]">
          <motion.h2 className="font-main text-large text-main-light dark:text-main-dark">
            QUI
          </motion.h2>
          <motion.h4 className="font-main text-medium text-main-light dark:text-main-dark pt-5 pb-10">
            Simple trivia web aplication
          </motion.h4>
          <OutlineButton
            to="https://loquacious-douhua-f85fe1.netlify.app/"
            text="Try it out"
          />
          <motion.p className="font-main text-paragraph text-dim-light dark:text-dim-dark py-10">
            Small progressive web application for creating editing and playing
            trivia games.
          </motion.p>
          <UsedTechStack
            react
            reactrouter
            framermotion
            webpack
            styledcomponents
            figma
          />
        </div>
      </motion.div>
      <motion.div
        variants={imageAnimation}
        className="row-start-1 md:col-start-2 flex items-center justify-center"
      >
        <motion.img
          src={QUIpreview}
          className="relative w-full max-w-[500px]"
        />
      </motion.div>
    </motion.div>
  );
}
