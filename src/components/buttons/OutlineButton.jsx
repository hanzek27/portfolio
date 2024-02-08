import React from "react";
import { motion } from "framer-motion";

export default function OutlineButton({ to, text, ...rest }) {
  return (
    <motion.a
      target="_blank"
      href={to}
      {...rest}
      className="py-3 px-8 rounded-medium border border-accent-blue text-console font-console text-accent-blue w-max md:w-max"
    >
      {text}
    </motion.a>
  );
}
