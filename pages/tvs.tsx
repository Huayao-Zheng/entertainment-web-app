import Head from 'next/head';
import { SidebarMenu } from '../components/SidebarMenu';

import { Movie } from '../typings';
import requests from '../utils/requests';

export type Props = {
  popularTVs: Movie[];
};

const TVs = ({ popularTVs }: Props) => {
  console.log(popularTVs);
  return (
    <div>
      <Head>
        <title>Entertainment-web-app</title>
        <link rel="icon" href="/logo.svg" />
      </Head>
      <SidebarMenu />
      popularTVs
    </div>
  );
};

export default TVs;

export const getServerSideProps = async () => {
  const fetchTVs = await fetch(requests.fetchTVs).then((res) => res.json());

  return {
    props: {
      popularTVs: fetchTVs.results,
    },
  };
};
