import { useEffect } from 'react';
import Head from 'next/head';
import requests from '../utils/requests';
import { certification, Movie } from '../typings';
import { Search } from '../components/Search';
import { Trending } from '../components/Trending';

export type Props = {
  trendingNow: Movie[];
  certifications: certification[];
};

const Home = ({ trendingNow, certifications }: Props) => {
  return (
    <>
      <Head>
        <title>Entertainment-web-app</title>
        <link rel="icon" href="/logo.svg" />
      </Head>

      <Search placeholderText="Search for movies or TV series" />

      <Trending trendingNow={trendingNow} certifications={certifications} />
    </>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const trendingNow = await fetch(requests.fetchTrending).then((res) =>
    res.json()
  );

  // get certifications or ratings for each media
  const certifications = await Promise.all(
    trendingNow.results.map((media: Movie) =>
      media.media_type === 'movie'
        ? fetch(requests.fetchMovieCertificationById(media.id)).then((res) =>
            res.json()
          )
        : fetch(requests.fetchTVRatingById(media.id)).then((res) => res.json())
    )
  );

  return {
    props: {
      trendingNow: trendingNow.results,
      certifications,
    },
  };
};
