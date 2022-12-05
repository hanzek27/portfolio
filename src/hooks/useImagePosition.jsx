export default function useImagePosition(img) {
  const imgPosition = img.getBoundingClientRect();
  return {
    y: imgPosition.top,
    x: imgPosition.left,
    width: img.offsetWidth,
    height: img.offsetHeight,
  };
}
