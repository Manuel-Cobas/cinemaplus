"use client";

import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import type { MutableRefObject } from "react";

export function SliderButton({
  swiperRef,
  prevButton,
}: {
  swiperRef: MutableRefObject<any>;
  prevButton?: boolean;
}) {
  return (
    <button
      type="button"
      className={`absolute z-20 top-[45%] ${prevButton ? "left-2" : "right-2"}`}
      onClick={() =>
        prevButton
          ? swiperRef.current.slidePrev()
          : swiperRef.current.slideNext()
      }
    >
      <span className="relative flex items-center justify-center p-4 cursor-pointer rounded-full shadow bg-blue-500">
        {prevButton ? (
          <BiChevronLeft className="absolute text-3xl font-semibold text-white" />
        ) : (
          <BiChevronRight className="absolute text-3xl font-semibold text-white" />
        )}
      </span>
    </button>
  );
}
