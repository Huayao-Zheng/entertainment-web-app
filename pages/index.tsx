import Head from 'next/head';

import { Movie, TV } from '../typings';
import requests from '../utils/requests';

import { SidebarMenu } from '../components/SidebarMenu';
import { Search } from '../components/Search';

export type Props = {
  trendingNow: Movie[];
  popularMovies: Movie[];
  popularTVs: TV[];
};

const Home = ({ trendingNow, popularMovies, popularTVs }: Props) => {
  console.log({ trendingNow, popularMovies, popularTVs });

  return (
    <div>
      <Head>
        <title>Entertainment-web-app</title>
        <link rel="icon" href="/logo.svg" />
      </Head>

      <SidebarMenu />
      <Search />
    </div>
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
