import React from 'react';
import Image from 'next/image';
import { ShoppingBagIcon, TruckIcon, SparklesIcon } from '@heroicons/react/24/outline';
import logo from '@/assets/logo.png';

const HeroSection: React.FC = () => {
  return (
    <div className="relative w-full pt-20 bg-gradient-to-b from-purple-600/5 to-indigo-600/5">
      {/* Fondo con efectos */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/5 bg-[length:20px_20px] [mask-image:radial-gradient(white,transparent_85%)]" />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-indigo-600/10" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenido Principal */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 rounded-full border border-purple-200/10 backdrop-blur-sm">
                <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent text-sm font-medium">
                  ¡Bienvenido a ChinaStore!
                </span>
              </span>
              <h1 className="text-5xl md:text-6xl font-bold">
                <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                  Descubre lo Mejor de
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
                  la Importación
                </span>
              </h1>
              <p className="text-lg text-white/70">
                Encuentra los productos más innovadores y exclusivos directamente desde Asia. 
                Calidad garantizada y los mejores precios del mercado.
              </p>
            </div>

            {/* Botones de Acción */}
            <div className="flex flex-wrap gap-4">
              <button className="px-8 cursor-pointer py-4 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full text-white font-medium hover:shadow-lg hover:shadow-purple-500/25 transform hover:-translate-y-0.5 transition-all duration-300">
                Explorar Productos
              </button>
              <button className="px-8 cursor-pointer py-4 bg-white/10 rounded-full text-white font-medium hover:bg-white/20 backdrop-blur-sm transform hover:-translate-y-0.5 transition-all duration-300 border border-white/10">
                Ver Ofertas
              </button>
            </div>
            {/* Características */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="flex flex-col items-center space-y-2 p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                <ShoppingBagIcon className="h-6 w-6 text-purple-400" />
                <span className="text-sm text-white/80 text-center">Productos Exclusivos</span>
              </div>
              <div className="flex flex-col items-center space-y-2 p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                <TruckIcon className="h-6 w-6 text-pink-400" />
                <span className="text-sm text-white/80 text-center">Envío Rápido</span>
              </div>
              <div className="flex flex-col items-center space-y-2 p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                <SparklesIcon className="h-6 w-6 text-indigo-400" />
                <span className="text-sm text-white/80 text-center">Calidad Garantizada</span>
              </div>
            </div>
          </div>

          {/* Imagen Principal */}
          <div className="relative lg:block">
            <div className="relative w-full h-[600px] rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-transparent to-indigo-600/20 backdrop-blur-sm z-10" />
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl opacity-20" />
              <div className="absolute inset-2 bg-gradient-to-br from-purple-900/90 to-indigo-900/90 rounded-xl backdrop-blur-sm" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4 p-8">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="aspect-square rounded-lg overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 hover:scale-105 transition-transform duration-300 cursor-pointer">
                      {/* Aquí puedes agregar imágenes de productos destacados */}
                      {/*<Image src={logo} alt="Logo" width={100} height={100} /> */}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;