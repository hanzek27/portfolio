import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import QUIpreview from "../assets/images/web-developement/QUI/QUI_preview.png";
import UsedTechStack from "../components/UsedTechStack";
import OutlineButton from "../components/buttons/OutlineButton";
import {
  orchestration,
  sidesEnter,
  textItems,
} from "../components/animations/quiAnimation";

export default function Qui() {
  const navigate = useNavigate()
  return (
    <motion.div
      variants={orchestration}
      initial="initiate"
      animate="onScreen"
      exit="initiate"
      className="grid grid-cols-1 grid-rows-[auto_1fr] md:grid-cols-2 md:grid-rows-none lg:grid-cols-[auto_1fr] gap-20 w-full h-full px-xs py-lg md:py-none md:px-md lg:px-lg"
    >
      <motion.div
        variants={sidesEnter}
        className="flex justify-start items-start md:items-center"
      >
        <div className="max-w-[400px]">
          <motion.h2
            variants={textItems}
            className="font-main text-large text-main-light dark:text-main-dark"
          >
            QUI
          </motion.h2>
          <motion.h4
            variants={textItems}
            className="font-main text-medium text-main-light dark:text-main-dark pt-5 pb-10"
          >
            Simple trivia web aplication
          </motion.h4>
          <OutlineButton to='https://loquacious-douhua-f85fe1.netlify.app/' text="go to project" />
          <motion.p
            variants={textItems}
            className="font-main text-paragraph text-dim-light dark:text-dim-dark py-10"
          >
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nulla est.
            Aliquam erat volutpat. Etiam ligula pede, sagittis quis, interdum
            ultricies, scelerisque eu.
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
        variants={sidesEnter}
        className="row-start-1 md:col-start-2 flex items-center justify-center"
      >
        <img src={QUIpreview} className="w-full max-w-[500px]" />
      </motion.div>
    </motion.div>
  );
}
