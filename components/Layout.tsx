import { ReactNode, useState } from 'react';
import { SidebarMenu } from './SidebarMenu';

type Props = {
  children: ReactNode;
};

export const Layout = ({ children }: Props) => {
  const [collapse, setCollapse] = useState(false);

  return (
    <>
      <SidebarMenu collapse={collapse} setCollapse={setCollapse} />

      <main
        className={`relative min-h-screen transition-all duration-300 sm:left-0 sm:w-full ${
          collapse
            ? 'left-[84px] w-[calc(100%-84px)]'
            : 'left-[250px] w-[calc(100%-250px)]'
        }`}
      >
        {children}
      </main>
    </>
  );
};
