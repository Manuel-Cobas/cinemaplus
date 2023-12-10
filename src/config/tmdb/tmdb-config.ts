export const TMDB_BASE_URL = "https://api.themoviedb.org";

export const draftUrlOptions = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`,
  },
};

export const TMDB_LANGUAGES = {
  SPANISH: "es",
  ENGLISH: "en",
};

export const TMDB_IMAGES_URL = {
  TMDB_CARD_IMAGE: "https://image.tmdb.org/t/p/w500",
  TMDB_FULL_IMAGE: "https://image.tmdb.org/t/p/original",
};

export const TMDB_PATH_NAMES = {
  BY_QUERY_URL: "/3/search/movie",
  BY_GENRE_URL: "/3/discover/movie",
  BY_POPULAR_URL: "/3/movie/popular",
};

/** Params
 * ?language=es
 * ?with_genres=28
 * ?page=1
 */

// CONSTANTES DEPRECADAS
// export const TMDB_MOVIES_URL = {
//   POPULAR: `${TMDB_BASE_URL}movie/popular`,
//   BY_QUERY_URL: `${TMDB_BASE_URL}search/movie`,
//   BY_GENRE_URL: `${TMDB_BASE_URL}discover/movie`,
// };
