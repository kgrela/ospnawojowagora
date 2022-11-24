import Link from 'next/link';
import {
  IconBrandFacebook,
  IconBrandYoutube,
  IconBrandInstagram,
  IconMenu2,
  IconX,
  IconChevronDown,
  IconChevronUp,
  IconChevronRight,
} from '@tabler/icons';
import { Disclosure, Menu, Transition, Popover } from '@headlessui/react';
import { Fragment } from 'react';
import { v4 } from 'uuid';
import classNames from 'classnames';

import { useDisclosure } from 'hooks/disclosure';
import { useRouterEvent } from 'hooks/routerEvent';
import { useScrollPosition } from 'hooks/scrollPosition';

export const NAVBAR_LINKS = [
  {
    label: 'Strona główna',
    path: '/',
  },
  {
    label: 'Aktualności',
    path: '/blog',
  },
  {
    label: 'Jednostka',
    links: [
      {
        label: 'Historia',
        path: '/historia',
      },
      {
        label: 'Członkowie',
        path: '/czlonkowie',
      },
      {
        label: 'Młodzieżowa Drużyna Pożarnicza',
        path: '/mlodziezowa-druzyna-pozarnicza',
      },
      {
        label: 'Zarząd',
        path: '/zarzad',
      },
      {
        label: 'Wyposażenie',
        path: '/wyposazenie',
      },
      {
        label: 'Sztandar',
        path: '/sztandar',
      },
    ],
  },
  {
    label: 'Biblioteka',
    path: '/biblioteka',
  },
  {
    label: 'Kontakt',
    path: '/kontakt',
  },
];

export const socials = [
  {
    href: '#',
    name: 'Facebook',
    icon: <IconBrandFacebook className="w-6 h-6" />,
  },
  {
    href: '#',
    name: 'Instagram',
    icon: <IconBrandInstagram className="w-6 h-6" />,
  },
  {
    href: '#',
    name: 'Youtube',
    icon: <IconBrandYoutube className="w-6 h-6" />,
  },
];

const Navbar = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();

  const position = useScrollPosition();

  useRouterEvent('routeChangeComplete', onClose);

  return (
    <header className={classNames('sticky top-0 z-50 bg-white', position > 0 && 'shadow-lg')}>
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-6 w-max">
            <img src="/logo.png" alt="OSP Nawojowa Góra" className="w-6 h-7" />
            <h1 className="hidden lg:block font-semibold text-xl">OSP Nawojowa Góra</h1>
          </Link>

          <div className="border-l-[1px] border-l-zinc-400 flex gap-6 px-6">
            {socials.map((social) => (
              <a key={v4()} href={social.href}>
                {social.icon}
                <span className="sr-only">{social.name}</span>
              </a>
            ))}
          </div>
        </div>
        <div className="hidden lg:flex items-center gap-4 font-medium">
          {NAVBAR_LINKS.map((link) => {
            if (link.links) {
              return (
                <Popover key={v4()} as="div" className="relative flex flex-col">
                  <Popover.Button className="w-full flex justify-between items-center gap-2">
                    {({ open }) => (
                      <>
                        <span>{link.label}</span>

                        {open ? <IconChevronUp /> : <IconChevronDown />}
                      </>
                    )}
                  </Popover.Button>
                  <Popover.Panel className="absolute top-full -left-2 mt-8 border-[1px] shadow rounded-lg w-max flex flex-col overflow-hidden bg-white p-1">
                    {link.links.map((nestedLink) => (
                      <Link className="p-2 border-b-[1px] border-b-zinc-300 last:border-none" href={nestedLink.path} key={v4()}>
                        {nestedLink.label}
                      </Link>
                    ))}
                  </Popover.Panel>
                </Popover>
              );
            }

            return (
              <Link key={v4()} className="" href={link.path}>
                {link.label}
              </Link>
            );
          })}
        </div>

        <button className="relative z-50 lg:hidden" onClick={onToggle}>
          <span className="block w-6 h-6">{isOpen ? <IconX /> : <IconMenu2 />}</span>
        </button>

        <Transition
          as={Fragment}
          show={isOpen}
          enter="transition-opacity duration-75"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-75"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="container text-left fixed inset-0 top-[60px] bg-white flex h-[calc(100% - 60px)] flex-col lg:hidden font-medium">
            {NAVBAR_LINKS.map((link) => {
              if (link.links) {
                return (
                  <div key={v4()} className="group w-full flex flex-col">
                    <button className="w-full flex justify-between items-center py-2 border-b-[1px] border-b-zinc-300">
                      <span>{link.label}</span>
                      <IconChevronUp className="hidden group-focus-within:block" />
                      <IconChevronDown className="block group-focus-within:hidden" />
                    </button>
                    <div className="hidden flex-col group-focus-within:flex">
                      {link.links.map((nestedLink) => (
                        <Link
                          className="py-2 flex items-center gap-2 border-b-[1px] border-b-zinc-300 last:border-none"
                          href={nestedLink.path}
                          key={v4()}
                        >
                          <IconChevronRight />
                          {nestedLink.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <Link key={v4()} className="py-2 border-b-[1px] border-b-zinc-300 last:border-none" href={link.path}>
                  {link.label}
                </Link>
              );
            })}
          </div>
        </Transition>
      </div>
    </header>
  );
};

export default Navbar;
