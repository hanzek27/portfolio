import React, { useState, useEffect } from "react";
import Preview from "../components/preview/Preview";
import {
  motion,
  AnimatePresence,
} from "framer-motion";
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

export default function CarouselPage() {
  const [selectedImg, setselectedImg] = useState(null);
  return (
    <motion.section className="h-full w-full overflow-visible grid grid-cols-2 grid-rows-2 gap-4 p-sm md:p-md">
      {images.map((image, index) => (
        <div
          className="rounded-medium overflow-hidden"
          key={image.id}
          onClick={(e) => setselectedImg({ index: index + 1, item: e.target})}
        >
          <img
            src={image.img}
            className={`w-full h-full object-cover ${
              selectedImg?.index === index + 1 && "hidden"
            }`}
          />
        </div>
      ))}
      <AnimatePresence>
        {selectedImg && (
          <Preview
            images={images}
            selectedImg={selectedImg}
            setselectedImg={setselectedImg}
          />
        )}
      </AnimatePresence>
    </motion.section>
  );
}



