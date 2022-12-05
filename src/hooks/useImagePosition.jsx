
export default function useImagePosition(img) {
  return getImagePosition(img)
}

function getImagePosition(item) {
  const imgPosition = item.getBoundingClientRect();
  return {
    y: imgPosition.top,
    x: imgPosition.left,
    width: item.offsetWidth,
    height: item.offsetHeight,
  }
}