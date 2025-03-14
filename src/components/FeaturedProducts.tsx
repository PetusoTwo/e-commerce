'use client'
import React, { useState } from 'react';
import { StarIcon, ShoppingBagIcon, ArrowRightIcon, HeartIcon, FireIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import { motion } from 'framer-motion';
import smartw from '@/assets/smartw.png';
import phone from '@/assets/phone.png';
import audio from '@/assets/audio.png';
import ipad from '@/assets/ipad.png';

interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  image: string;
  category: string;
  isNew: boolean;
  discount?: number;
  description: string;
  stock: number;
}

const products: Product[] = [
  {
    id: 1,
    name: "Xiaomi Redmi Note 12 Pro",
    price: 299.99,
    rating: 4.8,
    image: phone,
    category: "Smartphones",
    isNew: true,
    discount: 15,
    description: "8GB RAM, 128GB, Cámara 108MP, 5G",
    stock: 15
  },
  {
    id: 2,
    name: "Apple Watch Series 8",
    price: 399.99,
    rating: 4.9,
    image: smartw,
    category: "Smartwatches",
    isNew: true,
    description: "GPS, Sensor temperatura, ECG, Resistente al agua",
    stock: 8
  },
  {
    id: 3,
    name: "Samsung Galaxy Buds2 Pro",
    price: 189.99,
    rating: 4.7,
    image: audio,
    category: "Audio",
    isNew: false,
    discount: 20,
    description: "Cancelación activa de ruido, 360 Audio, 29h batería",
    stock: 20
  },
  {
    id: 4,
    name: "iPad Air 5ta Gen",
    price: 599.99,
    rating: 4.9,
    image: ipad,
    category: "Tablets",
    isNew: false,
    description: "Chip M1, 256GB, WiFi + 5G, Liquid Retina",
    stock: 12
  }
];

const FeaturedProducts = () => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (productId: number) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-950">
      {/* Efectos de fondo mejorados */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/5 bg-[length:20px_20px] [mask-image:radial-gradient(white,transparent_85%)]" />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-indigo-600/10 animate-pulse" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado mejorado */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-1 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 mb-4">
            <div className="bg-gray-900 rounded-xl px-6 py-2 flex items-center gap-2">
              <FireIcon className="h-6 w-6 text-orange-500 animate-bounce" />
              <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                Productos Destacados
              </h2>
            </div>
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Descubre nuestra selección premium de productos más innovadores con garantía de calidad y el mejor precio del mercado
          </p>
        </motion.div>

        {/* Grid de productos mejorado */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.02 }}
              className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 
                hover:border-purple-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/10"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Imagen y overlay mejorados */}
              <div className="relative aspect-square overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-transparent to-indigo-600/20 
                  group-hover:opacity-75 transition-opacity duration-300 z-10" />
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Badges mejorados */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {product.isNew && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium 
                        bg-gradient-to-r from-purple-500 to-indigo-500 text-white backdrop-blur-sm"
                    >
                      Nuevo
                    </motion.span>
                  )}
                  {product.discount && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium 
                        bg-gradient-to-r from-red-500 to-orange-500 text-white backdrop-blur-sm"
                    >
                      -{product.discount}%
                    </motion.span>
                  )}
                </div>

                {/* Botón de favoritos */}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    toggleFavorite(product.id);
                  }}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/50 backdrop-blur-sm
                    hover:bg-black/70 transition-all duration-300"
                >
                  {favorites.includes(product.id) ? (
                    <HeartSolidIcon className="h-5 w-5 text-red-500" />
                  ) : (
                    <HeartIcon className="h-5 w-5 text-white" />
                  )}
                </button>
              </div>

              {/* Contenido mejorado */}
              <div className="p-6 flex flex-col min-h-[320px]">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium px-3 py-1 rounded-full bg-purple-500/20 text-purple-400">
                      {product.category}
                    </span>
                    <div className="flex items-center gap-1 bg-yellow-500/20 px-3 py-1 rounded-full">
                      <StarIcon className="h-4 w-4 text-yellow-500" />
                      <span className="text-sm font-medium text-yellow-500">{product.rating}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                    {product.name}
                  </h3>
                  
                  <p className="text-sm text-gray-400 mb-4 line-clamp-2">
                    {product.description}
                  </p>
                </div>

                <div className="mt-auto">
                  <div className="pt-4 border-t border-gray-700/50">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl font-bold text-white">
                            ${product.price}
                          </span>
                          {product.discount && (
                            <span className="text-sm text-gray-500 line-through">
                              ${(product.price * (1 + product.discount/100)).toFixed(2)}
                            </span>
                          )}
                        </div>
                        <span className="block text-sm text-gray-400">
                          Stock: {product.stock} unidades
                        </span>
                      </div>
                      <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white p-3 rounded-xl 
                          transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 flex items-center gap-2 cursor-pointer"
                      >
                        <ShoppingBagIcon className="h-5 w-5" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Botón Ver Más mejorado */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-16 text-center"
        >
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-500 
            rounded-full text-white font-medium hover:shadow-lg hover:shadow-purple-500/25 
            transition-all duration-300 group cursor-pointer">
            <span>Ver Catálogo Completo</span>
            <ArrowRightIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProducts; 