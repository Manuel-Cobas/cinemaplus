import { MovieList } from "@/components/movie-list/index";
import { Pagination } from "@/components/pagination/index";

import { getMovies } from "@/services/tmdb-service";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  let page = searchParams.page ?? null;
  let search = (searchParams.search as string) ?? null;
  let genreId = (searchParams.genreId as string) ?? null;

  const movies = await getMovies({
    byQuery: search,
    byGenre: genreId,
    page,
  });
  // console.log("AQUI", movies);
  return (
    <>
      <header className="flex flex-col items-start gap-4 w-full p-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-semibold text-white">
            {search && `Buscar: ${search}`}
            {genreId && movies.genre && `Peliculas de ${movies.genre.name}`}
            {!search && !genreId && "Peliculas del Momento!"}
          </h1>

          <span className="text-md font-semibold italic text-[#ccc]">
            {`se han encontrado ${movies.total_results} resultados.`}
          </span>
        </div>

        {movies && (
          <Pagination
            search={search}
            genreId={genreId}
            total_pages={movies.total_pages >= 500 ? 500 : movies.total_pages}
          />
        )}
      </header>

      <MovieList data={movies} />
    </>
  );
}

/** Notas (PENDIENTES) Domingo 19/11/2023 1:21 PM
 * 1 - Infinite Scroll "Reutilizable"
 * 2 - Responsive
 *
 */
