'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon,
  CreditCardIcon,
  TruckIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';
import { 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedin 
} from 'react-icons/fa';

const footerLinks = {
  productos: [
    { name: "Smartphones", href: "#" },
    { name: "Laptops", href: "#" },
    { name: "Tablets", href: "#" },
    { name: "Accesorios", href: "#" },
    { name: "Ofertas", href: "#" }
  ],
  servicios: [
    { name: "Soporte Técnico", href: "#" },
    { name: "Garantía Extendida", href: "#" },
    { name: "Instalación", href: "#" },
    { name: "Reparación", href: "#" }
  ],
  empresa: [
    { name: "Sobre Nosotros", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Trabaja con Nosotros", href: "#" },
    { name: "Contacto", href: "#" }
  ],
  legal: [
    { name: "Términos y Condiciones", href: "#" },
    { name: "Política de Privacidad", href: "#" },
    { name: "Política de Cookies", href: "#" },
    { name: "Política de Devoluciones", href: "#" }
  ]
};

const beneficios = [
  {
    icon: CreditCardIcon,
    title: "Pago Seguro",
    description: "Múltiples métodos de pago"
  },
  {
    icon: TruckIcon,
    title: "Envío Gratis",
    description: "En compras mayores a $99"
  },
  {
    icon: ShieldCheckIcon,
    title: "Garantía",
    description: "30 días de devolución"
  }
];

const contactInfo = {
  phone: "+51 976 217 463",
  email: "chinastore@gmail.com",
  address: "Av. Grau 640, Ciudad de Chiclayo"
};

const socialLinks = [
  { name: "Facebook", icon: FaFacebook, href: "#" },
  { name: "Twitter", icon: FaTwitter, href: "#" },
  { name: "Instagram", icon: FaInstagram, href: "#" },
  { name: "LinkedIn", icon: FaLinkedin, href: "#" }
];

const Footer = () => {
  return (
    <footer className="bg-gray-900 relative overflow-hidden">
      {/* Efectos de fondo */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-white/5 bg-[length:20px_20px] [mask-image:radial-gradient(white,transparent_85%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900 to-transparent" />
      </div>

      {/* Beneficios */}
      <div className="relative border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {beneficios.map((beneficio, index) => (
              <motion.div
                key={beneficio.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 p-6 rounded-2xl bg-gray-800/50 backdrop-blur-sm
                  border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500/10 to-indigo-500/10
                  flex items-center justify-center">
                  <beneficio.icon className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">{beneficio.title}</h3>
                  <p className="text-gray-400 text-sm">{beneficio.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Enlaces principales */}
      <div className="relative border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-4">Productos</h3>
              <ul className="space-y-2">
                {footerLinks.productos.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Servicios</h3>
              <ul className="space-y-2">
                {footerLinks.servicios.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Empresa</h3>
              <ul className="space-y-2">
                {footerLinks.empresa.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Información de contacto y redes sociales */}
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex items-center gap-2 text-gray-400">
                <PhoneIcon className="h-5 w-5" />
                <span>{contactInfo.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <EnvelopeIcon className="h-5 w-5" />
                <span>{contactInfo.email}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <MapPinIcon className="h-5 w-5" />
                <span>{contactInfo.address}</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                >
                  <social.icon className="h-6 w-6" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="relative border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} ChinaStore. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 