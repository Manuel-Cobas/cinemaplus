import type { Movie } from "@/types/index";

export function OverviewMovie({
  movie,
  index,
}: {
  movie: Movie;
  index: number;
}) {
  return (
    <div className="absolute top-0 right-0 left-0 bottom-0 flex items-center">
      <div className="flex flex-col max-w-[50%] ml-16 rounded-md bg-opacity-[20%] bg-slate-950">
        <div className="flex flex-col w-full h-full gap-6 p-4 rounded-md backdrop-blur-sm">
          <h2 className="text-3xl text-left font-semibold text-white">
            {movie.title || movie.name || movie.original_title}
          </h2>

          <p className=" text-left font-medium text-white">{movie.overview}</p>
        </div>
      </div>
    </div>
  );
}
