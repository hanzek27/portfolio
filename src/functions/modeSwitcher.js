import { useEffect } from "react"
export default function modeSwitcher(mode) {
  useEffect(()=>{
    if (!localStorage.mode) return
    if (mode === 'dark') return document.documentElement.classList.add(mode)
    if (mode === 'light') return document.documentElement.removeAttribute('class')
  },[mode])
}
