import Link from 'next/link';
import { IconMenu2, IconX, IconChevronDown, IconChevronUp, IconChevronRight } from '@tabler/icons';
import { Transition, Popover } from '@headlessui/react';
import { Fragment } from 'react';
import { v4 } from 'uuid';

import LogoImage from 'assets/images/logo.png';
import { NAVIGATION_ITEMS, SOCIALS_ITEMS } from 'common/constants';
import { useDisclosure } from 'hooks/disclosure';
import { useRouterEvent } from 'hooks/routerEvent';

const Navbar = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();

  useRouterEvent('routeChangeComplete', onClose);

  return (
    <header className="relative lg:sticky top-0 z-50">
      <div className="absolute inset-0 bg-white bg-opacity-80 backdrop-blur"></div>
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-6 w-max">
            <img src={LogoImage.src} alt="OSP Nawojowa Góra" className="w-6 h-7" />
            <h1 className="hidden lg:block font-semibold text-xl">OSP Nawojowa Góra</h1>
          </Link>

          <div className="border-l-[1px] border-l-zinc-400 flex gap-6 px-6">
            {SOCIALS_ITEMS.map((social) => (
              <a key={v4()} href={social.href}>
                {social.icon}
                <span className="sr-only">{social.name}</span>
              </a>
            ))}
          </div>
        </div>
        <div className="hidden lg:flex items-center gap-4 font-medium">
          {NAVIGATION_ITEMS.map((link) => {
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
                  <Popover.Panel className="absolute top-full -left-2 mt-8 border-[1px] border-zinc-300 rounded-lg w-max flex flex-col overflow-hidden bg-white p-1">
                    {link.links.map((nestedLink) => (
                      <Link className="p-2" href={nestedLink.path} key={v4()}>
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
          enter="transition duration-150"
          enterFrom="opacity-0 translate-y-10"
          enterTo="opacity-100 translate-y-0"
          leave="transition duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="container backdrop-blur-none bg-opacity-100 text-left fixed z-50 inset-0 top-[60px] bg-white flex h-[calc(100% - 60px)] flex-col lg:hidden font-medium">
            {NAVIGATION_ITEMS.map((link) => {
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
