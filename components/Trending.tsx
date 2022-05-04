import { useEffect, useRef, useState } from 'react';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { Movie } from '../typings';
import { Thumbnail } from './Thumbnail';

type Props = {
  movies: Movie[];
};

export const Trending = ({ movies }: Props) => {
  const rowRef = useRef<HTMLDivElement>(null);
  const [isHead, setIsHead] = useState<boolean>(true);
  const [isTail, setIsTail] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = rowRef.current!;
      scrollLeft === 0 ? setIsHead(true) : setIsHead(false);

      scrollWidth - scrollLeft === clientWidth
        ? setIsTail(true)
        : setIsTail(false);
    };

    rowRef.current!.addEventListener('scroll', handleScroll);

    return () => rowRef.current!.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (scrollDirection: string) => {
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;

      const scrollTo =
        scrollDirection === 'left'
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;

      rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="mt-4">
      <h1 className="mb-4 pl-4 text-xl font-light text-darkBlue transition duration-300 dark:text-d-text-color md:mb-6 md:text-4xl">
        Trending
      </h1>

      <div className="group relative md:-ml-2">
        <BiChevronLeft
          className={`absolute top-0 bottom-0 left-2 z-40 m-auto h-12 w-12 cursor-pointer text-primary-color opacity-0 transition hover:scale-125 group-hover:opacity-100 ${
            isHead && 'hidden'
          }`}
          onClick={() => handleClick('left')}
        />

        <div
          ref={rowRef}
          className="flex items-center gap-x-4 overflow-x-scroll py-2 px-4 scrollbar-hide md:gap-x-10 md:px-6"
        >
          {movies.map((movie) => (
            <Thumbnail key={movie.id} movie={movie} />
          ))}
        </div>

        <BiChevronRight
          className={`absolute top-0 bottom-0 right-2 z-40 m-auto h-12 w-12 cursor-pointer text-primary-color opacity-0 transition hover:scale-125 group-hover:opacity-100 ${
            isTail && 'hidden'
          }`}
          onClick={() => handleClick('right')}
        />
      </div>
    </section>
  );
};
