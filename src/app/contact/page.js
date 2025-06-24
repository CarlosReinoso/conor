"use client";
import Image from "next/image";
import {
  INSTAGRAM_PROFILE,
  EMAIL_ADDRESS,
  WHATSAPP_NUMBER,
} from "@/config/constants";
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
      <main className="bg-secondary min-h-screen flex items-center justify-center py-24 md:py-0 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl w-full mx-auto h-screen md:flex md:items-center"
        >
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center h-full">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col space-y-6 md:space-y-8 p-4 md:p-8 md:col-span-1 md:justify-center"
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

              {/* WhatsApp */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="group transition-all duration-300"
              >
                <h3 className="text-3xl md:text-4xl font-light mb-4 md:mb-6">
                  WhatsApp
                </h3>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors duration-300 break-all flex items-center gap-3 group-hover:underline"
                >
                  <svg
                    height="28"
                    width="28"
                    version="1.1"
                    viewBox="0 0 308 308"
                    className="transition-transform duration-300 group-hover:scale-110 fill-current md:h-8 md:w-8"
                  >
                    <g id="XMLID_468_">
                      <path
                        id="XMLID_469_"
                        d="M227.904,176.981c-0.6-0.288-23.054-11.345-27.044-12.781c-1.629-0.585-3.374-1.156-5.23-1.156   c-3.032,0-5.579,1.511-7.563,4.479c-2.243,3.334-9.033,11.271-11.131,13.642c-0.274,0.313-0.648,0.687-0.872,0.687   c-0.201,0-3.676-1.431-4.728-1.888c-24.087-10.463-42.37-35.624-44.877-39.867c-0.358-0.61-0.373-0.887-0.376-0.887   c0.088-0.323,0.898-1.135,1.316-1.554c1.223-1.21,2.548-2.805,3.83-4.348c0.607-0.731,1.215-1.463,1.812-2.153   c1.86-2.164,2.688-3.844,3.648-5.79l0.503-1.011c2.344-4.657,0.342-8.587-0.305-9.856c-0.531-1.062-10.012-23.944-11.02-26.348   c-2.424-5.801-5.627-8.502-10.078-8.502c-0.413,0,0,0-1.732,0.073c-2.109,0.089-13.594,1.601-18.672,4.802   c-5.385,3.395-14.495,14.217-14.495,33.249c0,17.129,10.87,33.302,15.537,39.453c0.116,0.155,0.329,0.47,0.638,0.922   c17.873,26.102,40.154,45.446,62.741,54.469c21.745,8.686,32.042,9.69,37.896,9.69c0.001,0,0.001,0,0.001,0   c2.46,0,4.429-0.193,6.166-0.364l1.102-0.105c7.512-0.666,24.02-9.22,27.775-19.655c2.958-8.219,3.738-17.199,1.77-20.458   C233.168,179.508,230.845,178.393,227.904,176.981z"
                      />
                      <path
                        id="XMLID_470_"
                        d="M156.734,0C73.318,0,5.454,67.354,5.454,150.143c0,26.777,7.166,52.988,20.741,75.928L0.212,302.716   c-0.484,1.429-0.124,3.009,0.933,4.085C1.908,307.58,2.943,308,4,308c0.405,0,0.813-0.061,1.211-0.188l79.92-25.396   c21.87,11.685,46.588,17.853,71.604,17.853C240.143,300.27,308,232.923,308,150.143C308,67.354,240.143,0,156.734,0z    M156.734,268.994c-23.539,0-46.338-6.797-65.936-19.657c-0.659-0.433-1.424-0.655-2.194-0.655c-0.407,0-0.815,0.062-1.212,0.188   l-40.035,12.726l12.924-38.129c0.418-1.234,0.209-2.595-0.561-3.647c-14.924-20.392-22.813-44.485-22.813-69.677   c0-65.543,53.754-118.867,119.826-118.867c66.064,0,119.812,53.324,119.812,118.867   C276.546,215.678,222.799,268.994,156.734,268.994z"
                      />
                    </g>
                  </svg>
                  +{WHATSAPP_NUMBER}
                </a>
              </motion.div>

              {/* Email */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="group transition-all duration-300"
              >
                <h3 className="text-3xl md:text-4xl font-light mb-4 md:mb-6">
                  Email
                </h3>
                <a
                  href={`mailto:${EMAIL_ADDRESS}`}
                  className="hover:text-primary transition-colors duration-300 break-all flex items-center gap-3 group-hover:underline"
                >
                  <svg
                    className="w-7 h-7 md:w-8 md:h-8 transition-transform duration-300 group-hover:scale-110"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="M22 6 12 13 2 6" />
                  </svg>
                  {EMAIL_ADDRESS}
                </a>
              </motion.div>

              {/* Instagram */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="group transition-all duration-300"
              >
                <h3 className="text-3xl md:text-4xl font-light mb-4 md:mb-6">
                  Instagram
                </h3>
                <a
                  href={INSTAGRAM_PROFILE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors duration-300 break-all flex items-center gap-3 group-hover:underline"
                >
                  <svg
                    className="w-7 h-7 md:w-8 md:h-8 transition-transform duration-300 group-hover:scale-110"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="18" cy="6" r="1" />
                  </svg>
                  {instagramHandle}
                </a>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col items-center justify-center p-4 md:p-8 md:col-span-1 md:h-full"
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
                  className="rounded-3xl object-cover w-full h-auto max-h-[60vh] md:max-h-[70vh] shadow-2xl"
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
