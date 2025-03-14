'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { StarIcon, ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/solid';
import { StarIcon as StarOutlineIcon } from '@heroicons/react/24/outline';
import user1 from '@/assets/team1.jpeg';
import user2 from '@/assets/team2.jpeg';
import user3 from '@/assets/team3.jpeg';
import ipad from '@/assets/ipad.png';
import phone from '@/assets/phone.png';
import smartw from '@/assets/smartw.png';
import audio from '@/assets/audio.png';


interface Review {
  id: number;
  userName: string;
  userImage: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
  productName: string;
  productImage: string;
  verifiedPurchase: boolean;
  helpfulCount: number;
}

const reviews: Review[] = [
  {
    id: 1,
    userName: "Carlos Martínez",
    userImage: user1,
    rating: 5,
    date: "15 Mar 2024",
    title: "¡Excelente calidad y envío rápido!",
    comment: "Compré el iPhone 15 Pro y estoy impresionado con la calidad de la cámara. El servicio de entrega fue muy rápido y el producto llegó en perfectas condiciones. Definitivamente volveré a comprar.",
    productName: "iPhone 15 Pro",
    productImage: phone,
    verifiedPurchase: true,
    helpfulCount: 28
  },
  {
    id: 2,
    userName: "Ana García",
    userImage: user2,
    rating: 4,
    date: "12 Mar 2024",
    title: "Muy buen producto, pequeño detalle",
    comment: "Los Sony WH-1000XM5 tienen una calidad de sonido increíble y la cancelación de ruido es espectacular. Solo un pequeño detalle con la app que se solucionó rápidamente con el soporte técnico.",
    productName: "Sony WH-1000XM5",
    productImage: audio,
    verifiedPurchase: true,
    helpfulCount: 15
  },
  {
    id: 3,
    userName: "Miguel Rodríguez",
    userImage: user3,
    rating: 5,
    date: "10 Mar 2024",
    title: "La mejor compra que he hecho",
    comment: "El MacBook Air M2 superó todas mis expectativas. La batería dura todo el día y el rendimiento es excepcional. El diseño es elegante y la pantalla es hermosa. Totalmente recomendado.",
    productName: "MacBook Air M2",
    productImage: ipad,
    verifiedPurchase: true,
    helpfulCount: 42
  }
];

const Reviews = () => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      index < rating ? (
        <StarIcon key={index} className="h-5 w-5 text-yellow-400" />
      ) : (
        <StarOutlineIcon key={index} className="h-5 w-5 text-gray-600" />
      )
    ));
  };

  return (
    <section className="py-24 bg-gradient-to-b from-gray-950 to-gray-900 relative overflow-hidden">
      {/* Efectos de fondo */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-white/5 bg-[length:20px_20px] [mask-image:radial-gradient(white,transparent_85%)]" />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-indigo-600/10" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-1 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 mb-4">
            <div className="bg-gray-900 rounded-xl px-6 py-2 flex items-center gap-2">
              <ChatBubbleBottomCenterTextIcon className="h-6 w-6 text-purple-400" />
              <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                Opiniones de Clientes
              </h2>
            </div>
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Descubre lo que opinan nuestros clientes sobre sus compras
          </p>
        </motion.div>

        {/* Grid de reviews */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 
                hover:border-purple-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/10"
            >
              {/* Cabecera con info del usuario */}
              <div className="p-6 border-b border-gray-700/50">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={review.userImage}
                      alt={review.userName}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">{review.userName}</h3>
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {renderStars(review.rating)}
                      </div>
                      <span className="text-gray-400 text-sm">
                        • {review.date}
                      </span>
                    </div>
                  </div>
                </div>
                {review.verifiedPurchase && (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-500/10 text-green-400">
                    Compra verificada
                  </span>
                )}
              </div>

              {/* Contenido de la review */}
              <div className="p-6">
                <h4 className="text-lg font-semibold text-white mb-2">
                  {review.title}
                </h4>
                <p className="text-gray-400 text-sm mb-4">
                  {review.comment}
                </p>

                {/* Producto relacionado */}
                <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-800/50 mb-4">
                  <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={review.productImage}
                      alt={review.productName}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <span className="text-sm text-gray-400">Producto:</span>
                    <h5 className="text-white font-medium">
                      {review.productName}
                    </h5>
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span>{review.helpfulCount} personas encontraron esto útil</span>
                  <button className="text-purple-400 hover:text-purple-300 transition-colors duration-300">
                    Útil
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Botón para ver más reviews */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800/50 rounded-xl 
            text-gray-300 hover:text-white transition-colors duration-300 border border-gray-700/50
            hover:border-purple-500/30 group">
            Ver más opiniones
            <span className="text-sm text-gray-500 group-hover:text-gray-300">
              (150+ reviews)
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews; 