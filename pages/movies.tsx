import Head from 'next/head';
import requests from '../utils/requests';
import { Movie } from '../typings';
import { Search } from '../components/Search';

export type Props = {
  popularMovies: Movie[];
};

const Movies = ({ popularMovies }: Props) => {
  console.log(popularMovies);
  return (
    <div>
      <Head>
        <title>Entertainment-web-app</title>
        <link rel="icon" href="/logo.svg" />
      </Head>
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
