"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Dumbbell } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.25, 0, 1] }}
      className="bg-[#17191A] shadow-sm sticky top-0 z-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2"
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-r from-orange-500 to-red-500 p-2 rounded-lg"
            >
              <Dumbbell className="h-6 w-6 text-white" />
            </motion.div>
            <span className="text-2xl font-bold text-[#E5E2DF]">FitZone</span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#inicio"
              className="text-[#E5E2DF] hover:text-orange-500 transition-colors"
            >
              Inicio
            </a>
            <a
              href="#servicios"
              className="text-[#E5E2DF] hover:text-orange-500 transition-colors"
            >
              Servicios
            </a>
            <a
              href="#horarios"
              className="text-[#E5E2DF] hover:text-orange-500 transition-colors"
            >
              Horarios
            </a>
            <a
              href="#testimonios"
              className="text-[#E5E2DF] hover:text-orange-500 transition-colors"
            >
              Testimonios
            </a>
            <a
              href="#contacto"
              className="text-[#E5E2DF] hover:text-orange-500 transition-colors"
            >
              Contacto
            </a>
          </nav>

          {/* CTA Button Desktop */}
          <div className="hidden md:block">
            <Button
              asChild
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-[#E5E2DF]"
            >
              <a href="#cta-section">Clase Gratis</a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="default"
              size="icon"
              onClick={toggleMenu}
              aria-label="Abrir menú"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-[#E5E2DF]" />
              ) : (
                <Menu className="h-6 w-6 text-[#E5E2DF]" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.25, 0.25, 0, 1] }}
              className="md:hidden overflow-hidden border-t"
            >
              <motion.nav
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.1 }}
                className="flex flex-col space-y-4 py-4"
              >
                <a
                  href="#inicio"
                  className="text-gray-300 hover:text-orange-500 transition-colors"
                  onClick={toggleMenu}
                >
                  Inicio
                </a>
                <a
                  href="#servicios"
                  className="text-gray-300 hover:text-orange-500 transition-colors"
                  onClick={toggleMenu}
                >
                  Servicios
                </a>
                <a
                  href="#horarios"
                  className="text-gray-300 hover:text-orange-500 transition-colors"
                  onClick={toggleMenu}
                >
                  Horarios
                </a>
                <a
                  href="#testimonios"
                  className="text-gray-300 hover:text-orange-500 transition-colors"
                  onClick={toggleMenu}
                >
                  Testimonios
                </a>
                <a
                  href="#contacto"
                  className="text-gray-300 hover:text-orange-500 transition-colors"
                  onClick={toggleMenu}
                >
                  Contacto
                </a>
                <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white w-full">
                  Clase Gratis
                </Button>
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
