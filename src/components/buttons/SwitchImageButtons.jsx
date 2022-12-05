import React from "react";

export default function SwitchImageButtons({onClick}) {
  return (
    <button
      className="bg-white w-max py-2 px-3 rounded-full absolute left-md top-1/2"
      onClick={(event) => {
        event.stopPropagation()
        onClick()
      }}
    >
      {"<"}
    </button>
  );
}

//shiftIndex(setCurrentIndex, maxIndex, "down")