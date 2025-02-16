import React from 'react';
import Navbar from '@/pages/components/Navbar';
import '../styles/globals.css';
import { Truck, Award, Phone, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { motion } from "framer-motion";
import Image from 'next/image';

export default function Home() {
  const productos = [
    { id: 1, imagen: 'rebo1.JPG', nombre: 'Bocaditos', descripcion: 'descrip' },
    { id: 2, imagen: 'rebo2.JPG', nombre: 'Patitas de Pollo', descripcion: 'descrip' },
    { id: 3, imagen: 'rebo3.JPG', nombre: 'Medallones', descripcion: 'descrip' },
    { id: 4, imagen: 'rebo4.JPG', nombre: 'Milanesa de Merluza Finas Hierbas', descripcion: 'descrip' },
    { id: 5, imagen: 'rebo5.JPG', nombre: 'Milanesa de Merluza Común', descripcion: 'descrip' },
    { id: 6, imagen: 'rebo6.JPG', nombre: 'Bastones de Queso', descripcion: 'descrip' }
  ];

  return (
    <div className="min-h-screen bg-amber-50">
      <Navbar />

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative h-64 md:h-96 w-full overflow-hidden"
      >
        <Image 
          src="/alenort2.png" 
          alt="Logo de la empresa" 
          layout="fill" 
          objectFit="cover" 
          objectPosition="center"
          className="transform hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white text-center drop-shadow-lg"
          >
            
          </motion.h1>
        </div>
      </motion.div>

      {/* Características */}
      <div className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-8 md:mb-12 text-gray-800"
          >
            ¿Por qué elegir Alenort?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { icon: <Truck className="mx-auto h-12 w-12 text-yellow-600 mb-4" />, title: "Distribución Eficiente", description: "Entrega puntual y sistema logístico optimizado" },
              { icon: <Award className="mx-auto h-12 w-12 text-yellow-600 mb-4" />, title: "Máxima Calidad", description: "Productos frescos y seleccionados" },
              { icon: <Phone className="mx-auto h-12 w-12 text-yellow-600 mb-4" />, title: "Atención Personalizada", description: "Servicio al cliente excepcional" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-amber-100 rounded-lg hover:bg-amber-200 transition-colors duration-300"
              >
                {item.icon}
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Productos Section */}
      <div className="py-12 md:py-16 bg-amber-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-8 md:mb-12 text-gray-800 hover:scale-105 transition-transform duration-300"
          >
            Nuestros Productos
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {productos.map((producto) => (
              <motion.div
                key={producto.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: producto.id * 0.2 }}
                viewport={{ once: true }}
                className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <Image 
                    src={`/${producto.imagen}`}
                    alt={producto.nombre}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                </div>
                
                <div className="p-6 transform translate-y-0 group-hover:translate-y-1 transition-transform duration-300">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-amber-600 transition-colors duration-300">
                    {producto.nombre}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    {producto.descripcion}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Columna 1: Contacto */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4">Contacto</h4>
              <p>Email: contacto@alenort.com</p>
              <p>Teléfono: (123) 456-7890</p>
            </motion.div>

            {/* Columna 2: Horario */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4">Horario</h4>
              <p>Lunes a Viernes: 8:00 - 18:00</p>
              <p>Sábado: 8:00 - 13:00</p>
            </motion.div>

            {/* Columna 3: Redes Sociales */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4">Síguenos</h4>
              <div className="flex space-x-4">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.2, rotate: 15 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="text-white hover:text-yellow-500 transition-colors"
                >
                  <Facebook size={24} />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.2, rotate: -15 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="text-white hover:text-yellow-500 transition-colors"
                >
                  <Twitter size={24} />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.2, rotate: 15 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="text-white hover:text-yellow-500 transition-colors"
                >
                  <Instagram size={24} />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.2, rotate: -15 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="text-white hover:text-yellow-500 transition-colors"
                >
                  <Linkedin size={24} />
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Línea divisoria */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="w-full h-px bg-gray-700 my-6"
          />

          {/* Texto de derechos de autor */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            viewport={{ once: true }}
            className="text-center text-sm text-gray-400"
          >
            © {new Date().getFullYear()} Alenort. Todos los derechos reservados.
          </motion.div>
        </div>
      </footer>
    </div>
  );
}