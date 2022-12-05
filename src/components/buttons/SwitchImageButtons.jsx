import React from "react";

export default function SwitchImageButtons({ onClick }) {
  return (
    <button
      className={`bg-white w-max py-2 px-3 rounded-full absolute top-0 left-0 z-10`}
      onClick={(event) => {
        event.stopPropagation();
        onClick();
      }}
    >
      {"ahoj tohle je button"}
    </button>
  );
}

//shiftIndex(setCurrentIndex, maxIndex, "down")
