import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { SidebarMenu } from '../components/SidebarMenu';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <SidebarMenu />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
