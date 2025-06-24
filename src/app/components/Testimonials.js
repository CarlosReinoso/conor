"use client";

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    text: "Conor is fantastic, can't rate him enough. Super knowledgeable and really tried to understand what's going on with my mind- body connection as part of the treatment which feels very helpful. I always leave feeling better and lighter",
    author: "Lauren",
    rating: 5,
  },
  {
    text: "Great experience. Very professional. Would recommend.",
    author: "Sam",
    rating: 5,
  },
  {
    text: "I had a fantastic Myofascial therapy session with Connor. The environment was calm and relaxing; he was extremely attentive, actively listening to my pain points and areas of tension. He worked exactly where needed, and I felt so much relief.",
    author: "Lela",
    rating: 5,
  },
  {
    text: "Conor is very knowledgeable and his treatment really helped. I would recommend him.",
    author: "Paul",
    rating: 5,
  },
  {
    text: "I booked a sports massage with Conor on the recommendation of a friend and he did not disappoint! He was very friendly and welcoming, and the massage helped with my stiff legs and sore back.",
    author: "Ros",
    rating: 5,
  },
  {
    text: "A thorough session with good attention to detail. Calm environment too.",
    author: "Alexander",
    rating: 5,
  },
  {
    text: "Had a lovely massage with Conor! He focused on the problem areas and my shoulder feels much better now.",
    author: "Sara",
    rating: 5,
  },
  {
    text: "Really great treatment. Second time I've been and it won't be the last. Well worth the asking price.",
    author: "Sasha",
    rating: 5,
  },
  {
    text: "Conor is a miracle worker! I had pain in my neck and shoulder for weeks, and after just one session it's almost gone.",
    author: "Karen",
    rating: 5,
  },
  {
    text: "Best physio I've experienced. The treatment and advice are second to none. Highly recommended.",
    author: "Anonymous",
    rating: 5,
  },
];

const StarRating = ({ rating }) => {
  return (
    <div className="flex gap-1">
      {[...Array(rating)].map((_, i) => (
        <span key={i} className="text-yellow-400">
          ★
        </span>
      ))}
    </div>
  );
};

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    slidesToScroll: 1,
    loop: true,
    breakpoints: {
      "(min-width: 768px)": { slidesToShow: 3 },
      "(min-width: 1024px)": { slidesToShow: 3 },
    },
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="py-16 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-center mb-12">
          What Our Clients Say
        </h2>

        <div className="relative px-12">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] md:flex-[0_0_calc(33.333%-1rem)] lg:flex-[0_0_calc(33.333%-1rem)]"
                >
                  <div className="bg-[#ede7df] p-4 rounded-lg h-full">
                    <StarRating rating={testimonial.rating} />
                    <p className="mt-2 text-gray-700 italic text-sm">
                      "{testimonial.text}"
                    </p>
                    <p className="mt-2 text-gray-600 font-medium text-sm">
                      — {testimonial.author}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
