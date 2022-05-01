import Head from 'next/head';

import { SidebarMenu } from '../components/SidebarMenu';

const Bookmarked = () => {
  return (
    <div>
      <Head>
        <title>Entertainment-web-app</title>
        <link rel="icon" href="/logo.svg" />
      </Head>
      <SidebarMenu />
      Bookmark
    </div>
  );
};

export default Bookmarked;
