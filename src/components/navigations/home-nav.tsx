"use client";

import Link from "next/link";
import { Search } from "@/components/search";
import { useState, useEffect, useRef } from "react";

import { GENRE_LISTS } from "@/config/tmdb/genre-lists";

export function HomeNavigation() {
  const [backgroundColor, setBackgroundColor] = useState("bg-transparent");
  const navbarRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    function handleScroll() {
      if (
        document.body.scrollTop > 200 ||
        document.documentElement.scrollTop > 200
      ) {
        setBackgroundColor("bg-blue-950");
      } else setBackgroundColor("bg-transparent");
    }
    window.onscroll = () => handleScroll();

    return () => {
      console.log(">>> home-nav desmontado!");
    };
  }, []);

  return (
    <header ref={navbarRef} className="fixed z-20 top-0 left-0 right-0">
      <nav
        className={`flex items-center justify-between p-4 w-full transition-[background] ${backgroundColor}`}
      >
        <div className="flex items-center gap-8">
          <h1 className="text-3xl font-semibold text-white">CINEMAPLUS</h1>
          <ul className="flex gap-4 items-center">
            {GENRE_LISTS.es.slice(0, 5).map((g) => (
              <li key={g.id}>
                <Link
                  href={"/movies"}
                  className="text-lg font-medium transition-[color] text-white hover:text-gray-100"
                >
                  {g.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="">
          <Search />
        </div>
      </nav>
    </header>
  );
}
