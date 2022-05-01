import Link from 'next/link';
import { useRouter } from 'next/router';

import {
  BiBookmark,
  BiChevronRight,
  BiHomeAlt,
  BiLogOut,
  BiMoon,
  BiMoviePlay,
  BiSun,
  BiTv,
} from 'react-icons/bi';
import { useDarkMode } from '../hook/useDarkMode';

export const SidebarMenu = () => {
  const { pathname } = useRouter();

  const [darkMode, setDarkMode] = useDarkMode();

  return (
    <nav className="fixed top-0 left-0 h-full w-[250px] bg-sidebar-color px-3 py-4 transition duration-300 dark:bg-d-sidebar-color">
      <header className="relative">
        <div className="flex items-center gap-x-4">
          <img src="/logo.svg" alt="logo" className="w-10" />

          <div className="flex flex-col text-lg font-medium text-text-color transition duration-300 dark:text-d-text-color">
            <span>Entertainment</span>
            <span>Web app</span>
          </div>
        </div>

        <BiChevronRight className="absolute top-1/2 -right-6 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full bg-primary-color text-[white]" />
      </header>

      <div className="flex h-[calc(100%-48px)] flex-col justify-between">
        <div>
          <ul>
            <Link href="/">
              <li className="mt-3 h-12">
                <a className={pathname == '/' ? 'link active' : 'link'}>
                  <BiHomeAlt className="min-w-[60px] text-xl" />
                  <span className="text-lg">Home</span>
                </a>
              </li>
            </Link>

            <Link href="/movies">
              <li className="mt-3 h-12">
                <a className={pathname == '/movies' ? 'link active' : 'link'}>
                  <BiMoviePlay className="min-w-[60px]" />
                  <span>Movies</span>
                </a>
              </li>
            </Link>

            <Link href="/tvs">
              <li className="mt-3 h-12">
                <a className={pathname == '/tvs' ? 'link active' : 'link'}>
                  <BiTv className="min-w-[60px]" />
                  <span>TV Series</span>
                </a>
              </li>
            </Link>

            <Link href="/bookmarked">
              <li className="mt-3 h-12">
                <a
                  className={pathname == '/bookmarked' ? 'link active' : 'link'}
                >
                  <BiBookmark className="min-w-[60px]" />
                  <span>Bookmarked</span>
                </a>
              </li>
            </Link>
          </ul>
        </div>

        <ul>
          <li className="mt-3 h-12">
            <a href="#" className="link">
              <BiLogOut className="min-w-[60px]" />
              <span>Logout</span>
            </a>
          </li>

          <li className="mt-3 h-12">
            <div className="link cursor-default hover:bg-primary-color-light hover:text-text-color dark:text-d-text-color">
              {darkMode ? (
                <>
                  <BiSun className="min-w-[60px]" />
                  <span>Light Mode</span>
                </>
              ) : (
                <>
                  <BiMoon className="min-w-[60px]" />
                  <span>Dark Mode</span>
                </>
              )}

              <div className="flex h-full min-w-[60px] items-center justify-center">
                <span
                  onClick={() => setDarkMode(!darkMode)}
                  className={`toggle-switch ${!darkMode && 'before:left-5'}`}
                />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};
