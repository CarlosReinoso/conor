"use client";
import Image from "next/image";
import { INSTAGRAM_PROFILE, EMAIL_ADDRESS } from "@/config/constants";
import { motion } from "framer-motion";

// Function to extract Instagram handle from URL
const getInstagramHandle = (url) => {
  const handle = url.split("instagram.com/")[1]?.split(/[/?]/)[0];
  return handle ? `@${handle}` : "";
};

export default function ContactPage() {
  const instagramHandle = getInstagramHandle(INSTAGRAM_PROFILE);

  return (
    <>
      <main className="bg-secondary min-h-screen flex items-center justify-center py-32 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl w-full mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col space-y-12 p-8 md:col-span-1"
            >
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg leading-relaxed"
              >
                For any enquiries or requests, feel free to get in touch.
                <br />
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="group transition-all duration-300"
              >
                <h3 className="text-4xl font-light mb-6">Instagram</h3>
                <a
                  href={INSTAGRAM_PROFILE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors duration-300 break-all flex items-center gap-3 group-hover:underline"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform duration-300 group-hover:scale-110"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                  {instagramHandle}
                </a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="group transition-all duration-300"
              >
                <h3 className="text-4xl font-light mb-6">Email</h3>
                <a
                  href={`mailto:${EMAIL_ADDRESS}`}
                  className="hover:text-primary transition-colors duration-300 break-all group-hover:underline"
                >
                  {EMAIL_ADDRESS}
                </a>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col items-center justify-center p-8 md:col-span-1"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full flex items-center justify-center"
              >
                <Image
                  src="/conor-contact.jpg"
                  alt="Contact jewellery"
                  fill={false}
                  width={600}
                  height={800}
                  className="rounded-3xl object-cover w-full h-auto shadow-2xl"
                  priority
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </main>
    </>
  );
}
