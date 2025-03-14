'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { 
  DevicePhoneMobileIcon, 
  ComputerDesktopIcon,
  SpeakerWaveIcon,
  TvIcon,
  CameraIcon,
  ClockIcon,
  CpuChipIcon,
  RocketLaunchIcon 
} from '@heroicons/react/24/outline';

interface Category {
  id: number;
  name: string;
  description: string;
  icon: React.ElementType;
  productCount: number;
  gradient: string;
}

const categories: Category[] = [
  {
    id: 1,
    name: "Smartphones",
    description: "Los últimos modelos de las mejores marcas",
    icon: DevicePhoneMobileIcon,
    productCount: 45,
    gradient: "from-blue-500 to-cyan-400"
  },
  {
    id: 2,
    name: "Computadoras",
    description: "Equipos para gaming, productividad, diseño y más",
    icon: ComputerDesktopIcon,
    productCount: 32,
    gradient: "from-purple-500 to-indigo-500"
  },
  {
    id: 3,
    name: "Audio",
    description: "Auriculares y altavoces premium, para escuchar todo.",
    icon: SpeakerWaveIcon,
    productCount: 28,
    gradient: "from-orange-500 to-red-500"
  },
  {
    id: 4,
    name: "Televisores",
    description: "Smart TVs de última generación, para ver todo.",
    icon: TvIcon,
    productCount: 15,
    gradient: "from-green-500 to-emerald-400"
  },
  {
    id: 5,
    name: "Cámaras",
    description: "Fotografía y video profesional",
    icon: CameraIcon,
    productCount: 24,
    gradient: "from-pink-500 to-rose-500"
  },
  {
    id: 6,
    name: "Smartwatches",
    description: "Tecnología para tu bienestar",
    icon: ClockIcon,
    productCount: 19,
    gradient: "from-yellow-500 to-amber-500"
  },
  {
    id: 7,
    name: "Componentes",
    description: "Piezas para tu PC gaming",
    icon: CpuChipIcon,
    productCount: 56,
    gradient: "from-teal-500 to-cyan-400"
  },
  {
    id: 8,
    name: "Novedades",
    description: "Lo último en tecnología",
    icon: RocketLaunchIcon,
    productCount: 23,
    gradient: "from-violet-500 to-purple-500"
  }
];

const Categories = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-950 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Explora Nuestras{' '}
            <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Categorías
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Descubre nuestra amplia selección de productos organizados por categorías
          </p>
        </motion.div>

        {/* Grid de categorías */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl bg-gray-800/50 backdrop-blur-sm 
                border border-gray-700/50 hover:border-purple-500/30 transition-all duration-500
                hover:shadow-lg hover:shadow-purple-500/10">
                <div className="p-6">
                  {/* Icono */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.gradient} 
                    flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="h-6 w-6 text-white" />
                  </div>

                  {/* Contenido */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-white group-hover:text-purple-400 
                        transition-colors duration-300">
                        {category.name}
                      </h3>
                      <span className="text-sm text-gray-400">
                        {category.productCount} productos
                      </span>
                    </div>
                    <p className="text-sm text-gray-400">
                      {category.description}
                    </p>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-transparent to-indigo-600/10 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories; 