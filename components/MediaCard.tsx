import React, { memo, useState } from 'react';
import matchCertOrRating from '../utils/matchCertOrRating';
import { certification, Movie } from '../typings';
import { BsBookmarkCheckFill, BsBookmark } from 'react-icons/bs';
import { AiFillPlayCircle } from 'react-icons/ai';
import { BiMoviePlay, BiTv } from 'react-icons/bi';
import Image from 'next/image';
import { useRecoilState } from 'recoil';
import { modalState, movieState } from '../atoms/modalAtom';

type Props = {
  media: Movie;
  certifications: certification[];
};

export const MediaCard = memo(({ media, certifications }: Props) => {
  const [, setShowModal] = useRecoilState(modalState);
  const [, setCurrentMovie] = useRecoilState(movieState);
  const movieCertOrTVRating = matchCertOrRating({ media, certifications });
  const [book, setBook] = useState(false);

  return (
    <div>
      <div className="relative">
        <div
          onClick={() => {
            setShowModal(true);
            setCurrentMovie(media);
          }}
          className="revealPlayOnHover relative aspect-video cursor-pointer transition duration-200 ease-out md:hover:scale-105"
        >
          <Image
            src={`https://image.tmdb.org/t/p/w500${
              media.backdrop_path || media.poster_path
            }`}
            className="rounded-lg object-cover"
            layout="fill"
          />

          <div className="play invisible absolute grid h-full w-full place-items-center rounded-lg rounded-br-lg bg-gradient-whole text-[white]">
            <div className="flex w-32 gap-x-5 rounded-full bg-[white]/25 p-2">
              <AiFillPlayCircle className="h-8 w-8" />
              <span className="text-lg font-medium">play</span>
            </div>
          </div>
        </div>
        <div onClick={() => setBook(!book)} className="bookmark">
          {book ? (
            <BsBookmarkCheckFill className="!text-primary-color" />
          ) : (
            <BsBookmark />
          )}
        </div>
      </div>

      <div className="w-full rounded-bl-lg rounded-br-lg text-[black]/75 dark:text-[white]/75">
        <div className="mt-2 mb-1 flex items-center gap-x-[6px] text-xs md:text-sm">
          <div>
            {media.release_date?.slice(0, 4) ||
              media.first_air_date?.slice(0, 4)}
          </div>
          <span className="h-1 w-1 rounded-full bg-[black]/50 dark:bg-[white]/50" />
          <div className="flex items-center gap-x-1">
            {media.media_type === 'movie' ? (
              <>
                <BiMoviePlay />
                Movie
              </>
            ) : (
              <>
                <BiTv />
                TV Series
              </>
            )}
          </div>
          <span className="h-1 w-1 rounded-full bg-[white]/50" />
          <div>{movieCertOrTVRating || ''}</div>
        </div>

        <h2 className="text-sm font-medium text-[black] dark:text-[white] md:text-lg">
          {media.title || media.name}
        </h2>
      </div>
    </div>
  );
});
