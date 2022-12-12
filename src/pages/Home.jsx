import React from "react";
import { useOutletContext, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

//components
import AnimatedHeadline, { AnimatedSubhead } from "../components/animatedText";
import ConsoleGraphics from "../components/ConsoleGraphics";
import OutlineRouteButton from "../components/buttons/OutlineRouteButton";

export default function Home() {
  const navigate = useNavigate();
  const [useMotionContext, useModeContext, useUpdateContext] = useOutletContext();
  const reduceMotion = useMotionContext();
  const { pathname } = useLocation();

  return (
    <section className="w-full h-full relative flex items-center">
      <motion.div className="max-w-[450px] flex flex-col justify-center pl-text-sm md:pl-text-md lg:pl-text-lg">
        <AnimatedHeadline text="Hey nice to meet you I am Honza..." />
        <AnimatedSubhead text="graphic designer and web developer" />
        <div className="mt-md flex flex-wrap gap-xs">
          <OutlineRouteButton text='contacts' to='/contacts' icon='contacts' />
          <OutlineRouteButton text='work' to='/work' icon='work' />
        </div>
      </motion.div>
      <ConsoleGraphics
        location={pathname}
        classn="absolute bottom-sm left-sm"
      />
    </section>
  );
}
