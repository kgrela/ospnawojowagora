import { AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import { ReactNode } from 'react';
import { useMeasure } from 'react-use';

type NavbarDropdownProps = {
  position: 'relative' | 'absolute';
  children: ReactNode;
};

const NavbarDropdown = (props: NavbarDropdownProps) => {
  if (props.position === 'relative') {
    return (
      <AnimatePresence>
        <AnimateSharedLayout></AnimateSharedLayout>
      </AnimatePresence>
    );
  }

  return null;
};

export default NavbarDropdown;
