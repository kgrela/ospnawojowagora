import { useCallback, useLayoutEffect, useState } from 'react';

function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.scrollTop ?? 0;
    }

    return 0;
  });

  const handleScroll = useCallback(() => {
    const position = document.documentElement.scrollTop || document.body.scrollTop;
    setScrollPosition(position);
  }, []);

  useLayoutEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return scrollPosition;
}

export { useScrollPosition };
