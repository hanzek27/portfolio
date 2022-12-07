import React from 'react'
import {
  ReactIcon,
  ReactRouterIcon,
  FigmaIcon,
  FramerMotionIcon,
  StyledComponentsIcon,
  WebpackIcon
} from '../components/Icons'

export default function UsedTechStack(props) {

  const techIcons = [
    {icon: FigmaIcon, name: 'figma'},
    {icon: ReactIcon, name: 'react'},
    {icon: StyledComponentsIcon, name: 'styledcomponents'},
    {icon: ReactRouterIcon, name: 'reactrouter'},
    {icon: FramerMotionIcon, name: 'framermotion'},
    {icon: WebpackIcon, name: 'webpack'}
  ]
  
  return (
    <div className='flex flex-wrap gap-5 md:gap-8 items-center'>
      {techIcons.map(obj => {
        const CurrenIcon = obj.icon
        return props[obj.name] && <CurrenIcon key={obj.name} height={obj.name === 'reactrouter' ? '25px' : '30px'} />
      })}
    </div>
  )
}