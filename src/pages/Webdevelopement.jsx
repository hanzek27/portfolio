import React from 'react'

export default function Webdevelopement() {
  return (
    <section className='grid grid-cols-2 grid-rows-4 w-full h-full py-text-sm pl-text-sm md:pl-text-md md:py-text-md gap-3'>
      <div className='bg-accent-dim col-span-2 md:col-span-1 md:row-span-2 rounded-medium' />
      <div className='bg-accent-dim col-span-2 row-span-2 md:col-start-2 rounded-medium' />
      <div className='col-span-2 row-start-4 md:row-start-3 md:row-span-2 h-full rounded-medium bg-accent-dim'>
      </div>
    </section>
  )
}

{/* <h3>This is headline</h3>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nulla est. Aliquam erat volutpat. Etiam ligula pede, sagittis quis, interdum ultricies, scelerisque eu.</p> */}