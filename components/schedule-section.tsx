"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock } from "lucide-react";
import { motion } from "framer-motion";
import { FadeInUp } from "@/components/animations/fade-in-up";
import { StaggerContainer } from "@/components/animations/stagger-container";
import { StaggerItem } from "@/components/animations/stagger-item";

const schedule = [
  {
    day: "Lunes",
    classes: [
      { time: "06:00", name: "Yoga Matutino", instructor: "Ana García" },
      { time: "09:00", name: "CrossFit", instructor: "Carlos Ruiz" },
      { time: "18:00", name: "Zumba", instructor: "María López" },
      { time: "19:30", name: "Pilates", instructor: "Laura Martín" },
    ],
  },
  {
    day: "Martes",
    classes: [
      { time: "07:00", name: "Spinning", instructor: "Pedro Sánchez" },
      { time: "10:00", name: "Aqua Aeróbicos", instructor: "Carmen Díaz" },
      { time: "17:00", name: "Funcional", instructor: "Javier Torres" },
      { time: "19:00", name: "Yoga Avanzado", instructor: "Ana García" },
    ],
  },
  {
    day: "Miércoles",
    classes: [
      { time: "06:00", name: "Cardio HIIT", instructor: "Carlos Ruiz" },
      { time: "09:30", name: "Pilates", instructor: "Laura Martín" },
      { time: "18:00", name: "CrossFit", instructor: "Pedro Sánchez" },
      { time: "19:30", name: "Zumba", instructor: "María López" },
    ],
  },
  {
    day: "Jueves",
    classes: [
      { time: "07:00", name: "Yoga Flow", instructor: "Ana García" },
      { time: "10:00", name: "Spinning", instructor: "Javier Torres" },
      { time: "17:30", name: "Funcional", instructor: "Carlos Ruiz" },
      { time: "19:00", name: "Aqua Aeróbicos", instructor: "Carmen Díaz" },
    ],
  },
  {
    day: "Viernes",
    classes: [
      { time: "06:00", name: "HIIT", instructor: "Pedro Sánchez" },
      { time: "09:00", name: "Pilates", instructor: "Laura Martín" },
      { time: "18:00", name: "Zumba Party", instructor: "María López" },
      { time: "19:30", name: "Yoga Relajante", instructor: "Ana García" },
    ],
  },
];

export function ScheduleSection() {
  return (
    <section id="horarios" className="py-20 bg-[#1a1b1c]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInUp>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#E1DEDA] mb-4">
              Horarios de Clases
            </h2>
            <p className="text-xl text-[#9E968B] max-w-3xl mx-auto">
              Encuentra la clase perfecta para tu horario. Ofrecemos una amplia
              variedad de clases durante toda la semana.
            </p>
          </div>
        </FadeInUp>

        <StaggerContainer
          className="grid grid-cols-1 lg:grid-cols-5 gap-6"
          staggerDelay={0.15}
        >
          {schedule.map((day, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{
                  y: -5,
                  transition: { duration: 0.3 },
                }}
              >
                <Card className="shadow-lg border-0 h-full bg-black">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    style={{ originX: 0 }}
                  >
                    <CardHeader className="bg-gradient-to-r rounded-t-lg from-orange-500 to-red-500 text-[#E1DEDA]">
                      <CardTitle className="text-center text-lg font-bold">
                        {day.day}
                      </CardTitle>
                    </CardHeader>
                  </motion.div>
                  <CardContent className="p-4">
                    <div className="space-y-4">
                      {day.classes.map((classItem, classIndex) => (
                        <motion.div
                          key={classIndex}
                          className="border-l-4 border-orange-500 pl-4 py-2"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.4,
                            delay: index * 0.1 + classIndex * 0.05,
                          }}
                          whileHover={{
                            x: 5,
                            transition: { duration: 0.2 },
                          }}
                        >
                          <div className="flex items-center text-sm text-orange-600 font-semibold mb-1">
                            <Clock className="h-4 w-4 mr-1" />
                            {classItem.time}
                          </div>
                          <div className="font-bold text-[#E1DEDA] text-sm mb-1">
                            {classItem.name}
                          </div>
                          <div className="text-xs text-[#948B80]">
                            {classItem.instructor}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeInUp delay={0.8}>
          <div className="mt-12 text-center">
            <p className="text-[#948B80] mb-4">
              ¿No encuentras el horario perfecto? Contáctanos para clases
              personalizadas.
            </p>
            <motion.div
              className="bg-[#1A1B1C] p-6 rounded-lg inline-block"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-sm text-[#948B80]">
                <strong>Horarios de Gimnasio:</strong> Lunes a Viernes 5:00 -
                23:00 | Sábados y Domingos 7:00 - 21:00
              </p>
            </motion.div>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
