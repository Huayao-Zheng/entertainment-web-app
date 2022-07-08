import Head from 'next/head';
import requests from '../utils/requests';
import { certification, Movie } from '../typings';
import { Search } from '../components/Search';
import { Title } from '../components/Title';
import { MediaCard } from '../components/MediaCard';

export type Props = {
  popularMovies: Movie[];
  certifications: certification[];
};

const Movies = ({ popularMovies, certifications }: Props) => {
  return (
    <div>
      <Head>
        <title>Entertainment-web-app</title>
        <link rel="icon" href="/static/favicon.ico" />
      </Head>

      <Search placeholderText="Search for movies" />

      <section className="mt-6 mb-16">
        <Title text="Movies" />
        <div className="grid-container">
          {popularMovies.map((media) => (
            <MediaCard
              key={media.id}
              media={media}
              certifications={certifications}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Movies;

export const getServerSideProps = async () => {
  const popularMovies = await fetch(requests.fetchMovies).then((res) =>
    res.json()
  );

  // get certifications or ratings for each media
  const certifications = await Promise.all(
    popularMovies.results.map((media: Movie) =>
      media.media_type === 'movie'
        ? fetch(requests.fetchMovieCertificationById(media.id)).then((res) =>
            res.json()
          )
        : fetch(requests.fetchTVRatingById(media.id)).then((res) => res.json())
    )
  );

  return {
    props: {
      popularMovies: popularMovies.results,
      certifications,
    },
  };
};
