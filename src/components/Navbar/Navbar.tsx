import { IconMenu2, IconX, IconChevronDown, IconChevronsUpRight } from '@tabler/icons-react';
import { Transition, Disclosure } from '@headlessui/react';
import { Fragment } from 'react';
import { v4 } from 'uuid';

import LogoImage from 'assets/images/logo.png';
import { SOCIALS_ITEMS } from 'common/constants';
import { useDisclosure } from 'hooks/disclosure';
import { useRouterEvent } from 'hooks/routerEvent';
import ResizablePanel from '../ResizablePanel';
import NavbarItem from './NavbarItem';

const Navbar = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();

  useRouterEvent('routeChangeComplete', onClose);

  return (
    <header className="sticky top-0 z-50">
      <div className="absolute inset-0 bg-white bg-opacity-90 backdrop-blur"></div>
      <div className="container flex items-center justify-between h-16 border-b-[1px]">
        <div className="flex items-center gap-6">
          <NavbarItem href="/" className="flex items-center gap-6 w-max lg:hover:bg-transparent">
            <img src={LogoImage.src} alt="OSP Nawojowa Góra" className="w-6 h-7" />
            <h1 className="hidden lg:block font-semibold text-xl">OSP Nawojowa Góra</h1>
          </NavbarItem>

          <div className="border-l-[1px] border-l-zinc-400 flex gap-2 px-3">
            {SOCIALS_ITEMS.map((social) => (
              <NavbarItem key={v4()} externalLink href={social.href} title={social.name}>
                {social.icon}
                <span className="sr-only">{social.name}</span>
              </NavbarItem>
            ))}
          </div>
        </div>
        <div className="hidden lg:flex items-center gap-2 font-medium">
          <NavbarItem href="/">Strona główna</NavbarItem>
          <NavbarItem href="/blog">Aktualności</NavbarItem>
          <div className="relative flex flex-col group">
            <NavbarItem className="w-full flex justify-between items-center gap-2">
              <span>Jednostka</span>
              <IconChevronDown className="transform group-focus-within:rotate-180 group-hover:rotate-180 transition-transform" />
            </NavbarItem>
            <div className="absolute top-full -left-4 mt-0 pt-2 invisible opacity-0  transition-all translate-y-5 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-0">
              <div className="border-[1px] rounded w-max flex flex-col overflow-hidden bg-white p-2">
                <NavbarItem href="/historia">Historia</NavbarItem>
                <NavbarItem href="/czlonkowie">Członkowie</NavbarItem>
                <NavbarItem href="/mlodziezowa-druzyna-pozarnicza">Młodzieżowa Drużyna Pożarnicza</NavbarItem>
                <NavbarItem href="/zarzad">Zarząd</NavbarItem>
                <NavbarItem href="/wyposazenie">Wyposażenie</NavbarItem>
                <NavbarItem href="/sztandar">Sztandar</NavbarItem>
              </div>
            </div>
          </div>
          <NavbarItem href="/biblioteka">Biblioteka</NavbarItem>
          <NavbarItem href="/kontakt">Kontakt</NavbarItem>
        </div>

        <button className="relative z-50 lg:hidden p-1" onClick={onToggle}>
          <span className="hidden sr-only">Otwórz/zamknij nawigację</span>
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
            <NavbarItem href="/">Strona główna</NavbarItem>
            <NavbarItem href="/blog">Aktualności</NavbarItem>
            <Disclosure as="div" className="relative flex flex-col group">
              {({ open }) => (
                <>
                  <Disclosure.Button
                    as={NavbarItem}
                    className="w-full overflow-hidden flex justify-between items-center gap-2"
                  >
                    <span>Jednostka</span>
                    <IconChevronDown className="ui-open:rotate-180 transition" />
                  </Disclosure.Button>
                  <ResizablePanel open={open} className="relative w-full duration-150" wrapperClassName="duration-75">
                    <div className="flex-col flex p-2">
                      <NavbarItem className="flex gap-2 items-center" href="/historia">
                        <IconChevronsUpRight /> Historia
                      </NavbarItem>
                      <NavbarItem className="flex gap-2 items-center" href="/czlonkowie">
                        <IconChevronsUpRight /> Członkowie
                      </NavbarItem>
                      <NavbarItem className="flex gap-2 items-center" href="/mlodziezowa-druzyna-pozarnicza">
                        <IconChevronsUpRight /> Młodzieżowa Drużyna Pożarnicza
                      </NavbarItem>
                      <NavbarItem className="flex gap-2 items-center" href="/zarzad">
                        <IconChevronsUpRight /> Zarząd
                      </NavbarItem>
                      <NavbarItem className="flex gap-2 items-center" href="/wyposazenie">
                        <IconChevronsUpRight /> Wyposażenie
                      </NavbarItem>
                      <NavbarItem className="flex gap-2 items-center" href="/sztandar">
                        <IconChevronsUpRight /> Sztandar
                      </NavbarItem>
                    </div>
                  </ResizablePanel>
                </>
              )}
            </Disclosure>
            <NavbarItem href="/biblioteka">Biblioteka</NavbarItem>
            <NavbarItem href="/kontakt">Kontakt</NavbarItem>
          </div>
        </Transition>
      </div>
    </header>
  );
};

export default Navbar;
