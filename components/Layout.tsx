import { ReactNode, useState } from 'react';
import { useRouter } from 'next/router';
import { SidebarMenu } from './SidebarMenu';
import { Modal } from './Modal';
import { useRecoilValue } from 'recoil';
import { modalState } from '../atoms/modalAtom';

type Props = {
  children: ReactNode;
};

export const Layout = ({ children }: Props) => {
  const showModal = useRecoilValue(modalState);
  const [collapse, setCollapse] = useState(true);
  const router = useRouter();

  if (router.pathname === '/login' || router.pathname === '/_error') {
    return <>{children}</>;
  }

  return (
    <>
      <SidebarMenu collapse={collapse} setCollapse={setCollapse} />

      <main
        className={`relative min-h-screen transition-all duration-300 ${
          collapse
            ? 'left-[84px] w-[calc(100%-84px)] sm:left-[56px] sm:w-[calc(100%-56px)]'
            : 'left-[250px] w-[calc(100%-250px)]'
        }`}
      >
        {children}
      </main>

      {showModal && <Modal />}
    </>
  );
};
