import { useEffect, useRef, useState } from 'react';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

import { certification, Movie } from '../typings';

import { Thumbnail } from './Thumbnail';
import { Title } from './Title';

type Props = {
  trendingNow: Movie[];
  certifications: certification[];
};

export const Trending = ({ trendingNow, certifications }: Props) => {
  const rowRef = useRef<HTMLDivElement>(null);
  const [isHead, setIsHead] = useState<boolean>(true);
  const [isTail, setIsTail] = useState<boolean>(false);

  useEffect(() => {
    const handleIcons = () => {
      const { scrollLeft, scrollWidth, clientWidth } = rowRef.current!;

      scrollLeft === 0 ? setIsHead(true) : setIsHead(false);

      scrollWidth - scrollLeft === clientWidth
        ? setIsTail(true)
        : setIsTail(false);
    };

    rowRef.current!.addEventListener('scroll', handleIcons);

    return () => rowRef.current!.removeEventListener('scroll', handleIcons);
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
      <Title text="Trending" />

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
          {trendingNow.map((media) => (
            <Thumbnail
              key={media.id}
              media={media}
              certifications={certifications}
            />
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
