import React, { useEffect, useState } from 'react'
import { Cli, Dark } from './Icons'
import MotionToggle from './buttons/MotionToggle'
import { useUpdateContext, useModeContext } from '../hooks/useCreateWebContext'

export default function Footer() {

  const mode = useModeContext()
  const [setMotion, setMode] = useUpdateContext()

  return (
    <footer>
      <div className="flex items-center justify-center">
        <Cli width='30px' />
      </div>
      <div className="flex items-center justify-center">
        <h3 className="font-console text-console text-main-light dark:text-main-dark mr-4 pl-text-sm">reduce motion</h3>
        <MotionToggle />
      </div>
      <div>
        <Dark width='25px' mode={mode} onClick={setMode} />
      </div>
    </footer>
  )
}
