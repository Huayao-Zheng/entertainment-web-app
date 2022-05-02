import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import { SidebarMenu } from '../components/SidebarMenu';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <SidebarMenu />
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default MyApp;
