"use client";

import { BOOKING_URL } from "../../config/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaHandHoldingHeart,
  FaRunning,
  FaWind,
  FaClock,
  FaUserFriends,
  FaLeaf,
} from "react-icons/fa";
import Button from "../components/Button";

const servicesDetails = [
  {
    title: "Bodywork & Pain Support",
    desc: "I offer personalised therapeutic sessions to help you find relief and balance.",
    icon: <FaHandHoldingHeart className="text-4xl text-[#b97a2b] mb-4" />,
    rightImage: (
      <Image
        src="/coach.jpg"
        alt="Coach Service"
        width={400}
        height={400}
        className="w-full h-full object-cover rounded-lg"
      />
    ),
    longDesc:
      "In our bodywork sessions, I'll work with you to address your unique needs. Drawing from my experience in various therapeutic techniques, I'll help you navigate chronic pain, release tension, and restore your body's natural balance. Each session is a collaborative journey towards healing and harmony.",
    items: [
      {
        name: "Physiotherapy",
        description:
          "Together, we'll use evidence-based treatments to restore your movement and function",
      },
      {
        name: "Massage Therapy",
        description:
          "Deep tissue and therapeutic massage to help you find relief from tension",
      },
      {
        name: "Bodywork",
        description:
          "A holistic approach to help you achieve physical wellness and alignment",
      },
      {
        name: "Pain Management",
        description:
          "Targeted techniques to help you find relief from chronic and acute pain",
      },
    ],
  },
  {
    title: "Movement & Training",
    desc: "Let's explore functional training for rehabilitation and everyday ease.",
    icon: <FaRunning className="text-4xl text-[#b97a2b]" />,
    rightImage: (
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover rounded-lg"
      >
        <source src="/movement.mp4" type="video/mp4" />
      </video>
    ),
    longDesc:
      "I'll guide you in discovering the power of mindful movement. Together, we'll focus on building functional strength, improving your mobility, and enhancing your natural movement patterns. I believe in quality over quantity, helping you make sustainable progress at your own pace.",
    items: [
      {
        name: "Movement Therapy",
        description: "I'll guide you in improving mobility and body awareness",
      },
      {
        name: "Functional Training",
        description:
          "We'll work on practical exercises for real-life strength and stability",
      },
      {
        name: "Rehabilitation",
        description: "I'll support your journey through injury recovery",
      },
      {
        name: "Movement Assessment",
        description:
          "We'll analyze your movement patterns to understand limitations and potential",
      },
    ],
  },
  {
    title: "Breath & Mind-Body",
    desc: "Let's support your nervous system through mindful practices.",
    icon: <FaWind className="text-4xl text-[#b97a2b]" />,
    rightImage: (
      <Image
        src="/breath.jpg"
        alt="Mindfulness Practice"
        width={400}
        height={400}
        className="w-full h-full object-cover rounded-lg"
      />
    ),
    longDesc:
      "I'll help you connect deeply with your body and mind through integrative breath and mindfulness practices. Together, we'll work on regulating your nervous system, reducing stress, and enhancing your overall wellbeing. You'll learn techniques that you can easily incorporate into your daily life.",
    items: [
      {
        name: "Breathwork",
        description:
          "I'll teach you breathing techniques for stress relief and energy",
      },
      {
        name: "Meditation",
        description:
          "We'll explore mindfulness practices for mental clarity and calm",
      },
      {
        name: "Stress Management",
        description:
          "I'll share holistic approaches to help you find balance and resilience",
      },
      {
        name: "Mind-Body Integration",
        description: "Together, we'll strengthen your mind-body connection",
      },
    ],
  },
];

const benefits = [
  {
    icon: <FaClock className="text-3xl text-[#b97a2b]" />,
    title: "Flexible Scheduling",
    description: "Book sessions at times that work best for your schedule",
  },
  {
    icon: <FaUserFriends className="text-3xl text-[#b97a2b]" />,
    title: "Personal Attention",
    description:
      "I give you my full attention and create customized treatment plans",
  },
  {
    icon: <FaLeaf className="text-3xl text-[#b97a2b]" />,
    title: "Holistic Care",
    description: "I consider your whole being - mind, body, and spirit",
  },
];

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
          {servicesDetails.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="mb-20 last:mb-0"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                  <div className="mb-6">{service.icon}</div>
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
                      {service.rightImage}
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
