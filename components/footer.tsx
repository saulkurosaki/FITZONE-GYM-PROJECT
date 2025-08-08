"use client";

import {
  Dumbbell,
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";
import { motion } from "framer-motion";
import { StaggerContainer } from "@/components/animations/stagger-container";
import { StaggerItem } from "@/components/animations/stagger-item";

export function Footer() {
  return (
    <motion.footer
      id="contacto"
      className="bg-[#171819] text-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <StaggerItem>
            <div className="lg:col-span-1">
              <motion.div
                className="flex items-center space-x-2 mb-4"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="bg-gradient-to-r from-orange-500 to-red-500 p-2 rounded-lg"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Dumbbell className="h-6 w-6 text-white" />
                </motion.div>
                <span className="text-2xl font-bold text-[#D8D4CF]">
                  FitZone
                </span>
              </motion.div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Tu gimnasio de confianza donde transformamos vidas a través del
                fitness. Únete a nuestra comunidad y descubre tu mejor versión.
              </p>
              <div className="flex space-x-4">
                {[
                  {
                    href: "https://facebook.com",
                    icon: Facebook,
                    label: "Facebook",
                  },
                  {
                    href: "https://instagram.com",
                    icon: Instagram,
                    label: "Instagram",
                  },
                  {
                    href: "https://twitter.com",
                    icon: Twitter,
                    label: "Twitter",
                  },
                  {
                    href: "https://youtube.com",
                    icon: Youtube,
                    label: "YouTube",
                  },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="bg-gray-800 p-2 rounded-full hover:bg-orange-500 transition-colors"
                    aria-label={social.label}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <social.icon className="h-5 w-5 text-[#D8D4CF]" />
                  </motion.a>
                ))}
              </div>
            </div>
          </StaggerItem>

          {/* Enlaces rápidos */}
          <StaggerItem>
            <div>
              <h3 className="text-lg font-bold mb-4 text-[#D8D4CF]">
                Enlaces Rápidos
              </h3>
              <ul className="space-y-2">
                {[
                  { href: "#inicio", text: "Inicio" },
                  { href: "#servicios", text: "Servicios" },
                  { href: "#horarios", text: "Horarios" },
                  { href: "#testimonios", text: "Testimonios" },
                  { href: "/planes", text: "Planes y Precios" },
                  { href: "/blog", text: "Blog" },
                ].map((link, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <motion.a
                      href={link.href}
                      className="text-gray-300 hover:text-orange-400 transition-colors"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {link.text}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </div>
          </StaggerItem>

          {/* Servicios */}
          <StaggerItem>
            <div>
              <h3 className="text-lg font-bold mb-4 text-[#D8D4CF]">
                Servicios
              </h3>
              <ul className="space-y-2">
                {[
                  {
                    href: "/entrenamiento-personal",
                    text: "Entrenamiento Personal",
                  },
                  { href: "/clases-grupales", text: "Clases Grupales" },
                  { href: "/nutrición", text: "Asesoría Nutricional" },
                  { href: "/rehabilitación", text: "Rehabilitación" },
                  { href: "/corporativo", text: "Fitness Corporativo" },
                ].map((service, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <motion.a
                      href={service.href}
                      className="text-gray-300 hover:text-orange-400 transition-colors"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {service.text}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </div>
          </StaggerItem>

          {/* Contacto */}
          <StaggerItem>
            <div>
              <h3 className="text-lg font-bold mb-4 text-[#D8D4CF]">
                Contacto
              </h3>
              <div className="space-y-4">
                {[
                  {
                    icon: MapPin,
                    content: (
                      <p className="text-gray-300">
                        Av. Principal 123
                        <br />
                        Centro Comercial Plaza Fitness
                        <br />
                        Ciudad, CP 12345
                      </p>
                    ),
                  },
                  {
                    icon: Phone,
                    content: (
                      <a
                        href="tel:+1234567890"
                        className="text-gray-300 hover:text-orange-400 transition-colors"
                      >
                        (123) 456-7890
                      </a>
                    ),
                  },
                  {
                    icon: Mail,
                    content: (
                      <a
                        href="mailto:info@fitzone.com"
                        className="text-gray-300 hover:text-orange-400 transition-colors"
                      >
                        info@fitzone.com
                      </a>
                    ),
                  },
                  {
                    icon: Clock,
                    content: (
                      <div className="text-gray-300">
                        <p>Lun - Vie: 5:00 - 23:00</p>
                        <p>Sáb - Dom: 7:00 - 21:00</p>
                      </div>
                    ),
                  },
                ].map((contact, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <contact.icon className="h-5 w-5 text-orange-400 mt-1 flex-shrink-0" />
                    </motion.div>
                    <div>{contact.content}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </StaggerItem>
        </StaggerContainer>

        {/* Línea divisoria */}
        <motion.div
          className="border-t border-gray-800 mt-12 pt-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ originX: 0 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              className="text-gray-300 text-sm mb-4 md:mb-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              © 2025 FitZone. Todos los derechos reservados.
            </motion.div>
            <motion.div
              className="flex space-x-6 text-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              {[
                { href: "/privacidad", text: "Política de Privacidad" },
                { href: "/términos", text: "Términos de Servicio" },
                { href: "/cookies", text: "Política de Cookies" },
              ].map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  className="text-gray-300 hover:text-orange-400 transition-colors"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  {link.text}
                </motion.a>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
