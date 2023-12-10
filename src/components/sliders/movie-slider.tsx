"use client";

import { useRef } from "react";
import { MovieCard } from "@/components/cards/movie-card";
import { SliderButton } from "@/components/buttons/slider-button";

// Import Swiper React components
import { Swiper, useSwiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import type { Movie } from "@/types/index";

export function MovieSlider({ movies }: { movies: Movie[] }) {
  const swiper = useSwiper();
  const swiperRef = useRef<any>();

  return (
    <>
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        slidesPerView={5}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="swiper bg-transparent"
      >
        {movies.map((m) => {
          // console.log(m);
          return (
            <SwiperSlide key={m.id} className="relative bg-transparent">
              <MovieCard movie={m} quality={40} />
            </SwiperSlide>
          );
        })}

        <SliderButton swiperRef={swiperRef} />
        <SliderButton swiperRef={swiperRef} prevButton />
      </Swiper>
    </>
  );
}
