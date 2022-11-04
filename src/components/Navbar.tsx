import Link from 'next/link';
import classNames from 'classnames';
import { IconMenu2, IconX, IconChevronDown } from '@tabler/icons';
import { Disclosure, Popover, Transition } from '@headlessui/react';
import { Fragment } from 'react';

import { useDisclosure } from 'hooks/disclosure';
import { useRouterEvent } from 'hooks/routerEvent';

const Navbar = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();

  useRouterEvent('routeChangeComplete', onClose);

  return (
    <nav className="sticky w-full top-0 z-50 black bg-white shadow-sm">
      <div className="container flex justify-between items-center">
        <Link href="/">
          <img src="logo.png" alt="OSP Nawojowa Góra" className="w-9 h-10" />
        </Link>

        <div className="hidden lg:grid grid-flow-col gap-6">
          <Link className="p-1" href="/">
            Strona główna
          </Link>
          <Link className="p-1" href="/blog">
            Aktualności
          </Link>
          <Popover as="div" className="relative">
            <Popover.Button className="p-1 text-left flex justify-between items-center gap-4">
              <span>Jednostka</span>
              <IconChevronDown className="ui-open:rotate-180 ui-open:transform text-primary" />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition-opacity duration-75"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-150"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Popover.Panel className="absolute top-full w-max pt-4">
                {({ close }) => (
                  <>
                    <div className="grid gap-4 grid-flow-row bg-white shadow rounded">
                      <Link onClick={close} className="px-3 py-1 flex items-center" href="/historia">
                        Historia
                      </Link>
                      <Link onClick={close} className="px-3 py-1 flex items-center" href="/czlonkowie">
                        Członkowie
                      </Link>
                      <Link onClick={close} className="px-3 py-1 flex items-center" href="/zarzad">
                        Zarząd
                      </Link>
                      <Link onClick={close} className="px-3 py-1 flex items-center" href="/mlodziezowa-druzyna-pozarnicza">
                        Młodzieżowa drużyna pożarnicza
                      </Link>
                      <Link onClick={close} className="px-3 py-1 flex items-center" href="/wyposazenie">
                        Wyposażenie
                      </Link>
                      <Link onClick={close} className="px-3 py-1 flex items-center" href="/sztandar">
                        Sztandar
                      </Link>
                    </div>
                  </>
                )}
              </Popover.Panel>
            </Transition>
          </Popover>
          <Link className="p-1" href="/biblioteka">
            Biblioteka
          </Link>
          <Link className="p-1" href="/kontakt">
            Kontakt
          </Link>
        </div>

        <button onClick={onToggle} className="p-2 rounded bg-gray-100 relative z-50 lg:hidden">
          <span>{isOpen ? <IconX /> : <IconMenu2 />}</span>
        </button>
      </div>

      <Transition
        show={isOpen}
        as={Fragment}
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0 bg-white top-16 z-40 lg:hidden">
          <div className="container relative grid grid-flow-row gap-4 overflow-y-auto">
            <Link href="/">Strona główna</Link>
            <Link href="/blog">Aktualności</Link>
            <Disclosure as="div" className="relative grid grid-flow-row gap-4">
              <Disclosure.Button className="text-left flex justify-between items-center">
                <span>Jednostka</span>
                <IconChevronDown className="ui-open:rotate-180 ui-open:transform text-primary" />
              </Disclosure.Button>
              <Disclosure.Panel as="div" className="pl-4 gap-4 grid-flow-row grid">
                <Link href="/historia">Historia</Link>
                <Link href="/czlonkowie">Członkowie</Link>
                <Link href="/zarzad">Zarząd</Link>
                <Link href="/mlodziezowa-druzyna-pozarnicza">Młodzieżowa drużyna pożarnicza</Link>
                <Link href="/wyposazenie">Wyposażenie</Link>
                <Link href="/sztandar">Sztandar</Link>
              </Disclosure.Panel>
            </Disclosure>
            <Link href="/biblioteka">Biblioteka</Link>
            <Link href="/kontakt">Kontakt</Link>
          </div>
        </div>
      </Transition>
    </nav>
  );
};

export default Navbar;
