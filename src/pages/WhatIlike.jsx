import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import PreviewScreen from "../components/preview/PreviewScreen";
import usePreviewIndexSelector from "../hooks/usePreviewIndexSelector";

//images
import img1 from "../assets/images/what_I_like/obr1.jpg";
import img2 from "../assets/images/what_I_like/obr2.jpg";
import img3 from "../assets/images/what_I_like/obr3.jpg";
import img5 from "../assets/images/what_I_like/obr5.jpg";

const images = [
  { img: img1, id: "image1", width: 600 },
  { img: img2, id: "image2", width: 500 },
  { img: img3, id: "image3", width: 600 },
  { img: img5, id: "image4", width: 400 },
];

export default function WhatILike() {

  const [photo, setPhotoIndex] = usePreviewIndexSelector(images)
  const [hideThumbnail, setHideThumbnail] = useState(null);

  useEffect(()=>{
    if (!photo) return
    setHideThumbnail(photo.id)
  },[photo])

  return (
    <section className="h-full w-full overflow-visible grid grid-cols-4 grid-rows-1 gap-4 p-sm md:p-md">

      {images.map((image, index) => (
        <div
          className="rounded-medium overflow-hidden"
          id={image.id}
          key={image.id}
          onClick={() => {
            setPhotoIndex(index + 1)
          }}
        >
          <img
            src={image.img}
            className={`w-full h-full object-cover ${
              image.id === hideThumbnail ? 'hidden' : 'block'
            }`}
          />
        </div>
      ))}

      <AnimatePresence onExitComplete={() => setHideThumbnail(null)}>
        {photo && (
          <PreviewScreen
            imagesCount={images.length}
            setIdxSelected={setPhotoIndex}
            selectedImg={photo}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
