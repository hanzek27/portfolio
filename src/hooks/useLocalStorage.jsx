import { useState, useEffect } from 'react'

export default function useLocalStorage(name, value) {
  const [local, setLocal] = useState(()=> {
    return localStorage[name] 
      ? JSON.parse(localStorage.getItem(name)) 
      : value
  })
  useEffect(()=>{
    localStorage.setItem(name, JSON.stringify(local))
  },[local])
  return [local, setLocal]
}
