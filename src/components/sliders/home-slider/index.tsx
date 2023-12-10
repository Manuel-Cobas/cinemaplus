"use client";

import Image from "next/image";
import { useRef } from "react";
import { OverviewMovie } from "@/components/sliders/home-slider/overview-movie";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { TMDB_IMAGES_URL } from "@/config/tmdb/tmdb-config";
import type { Movie } from "@/types/index";

export function HomeSlider({ movies = [] }: { movies: Movie[] }) {
  const progressCircle = useRef<any | null>(null);
  const progressContent = useRef<any | null>(null);
  const onAutoplayTimeLeft = (s: any, time: any, progress: any) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <>
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="swiper"
      >
        {movies.map((movie: Movie, index: number) => {
          return (
            <SwiperSlide key={movie.id} className="relative">
              <Image
                src={`${TMDB_IMAGES_URL.TMDB_FULL_IMAGE}/${movie.backdrop_path}`}
                alt={`poster de la pelicula ${movie.name}`}
                quality={60}
                className="brightness-75"
                priority
                fill
              />
              <OverviewMovie movie={movie} index={index} />
            </SwiperSlide>
          );
        })}

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}
