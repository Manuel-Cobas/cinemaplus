import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import type { MouseEvent } from "react";

export interface PaginationButtonProps {
  onClick: (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void;
  disabled: boolean;
  prevButton?: boolean;
}

export function PaginationButton({
  onClick,
  disabled,
  prevButton = false,
}: PaginationButtonProps) {
  const bgColor = disabled
    ? "bg-red-600 hover:bg-red-500"
    : "bg-orange-500 hover:bg-orange-400";

  return (
    <button
      id={prevButton ? "prev-button" : "next-button"}
      type="button"
      onClick={(e) => onClick(e)}
      disabled={disabled}
      className={`rounded-md ${bgColor}`}
    >
      {prevButton ? (
        <BiChevronLeft className="text-[1.6rem] font-semibold  text-white" />
      ) : (
        <BiChevronRight className="text-[1.6rem] font-semibold  text-white" />
      )}
    </button>
  );
}
