import { SearchNavigation } from "@/components/navigations/search-nav";

export default function Layout({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  return (
    <>
      <SearchNavigation />
      <main className="flex flex-col min-h-screen pl-[19rem]">{children}</main>
    </>
  );
}
