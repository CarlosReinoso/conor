"use client";

import { BOOKING_URL } from "../../config/constants";
import { motion } from "framer-motion";
import { FaHandHoldingHeart, FaRunning, FaWind } from "react-icons/fa";
import Button from "./Button";

const services = [
  {
    title: "Bodywork & Pain Support",
    desc: "Personalized therapeutic sessions for pain relief and body balance.",
    icon: <FaHandHoldingHeart className="text-3xl text-[#b97a2b] mb-4" />,
    items: ["Physiotherapy", "Massage Therapy", "Bodywork", "Pain Management"],
  },
  {
    title: "Movement & Training",
    desc: "Functional training for rehabilitation and everyday ease.",
    icon: <FaRunning className="text-3xl text-[#b97a2b] mb-4" />,
    items: ["Movement Therapy", "Functional Training"],
  },
  {
    title: "Breath & Mind-Body",
    desc: "Nervous system support through mindful practices.",
    icon: <FaWind className="text-3xl text-[#b97a2b] mb-4" />,
    items: ["Breathwork", "Meditation"],
  },
];

export default function Services() {
  return (
    <section className="py-16 px-4 relative overflow-hidden">
      {/* Background animated shapes */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-[#b97a2b]/5 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-[#b97a2b]/5 rounded-full"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto text-center">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-2xl font-serif mb-2"
        >
          My Services
        </motion.h3>
        <p className="mb-12 text-gray-600 text-sm max-w-2xl mx-auto">
          Support with your healing, movement, and wellbeing—through hands-on
          therapy, mindful movement, and personalised care.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="text-left bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              {service.icon}
              <h4 className="font-serif mb-2 text-lg">{service.title}</h4>
              <p className="text-sm text-gray-600 mb-3">{service.desc}</p>
              <ul className="space-y-1 text-sm">
                {service.items.map((item, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="text-[#b97a2b] mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        <Button href={BOOKING_URL} arrowDirection="right" className="mt-12">
          Book Appointment
        </Button>
      </div>
    </section>
  );
}
