import Head from 'next/head';

import { Movie } from '../typings';
import requests from '../utils/requests';

import { Search } from '../components/Search';
import { SidebarMenu } from '../components/SidebarMenu';

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

      <main>
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