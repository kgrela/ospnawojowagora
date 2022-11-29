import { useCallback, useState } from 'react';

import { useBrowserLayoutEffect } from './browserLayoutEffect';

const isClient = typeof window !== 'undefined';

function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(() => {
    if (isClient) {
      return document.documentElement.scrollTop ?? 0;
    }

    return 0;
  });

  const handleScroll = useCallback(() => {
    const position = document.documentElement.scrollTop || document.body.scrollTop;
    setScrollPosition(position);
  }, []);

  useBrowserLayoutEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return scrollPosition;
}

export { useScrollPosition };
