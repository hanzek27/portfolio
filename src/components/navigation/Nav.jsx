import React, { useEffect } from "react";
import ConsoleButton from "../buttons/ConsoleButton";
import { motion, useAnimationControls } from "framer-motion";
import {
  navAnimation,
  navButtonsAnimation,
  reducedMotionObject,
} from "../animations/textAnimation";
import { useMotionContext } from "../../hooks/useCreateWebContext";
import { useUpdateContext } from "../../hooks/useCreateWebContext";

export default function Nav({ setNav }) {
  const [setMotion, setMode] = useUpdateContext();
  const controller = useAnimationControls();
  const reduceMotion = useMotionContext();

  const navButtons = [
    { action: "/", text: "cd homepage" },
    { action: "/work", text: "cd work" },
    { action: "/contacts", text: "cd contact_me" },
    //{ action: setMode, text: "mode dark || light" },
  ];

  const styles = {
    size: "w-navWidth md:w-[400px]",
    design:
      "py-lg flex flex-col items-center rounded-medium backdrop-blur-md ring-2 ring-inset z-[10]",
    color:
      "bg-nav-light dark:bg-nav-dark dark:ring-decor-dark ring-decor-light",
    position: "fixed top-md right md:absolute md:top-[40px] md:right-[40px] ",
  };

  useEffect(() => {
    if (reduceMotion) controller.stop();
    if (!reduceMotion) controller.start("open");
  }, [reduceMotion]);

  return (
    <div>
      <motion.nav
        onClick={() => setNav(false)}
        key="navigation"
        variants={reduceMotion ? reducedMotionObject : navAnimation}
        initial="initial"
        animate={controller}
        exit="initial"
        className={`${styles.design} ${styles.position} ${styles.color} ${styles.size}`}
      >
        <motion.ul className="flex flex-col gap-14 w-max">
          {navButtons.map((button, index) => {
            const side = index % 2 == 0; // returns true or false
            return (
              <ConsoleButton
                key={button.text}
                itemsAnimation={
                  reduceMotion ? reducedMotionObject : navButtonsAnimation
                }
                side={side}
                action={button.action}
                text={button.text}
              />
            );
          })}
        </motion.ul>
      </motion.nav>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        onClick={() => setNav(false)}
        className="fixed block md:hidden z-[2] inset-0 bg-nav-light dark:bg-nav-dark"
      />
    </div>
  );
}
