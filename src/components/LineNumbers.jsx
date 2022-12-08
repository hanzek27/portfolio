import React from 'react'

export default function LineNumbers() {
  const numbersString = createNumbers().toString().replaceAll(',', "\n")
  return (
    <div className='font-console text-center text-console leading-9 text-decor-light dark:text-decor-dark whitespace-pre-wrap overflow-hidden'>
      {numbersString}
    </div>
  )
}

function createNumbers() {
  let numbers = []
  for (let i = 0; i < 40; i++) {
    numbers.push(i)
  }
  return numbers
}