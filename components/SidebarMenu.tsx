import Link from 'next/link';
import { useRouter } from 'next/router';
import { useDarkMode } from '../hook/useDarkMode';
import {
  BiBookmark,
  BiChevronLeft,
  BiHomeAlt,
  BiLogOut,
  BiMoon,
  BiMoviePlay,
  BiSun,
  BiTv,
} from 'react-icons/bi';

type Props = {
  collapse: boolean;
  setCollapse: (state: boolean) => void;
};

export const SidebarMenu = ({ collapse, setCollapse }: Props) => {
  const { pathname } = useRouter();
  const [darkMode, setDarkMode] = useDarkMode();

  return (
    <nav
      className={`fixed top-0 left-0 z-50 h-full w-[250px] bg-sidebar-color px-3 py-4 transition-all duration-300 dark:bg-d-sidebar-color ${
        collapse && 'w-[84px] sm:w-14 sm:px-1'
      }`}
    >
      <header className="relative">
        <div className="flex items-center gap-x-4">
          <img src="/logo.svg" alt="logo" />

          <div
            className={`flex flex-col text-lg font-medium text-text-color transition duration-300 dark:text-d-text-color ${
              collapse && 'opacity-0'
            }`}
          >
            <span>Entertainment</span>
            <span className="-mt-2">Web app</span>
          </div>
        </div>

        <BiChevronLeft
          onClick={() => setCollapse(!collapse)}
          className={`absolute top-1/2 -right-6 flex h-6 w-6 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-primary-color text-[white] transition-all duration-300 ${
            collapse && 'rotate-180 sm:-right-4'
          }`}
        />
      </header>

      <div className="flex h-[calc(100%-48px)] flex-col justify-between">
        <div>
          <ul>
            <Link href="/">
              <li className="mt-3 h-10">
                <a className={pathname == '/' ? 'link active' : 'link'}>
                  <BiHomeAlt
                    className={`min-w-[60px] text-xl sm:min-w-[46px]`}
                  />
                  <span
                    className={`text-lg transition-all duration-300 
                    ${collapse && 'opacity-0'}`}
                  >
                    Home
                  </span>
                </a>
              </li>
            </Link>

            <Link href="/movies">
              <li className="mt-3 h-10">
                <a className={pathname == '/movies' ? 'link active' : 'link'}>
                  <BiMoviePlay
                    className={`min-w-[60px] text-xl sm:min-w-[46px]`}
                  />
                  <span
                    className={`text-lg transition-all duration-300 
                    ${collapse && 'opacity-0'}`}
                  >
                    Movies
                  </span>
                </a>
              </li>
            </Link>

            <Link href="/tvs">
              <li className="mt-3 h-10">
                <a className={pathname == '/tvs' ? 'link active' : 'link'}>
                  <BiTv className={`min-w-[60px] text-xl sm:min-w-[46px]`} />
                  <span
                    className={`text-lg transition-all duration-300 
                    ${collapse && 'opacity-0'}`}
                  >
                    TV Series
                  </span>
                </a>
              </li>
            </Link>

            <Link href="/bookmarked">
              <li className="mt-3 h-10">
                <a
                  className={pathname == '/bookmarked' ? 'link active' : 'link'}
                >
                  <BiBookmark
                    className={`min-w-[60px] text-xl sm:min-w-[46px]`}
                  />
                  <span
                    className={`text-lg transition-all duration-300 
                    ${collapse && 'opacity-0'}`}
                  >
                    Bookmarked
                  </span>
                </a>
              </li>
            </Link>
          </ul>
        </div>

        <ul>
          <li className="mt-3 h-10">
            <a href="#" className="link">
              <BiLogOut className={`min-w-[60px] text-xl sm:min-w-[46px]`} />
              <span
                className={`text-lg transition-all duration-300 
                ${collapse && 'opacity-0'}`}
              >
                Logout
              </span>
            </a>
          </li>

          <li className="mt-3 h-10">
            <div className="link relative cursor-default bg-primary-color-light hover:bg-primary-color-light hover:text-text-color dark:bg-d-primary-color-light dark:text-d-text-color">
              {darkMode ? (
                <>
                  <BiSun className="min-w-[60px] text-xl sm:min-w-[46px]" />
                  <span
                    className={`text-lg transition-all duration-300 
                    ${collapse && 'opacity-0'}`}
                  >
                    Light Mode
                  </span>
                </>
              ) : (
                <>
                  <BiMoon className="min-w-[60px] text-xl sm:min-w-[46px]" />
                  <span
                    className={`text-lg transition-all duration-300 
                    ${collapse && 'opacity-0'}`}
                  >
                    Dark Mode
                  </span>
                </>
              )}

              <div
                className={`absolute right-0 flex h-full min-w-[60px] items-center justify-center transition-all duration-300 sm:min-w-[48px] ${
                  collapse ? 'sm:right-[2px] sm:min-w-[44px]' : 'sm:right-4'
                }`}
              >
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
