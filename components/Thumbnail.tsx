import Image from 'next/image';
import React, { memo } from 'react';
import { Movie } from '../typings';

type Props = {
  movie: Movie;
};

export const Thumbnail = memo(({ movie }: Props) => {
  return (
    <div className="relative min-h-[140px] min-w-[240px] cursor-pointer transition duration-200 ease-out md:min-h-[230px] md:min-w-[470px] md:hover:scale-105">
      <Image
        src={`https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.poster_path
        }`}
        className="rounded-lg object-cover"
        layout="fill"
      />

      <div className="absolute">
        <span></span>
        <h2>{movie.title}</h2>
      </div>
    </div>
  );
});
