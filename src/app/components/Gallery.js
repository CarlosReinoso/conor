import Image from "next/image";

const images = [
  { src: "/next.svg", alt: "Nature 1" },
  { src: "/vercel.svg", alt: "Nature 2" },
  { src: "/globe.svg", alt: "Nature 3" },
];

export default function Gallery() {
  return (
    <section className="py-12 px-4">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <img
          src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80"
          alt="Gallery 1"
          className="rounded shadow-lg w-full"
        />
        <img
          src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80"
          alt="Gallery 2"
          className="rounded shadow-lg w-full"
        />
        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80"
          alt="Gallery 3"
          className="rounded shadow-lg w-full"
        />
      </div>
    </section>
  );
}
