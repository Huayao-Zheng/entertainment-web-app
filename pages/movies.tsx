import Head from 'next/head';
import { SidebarMenu } from '../components/SidebarMenu';

import { Movie } from '../typings';
import requests from '../utils/requests';

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
      <SidebarMenu />
      Movies
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
