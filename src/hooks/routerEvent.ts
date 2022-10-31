import { RouterEvent, useRouter } from 'next/router';
import { useEffect } from 'react';

function useRouterEvent(event: RouterEvent, callback: () => void) {
  const router = useRouter();

  useEffect(() => {
    router.events.on(event, callback);

    return () => {
      router.events.off(event, callback);
    };
  }, [callback, event, router.events]);
}

export { useRouterEvent };
