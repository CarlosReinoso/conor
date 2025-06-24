"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRef, useEffect } from "react";
import Button from "../components/Button";
import { BOOKING_URL, EVENTBRITE_URL } from "../../config/constants";

export default function About() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      // Start video from 5 seconds (you can change this value)
      videoRef.current.currentTime = 5;
    }
  }, []);

  return (
    <main className="min-h-screen bg-white pt-20">
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Video Section - Full height on mobile, left side on desktop */}
        <div className="relative w-full h-screen lg:w-1/2 lg:sticky lg:top-0">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/about.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-2/3 px-4 pb-16 pt-16 lg:py-12">
          <div className="max-w-xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-12"
            >
              {/* Introduction */}
              <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl font-light text-gray-900 leading-tight">
                  Hi, I'm Conor
                </h1>
                <p className="text-xl text-gray-600 font-light">
                  Integrated therapist, community weaver and musician
                </p>
              </div>

              {/* Main Content */}
              <div className="prose prose-lg max-w-none space-y-8 text-gray-600">
                <p>
                  I founded Supple Space in 2014 as a place for people to heal
                  and reconnect—with their bodies, with one other, and beyond.
                </p>

                <p>
                  My work integrates hands-on bodywork, movement therapy,
                  meditative practices and more. It's intuitive, personalised,
                  and rooted in presence—supporting you to live more fully and
                  take your wellbeing into your own hands.
                </p>

                <p>
                  Supple Space is also home to The Lotus Circle—an active,
                  creative community in London, hosting a range of classes,
                  jams, and events. Usually centred around movement and/or
                  music.
                </p>

                <p>
                  Whether you're working through pain, exploring your movement,
                  expanding your community—you're welcome here.
                </p>
              </div>

              {/* Final Quote */}
              <div className="border-l-4 border-gray-200 pl-6 mt-12">
                <p className="text-2xl font-light text-gray-700 italic">
                  "Supple Space is where movement meets mindfulness, and healing
                  finds its rhythm."
                </p>
              </div>

              {/* Call to Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mt-12">
                <Button
                  href={BOOKING_URL}
                  variant="primary"
                  className="text-center"
                  arrowDirection="right"
                >
                  Book Appointment
                </Button>
                <Button
                  href={EVENTBRITE_URL}
                  variant="primary"
                  className="text-center"
                  arrowDirection="right"
                >
                  View Community Events
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}
