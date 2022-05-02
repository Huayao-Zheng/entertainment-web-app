import Head from 'next/head';
import { useRecoilValue } from 'recoil';
import { collapseState } from '../atoms/collapse';

const Bookmarked = () => {
  const collapse = useRecoilValue(collapseState);

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
        Bookmark
      </main>
    </div>
  );
};

export default Bookmarked;
