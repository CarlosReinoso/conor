"use client";
import Image from "next/image";
import { useState } from "react";
import Modal from "./Modal";

const images = [
  {
    src: "/gallery/WhatsApp Image 2025-06-10 at 18.47.08_c7b6599f.jpg",
    alt: "Gallery Image 1",
  },
  {
    src: "/gallery/WhatsApp Image 2025-06-10 at 18.51.08_68226c2a.jpg",
    alt: "Gallery Image 2",
  },
  {
    src: "/gallery/WhatsApp Image 2025-06-10 at 18.51.08_d49388d7.jpg",
    alt: "Gallery Image 3",
  },
  {
    src: "/gallery/WhatsApp Image 2025-06-10 at 18.48.16_4bd95ded.jpg",
    alt: "Gallery Image 4",
  },
  {
    src: "/gallery/WhatsApp Image 2025-06-10 at 18.50.01_36be614a.jpg",
    alt: "Gallery Image 5",
  },
  {
    src: "/gallery/WhatsApp Image 2025-06-10 at 18.50.01_64e87807.jpg",
    alt: "Gallery Image 6",
  },
];

const VISIBLE_IMAGES = 3;

export default function Gallery() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const remainingCount = images.length - VISIBLE_IMAGES;

  return (
    <>
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
              Our Gallery
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {images.slice(0, VISIBLE_IMAGES).map((image, index) => (
              <div
                key={index}
                className="relative aspect-square w-full group cursor-pointer overflow-hidden rounded-lg"
                onClick={() => setSelectedImageIndex(index)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="rounded-lg object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    {index === VISIBLE_IMAGES - 1 && remainingCount > 0 ? (
                      <div className="flex items-center justify-center space-x-2">
                        <span className="text-lg font-medium">
                          +{remainingCount} more
                        </span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    ) : (
                      <p className="text-lg font-medium">View gallery</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Modal
        isOpen={selectedImageIndex !== null}
        onClose={() => setSelectedImageIndex(null)}
        images={images}
        currentIndex={selectedImageIndex}
        onIndexChange={setSelectedImageIndex}
      />
    </>
  );
}
