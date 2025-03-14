'use client';
import React, { useState } from 'react';
import { Disclosure } from '@headlessui/react';
import {
  ShoppingCartIcon,
  UserIcon,
  MagnifyingGlassIcon,
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import logo from '@/assets/logo.png';
import Image from 'next/image';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <Disclosure as="nav" className="bg-gradient-to-r from-purple-600 to-indigo-600 shadow-xl fixed w-full top-0 z-50">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-20">
              {/* Logo y navegación principal */}
              <div className="flex items-center">
                <div className="flex-shrink-0 flex items-center">
                  <a href="/" className="flex items-center space-x-2 group">
                    {/*<Image src={logo} alt="Logo" width={48} height={48} /> */}
                    <span className="font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200 group-hover:from-purple-200 group-hover:to-white transition-all duration-300">
                      ChinaStore
                    </span>
                  </a>
                </div>
                <div className="hidden md:flex md:ml-8 space-x-1">
                  <a href="/productos" className="text-white/90 hover:text-white px-4 py-2 text-sm font-medium rounded-full hover:bg-white/10 transition-all duration-300 flex items-center space-x-1">
                    Productos
                  </a>
                  <a href="/categorias" className="text-white/90 hover:text-white px-4 py-2 text-sm font-medium rounded-full hover:bg-white/10 transition-all duration-300 flex items-center space-x-1">
                    Categorías
                  </a>
                  <a href="/ofertas" className="text-white/90 hover:text-white px-4 py-2 text-sm font-medium rounded-full hover:bg-white/10 transition-all duration-300 flex items-center space-x-1">
                    Ofertas
                  </a>
                </div>
              </div>

              {/* Barra de búsqueda */}
              <div className="flex-1 flex items-center justify-center px-2 lg:ml-6 lg:justify-end">
                <div className="max-w-lg w-full lg:max-w-xs">
                  <div className="relative group">
                    <input
                      type="text"
                      placeholder="Buscar productos..."
                      className="block w-full pl-10 pr-3 py-2.5 border-2 border-white/20 rounded-full leading-5 bg-white/10 placeholder-white/50 text-white focus:outline-none focus:border-white/40 focus:ring-0 sm:text-sm transition-all duration-300"
                    />
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <MagnifyingGlassIcon className="h-5 w-5 text-white/50 group-hover:text-white/70 transition-colors duration-300" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Iconos de usuario y carrito */}
              <div className="flex items-center space-x-4">
                <Link href="/login">
                  <button className="p-2.5 text-white/90 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300">
                    <UserIcon className="h-6 w-6" />
                  </button>
                </Link>
                <Link href="/carrito">
                <button className="p-2.5 text-white/90 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 relative">
                  <ShoppingCartIcon className="h-6 w-6" />
                  <span className="absolute -top-1 -right-1 px-2 py-1 text-xs font-bold text-white bg-pink-500 rounded-full transform scale-100 hover:scale-110 transition-transform duration-300">
                    0
                  </span>
                </button>
                </Link>
                {/* Botón de menú móvil */}
                <div className="md:hidden flex items-center">
                  <Disclosure.Button className="inline-flex items-center justify-center p-2.5 rounded-full text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300">
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>
          </div>

          {/* Panel móvil */}
          <Disclosure.Panel className="md:hidden bg-gradient-to-b from-purple-600/95 to-indigo-600/95 backdrop-blur-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="/productos" className="block px-4 py-2.5 text-base font-medium text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300">
                Productos
              </a>
              <a href="/categorias" className="block px-4 py-2.5 text-base font-medium text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300">
                Categorías
              </a>
              <a href="/ofertas" className="block px-4 py-2.5 text-base font-medium text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300">
                Ofertas
              </a>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
