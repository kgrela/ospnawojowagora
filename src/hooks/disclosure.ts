import { useCallback, useState, useEffect } from 'react';

function useDisclosure() {
  const [isOpen, setIsOpen] = useState(false);

  const onToggle = useCallback(() => setIsOpen((p) => !p), []);
  const onOpen = useCallback(() => setIsOpen(true), []);
  const onClose = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    const classNames = '!overflow-hidden';

    if (isOpen) {
      document.documentElement.classList.add(classNames);
    } else {
      document.documentElement.classList.remove(classNames);
    }
  }, [isOpen]);

  return {
    isOpen,
    onToggle,
    onOpen,
    onClose,
  };
}

export { useDisclosure };
