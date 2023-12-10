import Image from "next/image";

import { TMDB_IMAGES_URL } from "@/config/tmdb/tmdb-config";
import type { Movie } from "@/types/index";

export function MovieCard({
  movie,
  quality = 60,
}: {
  movie: Movie;
  quality?: number;
}) {
  return (
    <Image
      src={`${TMDB_IMAGES_URL.TMDB_CARD_IMAGE}/${movie.poster_path}`}
      alt={`poster de ${
        movie.name || movie.original_name || movie.title || movie.original_title
      }`}
      width={300}
      height={400}
      quality={quality}
      className="cursor-pointer rounded-sm aspect-[5/8] object-cover text-white"
    />
  );
}
