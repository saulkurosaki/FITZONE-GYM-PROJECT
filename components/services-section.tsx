"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Dumbbell, Users, Heart, Zap, Clock, Trophy } from "lucide-react";
import { motion } from "framer-motion";
import { FadeInUp } from "@/components/animations/fade-in-up";
import { StaggerContainer } from "@/components/animations/stagger-container";
import { StaggerItem } from "@/components/animations/stagger-item";
import { memo } from "react";
import { OptimizedMotion } from "@/components/animations/optimized-motion";

const services = [
  {
    icon: Dumbbell,
    title: "Zona de Pesas",
    description:
      "Equipos de última generación para entrenamiento de fuerza y musculación.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Users,
    title: "Clases Grupales",
    description:
      "Yoga, Pilates, Zumba, CrossFit y más. Entrenamientos divertidos en grupo.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Heart,
    title: "Cardio Zone",
    description:
      "Caminadoras, bicicletas y elípticas con entretenimiento integrado.",
    color: "from-green-500 to-teal-500",
  },
  {
    icon: Zap,
    title: "Entrenamiento Personal",
    description:
      "Sesiones 1:1 con entrenadores certificados para resultados garantizados.",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Clock,
    title: "Acceso 24/7",
    description:
      "Entrena cuando quieras. Acceso las 24 horas, los 7 días de la semana.",
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: Trophy,
    title: "Programas Especializados",
    description:
      "Pérdida de peso, ganancia muscular, preparación deportiva y rehabilitación.",
    color: "from-red-500 to-pink-500",
  },
];

// Componente de servicio memoizado para evitar re-renders innecesarios
const ServiceCard = memo(
  ({ service, index }: { service: (typeof services)[0]; index: number }) => {
    const IconComponent = service.icon;

    return (
      <StaggerItem>
        <OptimizedMotion
          whileHover={{
            y: -10,
            transition: { duration: 0.3 },
          }}
          whileTap={{ scale: 0.95 }}
        >
          <Card className="group bg-black hover:shadow-xl transition-all duration-300 border-0 shadow-lg h-full">
            <CardContent className="p-8 text-center">
              <OptimizedMotion
                className={`inline-flex p-4 rounded-full bg-gradient-to-r ${service.color} mb-6`}
                whileHover={{
                  scale: 1.1,
                  rotate: 360,
                  transition: { duration: 0.6 },
                }}
              >
                <IconComponent className="h-8 w-8 text-white" />
              </OptimizedMotion>

              <h3 className="text-xl font-bold text-[#E1DEDA] mb-4">
                {service.title}
              </h3>

              <p className="text-[#A8A096] leading-relaxed">
                {service.description}
              </p>
            </CardContent>
          </Card>
        </OptimizedMotion>
      </StaggerItem>
    );
  }
);

ServiceCard.displayName = "ServiceCard";

export function ServicesSection() {
  return (
    <section id="servicios" className="py-20 bg-[#17191A]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInUp>
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl font-bold text-[#E1DEDA] mb-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Nuestros Servicios
            </motion.h2>
            <motion.p
              className="text-xl text-[#A8A096] max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Descubre todo lo que FitZone tiene para ofrecerte. Desde equipos
              de última generación hasta programas personalizados diseñados para
              tu éxito.
            </motion.p>
          </div>
        </FadeInUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
