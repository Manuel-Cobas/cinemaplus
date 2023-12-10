import { draftUrlOptions } from "@/config/tmdb/tmdb-config";
import { TMDB_BASE_URL, TMDB_PATH_NAMES } from "@/config/tmdb/tmdb-config";
import { GENRE_LISTS } from "@/config/tmdb/genre-lists";

export interface GetMovies {
  byQuery: string | null;
  byGenre: string | null;
  page?: string | null;
  language?: string;
}

/**NOTA: https://api.themoviedb.org/3/search/movie?query=resident&with_genres=27&language=es
 * en la ruta de search se puede buscar por filtro tambien, asi que se puede considerar
 * la opcion de agregar casillas al filtro de generos para hacer la busqueda mas dinamica
 */

async function getMovies({
  byQuery,
  byGenre,
  page,
  language = "es",
}: GetMovies) {
  const url = new URL(TMDB_BASE_URL);
  const params = new URLSearchParams();
  params.append("page", page ?? "1");
  params.append("language", language);

  if (byQuery && !byGenre) {
    url.pathname = TMDB_PATH_NAMES.BY_QUERY_URL;
    params.append("query", byQuery);
    url.search = params.toString();

    const res = await fetch(url, draftUrlOptions);
    const moviesByQuery = await res.json();
    return moviesByQuery;
  }

  if (byGenre && !byQuery) {
    let genreId = parseInt(byGenre);
    const genreExists = GENRE_LISTS.es.find((g) => g.id === genreId);
    if (!genreExists) return null;

    url.pathname = TMDB_PATH_NAMES.BY_GENRE_URL;
    params.append("with_genres", byGenre);
    url.search = params.toString();

    const res = await fetch(url, draftUrlOptions);
    const moviesByGenre = await res.json();

    return { ...moviesByGenre, genre: genreExists };
  }

  url.pathname = TMDB_PATH_NAMES.BY_POPULAR_URL;
  const res = await fetch(url, draftUrlOptions);
  const popularMovies = await res.json();
  return popularMovies;
}

export { getMovies };

// FUNCIONES DEPRECADAS
// async function getPopularMovies(page: number = 1, language = "es-ES") { DEPRECADA
//   const url = `${TMDB_MOVIES_URL.POPULAR}?language=${language}&page=${page}`;
//   const res = await fetch(url, draftUrlOptions);

//   return await res.json();
// }

// async function getMoviesByGenre( DEPRECADA
//   genreId: number,
//   page: number = 1,
//   language = "es"
// ) {
//   const genreExists = genreId
//     ? GENRE_LISTS.es.find((g) => g.id === genreId)
//     : null;

//   if (!genreExists) return null;

//   const url = `https://api.themoviedb.org/3/discover/movie?with_genres=${genreId}&page=${page}&language=${language}`;
//   const res = await fetch(url, draftUrlOptions);
//   const movies = await res.json();

//   return { ...movies, genre: genreExists };
// }

// async function getMovieByName( DEPRECADA
//   search: string,
//   page: number = 1,
//   language = "es"
// ) {
//   if (search === null || search === "") return null;

//   const paramsUrl = `?query=${search}&page=${page}&language=${language}`;
//   const url = `${TMDB_MOVIES_URL.SEARCH_URL}${paramsUrl}`;
//   const res = await fetch(url, draftUrlOptions);
//   const movieFound = await res.json();

//   return movieFound;
// }
