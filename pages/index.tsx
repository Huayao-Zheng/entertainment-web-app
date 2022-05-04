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

  const certifications = await Promise.all(
    trendingNow.results.map((media: Movie) =>
      media.media_type === 'movie'
        ? fetch(
            `https://api.themoviedb.org/3/movie/${media.id}/release_dates?api_key=f0f104174970501943df661d92b61131&language=en-US`
          ).then((res) => res.json())
        : fetch(
            `https://api.themoviedb.org/3/tv/${media.id}/content_ratings?api_key=f0f104174970501943df661d92b61131&language=en-US`
          ).then((res) => res.json())
    )
  );
  // .then((res) => {
  //   let reformed = res.map(({ results }: certification, idx) => {
  //     const newObj = {};

  //     results.forEach((obj: { iso_3166_1: string; rating: string }) => {
  //       if (obj.iso_3166_1 === 'US') {
  //         if (obj.rating) {
  //           newObj.certification = obj.rating;
  //         } else {
  //           const cert = obj.release_dates.find(
  //             (obj1: { certification: string }) => obj1.certification !== ''
  //           );

  //           newObj.certification = cert ? cert.certification : null;
  //         }
  //       }
  //     });

  //     return newObj;
  //   });

  //   return reformed;
  // });

  // const trendingWithCerts = trendingNow.results.map(
  //   (movie: { certification: any }, idx: number) => {
  //     movie.certification = certifications[idx].certification;

  //     return movie;
  //   }
  // );

  return {
    props: {
      trendingNow: trendingNow.results,
      certifications,
    },
  };
};
