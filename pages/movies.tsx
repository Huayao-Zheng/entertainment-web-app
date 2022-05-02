import Head from 'next/head';
import requests from '../utils/requests';
import { Movie } from '../typings';
import { useRecoilValue } from 'recoil';
import { collapseState } from '../atoms/collapse';
import { Search } from '../components/Search';

export type Props = {
  popularMovies: Movie[];
};

const Movies = ({ popularMovies }: Props) => {
  const collapse = useRecoilValue(collapseState);

  console.log(popularMovies);
  return (
    <div>
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
    </div>
  );
};

export default Movies;

export const getServerSideProps = async () => {
  const fetchMovies = await fetch(requests.fetchMovies).then((res) =>
    res.json()
  );

  return {
    props: {
      popularMovies: fetchMovies.results,
    },
  };
};
