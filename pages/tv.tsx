import type { NextPage } from 'next';
import Head from 'next/head';

import { Header } from '../components/Header';

const TV: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Entertainment-web-app</title>
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Header />
      TV
    </div>
  );
};

export default TV;
