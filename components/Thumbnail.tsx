import Image from 'next/image';
import React, { memo } from 'react';
import { Movie } from '../typings';

type Props = {
  media: Movie;
};

export const Thumbnail = memo(({ media }: Props) => {
  //   console.log(media);

  return (
    <div className="relative min-h-[140px] min-w-[240px] cursor-pointer transition duration-200 ease-out md:min-h-[230px] md:min-w-[470px] md:hover:scale-105">
      <Image
        src={`https://image.tmdb.org/t/p/w500${
          media.backdrop_path || media.poster_path
        }`}
        className="rounded-lg object-cover"
        layout="fill"
      />

      <div className="absolute">
        <div>
          <div>{media.release_date || media.first_air_date}</div>
          <div>{media.media_type}</div>
        </div>
        {/* <h2>{media.title ? media.title : media.name}</h2> */}
        <h2>{media.title || media.name}</h2>
      </div>
    </div>
  );
});

/*
// url to get certification

Movie certification

https://api.themoviedb.org/3/movie/453395/release_dates?api_key=f0f104174970501943df661d92b61131

TV certification

https://api.themoviedb.org/3/tv/60059/content_ratings?api_key=f0f104174970501943df661d92b61131&language=en-US
*/
