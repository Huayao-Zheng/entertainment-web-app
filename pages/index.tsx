import Head from 'next/head';
import requests from '../utils/requests';
import { Movie, TV } from '../typings';
import { Search } from '../components/Search';
import { Trending } from '../components/Trending';
import { useEffect } from 'react';
import Movies from './movies';

export type Props = {
  trendingNow: Movie[];
  popularMovies: Movie[];
  popularTVs: TV[];
};

const Home = ({ trendingNow, popularMovies, popularTVs }: Props) => {
  console.log('===>', trendingNow);

  return (
    <>
      <Head>
        <title>Entertainment-web-app</title>
        <link rel="icon" href="/logo.svg" />
      </Head>

      <Search placeholderText="Search for movies or TV series" />

      <Trending movies={trendingNow} />
    </>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const [trendingNow, fetchMovies, fetchTVs] = await Promise.all([
    fetch(requests.fetchTrending).then((res) => res.json()),
    fetch(requests.fetchMovies).then((res) => res.json()),
    fetch(requests.fetchTVs).then((res) => res.json()),
  ]);

  const certifications = await Promise.all(
    trendingNow.results.map((trending) =>
      trending.media_type === 'movie'
        ? fetch(
            `https://api.themoviedb.org/3/movie/${trending.id}/release_dates?api_key=f0f104174970501943df661d92b61131&language=en-US`
          ).then((res) => res.json())
        : fetch(
            `https://api.themoviedb.org/3/tv/${trending.id}/content_ratings?api_key=f0f104174970501943df661d92b61131&language=en-US`
          ).then((res) => res.json())
    )
  ).then((res) => {
    let reformed = res.map(({ results }, idx) => {
      const newObj = {};

      results.forEach((obj: { iso_3166_1: string; rating: string }) => {
        if (obj.iso_3166_1 === 'US') {
          if (obj.rating) {
            newObj.certification = obj.rating;
          } else {
            const cert = obj.release_dates.find(
              (obj1) => obj1.certification !== ''
            );

            newObj.certification = cert ? cert.certification : null;
          }
        }
      });

      return newObj;
    });

    return reformed;
  });

  const trendingWithCerts = trendingNow.results.map((movie, idx) => {
    movie.certification = certifications[idx].certification;

    return movie;
  });

  return {
    props: {
      trendingNow: trendingWithCerts,
      popularMovies: certifications,
      popularTVs: fetchTVs.results,
    },
  };
};
