import Link from "next/link";
import { navigation } from "@/utils/navigations";
const Header = () => {
  return (
    <header className="sticky top-0 w-full backdrop-blur-lg blur-0 opacity-100 transition-all ease-in-out duration-300 z-40 p-3">
      <div className="max-w-screen-2xl mx-auto px-4 container">
        <nav className="w-full flex items-center justify-between">
          {/* BRAND */}
          <Link href="/" className="text-slate-800 text-3xl font-bold ">Sada.</Link>
          {/* navigation */}
          <ul className="hidden md:flex items-center gap-x-10">
            {navigation.map((nav, i) => {
              return (
                <Link
                  key={i}
                  href={nav.path}
                  className="font-bold text-slate-900"
                >
                  {nav.name}
                </Link>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
