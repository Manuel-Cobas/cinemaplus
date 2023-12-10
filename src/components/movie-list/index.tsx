import { MovieCard } from "@/components/cards/movie-card";
import type { Movie } from "@/types/movie";

export function MovieList({
  data,
}: {
  data: { results: Movie[]; total_pages: number; total_results: number };
}) {
  return (
    <section className="grid grid-cols-4 gap-4 w-full p-8">
      {data &&
        data.results.map((m: Movie) => {
          if (m.poster_path === null || m.backdrop_path === null) return null;
          return (
            <article key={m.id} className="">
              <MovieCard movie={m} />
            </article>
          );
        })}
    </section>
  );
}
