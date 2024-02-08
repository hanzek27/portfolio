import React, { useContext } from "react";
import { motion } from "framer-motion";
import { useOutletContext, useLocation } from "react-router-dom";
import {
  orchestration,
  itemEnterAnimation,
} from "../components/animations/contactsAnimations";
import reducedAnimations from "../components/animations/reducedAnimations";
import OutlineButton from "../components/buttons/OutlineButton";

//components
import AnimatedHeadline from "../components/animatedText";
import ConsoleGraphics from "../components/ConsoleGraphics";
import { Phone, Email } from "../components/Icons";

export default function Work() {
  const [useMotionContext] = useOutletContext();
  const reducedMotion = useMotionContext();
  const { pathname } = useLocation();
  return (
    <section className="relative grid grid-cols-1 grid-rows-4 w-full h-full">
      <motion.article
        variants={reducedMotion ? reducedAnimations : orchestration}
        initial="initiate"
        animate="onScreen"
        exit="out"
        className="max-w-[450px] min-w-[300px] row-start-2 row-span-2 space-y-10 flex flex-col justify-center pl-text-sm md:pl-text-md lg:pl-text-lg"
      >
        <AnimatedHeadline text="Contact me" />
        <motion.p
          variants={reducedMotion ? reducedAnimations : itemEnterAnimation}
          className="font-console text-main-light dark:text-main-dark text-console flex items-center gap-4"
        >
          <Phone width="20px" />
          606 625 459
        </motion.p>
        <motion.p
          variants={reducedMotion ? reducedAnimations : itemEnterAnimation}
          className="font-console text-main-light dark:text-main-dark text-console flex items-center gap-4"
        >
          <Email width="20px" />
          honzastepan27@gmail.com
        </motion.p>
        <OutlineButton
          variants={reducedMotion ? reducedAnimations : itemEnterAnimation}
          to={"src/assets/CV/Jan_Stepan_cv.pdf"}
          text="Download CV"
          download="Jan_Stepan_cv.pdf"
        />
      </motion.article>
      <ConsoleGraphics
        location={pathname}
        classn="absolute bottom-sm left-sm"
      />
    </section>
  );
}
