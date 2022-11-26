import React from 'react'
import { MenuIcon } from '../Icons'

export default function NavButton({onClick, nav}) {
  return (
    <button onClick={onClick} className={ `p-[8px] bg-accent-blue h-full w-[30px] z-10 flex items-center justify-center rounded-tr-medium rounded-bl-medium`} >
      <MenuIcon width='100%' state={nav} />
    </button>
  )
}
