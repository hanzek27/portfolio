import { useState, useEffect, useRef } from "react"
import { useAnimationControls } from "framer-motion"

export default function useSimplePreview(img, setImgselected) {

  const openItemIndex = useRef(50)
  const controller = useAnimationControls()

  useEffect(()=>{
    if (!img) return
    const {height, width, top, left} = calculatePosition(img)
    openItemIndex.current = openItemIndex.current + 1

    controller.start(selected => (
      selected ? {
        width: width, 
        height: height, 
        top: top, 
        left: left,
        zIndex: openItemIndex.current,
      } : styles.collapsed))
  },[img])

  function previewClose() {
    controller.start(styles.collapsed)
    setImgselected(null)
  }
  return [controller, previewClose]
}



function calculatePosition(image) {
  //querying selected item
  const selectedItem = document.getElementById(image.id)

  //expanded sizes
  const itemHeight = window.innerWidth > 800 ? 700 : 700
  const itemWidth = window.innerWidth > 800 ? (
    image.width ? image.width : 400 
  ) : (window.innerWidth - 30)
  
  //getting space needed to center expanded item
  const leftPosition = (window.innerWidth - itemWidth) / 2
  const topPosition = (window.innerHeight - itemHeight) / 2

  const top = selectedItem.getBoundingClientRect().top
  const left = selectedItem.getBoundingClientRect().left

  const leftShift = leftPosition - left
  const topShift = topPosition - top

  return {
    height: itemHeight,
    width: itemWidth,
    top: topShift,
    left: leftShift,
  }
}

const styles = {
  collapsed: {
    height: 'auto', 
    width: 'auto', 
    left: 0, 
    top: 0,
    transition: { 
      duration: 0.3,
    },
    transitionEnd: { 
      zIndex: 0,
    }
  }
}