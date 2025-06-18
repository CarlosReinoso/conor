"use client";

import Image from "next/image";
import Button from "./Button";
import { BOOKING_URL } from "../../config/constants";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative bg-black text-white min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.webp"
          alt="Hero background"
          fill
          className="object-cover opacity-50 scale-105 transition-transform duration-[2s] hover:scale-100"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70"></div>
      </div>
      <div className="max-w-5xl mx-auto relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 !text-white drop-shadow-lg tracking-tight">
            Conor O'Sullivan
          </h1>
          <div className="w-24 h-1 bg-white/50 mb-8 rounded-full"></div>
          <p className="mb-8 !text-white drop-shadow-md text-xl md:text-2xl lg:text-3xl font-light leading-relaxed max-w-3xl">
            Cultivating Healing Connection and Growth Through Integrated
            Therapies and Community Spaces
          </p>
          <Button
            href={BOOKING_URL}
            arrowDirection="right"
            className="text-lg px-8 py-4"
          >
            Book Appointment
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <div className="w-8 h-14 border-2 border-white/40 rounded-full flex justify-center backdrop-blur-sm">
          <motion.div
            animate={{
              y: [0, 16, 0],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
            className="w-1.5 h-3 bg-white rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}
