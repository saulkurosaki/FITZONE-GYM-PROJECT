"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import { FadeInUp } from "@/components/animations/fade-in-up";
import { StaggerContainer } from "@/components/animations/stagger-container";
import { StaggerItem } from "@/components/animations/stagger-item";
import { Counter } from "@/components/animations/counter";
import { OptimizedImage } from "@/components/optimized-image";
import { memo } from "react";

const testimonials = [
  {
    name: "Andrea Morales",
    age: 28,
    role: "Diseñadora Gráfica",
    image: "/young-woman-headshot.png",
    rating: 5,
    text: "FitZone cambió mi vida completamente. Los entrenadores son increíbles y el ambiente es súper motivador. He perdido 15 kilos en 6 meses y me siento mejor que nunca.",
    achievement: "Perdió 15kg en 6 meses",
  },
  {
    name: "Miguel Rodríguez",
    age: 35,
    role: "Ingeniero de Software",
    image: "/young-man-smiling-headshot.png",
    rating: 5,
    text: "Como desarrollador paso muchas horas sentado. FitZone me ayudó a recuperar mi forma física y mejorar mi postura. Las clases de funcional son mi favoritas.",
    achievement: "Mejoró su postura y resistencia",
  },
  {
    name: "Carla Vásquez",
    age: 24,
    role: "Estudiante de Medicina",
    image: "/latina-professional-headshot.png",
    rating: 5,
    text: "El acceso 24/7 es perfecto para mi horario de estudios. Puedo entrenar a cualquier hora y los equipos siempre están en perfecto estado. ¡Súper recomendado!",
    achievement: "Ganó masa muscular",
  },
  {
    name: "David Chen",
    age: 31,
    role: "Marketing Manager",
    image: "/young-asian-man-headshot.png",
    rating: 5,
    text: "Llevo 2 años en FitZone y es como mi segunda casa. La comunidad es increíble, siempre hay alguien que te motiva a dar lo mejor de ti.",
    achievement: "Completó su primer maratón",
  },
  {
    name: "Sofia Herrera",
    age: 29,
    role: "Arquitecta",
    image: "/young-woman-curly-hair-headshot.png",
    rating: 5,
    text: "Las clases de yoga y pilates son excepcionales. Me ayudaron a reducir el estrés del trabajo y mejorar mi flexibilidad. Los instructores son muy profesionales.",
    achievement: "Redujo estrés y mejoró flexibilidad",
  },
  {
    name: "Roberto Silva",
    age: 38,
    role: "Contador",
    image: "/middle-aged-man-headshot.png",
    rating: 5,
    text: "Después de los 35 pensé que era tarde para ponerme en forma. FitZone me demostró lo contrario. Ahora estoy en la mejor forma de mi vida.",
    achievement: "Mejor forma física a los 38",
  },
];

// Componente de testimonio memoizado para evitar re-renders innecesarios
const TestimonialCard = memo(
  ({
    testimonial,
    index,
  }: {
    testimonial: (typeof testimonials)[0];
    index: number;
  }) => (
    <StaggerItem>
      <motion.div
        whileHover={{
          y: -10,
          transition: { duration: 0.3 },
        }}
      >
        <Card className="shadow-lg border-0 hover:shadow-xl transition-shadow duration-300 h-full bg-black">
          <CardContent className="p-6">
            <motion.div
              className="flex items-center mb-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                <OptimizedImage
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={64}
                  height={64}
                  className="w-16 h-16 rounded-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold text-[#E1DEDA]">{testimonial.name}</h4>
                <p className="text-sm text-[#948B80]">
                  {testimonial.role}, {testimonial.age} años
                </p>
                <motion.div
                  className="flex items-center mt-1"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                >
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.1 + i * 0.05 + 0.5,
                      }}
                    >
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>

            <div className="relative">
              <Quote className="absolute -top-2 -left-2 h-8 w-8 text-orange-200" />
              <motion.p
                className="text-[#E1DEDA] italic mb-4 pl-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              >
                "{testimonial.text}"
              </motion.p>
            </div>

            <motion.div
              className="bg-black p-3 rounded-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 + 0.4 }}
              whileHover={{ scale: 1.02 }}
            >
              <p className="text-sm font-semibold text-orange-700">
                🏆 {testimonial.achievement}
              </p>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </StaggerItem>
  )
);

TestimonialCard.displayName = "TestimonialCard";

export function TestimonialsSection() {
  return (
    <section id="testimonios" className="py-20 bg-[#17191A]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#DDD9D5] mb-4">
            Lo que dicen nuestros miembros
          </h2>
          <p className="text-xl text-[#948B80] max-w-3xl mx-auto">
            Historias reales de transformación. Descubre cómo FitZone ha
            cambiado la vida de cientos de personas como tú.
          </p>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </StaggerContainer>

        <FadeInUp delay={0.6}>
          <div className="text-center mt-12">
            <motion.div
              className="bg-[#1a1b1c] p-8 rounded-lg shadow-lg inline-block"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-[#D8D4CF] mb-2">
                ¿Listo para tu transformación?
              </h3>
              <p className="text-[#898075] mb-4">
                Únete a más de 500 miembros que ya están viviendo su mejor
                versión
              </p>
              <div className="flex justify-center space-x-8 text-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-3xl font-bold text-orange-500">
                    <Counter value={4.9} duration={2} />
                  </div>
                  <div className="text-sm text-[#898075]">
                    Calificación promedio
                  </div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-3xl font-bold text-orange-500">
                    <Counter value={98} suffix="%" duration={2.5} />
                  </div>
                  <div className="text-sm text-[#898075]">Satisfacción</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-3xl font-bold text-orange-500">
                    <Counter value={500} suffix="+" duration={3} />
                  </div>
                  <div className="text-sm text-[#898075]">Miembros felices</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
