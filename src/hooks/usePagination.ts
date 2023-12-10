import { useState, useEffect, type MouseEvent } from "react";

export const initialDisabledButtons = {
  nextButton: false,
  prevButton: false,
};
export function usePagination(total_pages: number, elementsPerClick: number) {
  // console.log("elementsPerClick", elementsPerClick);
  const [count, setCount] = useState(elementsPerClick);

  const [disabledButtons, setDisabledButtons] = useState(
    initialDisabledButtons
  );

  useEffect(() => {
    /*
      cuando el total de paginas sea menor 
      que la cantidad de elementos a mostrar,
      se bloquearan ambos botones.
    */
    if (total_pages <= elementsPerClick) {
      setDisabledButtons({ nextButton: true, prevButton: true });
    } else {
      setDisabledButtons(initialDisabledButtons);
    }
  }, [total_pages, count, elementsPerClick]);

  const onClick = ({
    currentTarget,
  }: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    if (currentTarget.id === "next-button") {
      /*
      cuando estemos al final de la paginacion,
      iremos al inicio y sino veremos 
      las siguientes 10 paginas.
    */
      setCount(
        total_pages === count && total_pages > elementsPerClick
          ? elementsPerClick
          : count + 10
      );
    }

    if (currentTarget.id === "prev-button") {
      /*
      cuando estemos al inicio de la paginacion,
      iremos al final y sino veremos las
      10 paginas anteriores.
    */
      setCount(
        total_pages >= count && count === elementsPerClick
          ? total_pages
          : count - 10
      );
    }
  };

  return { count, onClick, disabledButtons };
}
