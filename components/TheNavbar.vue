<script setup lang="ts">
import { IconChevronDown, IconChevronRight, IconX, IconMenu2 } from '@tabler/icons-vue';
import { TransitionRoot, Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';

import { SOCIALS_ITEMS } from '~/common/constants';
import { useDisclosure } from '~/hooks/disclosure';

const { opened, onToggle, onClose } = useDisclosure();
const router = useRouter();

router.afterEach(onClose);
</script>

<template>
  <header class="sticky top-0 z-50">
    <div class="absolute inset-0 bg-white bg-opacity-90 backdrop-blur"></div>
    <div class="container flex items-center justify-between h-16 border-b-[1px]">
      <div class="flex items-center gap-6">
        <TheNavbarLink href="/" class="flex items-center gap-6 w-max">
          <img src="/images/logo.png" alt="OSP Nawojowa Góra" class="w-6 h-7" />
          <h1 class="hidden lg:block font-semibold text-xl">OSP Nawojowa Góra</h1>
        </TheNavbarLink>

        <div class="border-l-[1px] border-l-zinc-400 flex gap-2 px-3">
          <TheNavbarLink v-for="social in SOCIALS_ITEMS" :href="social.href" :title="social.name" :external="true">
            <component :is="social.icon" />
            <span class="sr-only">{{ social.name }}</span>
          </TheNavbarLink>
        </div>
      </div>
      <div class="hidden lg:flex items-center gap-2 font-medium">
        <TheNavbarLink href="/">Strona główna</TheNavbarLink>
        <TheNavbarLink href="/blog">Aktualności</TheNavbarLink>
        <div class="relative flex flex-col group">
          <TheNavbarLink class="w-full flex justify-between items-center gap-2">
            <span>Jednostka</span>
            <IconChevronDown
              class="transform group-focus-within:rotate-180 group-hover:rotate-180 transition-transform"
            />
          </TheNavbarLink>
          <div
            class="absolute top-full -left-4 mt-0 pt-2 invisible opacity-0 transition-all translate-y-5 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-0"
          >
            <div class="border-[1px] rounded w-max flex flex-col overflow-hidden bg-white p-2">
              <TheNavbarLink href="/historia">Historia</TheNavbarLink>
              <TheNavbarLink href="/czlonkowie">Członkowie</TheNavbarLink>
              <TheNavbarLink href="/mlodziezowa-druzyna-pozarnicza">Młodzieżowa Drużyna Pożarnicza</TheNavbarLink>
              <TheNavbarLink href="/zarzad">Zarząd</TheNavbarLink>
              <TheNavbarLink href="/wyposazenie">Wyposażenie</TheNavbarLink>
              <TheNavbarLink href="/sztandar">Sztandar</TheNavbarLink>
            </div>
          </div>
        </div>
        <TheNavbarLink href="/biblioteka">Biblioteka</TheNavbarLink>
        <TheNavbarLink href="/kontakt">Kontakt</TheNavbarLink>
      </div>

      <button class="relative z-50 lg:hidden p-1" @click="onToggle">
        <span class="hidden sr-only">Otwórz/zamknij nawigację</span>
        <span class="block w-6 h-6">
          <IconX v-if="opened" />
          <IconMenu2 v-else />
        </span>
      </button>

      <TransitionRoot
        :show="opened"
        class="backdrop-blur-none bg-opacity-100 text-left fixed z-50 inset-0 top-[63px] bg-white h-[calc(100% - 63px)] lg:hidden font-medium"
        enter="transition duration-150"
        enterFrom="opacity-0 translate-y-10"
        enterTo="opacity-100 translate-y-0"
        leave="transition duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div class="container flex flex-col">
          <TheNavbarLink href="/">Strona główna</TheNavbarLink>
          <TheNavbarLink href="/blog">Aktualności</TheNavbarLink>
          <Disclosure as="div" class="relative flex flex-col group">
            <DisclosureButton
              class="p-2 rounded-md lg:hover:bg-neutral-100 w-full overflow-hidden flex justify-between items-center gap-2"
            >
              <span>Jednostka</span>
              <IconChevronDown class="ui-open:rotate-180 transition" />
            </DisclosureButton>
            <DisclosurePanel class="relative w-full duration-150">
              <div class="flex-col flex p-2">
                <TheNavbarLink class="flex gap-2 items-center" href="/historia">
                  <IconChevronRight /> Historia
                </TheNavbarLink>
                <TheNavbarLink class="flex gap-2 items-center" href="/czlonkowie">
                  <IconChevronRight /> Członkowie
                </TheNavbarLink>
                <TheNavbarLink class="flex gap-2 items-center" href="/mlodziezowa-druzyna-pozarnicza">
                  <IconChevronRight /> Młodzieżowa Drużyna Pożarnicza
                </TheNavbarLink>
                <TheNavbarLink class="flex gap-2 items-center" href="/zarzad">
                  <IconChevronRight /> Zarząd
                </TheNavbarLink>
                <TheNavbarLink class="flex gap-2 items-center" href="/wyposazenie">
                  <IconChevronRight /> Wyposażenie
                </TheNavbarLink>
                <TheNavbarLink class="flex gap-2 items-center" href="/sztandar">
                  <IconChevronRight /> Sztandar
                </TheNavbarLink>
              </div>
            </DisclosurePanel>
          </Disclosure>
          <TheNavbarLink href="/biblioteka">Biblioteka</TheNavbarLink>
          <TheNavbarLink href="/kontakt">Kontakt</TheNavbarLink>
        </div>
      </TransitionRoot>
    </div>
  </header>
</template>
