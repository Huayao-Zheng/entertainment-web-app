import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import { Header } from '../components/Header';
import { SidebarMenu } from '../components/SidebarMenu';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Entertainment-web-app</title>
        <link rel="icon" href="/logo.svg" />
      </Head>

      <SidebarMenu />
    </div>
  );
};

export default Home;
