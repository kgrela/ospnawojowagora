import { useMeasure } from 'react-use';
import { motion } from 'framer-motion';
import { ReactNode, useCallback } from 'react';
import { useDisclosure } from 'hooks/disclosure';

type NavbarMenuProps = {
  children: ReactNode;
  position: 'relative' | 'absolute';
};

const NavbarMenu = (props: NavbarMenuProps) => {
  return (
    <div>
      <div></div>
    </div>
  );
};

export default NavbarMenu;
