import Link from 'next/link';
import { IconMenu2, IconX, IconChevronDown, IconChevronsUpRight } from '@tabler/icons';
import { Transition, Popover, Disclosure, Menu } from '@headlessui/react';
import { Fragment } from 'react';
import { v4 } from 'uuid';

import LogoImage from 'assets/images/logo.png';
import { SOCIALS_ITEMS } from 'common/constants';
import { useDisclosure } from 'hooks/disclosure';
import { useRouterEvent } from 'hooks/routerEvent';

const Navbar = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();

  useRouterEvent('routeChangeComplete', onClose);

  return (
    <header className="sticky top-0 z-50">
      <div className="absolute inset-0 bg-white bg-opacity-80 backdrop-blur"></div>
      <div className="container flex items-center justify-between h-16 border-b-[1px]">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-6 w-max">
            <img src={LogoImage.src} alt="OSP Nawojowa Góra" className="w-6 h-7" />
            <h1 className="hidden lg:block font-semibold text-xl">OSP Nawojowa Góra</h1>
          </Link>

          <div className="border-l-[1px] border-l-zinc-400 flex gap-6 px-6">
            {SOCIALS_ITEMS.map((social) => (
              <a key={v4()} href={social.href} title={social.name}>
                {social.icon}
                <span className="sr-only">{social.name}</span>
              </a>
            ))}
          </div>
        </div>
        <div className="hidden lg:flex items-center gap-4 font-medium">
          <Link href="/">Strona główna</Link>
          <Link href="/blog">Aktualności</Link>
          <div className="relative flex flex-col group">
            <button className="w-full flex justify-between items-center gap-2">
              <span>Jednostka</span>
              <IconChevronDown className="transform group-focus-within:rotate-180 group-hover:rotate-180 transition-transform" />
            </button>
            <div className="absolute top-full -left-4 mt-4 border-[1px] rounded w-max flex invisible opacity-0 flex-col overflow-hidden bg-white p-2 transition-all translate-y-5 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-0">
              <Link className="p-2 focus-visible:bg-zinc-100 hover:bg-zinc-100" href="/historia">
                Historia
              </Link>
              <Link className="p-2 focus-visible:bg-zinc-100 hover:bg-zinc-100" href="/czlonkowie">
                Członkowie
              </Link>
              <Link className="p-2 focus-visible:bg-zinc-100 hover:bg-zinc-100" href="/mlodziezowa-druzyna-pozarnicza">
                Młodzieżowa Drużyna Pożarnicza
              </Link>
              <Link className="p-2 focus-visible:bg-zinc-100 hover:bg-zinc-100" href="/zarzad">
                Zarząd
              </Link>
              <Link className="p-2 focus-visible:bg-zinc-100 hover:bg-zinc-100" href="/wyposazenie">
                Wyposażenie
              </Link>
              <Link className="p-2 focus-visible:bg-zinc-100 hover:bg-zinc-100" href="/sztandar">
                Sztandar
              </Link>
            </div>
          </div>
          <Link href="/biblioteka">Biblioteka</Link>
          <Link href="/kontakt">Kontakt</Link>
        </div>

        <button className="relative z-50 lg:hidden" onClick={onToggle}>
          <span className="block w-6 h-6">{isOpen ? <IconX /> : <IconMenu2 />}</span>
        </button>

        <Transition
          as={Fragment}
          show={isOpen}
          enter="transition duration-150"
          enterFrom="opacity-0 translate-y-10"
          enterTo="opacity-100 translate-y-0"
          leave="transition duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="container backdrop-blur-none bg-opacity-100 text-left fixed z-50 inset-0 top-[63px] bg-white flex h-[calc(100% - 63px)] flex-col lg:hidden font-medium">
            <Link className="py-2 border-b-[1px] border-b-zinc-300 last:border-none" href="/">
              Strona główna
            </Link>
            <Link className="py-2 border-b-[1px] border-b-zinc-300 last:border-none" href="/blog">
              Aktualności
            </Link>
            <div className="relative flex flex-col group">
              <button className="w-full overflow-hidden py-2 border-b-[1px] border-b-zinc-300 flex justify-between items-center gap-2">
                <span>Jednostka</span>
                <IconChevronDown className="transform group-focus-within:rotate-180 transition-transform" />
              </button>
              <div className="relative w-full invisible flex-col flex overflow-hidden bg-white transition-all max-h-0 group-focus-within:visible group-focus-within:max-h-96">
                <Link
                  className="flex gap-2 items-center py-2 pl-2 border-b-[1px] border-b-zinc-300 last:border-none"
                  href="/historia"
                >
                 <IconChevronsUpRight /> Historia 
                </Link>
                <Link
                  className="flex gap-2 items-center py-2 pl-2 border-b-[1px] border-b-zinc-300 last:border-none"
                  href="/czlonkowie"
                >
                 <IconChevronsUpRight /> Członkowie 
                </Link>
                <Link
                  className="flex gap-2 items-center py-2 pl-2 border-b-[1px] border-b-zinc-300 last:border-none"
                  href="/mlodziezowa-druzyna-pozarnicza"
                >
                 <IconChevronsUpRight /> Młodzieżowa Drużyna Pożarnicza 
                </Link>
                <Link
                  className="flex gap-2 items-center py-2 pl-2 border-b-[1px] border-b-zinc-300 last:border-none"
                  href="/zarzad"
                >
                 <IconChevronsUpRight /> Zarząd 
                </Link>
                <Link
                  className="flex gap-2 items-center py-2 pl-2 border-b-[1px] border-b-zinc-300 last:border-none"
                  href="/wyposazenie"
                >
                 <IconChevronsUpRight /> Wyposażenie 
                </Link>
                <Link
                  className="flex gap-2 items-center py-2 pl-2 border-b-[1px] border-b-zinc-300 last:border-none"
                  href="/sztandar"
                >
                 <IconChevronsUpRight /> Sztandar 
                </Link>
              </div>
            </div>
            <Link className="py-2 border-b-[1px] border-b-zinc-300 last:border-none" href="/biblioteka">
              Biblioteka
            </Link>
            <Link className="py-2 border-b-[1px] border-b-zinc-300 last:border-none" href="/kontakt">
              Kontakt
            </Link>
          </div>
        </Transition>
      </div>
    </header>
  );
};

export default Navbar;
