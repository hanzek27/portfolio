import React, { useState, useEffect, useRef } from 'react'

export default function LineNumbers() {
  const [numberOfLines, setNumberOfLines] = useState(0)

  useEffect(()=>{
    const numbersContainer = document.getElementById('numbersContainer')
    const parrentHeight = numbersContainer.offsetHeight
    const numberOfLines = parrentHeight / 40
    setNumberOfLines(Math.floor(numberOfLines))
  },[])
  
  return (generateNumbers(numberOfLines))
}

function generateNumbers(lines) {
  let numbers = []
  for (let i = 0; i < lines; i++ ) {
    numbers.push(
      <div key={i} className='w-full h-[40px] font-console text-console text-decor-light dark:text-decor-dark flex items-center justify-center'>{i}</div>
    )
  }
  return numbers
}