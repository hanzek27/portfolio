import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
  motion,
  AnimatePresence,
  useAnimationControls,
  useTransform,
  useMotionValue,
  useMotionTemplate,
} from "framer-motion";
import Preview from "../components/Preview";
import { previewAnimation } from "../components/animations/imgPreview";

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
            onClick={(e) =>
               setselectedImg({ index: index + 1, position: imagePosition(e) })
            }
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
            <ImagePreview
               images={images}
               selectedImg={selectedImg}
               setselectedImg={setselectedImg}
            />
        )}
      </AnimatePresence>
    </motion.section>
  );
}

function ImagePreview({ images, selectedImg, setselectedImg }) {
  const motionVal = useMotionValue(0);
  const y = useMotionValue(0)
  const scale = useTransform(y, [0, 400], [1, 0.3]);
  const positive = useTransform(motionVal, val => Math.abs(val));
  const opacity = useTransform(positive, [100, 0], [0, 0.8]);
  const background = useMotionTemplate`rgba(8, 19, 23, ${opacity})`;
  const controller = useAnimationControls();
  const animationObject = previewAnimation({
    top: selectedImg.position.top,
    left: selectedImg.position.left,
    width: selectedImg.position.width,
    height: selectedImg.position.height,
  });
  const maxIndex = images.length;
  const [currentIndex, setCurrentIndex] = useState(selectedImg.index);

  useEffect(() => {
    controller.start("fullScreen");
  }, []);

  return ReactDOM.createPortal(
   <motion.div className="fixed w-full h-full z-10 flex justify-center items-center"
      onClick={() => controller.start("initial")}
      style={{backgroundColor: background}}
   >
      <button
        onClick={(event) => {
          event.stopPropagation();
          shiftIndex(setCurrentIndex, maxIndex, "down");
        }}
        className="bg-white w-max py-2 px-3 rounded-full absolute left-md top-1/2"
      >
        {"<"}
      </button>
      <motion.div
        className="relative rounded-medium overflow-hidden"
        drag='y'
        //dragElastic={0}
        dragSnapToOrigin={true}
        //dragConstraints={{top: 0, bottom: 50}}
        onDragEnd={() => controller.start("initial")}
        variants={animationObject}
        initial="initial"
        animate={controller}
        exit="initial"
        style={{ left: motionVal, y, scale: scale}}
        transition={{
          ease: "easeInOut",
          duration: 0.3,
        }}
        onAnimationComplete={(callback) => {
          if (callback !== "initial") return;
          setselectedImg(null);
        }}
      >
        <img
          onClick={(e) => e.stopPropagation()}
          src={images[currentIndex - 1].img}
          className="w-full h-full object-cover"
        />
      </motion.div>
      <button
        onClick={(event) => {
          event.stopPropagation();
          shiftIndex(setCurrentIndex, maxIndex, "up");
        }}
        className="bg-white w-max py-2 px-3 rounded-full absolute right-md top-1/2"
      >
        {">"}
      </button>
    </motion.div>,
    document.getElementById("modals")
  );
}

function shiftIndex(setCurrentIndex, maxIndex, direction) {
  setCurrentIndex((prev) => {
    if (direction === "down") {
      return prev === 1 ? maxIndex : prev - 1;
    } else {
      return prev === maxIndex ? 1 : prev + 1;
    }
  });
}

function imagePosition(event) {
  const img = event.target;
  const imgPosition = img.getBoundingClientRect();
  return {
    top: imgPosition.top,
    left: imgPosition.left,
    width: img.offsetWidth,
    height: img.offsetHeight,
  };
}
