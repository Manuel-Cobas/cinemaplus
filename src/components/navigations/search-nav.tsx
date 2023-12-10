import Link from "next/link";
import { Search } from "@/components/search";
import { ProfileCard } from "@/components/cards/profile-card";

import { GENRE_LISTS } from "@/config/tmdb/genre-lists";

export function SearchNavigation() {
  return (
    <header className="fixed top-0 left-0 bottom-0 flex flex-col w-[300px] py-8 gap-4 border-r-2 border-[#ccc]">
      <div className="flex flex-col gap-4 px-4">
        <h1 className="text-3xl font-semibold cursor-pointer text-white">
          <Link href={"/"}>CINEMAPLUS</Link>
        </h1>
        <Search />
      </div>

      <nav className="flex flex-col max-h-[80%] overflow-auto w-full">
        {GENRE_LISTS.es.map(({ id, name }) => (
          <Link
            key={id}
            href={{
              pathname: "/movies",
              query: { genreId: id },
            }}
            className="text-lg text-left font-semibold w-full py-4 pl-6 transition-[background] cursor-pointer text-white hover:bg-opacity-60 hover:bg-blue-500"
          >
            {name}
          </Link>
        ))}
      </nav>

      <ProfileCard />
    </header>
  );
}
