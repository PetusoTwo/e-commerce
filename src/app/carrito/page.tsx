'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  XMarkIcon,
  MinusIcon,
  PlusIcon,
  TrashIcon,
  ShoppingBagIcon,
  CreditCardIcon,
  TruckIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/24/solid';

// Tipos
interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  stock: number;
  rating: number;
}

const CartPage = () => {
  // Estado inicial del carrito (ejemplo)
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "iPhone 15 Pro Max",
      price: 1199.99,
      image: "/products/iphone.webp",
      quantity: 1,
      stock: 5,
      rating: 4.8
    },
    {
      id: 2,
      name: "MacBook Pro M3",
      price: 1999.99,
      image: "/products/macbook.webp",
      quantity: 1,
      stock: 3,
      rating: 5
    },
    {
      id: 3,
      name: "AirPods Pro",
      price: 249.99,
      image: "/products/airpods.webp",
      quantity: 2,
      stock: 8,
      rating: 4.7
    }
  ]);

  // Calcular totales
  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const shipping = subtotal > 99 ? 0 : 9.99;
  const total = subtotal + shipping;

  // Funciones para manejar cantidades
  const updateQuantity = (id: number, newQuantity: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.min(Math.max(1, newQuantity), item.stock) }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Lista de productos */}
          <div className="flex-grow">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gray-800/30 backdrop-blur-xl rounded-2xl border border-gray-700/50 p-6"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Carrito de Compras</h2>
              
              {cartItems.length === 0 ? (
                <div className="text-center py-12">
                  <ShoppingBagIcon className="h-16 w-16 text-gray-600 mx-auto mb-4" />
                  <p className="text-gray-400 text-lg">Tu carrito está vacío</p>
                  <Link 
                    href="/productos"
                    className="mt-4 inline-block text-purple-400 hover:text-purple-300 font-medium"
                  >
                    Continuar comprando
                  </Link>
                </div>
              ) : (
                <div className="space-y-6">
                  {cartItems.map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="flex items-center gap-6 p-4 rounded-xl bg-gray-800/30 border border-gray-700/50"
                    >
                      {/* Imagen del producto */}
                      <div className="relative w-24 h-24 bg-gray-900/50 rounded-lg overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={96}
                          height={96}
                          className="object-contain w-full h-full p-2"
                        />
                      </div>

                      {/* Información del producto */}
                      <div className="flex-grow">
                        <h3 className="text-lg font-medium text-white">{item.name}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <StarIcon
                                key={i}
                                className={`h-4 w-4 ${
                                  i < Math.floor(item.rating)
                                    ? 'text-yellow-400'
                                    : 'text-gray-600'
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-gray-400">({item.rating})</span>
                        </div>
                        <p className="text-sm text-gray-400 mt-1">
                          Stock disponible: {item.stock}
                        </p>
                      </div>

                      {/* Controles de cantidad */}
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 rounded-lg bg-gray-700/50 text-gray-400 hover:bg-gray-700 hover:text-white transition-colors"
                          disabled={item.quantity <= 1}
                        >
                          <MinusIcon className="h-4 w-4" />
                        </button>
                        <span className="w-8 text-center text-white font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 rounded-lg bg-gray-700/50 text-gray-400 hover:bg-gray-700 hover:text-white transition-colors"
                          disabled={item.quantity >= item.stock}
                        >
                          <PlusIcon className="h-4 w-4" />
                        </button>
                      </div>

                      {/* Precio */}
                      <div className="text-right">
                        <p className="text-lg font-medium text-white">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                        <p className="text-sm text-gray-400">
                          ${item.price.toFixed(2)} c/u
                        </p>
                      </div>

                      {/* Botón eliminar */}
                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-2 text-gray-400 hover:text-red-400 transition-colors"
                      >
                        <TrashIcon className="h-5 w-5" />
                      </button>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          </div>

          {/* Resumen de compra */}
          {cartItems.length > 0 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:w-96"
            >
              <div className="bg-gray-800/30 backdrop-blur-xl rounded-2xl border border-gray-700/50 p-6 sticky top-24">
                <h3 className="text-xl font-bold text-white mb-6">Resumen de Compra</h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between text-gray-400">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Envío</span>
                    <span>{shipping === 0 ? 'Gratis' : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  <div className="border-t border-gray-700 pt-4">
                    <div className="flex justify-between text-white font-medium">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <button
                  className="w-full mt-6 bg-purple-600 text-white py-3 px-4 rounded-xl font-medium
                    hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500/50
                    transition-all duration-300"
                >
                  Proceder al Pago
                </button>

                {/* Beneficios */}
                <div className="mt-6 space-y-3">
                  <div className="flex items-center gap-3 text-sm text-gray-400">
                    <TruckIcon className="h-5 w-5 text-purple-400" />
                    <span>Envío gratis en compras mayores a $99</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-400">
                    <CreditCardIcon className="h-5 w-5 text-purple-400" />
                    <span>Pago seguro con encriptación</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-400">
                    <ShieldCheckIcon className="h-5 w-5 text-purple-400" />
                    <span>Garantía de devolución de 30 días</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartPage; 