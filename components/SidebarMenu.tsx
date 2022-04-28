import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import {
  BiBookmark,
  BiChevronRight,
  BiHomeAlt,
  BiLogOut,
  BiMoon,
  BiMoviePlay,
  BiSearch,
  BiSun,
  BiTv,
} from 'react-icons/bi';
import { useDarkMode } from '../hook/useDarkMode';

export const SidebarMenu = () => {
  //   const { pathname } = useRouter();

  //   const activeIcon = (currentPathName: string) => {
  //     return pathname === currentPathName ? 'icon text-[white]' : 'icon';
  //   };

  const [darkMode, setDarkMode] = useDarkMode();

  return (
    <nav className="fixed top-0 left-0 h-full w-[250px] bg-sidebar-color px-3 py-4 transition duration-300 dark:bg-d-sidebar-color">
      <header className="relative">
        <div className="flex items-center gap-x-4">
          <img src="/logo.svg" alt="logo" className="w-10" />

          <div className="flex flex-col text-lg font-medium text-text-color dark:text-d-text-color">
            <span>Entertainment</span>
            <span>Web app</span>
          </div>
        </div>

        <BiChevronRight className="absolute top-1/2 -right-6 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full bg-primary-color text-[white]" />
      </header>

      <div className="flex h-[calc(100%-48px)] flex-col justify-between">
        <div>
          <ul>
            <li className="mt-3 h-12">
              <a href="#" className="link active">
                <BiHomeAlt className="min-w-[60px] text-xl" />
                <span className="text-lg">Home</span>
              </a>
            </li>
            <li className="mt-3 h-12">
              <a href="#" className="link">
                <BiMoviePlay className="min-w-[60px]" />
                <span>Movies</span>
              </a>
            </li>
            <li className="mt-3 h-12">
              <a href="#" className="link">
                <BiTv className="min-w-[60px]" />
                <span>TV Series</span>
              </a>
            </li>
            <li className="mt-3 h-12">
              <a href="#" className="link">
                <BiBookmark className="min-w-[60px]" />
                <span>Bookmarked</span>
              </a>
            </li>
          </ul>
        </div>

        <ul>
          <li className="mt-3 h-12">
            <a href="#" className="link">
              <BiLogOut className="min-w-[60px]" />
              <span>Logout</span>
            </a>
          </li>

          <li onClick={() => setDarkMode(!darkMode)} className="mt-3 h-12">
            <div className="link">
              <BiMoon className="min-w-[60px]" />
              {/* <BiSun /> */}
              <span>Light Mode</span>
            </div>

            <div>
              <span></span>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

{
  /* <li className="mt-2 flex h-12 list-none items-center bg-primaryRed">
              <BiSearch className="" />
              <input
                type="search"
                placeholder={`Search for movies or TV series`}
              />
            </li> */
}

{
  /* <ul className="flex gap-x-6 md:gap-x-8 lg:flex-col lg:gap-y-10">
          <li>
            <Link href="/">
              <a>
                <HiHome className={activeIcon('/')} />
                <span className="">Home</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/movies">
              <a>
                <MdLocalMovies className={activeIcon('/movies')} />
                <span className="">Home</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/tv">
              <a>
                <ImTv className={activeIcon('/tv')} />
                <span className="">Home</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/bookmark">
              <a>
                <MdBookmark className={activeIcon('/bookmark')} />
                <span className="">Home</span>
              </a>
            </Link>
          </li>
        </ul>

        <div className="">
          <div className="">
            <div className="">
              <img
                src="https://i.pravatar.cc/300"
                alt="avatar"
                className="h-6 w-6 cursor-pointer rounded-full border-[1px] border-solid border-[#fff] md:h-8 md:w-8 lg:mt-auto"
              />

              <div className=""></div>
            </div>
          </div>
        </div> */
}
