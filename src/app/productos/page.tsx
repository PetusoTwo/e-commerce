'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import smartw from '@/assets/smartw.png';
import phone from '@/assets/phone.png';
import audio from '@/assets/audio.png';
import ipad from '@/assets/ipad.png';
import {
  AdjustmentsHorizontalIcon,
  MagnifyingGlassIcon,
  XMarkIcon,
  ShoppingCartIcon,
  HeartIcon,
} from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/24/solid';

// Tipos
interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  image: string;
  category: string;
  brand: string;
  stock: number;
  description: string;
  discount?: number;
}

interface FilterState {
  priceRange: [number, number];
  categories: string[];
  brands: string[];
  rating: number | null;
}

// Datos de ejemplo
const products: Product[] = [
  {
    id: 1,
    name: "Smartphone Galaxy S24 Ultra",
    price: 1299.99,
    rating: 4.8,
    image: phone    ,
    category: "Smartphones",
    brand: "Samsung",
    stock: 10,
    description: "El último flagship de Samsung con cámara de 200MP y S Pen incluido",
    discount: 10
  },
  {
    id: 2,
    name: "MacBook Pro M3 Max",
    price: 2499.99,
    rating: 5,
    image: ipad,
    category: "Laptops",
    brand: "Apple",
    stock: 5,
    description: "Potencia inigualable con el nuevo chip M3 Max"
  },
  {
    id: 3,
    name: "iPad Pro M2",
    price: 999.99,
    rating: 4.7,
    image: ipad,
    category: "Tablets",
    brand: "Apple",
    stock: 8,
    description: "La tablet más potente con pantalla Liquid Retina XDR",
    discount: 15
  },
  {
    id: 4,
    name: "Sony WH-1000XM5",
    price: 399.99,
    rating: 4.9,
    image: audio,
    category: "Auriculares",
    brand: "Sony",
    stock: 15,
    description: "La mejor cancelación de ruido del mercado"
  },
  {
    id: 5,
    name: "iPhone 15 Pro Max",
    price: 1199.99,
    rating: 4.8,
    image: phone,
    category: "Smartphones",
    brand: "Apple",
    stock: 3,
    description: "Titanio, USB-C y cámara profesional"
  },
  {
    id: 6,
    name: "Samsung Galaxy Watch 6",
    price: 349.99,
    rating: 4.6,
    image: smartw,
    category: "Smartwatches",
    brand: "Samsung",
    stock: 12,
    description: "Monitoreo avanzado de salud y diseño premium",
    discount: 20
  },
  {
    id: 7,
    name: "AirPods Pro 2",
    price: 249.99,
    rating: 4.7,
    image: audio,
    category: "Auriculares",
    brand: "Apple",
    stock: 20,
    description: "Cancelación de ruido adaptativa y audio espacial"
  },
  {
    id: 8,
    name: "Dell XPS 15",
    price: 1799.99,
    rating: 4.5,
    image: ipad,
    category: "Laptops",
    brand: "Dell",
    stock: 4,
    description: "Potencia y portabilidad en aluminio premium"
  }
];

const categories = ["Smartphones", "Laptops", "Tablets", "Auriculares", "Smartwatches"];
const brands = ["Apple", "Samsung", "Sony", "Dell"];

const ProductsPage = () => {
  // Estados
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState<FilterState>({
    priceRange: [0, 3000],
    categories: [],
    brands: [],
    rating: null,
  });

  // Funciones de filtrado
  const handleCategoryToggle = (category: string) => {
    setFilters(prev => ({
      ...prev,
      categories: prev.categories.includes(category)
        ? prev.categories.filter(c => c !== category)
        : [...prev.categories, category]
    }));
  };

  const handleBrandToggle = (brand: string) => {
    setFilters(prev => ({
      ...prev,
      brands: prev.brands.includes(brand)
        ? prev.brands.filter(b => b !== brand)
        : [...prev.brands, brand]
    }));
  };

  const handlePriceChange = (value: [number, number]) => {
    setFilters(prev => ({
      ...prev,
      priceRange: value
    }));
  };

  const handleRatingFilter = (rating: number) => {
    setFilters(prev => ({
      ...prev,
      rating: prev.rating === rating ? null : rating
    }));
  };

  // Filtrar productos
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filters.categories.length === 0 || filters.categories.includes(product.category);
    const matchesBrand = filters.brands.length === 0 || filters.brands.includes(product.brand);
    const matchesPrice = product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1];
    const matchesRating = !filters.rating || product.rating >= filters.rating;

    return matchesSearch && matchesCategory && matchesBrand && matchesPrice && matchesRating;
  });

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header de la página */}
      <div className="bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white text-center mb-6">
            Nuestros Productos
          </h1>
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="Buscar productos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl
                  text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50
                  focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex gap-8">
          {/* Filtros para pantallas grandes */}
          <div className="hidden lg:block w-64 space-y-8">
            {/* Categorías */}
            <div className="bg-gray-800/30 rounded-xl p-6">
              <h3 className="text-white font-semibold mb-4">Categorías</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <label key={category} className="flex items-center gap-2 text-gray-400 hover:text-white cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filters.categories.includes(category)}
                      onChange={() => handleCategoryToggle(category)}
                      className="rounded border-gray-700 text-purple-500 focus:ring-purple-500/20"
                    />
                    {category}
                  </label>
                ))}
              </div>
            </div>

            {/* Marcas */}
            <div className="bg-gray-800/30 rounded-xl p-6">
              <h3 className="text-white font-semibold mb-4">Marcas</h3>
              <div className="space-y-2">
                {brands.map((brand) => (
                  <label key={brand} className="flex items-center gap-2 text-gray-400 hover:text-white cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filters.brands.includes(brand)}
                      onChange={() => handleBrandToggle(brand)}
                      className="rounded border-gray-700 text-purple-500 focus:ring-purple-500/20"
                    />
                    {brand}
                  </label>
                ))}
              </div>
            </div>

            {/* Valoración */}
            <div className="bg-gray-800/30 rounded-xl p-6">
              <h3 className="text-white font-semibold mb-4">Valoración</h3>
              <div className="space-y-2">
                {[4, 3, 2, 1].map((rating) => (
                  <button
                    key={rating}
                    onClick={() => handleRatingFilter(rating)}
                    className={`flex items-center gap-1 text-gray-400 hover:text-white w-full ${
                      filters.rating === rating ? 'text-white' : ''
                    }`}
                  >
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon
                          key={i}
                          className={`h-5 w-5 ${
                            i < rating ? 'text-yellow-400' : 'text-gray-600'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="ml-2">o más</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Botón de filtros móvil */}
          <button
            onClick={() => setIsFilterOpen(true)}
            className="lg:hidden fixed bottom-4 right-4 bg-purple-600 text-white p-4 rounded-full shadow-lg
              hover:bg-purple-700 transition-colors duration-300 z-50"
          >
            <AdjustmentsHorizontalIcon className="h-6 w-6" />
          </button>

          {/* Grid de productos */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-gray-800/30 rounded-2xl overflow-hidden border border-gray-700/50
                    hover:border-purple-500/30 transition-all duration-300 group"
                >
                  <div className="aspect-[4/3] relative overflow-hidden bg-gray-900/50">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain p-4 group-hover:scale-110 transition-transform duration-300"
                    />
                    {product.discount && (
                      <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-lg text-sm">
                        -{product.discount}%
                      </span>
                    )}
                    {product.stock < 5 && (
                      <span className="absolute top-2 right-2 bg-amber-500 text-white px-2 py-1 rounded-lg text-sm">
                        ¡Últimas unidades!
                      </span>
                    )}
                    <button className="absolute bottom-2 right-2 p-2 bg-gray-900/80 rounded-full
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300
                      hover:bg-purple-600">
                      <HeartIcon className="h-5 w-5 text-white" />
                    </button>
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="text-white font-semibold text-lg leading-tight">
                        {product.name}
                      </h3>
                      <span className="bg-purple-500/10 text-purple-400 px-2 py-1 rounded text-sm">
                        {product.category}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {product.description}
                    </p>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <StarIcon
                            key={i}
                            className={`h-5 w-5 ${
                              i < product.rating ? 'text-yellow-400' : 'text-gray-600'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-gray-400">({product.rating})</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        {product.discount ? (
                          <>
                            <span className="text-2xl font-bold text-white">
                              ${(product.price * (1 - product.discount / 100)).toFixed(2)}
                            </span>
                            <span className="ml-2 text-sm text-gray-400 line-through">
                              ${product.price}
                            </span>
                          </>
                        ) : (
                          <span className="text-2xl font-bold text-white">
                            ${product.price}
                          </span>
                        )}
                      </div>
                      <button className="bg-purple-600 text-white px-4 py-2 rounded-xl
                        hover:bg-purple-700 transition-colors duration-300 flex items-center gap-2">
                        <ShoppingCartIcon className="h-5 w-5" />
                        <span>Agregar</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal de filtros móvil */}
      {isFilterOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsFilterOpen(false)} />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            className="absolute right-0 top-0 h-full w-80 bg-gray-900 p-6 overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-white font-semibold text-xl">Filtros</h2>
              <button onClick={() => setIsFilterOpen(false)}>
                <XMarkIcon className="h-6 w-6 text-gray-400" />
              </button>
            </div>
            
            {/* Categorías en móvil */}
            <div className="mb-8">
              <h3 className="text-white font-semibold mb-4">Categorías</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <label key={category} className="flex items-center gap-2 text-gray-400">
                    <input
                      type="checkbox"
                      checked={filters.categories.includes(category)}
                      onChange={() => handleCategoryToggle(category)}
                      className="rounded border-gray-700 text-purple-500 focus:ring-purple-500/20"
                    />
                    {category}
                  </label>
                ))}
              </div>
            </div>

            {/* Marcas en móvil */}
            <div className="mb-8">
              <h3 className="text-white font-semibold mb-4">Marcas</h3>
              <div className="space-y-2">
                {brands.map((brand) => (
                  <label key={brand} className="flex items-center gap-2 text-gray-400">
                    <input
                      type="checkbox"
                      checked={filters.brands.includes(brand)}
                      onChange={() => handleBrandToggle(brand)}
                      className="rounded border-gray-700 text-purple-500 focus:ring-purple-500/20"
                    />
                    {brand}
                  </label>
                ))}
              </div>
            </div>

            {/* Valoración en móvil */}
            <div>
              <h3 className="text-white font-semibold mb-4">Valoración</h3>
              <div className="space-y-2">
                {[4, 3, 2, 1].map((rating) => (
                  <button
                    key={rating}
                    onClick={() => handleRatingFilter(rating)}
                    className={`flex items-center gap-1 text-gray-400 w-full ${
                      filters.rating === rating ? 'text-white' : ''
                    }`}
                  >
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon
                          key={i}
                          className={`h-5 w-5 ${
                            i < rating ? 'text-yellow-400' : 'text-gray-600'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="ml-2">o más</span>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default ProductsPage; 