import Link from 'next/link';
import { useRouter } from 'next/router';
import { HiHome } from 'react-icons/hi';
import { ImTv } from 'react-icons/im';
import { MdLocalMovies, MdBookmark } from 'react-icons/md';

export const Header = () => {
  const { pathname } = useRouter();

  const activeIcon = (currentPathName: string) => {
    return pathname === currentPathName ? 'icon text-[white]' : 'icon';
  };

  return (
    <header>
      <img src="/logo.svg" alt="logo" />

      <ul className="flex gap-x-6 md:gap-x-8 lg:flex-col lg:gap-y-10">
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
      </div>
    </header>
  );
};
