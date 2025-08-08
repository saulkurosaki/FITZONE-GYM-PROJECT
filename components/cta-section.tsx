"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Gift, Clock, Users } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeInUp } from "@/components/animations/fade-in-up";

export function CtaSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log("Formulario enviado:", formData);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "" });
    }, 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <motion.section
      className="py-20 bg-gradient-to-br from-orange-500 via-red-500 to-pink-600 text-[#D8D4CF] relative overflow-hidden"
      id="cta-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Animated Background Pattern */}
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <FadeInUp>
            <motion.h2
              className="text-4xl sm:text-5xl font-bold mb-6"
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.25, 0.25, 0, 1] }}
            >
              ¡Obtén tu clase gratis!
            </motion.h2>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <p className="text-xl sm:text-2xl mb-12 opacity-90">
              Descubre por qué FitZone es el gimnasio #1 de la ciudad. Sin
              compromisos, sin pagos, solo resultados.
            </p>
          </FadeInUp>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Animated Benefits */}
            <FadeInUp delay={0.4}>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold mb-6">
                  Tu clase gratis incluye:
                </h3>

                <div className="space-y-4">
                  {[
                    {
                      icon: Gift,
                      title: "Acceso completo por 1 día",
                      desc: "Prueba todos nuestros equipos y servicios",
                    },
                    {
                      icon: Users,
                      title: "Consulta con entrenador",
                      desc: "Evaluación física y plan personalizado",
                    },
                    {
                      icon: Clock,
                      title: "Clase grupal de tu elección",
                      desc: "Yoga, CrossFit, Zumba o la que prefieras",
                    },
                    {
                      icon: CheckCircle,
                      title: "Sin compromisos",
                      desc: "Decide después si FitZone es para ti",
                    },
                  ].map((benefit, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-4"
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      whileHover={{ x: 10 }}
                    >
                      <motion.div
                        className="bg-white/20 p-2 rounded-full"
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <benefit.icon className="h-6 w-6" />
                      </motion.div>
                      <div className="text-left">
                        <div className="font-semibold">{benefit.title}</div>
                        <div className="text-sm opacity-80">{benefit.desc}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </FadeInUp>

            {/* Animated Form */}
            <FadeInUp delay={0.6}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardContent className="p-8">
                    <AnimatePresence mode="wait">
                      {!isSubmitted ? (
                        <motion.form
                          key="form"
                          onSubmit={handleSubmit}
                          className="space-y-6"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                          >
                            <label
                              htmlFor="name"
                              className="block text-sm font-medium text-[#D8D4CF] mb-2"
                            >
                              Nombre completo
                            </label>
                            <Input
                              id="name"
                              name="name"
                              type="text"
                              required
                              value={formData.name}
                              onChange={handleInputChange}
                              className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:border-white focus:ring-white"
                              placeholder="Tu nombre completo"
                            />
                          </motion.div>

                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.2 }}
                          >
                            <label
                              htmlFor="email"
                              className="block text-sm font-medium mb-2 text-[#D8D4CF]"
                            >
                              Correo electrónico
                            </label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              required
                              value={formData.email}
                              onChange={handleInputChange}
                              className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:border-white focus:ring-white"
                              placeholder="tu@email.com"
                            />
                          </motion.div>

                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.3 }}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <Button
                              type="submit"
                              size="lg"
                              className="w-full bg-[#f5f0ea] text-orange-600 hover:bg-[#ece8e1] font-bold py-4 text-lg"
                            >
                              ¡Reservar mi clase gratis!
                            </Button>
                          </motion.div>

                          <motion.p
                            className="text-xs opacity-80 text-center text-[#D8D4CF]"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.4, delay: 0.4 }}
                          >
                            Al enviar este formulario, aceptas recibir
                            información sobre nuestros servicios. Puedes
                            cancelar en cualquier momento.
                          </motion.p>
                        </motion.form>
                      ) : (
                        <motion.div
                          key="success"
                          className="text-center py-8"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.5 }}
                        >
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{
                              duration: 0.6,
                              delay: 0.2,
                              type: "spring",
                              bounce: 0.5,
                            }}
                          >
                            <CheckCircle className="h-16 w-16 mx-auto mb-4 text-green-300" />
                          </motion.div>
                          <motion.h3
                            className="text-2xl font-bold mb-2 text-[#D8D4CF]"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.4 }}
                          >
                            ¡Perfecto!
                          </motion.h3>
                          <motion.p
                            className="mb-4 text-[#D8D4CF]"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.5 }}
                          >
                            Hemos recibido tu solicitud. Te contactaremos pronto
                            para coordinar tu clase gratis.
                          </motion.p>
                          <motion.p
                            className="text-sm opacity-80 text-[#D8D4CF]"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.6 }}
                          >
                            Revisa tu email para más detalles.
                          </motion.p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </CardContent>
                </Card>
              </motion.div>
            </FadeInUp>
          </div>

          <FadeInUp delay={0.8}>
            <div className="mt-12 text-center">
              <motion.p
                className="text-lg opacity-90"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                ¿Tienes preguntas? Llámanos al{" "}
                <motion.a
                  href="tel:+1234567890"
                  className="font-bold underline hover:no-underline"
                  whileHover={{ color: "#fbbf24" }}
                  transition={{ duration: 0.3 }}
                >
                  (123) 456-7890
                </motion.a>
              </motion.p>
            </div>
          </FadeInUp>
        </div>
      </div>
    </motion.section>
  );
}
