import { useEffect, useState } from 'react'
import {
  motion,
  AnimatePresence,
  useAnimationControls,
  useTransform,
  useMotionValue,
  useMotionTemplate,
} from "framer-motion";

export default function usePreview() {
  const [preview, setpreview] = useState(false)
  const controller = useAnimationControls()

  function togglePreview() {
    setpreview(prev => !prev)
  }
  
  return [preview, togglePreview]
}
