import Head from 'next/head';
import requests from '../utils/requests';
import { certification, Movie } from '../typings';
import { Search } from '../components/Search';
import { Title } from '../components/Title';
import { MediaCard } from '../components/MediaCard';

export type Props = {
  popularTVs: Movie[];
  certifications: certification[];
};

const TVs = ({ popularTVs, certifications }: Props) => {
  console.log(popularTVs);
  return (
    <div>
      <Head>
        <title>Entertainment-web-app</title>
        <link rel="icon" href="/logo.svg" />
      </Head>

      <Search placeholderText="Search for movies" />

      <section className="mt-6 mb-16">
        <Title text="Movies" />
        <div className="grid-container">
          {popularTVs.map((media) => (
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

export default TVs;

export const getServerSideProps = async () => {
  const popularTVs = await fetch(requests.fetchTVs).then((res) => res.json());

  // get certifications or ratings for each media
  const certifications = await Promise.all(
    popularTVs.results.map((media: Movie) =>
      media.media_type === 'movie'
        ? fetch(requests.fetchMovieCertificationById(media.id)).then((res) =>
            res.json()
          )
        : fetch(requests.fetchTVRatingById(media.id)).then((res) => res.json())
    )
  );

  return {
    props: {
      popularTVs: popularTVs.results
        .map((tv: Movie) => ({
          ...tv,
          media_type: 'tv',
        }))
        .sort(() => Math.random() - 0.5),
      certifications,
    },
  };
};
