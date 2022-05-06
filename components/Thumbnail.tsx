import Image from 'next/image';
import React, { memo, useState } from 'react';
import { certification, Movie } from '../typings';
import { BsBookmarkCheckFill, BsBookmark } from 'react-icons/bs';
import { BiMoviePlay, BiTv } from 'react-icons/bi';
import { AiFillPlayCircle } from 'react-icons/ai';
import matchCertOrRating from '../utils/matchCertOrRating';

type Props = {
  media: Movie;
  certifications: certification[];
};

export const Thumbnail = memo(({ media, certifications }: Props) => {
  const movieCertOrTVRating = matchCertOrRating({ media, certifications });
  const [book, setBook] = useState(false);

  return (
    <div className="revealPlayOnHover relative min-h-[140px] min-w-[240px] cursor-pointer transition duration-200 ease-out md:min-h-[230px] md:min-w-[470px] md:hover:scale-105">
      <Image
        src={`https://image.tmdb.org/t/p/w500${
          media.backdrop_path || media.poster_path
        }`}
        className="rounded-lg object-cover"
        layout="fill"
      />

      <div className="play invisible absolute grid h-full w-full place-items-center rounded-bl-lg rounded-br-lg bg-gradient-whole text-[white]">
        <div className="flex w-32 gap-x-5 rounded-full bg-[white]/25 p-2">
          <AiFillPlayCircle className="h-8 w-8" />
          <span className="text-lg font-medium">play</span>
        </div>
      </div>

      <div className="absolute bottom-0 w-full rounded-bl-lg rounded-br-lg bg-gradient-to-b text-[white]/75">
        <div className="ml-4 mb-4">
          <div className="flex items-center gap-x-2">
            <div>
              {media.release_date?.slice(0, 4) ||
                media.first_air_date?.slice(0, 4)}
            </div>
            <span className="h-1 w-1 rounded-full bg-[white]/50" />
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
          <h2 className="text-sm font-medium text-[white]">
            {media.title || media.name}
          </h2>
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
  );
});
