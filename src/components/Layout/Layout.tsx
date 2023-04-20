import { ReactNode } from 'react';
import { Oxanium } from 'next/font/google';

import Navbar from '../Navbar';

type LayoutProps = {
  children: ReactNode;
};

const font = Oxanium({ subsets: ['latin'] });

function Layout(props: LayoutProps) {
  return (
    <div className={font.className}>
      <Navbar />
      <main>{props.children}</main>
    </div>
  );
}

export type { LayoutProps };

export default Layout;
