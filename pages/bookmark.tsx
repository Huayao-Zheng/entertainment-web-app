import type { NextPage } from 'next';
import Head from 'next/head';

import { Header } from '../components/Header';

const Bookmark: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Entertainment-web-app</title>
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Header />
      Bookmark
    </div>
  );
};

export default Bookmark;
