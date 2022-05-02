import Head from 'next/head';
import requests from '../utils/requests';
import { Movie } from '../typings';
import { useRecoilValue } from 'recoil';
import { collapseState } from '../atoms/collapse';
import { Search } from '../components/Search';

export type Props = {
  popularTVs: Movie[];
};

const TVs = ({ popularTVs }: Props) => {
  const collapse = useRecoilValue(collapseState);

  console.log(popularTVs);
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

export default TVs;

export const getServerSideProps = async () => {
  const fetchTVs = await fetch(requests.fetchTVs).then((res) => res.json());

  return {
    props: {
      popularTVs: fetchTVs.results,
    },
  };
};
