export const previewAnimation = ({y, x, width, height}) => {
  const previewWidth = window.innerWidth > 800 ? 500 : window.innerWidth - 20
  const previewHeight = 800
  const previewLeft = (window.innerWidth - width) / 2
  const previewTop = (window.innerHeight - height) / 2
  const leftShift = x - previewLeft
  const topShift = y - previewTop
  return {
    initial: {
      y: topShift,
      x: leftShift,
      width: width,
      height: height,
    },
    fullScreen: {
      y: 0,
      x: 0,
      width: previewWidth,
      height: previewHeight,
    },
  }
}

export const backdropAnimation = {
  initial: {
    opacity: 0,
  },
  fullScreen: {
    opacity: 1,
  },
}

export const orchestrateObject = {
  initial: {
    transition: { when: "afterChildren" }
  },
  fullScreen: {
    transition: { when: "afterChildren" }
  },
};