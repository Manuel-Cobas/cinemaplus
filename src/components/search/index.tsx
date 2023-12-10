"use client";

import { GrFormClose } from "react-icons/gr";
import { AiOutlineSearch } from "react-icons/ai";

import { useSearch } from "@/hooks/useSearch";

export function Search({ redirectTo }: { redirectTo?: boolean }) {
  const { search, cleanSearch, onChange, onSubmit } = useSearch();

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-row-reverse justify-between items-center px-2 rounded-md bg-white"
    >
      <label htmlFor="search">
        {search === "" ? (
          <AiOutlineSearch className="text-3xl cursor-pointer text-gray-800" />
        ) : (
          <GrFormClose
            onClick={cleanSearch}
            className="text-3xl cursor-pointer text-gray-800"
          />
        )}
      </label>

      <input
        id="search"
        name="search"
        type="text"
        value={search}
        placeholder="Buscar"
        className="outline-none py-2 pr-1 w-full text-gray-800 placeholder:font-semibold placeholder:italic placeholder:text-gray-400"
        onChange={onChange}
      />
    </form>
  );
}
