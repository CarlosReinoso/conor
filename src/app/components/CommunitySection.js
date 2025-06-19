import Button from "./Button";
import Image from "next/image";
import { EVENTBRITE_URL } from "../../config/constants";

export default function CommunitySection() {
  return (
    <section className="py-16 px-4 bg-[#7b8a7a] text-white">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div className="relative aspect-[4/3] w-full max-w-md mx-auto">
          <Image
            src="/community.jpg"
            alt="Community Events"
            fill
            className="object-cover rounded-lg shadow-xl"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-serif mb-6 !text-white">Community & Events</h2>
          <p className="text-lg mb-8 !text-white">
            Curious about community jams, classes, or creative healing work?
          </p>
          <Button
            href={EVENTBRITE_URL}
            variant="primary"
            className="bg-[#b97a2b] hover:bg-[#9B6522]"
            arrowDirection="right"
          >
            See what else is happening
          </Button>
        </div>
      </div>
    </section>
  );
}
