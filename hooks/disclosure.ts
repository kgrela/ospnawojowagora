import { ref } from 'vue';

function useDisclosure() {
  const opened = ref(false);

  const onToggle = () => {
    opened.value = !opened.value;
  };

  const onOpen = () => {
    opened.value = true;
  };

  const onClose = () => {
    opened.value = false;
  };

  return {
    opened,
    onToggle,
    onOpen,
    onClose,
  };
}

export { useDisclosure };
