'use client'

import { useState, useEffect } from 'react';
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react';
import {
  Bars3Icon,
  XMarkIcon,
  HomeIcon,
  CubeIcon,
  TvIcon,
  BuildingStorefrontIcon,
} from '@heroicons/react/24/outline';
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';
import Link from 'next/link';

const services = [
  { name: 'Cocinas integrales personalizadas', description: 'Diseñamos cocinas funcionales y elegantes', href: '#servicios', icon: HomeIcon },
  { name: 'Closets y vestieres a medida', description: 'Soluciones de almacenamiento personalizadas', href: '#servicios', icon: CubeIcon },
  { name: 'Centros de entretenimiento', description: 'Muebles para TV y equipos audiovisuales', href: '#servicios', icon: TvIcon },
  { name: 'Muebles para baños y lavaderos', description: 'Vanidades y muebles funcionales', href: '#servicios', icon: BuildingStorefrontIcon },
];

const callsToAction = [
  { name: 'Ver portafolio', href: '#projects', icon: PlayCircleIcon },
  { name: 'Contactar', href: '#contacto', icon: PhoneIcon },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detectar scroll para cambiar la apariencia del header
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#fdc700]/60 backdrop-blur-md shadow-lg'
          : 'bg-black/60'
      }`}
    >
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-2 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Linea Hogar</span>
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg">
                <div className="relative h-12 w-12">
                  <Image
                    src="/linea-hogar.png"
                    alt="Company Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <span className={`font-bold text-xl transition-colors ${
                scrolled ? 'text-black' : 'text-white'
              }`}>
                Linea Hogar
              </span>
            </div>
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 transition-colors ${
              scrolled ? 'text-black' : 'text-white'
            }`}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <PopoverGroup className="hidden lg:flex lg:gap-x-8">
          <Popover className="relative">
            <PopoverButton className={`flex items-center gap-x-1 text-sm font-semibold leading-6 transition-colors ${
              scrolled ? 'text-black' : 'text-white'
            }`}>
              Servicios
              <ChevronDownIcon className={`h-5 w-5 flex-none transition-colors ${
                scrolled ? 'text-gray-600' : 'text-gray-300'
              }`} aria-hidden="true" />
            </PopoverButton>

            <PopoverPanel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
              <div className="p-4">
                {services.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50 cursor-pointer"
                    onClick={() => scrollToSection(item.href.replace('#', ''))}
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon className="h-6 w-6 text-gray-600 group-hover:text-[#f0b100]" aria-hidden="true" />
                    </div>
                    <div className="flex-auto">
                      <span className="block font-semibold text-gray-900">
                        {item.name}
                      </span>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                {callsToAction.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href.replace('#', ''))}
                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                  >
                    <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                    {item.name}
                  </button>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          <button
            onClick={() => scrollToSection('projects')}
            className={`text-sm font-semibold leading-6 transition-colors ${
              scrolled ? 'text-black hover:text-gray-600' : 'text-white hover:text-gray-300'
            }`}
          >
            Portafolio
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className={`text-sm font-semibold leading-6 transition-colors ${
              scrolled ? 'text-black hover:text-gray-600' : 'text-white hover:text-gray-300'
            }`}
          >
            Nosotros
          </button>
        </PopoverGroup>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="https://wa.link/21h4sx"
            className="rounded-md bg-[#25D366] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#1DA851] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366] transition-colors"
          >
            Cotiza vía WhatsApp
          </Link>
        </div>
      </nav>

      {/* Menú móvil */}
      <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Linea Hogar</span>
              <span className="font-bold text-xl text-gray-900">Linea Hogar</span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <DisclosureButton className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Servicios
                        <ChevronDownIcon
                          className={`h-5 w-5 flex-none ${open ? 'rotate-180' : ''}`}
                          aria-hidden="true"
                        />
                      </DisclosureButton>
                      <DisclosurePanel className="mt-2 space-y-2">
                        {services.map((item) => (
                          <button
                            key={item.name}
                            onClick={() => scrollToSection(item.href.replace('#', ''))}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50 w-full text-left"
                          >
                            {item.name}
                          </button>
                        ))}
                      </DisclosurePanel>
                    </>
                  )}
                </Disclosure>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 w-full text-left"
                >
                  Portafolio
                </button>
                <button
                  onClick={() => scrollToSection('about')}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 w-full text-left"
                >
                  Nosotros
                </button>
              </div>
              <div className="py-6">
                <Link
                  href="https://wa.link/21h4sx"
                  className="inline-block rounded-md bg-[#25D366] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#1DA851]"
                >
                  Cotiza vía WhatsApp
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}