import { useState, useEffect } from 'react'

export default function usePreviewIndexSelector(images) {
  const [idxSelected, setIdxSelected] = useState(null);
  const [selectedImg, setselectedImg] = useState(null);
  useEffect(() => {
    if (!idxSelected) return setselectedImg(null);
    setselectedImg({
      index: idxSelected,
      item: document.getElementById(images[idxSelected - 1].id),
      path: images[idxSelected - 1].img,
      id: images[idxSelected - 1].id,
    });
  }, [idxSelected]);
  return [selectedImg, setIdxSelected]
}
