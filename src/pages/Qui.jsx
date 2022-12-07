import React from 'react'
import { motion } from "framer-motion";
import QUIpreview from '../assets/images/web-developement/QUI/QUI_preview.png'
import UsedTechStack from '../components/UsedTechStack';
import OutlineButton from '../components/buttons/OutlineButton';

export default function Qui() {
  return (
    <motion.div className='grid grid-cols-1 grid-rows-[auto_1fr] md:grid-cols-2 md:grid-rows-none w-full h-full'>
      <motion.div className='flex justify-start items-start md:items-center pl-text-sm md:pr-md md:pl-text-md lg:pl-text-lg'>
        <div>
          <motion.h2 className='font-main text-large text-main-light dark:text-main-dark'>QUI</motion.h2>
          <motion.h4 className='font-main text-medium text-main-light dark:text-main-dark pt-5 pb-8'>Simple trivia web aplication</motion.h4>
          <OutlineButton text='go to project' />
          <motion.p className='font-main text-paragraph text-dim-light dark:text-dim-dark pt-8 pb-8'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nulla est. Aliquam erat volutpat. Etiam ligula pede, sagittis quis, interdum ultricies, scelerisque eu.</motion.p>
          <UsedTechStack react reactrouter framermotion webpack styledcomponents figma />
        </div>
      </motion.div>
      <motion.div className='row-start-1 md:col-start-2 px-sm pt-md pb-sm md:p-md'>
        <img src={QUIpreview} className='w-full' />
      </motion.div>
    </motion.div>
  )
}
