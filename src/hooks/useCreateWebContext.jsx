import { createContext, useContext } from "react";
import useLocalStorage from "./useLocalStorage";

const MotionContext = createContext()
const ModeContext = createContext()
const UpdateContext = createContext()

export function useMotionContext() {
  return useContext(MotionContext)
}

export function useModeContext() {
  return useContext(ModeContext)
}

export function useUpdateContext() {
  return useContext(UpdateContext)
}


export default function CreateWebContext({ children }) {
  const [motion, setMotion] = useLocalStorage('reduceMotion', false)
  const [mode, setMode] = useLocalStorage('mode', 'dark')

  function setMotionFunc() {
    setMotion(prev => !prev)
  }

  function setModeFunc() {
    setMode(prev => prev === 'dark' ? 'light' : 'dark')
  }

  return (
    <ModeContext.Provider value={mode}>
      <MotionContext.Provider value={motion}>
        <UpdateContext.Provider value={[setMotionFunc, setModeFunc]}>
          {children}
        </UpdateContext.Provider>
      </MotionContext.Provider>
    </ModeContext.Provider>
  )
}