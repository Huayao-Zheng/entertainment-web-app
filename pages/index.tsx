import Head from 'next/head';
import requests from '../utils/requests';
import { Movie, TV } from '../typings';
import { useRecoilValue } from 'recoil';
import { collapseState } from '../atoms/collapse';
import { Search } from '../components/Search';

export type Props = {
  trendingNow: Movie[];
  popularMovies: Movie[];
  popularTVs: TV[];
};

const Home = ({ trendingNow, popularMovies, popularTVs }: Props) => {
  const collapse = useRecoilValue(collapseState);

  console.log({ trendingNow, popularMovies, popularTVs });

  return (
    <>
      <Head>
        <title>Entertainment-web-app</title>
        <link rel="icon" href="/logo.svg" />
      </Head>

      <main
        className={`relative left-[84px] min-h-screen w-[calc(100%-84px)] transition-all duration-300 ${
          !collapse && 'left-[250px] w-[calc(100%-250px)]'
        }`}
      >
        <Search />
      </main>
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
