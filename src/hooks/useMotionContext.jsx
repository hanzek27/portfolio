import { useState, createContext, useContext } from "react";

const MotionContext = createContext()
const MotionUpdateContext = createContext()

export function useMotionContext() {
  return useContext(MotionContext)
}

export function useMotionUpdateContext() {
  return useContext(MotionUpdateContext)
}


export default function CreateMotionContext({ children }) {
  const [reduceMotion, setReduceMotion] = useState(false)

  function useUpdateMotionContext() {
    setReduceMotion(prev => !prev)
  }

  return (
    <MotionContext.Provider value={reduceMotion}>
      <MotionUpdateContext.Provider value={useUpdateMotionContext}>
        {children}
      </MotionUpdateContext.Provider>
    </MotionContext.Provider>
  )
}