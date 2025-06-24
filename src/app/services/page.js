"use client";

import { BOOKING_URL } from "../../config/constants";
import { services, benefits } from "../../config/services";
import { motion } from "framer-motion";
import Button from "../components/Button";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[#b97a2b]/10" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center z-10 px-4"
        >
          <h1 className="text-4xl md:text-5xl font-serif mb-4">My Services</h1>
          <p className="text-lg max-w-2xl mx-auto text-gray-700">
            I offer personalised wellness solutions to support your unique
            journey of healing and growth
          </p>
        </motion.div>
      </section>

      {/* Main Services Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="mb-20 last:mb-0"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                  <div className="mb-6">{service.largeIcon}</div>
                  <h2 className="text-3xl font-serif mb-4">{service.title}</h2>
                  <p className="text-gray-600 mb-6">{service.longDesc}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.items.map((item, idx) => (
                      <div
                        key={idx}
                        className="bg-white p-4 rounded-lg shadow-sm"
                      >
                        <h5 className="font-medium mb-2 text-sm">
                          {item.name}
                        </h5>
                        <p className="text-sm text-gray-600">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <div className="bg-[#b97a2b]/5 rounded-2xl p-8 h-full">
                    <div className="aspect-square rounded-xl bg-[#b97a2b]/10 flex items-center justify-center overflow-hidden">
                      {service.image}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-serif text-center mb-12"
          >
            Why Work With Me
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="text-center p-6"
              >
                <div className="flex justify-center mb-4">{benefit.icon}</div>
                <h5 className="font-serif text-xl mb-2">{benefit.title}</h5>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#b97a2b]/5 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-serif mb-6"
          >
            Ready to Begin Your Journey?
          </motion.h2>
          <p className="text-gray-600 mb-8">
            Let's take the first step together towards a healthier, more
            balanced life. I'm here to support you.
          </p>
          <Button href={BOOKING_URL} arrowDirection="right">
            Schedule an Appointment
          </Button>
        </div>
      </section>
    </main>
  );
}
