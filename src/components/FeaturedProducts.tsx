"use client"
import React, { useState } from 'react';
import { StarIcon, FireIcon, ArrowRightIcon, HeartIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

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
}

const featuredProducts: Product[] = [
  {
    id: 1,
    name: "Auriculares Inalámbricos Pro Max",
    price: 89.99,
    rating: 4.8,
    image: "/auriculares.jpg",
    category: "Electrónica",
    isNew: true,
    discount: 15,
    description: "Cancelación de ruido activa, 40h de batería"
  },
  {
    id: 2,
    name: "Smartwatch Ultra Series X",
    price: 199.99,
    rating: 4.9,
    image: "/smartwatch.jpg",
    category: "Tecnología",
    isNew: true,
    description: "Monitor cardíaco, GPS integrado, resistente al agua"
  },
  {
    id: 3,
    name: "Drone Profesional 4K Pro",
    price: 299.99,
    rating: 4.7,
    image: "/drone.jpg",
    category: "Gadgets",
    isNew: false,
    discount: 20,
    description: "Cámara 4K, 30min de vuelo, control profesional"
  },
  {
    id: 4,
    name: "Cámara de Acción Ultra HD",
    price: 149.99,
    rating: 4.6,
    image: "/camara.jpg",
    category: "Fotografía",
    isNew: false,
    description: "Resistente al agua, estabilización de imagen"
  }
];

const FeaturedProducts: React.FC = () => {
  const [favorites, setFavorites] = useState<number[]>([]);
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  const toggleFavorite = (productId: number) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  return (
    <section className="relative py-20 bg-gradient-to-b from-indigo-600/5 to-purple-600/5">
      {/* Efectos de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/5 bg-[length:20px_20px] [mask-image:radial-gradient(white,transparent_85%)]" />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-indigo-600/10" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado de la sección */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm px-6 py-2 rounded-full border border-white/10">
            <FireIcon className="h-6 w-6 text-pink-500 animate-pulse" />
            <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Productos Destacados
            </h2>
          </div>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Descubre nuestra selección de productos más populares y novedosos, 
            con la mejor calidad y precio garantizado.
          </p>
        </div>

        {/* Grid de productos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-purple-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Imagen y overlay */}
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={400}
                  className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-transparent to-indigo-600/20 group-hover:opacity-75 transition-opacity duration-300 z-10" />
                
                {/* Botón de favoritos */}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    toggleFavorite(product.id);
                  }}
                  className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/20 backdrop-blur-sm 
                    hover:bg-white/20 transition-all duration-300 group/fav"
                >
                  {favorites.includes(product.id) ? (
                    <HeartSolidIcon className="h-5 w-5 text-red-500" />
                  ) : (
                    <HeartIcon className="h-5 w-5 text-white group-hover/fav:text-red-500 transition-colors duration-300" />
                  )}
                </button>

                {/* Badge de descuento */}
                {product.discount && (
                  <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white text-sm font-medium">
                    -{product.discount}%
                  </div>
                )}
              </div>

              {/* Contenido del producto */}
              <div className="p-6 flex flex-col h-full">
                <div className="space-y-4 flex-1">
                  <div className="space-y-2">
                    {product.isNew && (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-pink-500/10 text-pink-400 border border-pink-500/20">
                        Nuevo Lanzamiento
                      </span>
                    )}
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-white/60">{product.category}</span>
                      <div className="flex items-center space-x-1">
                        <StarIcon className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-white/70">{product.rating}</span>
                      </div>
                    </div>

                    <h3 className="text-lg font-semibold text-white group-hover:text-purple-200 transition-colors duration-300 line-clamp-1">
                      {product.name}
                    </h3>
                    
                    <p className="text-sm text-white/60 line-clamp-2">
                      {product.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        ${product.price}
                      </span>
                      {product.discount && (
                        <span className="block text-sm text-white/40 line-through">
                          ${(product.price * (1 + product.discount/100)).toFixed(2)}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Botones fijos en la parte inferior */}
                <div className="pt-6 mt-auto">
                  <button className="w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl text-white font-medium 
                    hover:shadow-lg hover:shadow-purple-500/25 transform hover:-translate-y-0.5 transition-all duration-300 
                    flex items-center justify-center space-x-2 group/btn">
                    <ShoppingCartIcon className="h-5 w-5 group-hover/btn:scale-110 transition-transform duration-300" />
                    <span>Agregar al Carrito</span>
                  </button>
                </div>
              </div>

              {/* Overlay de hover */}
              <div className={`absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent 
                transform transition-transform duration-300 ${hoveredProduct === product.id ? 'translate-y-0' : 'translate-y-full'}`} />
            </div>
          ))}
        </div>

        {/* Botón Ver Más */}
        <div className="mt-16 text-center">
          <button className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 
            rounded-full text-white font-medium hover:from-purple-600/30 hover:to-indigo-600/30 backdrop-blur-sm 
            transform hover:-translate-y-0.5 transition-all duration-300 border border-white/10 group">
            <span>Explorar Catálogo Completo</span>
            <ArrowRightIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts; 