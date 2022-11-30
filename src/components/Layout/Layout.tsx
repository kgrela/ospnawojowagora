import { ReactNode } from 'react';

import Navbar from '../Navbar';

type LayoutProps = {
  children: ReactNode;
};

function Layout(props: LayoutProps) {
  return (
    <>
      <Navbar />
      <main>{props.children}</main>
    </>
  );
}

export type { LayoutProps };

export default Layout;
