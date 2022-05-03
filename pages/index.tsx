import Head from 'next/head';
import requests from '../utils/requests';
import { Movie, TV } from '../typings';
import { Search } from '../components/Search';

export type Props = {
  trendingNow: Movie[];
  popularMovies: Movie[];
  popularTVs: TV[];
};

const Home = ({ trendingNow, popularMovies, popularTVs }: Props) => {
  console.log({ trendingNow });

  return (
    <>
      <Head>
        <title>Entertainment-web-app</title>
        <link rel="icon" href="/logo.svg" />
      </Head>

      <Search placeholderText="Search for movies or TV series" />
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

  return {
    props: {
      trendingNow: trendingNow.results,
      popularMovies: fetchMovies.results,
      popularTVs: fetchTVs.results,
    },
  };
};
