import { Movie } from '../typings';
import { Thumbnail } from './Thumbnail';

type Props = {
  movies: Movie[];
};

export const Trending = ({ movies }: Props) => {
  console.log('movies=>', movies);

  return (
    <section className="mt-4">
      <h1 className="mb-4 pl-4 text-xl font-light text-darkBlue transition duration-300 dark:text-d-text-color md:mb-6 md:text-4xl">
        Trending
      </h1>

      <div className="flex items-center gap-x-4 overflow-x-scroll py-2 px-4 scrollbar-hide md:gap-x-10 md:px-6">
        {movies.map((movie) => (
          <Thumbnail key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
};
