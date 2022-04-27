import type { NextPage } from 'next';
import Head from 'next/head';

import { Header } from '../components/Header';

const Movies: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Entertainment-web-app</title>
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Header />
      Movies
    </div>
  );
};

export default Movies;
