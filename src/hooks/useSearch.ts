import { useState } from "react";
import { useRouter } from "next/navigation";

import type { ChangeEvent, FormEvent } from "react";

export function useSearch() {
  const [search, setSearch] = useState<string>("");
  const router = useRouter();

  const cleanSearch = () => setSearch("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    cleanSearch();
    router.push("/movies?search=" + search);
  };

  return { search, cleanSearch, onChange, onSubmit };
}
