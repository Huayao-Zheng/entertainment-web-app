import Link from 'next/link';
import { useRouter } from 'next/router';
import { HiHome } from 'react-icons/hi';
import { ImTv } from 'react-icons/im';
import { MdLocalMovies, MdBookmark } from 'react-icons/md';

export const Header = () => {
  const { pathname } = useRouter();

  return (
    <header>
      <img src="/logo.svg" alt="logo" />

      <ul className="flex gap-x-6 md:gap-x-8 lg:flex-col lg:gap-y-10">
        <Link href="/">
          <a>
            <HiHome className={`icon ${pathname === '/' && 'text-[white]'}`} />
          </a>
        </Link>
        <Link href="/movies">
          <a>
            <MdLocalMovies
              className={`icon ${pathname === '/movies' && 'text-[white]'}`}
            />
          </a>
        </Link>
        <Link href="/tv">
          <a>
            <ImTv className={`icon ${pathname === '/tv' && 'text-[white]'}`} />
          </a>
        </Link>
        <Link href="/bookmark">
          <a>
            <MdBookmark
              className={`icon ${pathname === '/bookmark' && 'text-[white]'}`}
            />
          </a>
        </Link>
      </ul>

      <img
        src="https://i.pravatar.cc/300"
        alt="avatar"
        className="h-6 w-6 cursor-pointer rounded-full border-[1px] border-solid border-[#fff] md:h-8 md:w-8 lg:mt-auto"
      />
    </header>
  );
};
