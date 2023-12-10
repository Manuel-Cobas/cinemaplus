"use client";

import Link from "next/link";
import { PaginationButton } from "@/components/buttons/pagination-button";

import { usePagination } from "@/hooks/usePagination";

export function Pagination({
  search,
  genreId,
  total_pages,
  elementsPerPagination = 10,
}: {
  search: string;
  genreId: string;
  total_pages: number;
  elementsPerPagination?: number;
}) {
  const { count, onClick, disabledButtons } = usePagination(
    total_pages,
    elementsPerPagination
  );

  const renderPages = (num: number) => {
    let pages: JSX.Element[] = [];

    const searchCondition = search ? `&search=${search}` : "";
    const genreIdCondition = genreId ? `&genreId=${genreId}` : "";

    for (let i = 0; i < num; i++) {
      pages.push(
        <Link
          key={i}
          href={`/movies?page=${i + 1}${searchCondition}${genreIdCondition}`}
          className="px-2 rounded-md text-white bg-blue-600 hover:bg-blue-500"
        >
          {i + 1}
        </Link>
      );
    }

    return pages;
  };

  return (
    <div className="flex w-full justify-center">
      <nav className="flex items-center gap-4 overflow-hidden">
        <PaginationButton
          prevButton
          onClick={onClick}
          disabled={disabledButtons.prevButton}
        />

        <div className="flex items-center gap-2">
          {renderPages(total_pages).slice(
            count - elementsPerPagination,
            total_pages > count ? count : total_pages
          )}
        </div>

        <PaginationButton
          onClick={onClick}
          disabled={disabledButtons.nextButton}
        />
      </nav>
    </div>
  );
}
