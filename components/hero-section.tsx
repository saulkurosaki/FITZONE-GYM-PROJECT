"use client";

import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { motion } from "framer-motion";
import { FadeInUp } from "@/components/animations/fade-in-up";
import { Counter } from "@/components/animations/counter";
import { ParallaxSection } from "@/components/animations/parallax-section";
import { OptimizedImage } from "@/components/optimized-image";

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative bg-[#171819] text-white overflow-hidden"
    >
      {/* Background Image */}
      <ParallaxSection offset={30} className="absolute inset-0 z-0">
        <OptimizedImage
          src="/modern-gym-interior.png"
          alt="Gimnasio FitZone"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="w-full h-full opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
      </ParallaxSection>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-3xl">
          <FadeInUp>
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-[#E5E2DF]"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.25, 0.25, 0, 1],
              }}
            >
              Transforma tu{" "}
              <motion.span
                className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent"
                initial={{ backgroundPosition: "0% 50%" }}
                animate={{ backgroundPosition: "100% 50%" }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                cuerpo
              </motion.span>{" "}
              en FitZone
            </motion.h1>
          </FadeInUp>

          <FadeInUp delay={0.4}>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 leading-relaxed">
              Únete a la comunidad fitness más moderna de la ciudad.
              Entrenamientos personalizados, equipos de última generación y un
              ambiente que te motivará a alcanzar tus metas.
            </p>
          </FadeInUp>

          <FadeInUp delay={0.6}>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 text-lg"
                  asChild
                >
                  <a href="#cta-section">¡Obtén tu clase gratis!</a>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#E5E2DF] text-[#E5E2DF] bg-[#17191A] hover:bg-[#E5E2DF] hover:text-[#17191A] px-8 py-4 text-lg backdrop-blur-sm transition-all duration-300"
                >
                  <motion.div whileHover={{ scale: 1.2 }} className="mr-2">
                    <Play className="h-5 w-5" />
                  </motion.div>
                  Ver instalaciones
                </Button>
              </motion.div>
            </div>
          </FadeInUp>

          {/* Animated Stats */}
          <FadeInUp delay={0.8}>
            <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-gray-700">
              <motion.div className="text-center" whileHover={{ scale: 1.05 }}>
                <div className="text-3xl font-bold text-orange-400">
                  <Counter value={500} suffix="+" />
                </div>
                <div className="text-gray-400">Miembros activos</div>
              </motion.div>
              <motion.div className="text-center" whileHover={{ scale: 1.05 }}>
                <div className="text-3xl font-bold text-orange-400">
                  <Counter value={15} suffix="+" />
                </div>
                <div className="text-gray-400">Entrenadores</div>
              </motion.div>
              <motion.div className="text-center" whileHover={{ scale: 1.05 }}>
                <div className="text-3xl font-bold text-orange-400">24/7</div>
                <div className="text-gray-400">Acceso</div>
              </motion.div>
            </div>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}
