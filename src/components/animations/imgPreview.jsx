export const previewAnimation = ({top, left, width, height}) => {
  const previewWidth = window.innerWidth > 800 ? 500 : window.innerWidth - 20
  const previewHeight = 800
  const previewLeft = (window.innerWidth - width) / 2
  const previewTop = (window.innerHeight - height) / 2
  const leftShift = left - previewLeft
  const topShift = top - previewTop
  return {
    initial: {
      top: topShift,
      left: leftShift,
      width: width,
      height: height,
      transition: {
        duration: 0.4
      }
    },
    fullScreen: {
      top: 0,
      left: 0,
      width: previewWidth,
      height: previewHeight,
    },
  }
}