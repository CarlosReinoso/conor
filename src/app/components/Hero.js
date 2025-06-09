import Image from "next/image";
import Button from "./Button";

export default function Hero() {
  return (
    <section className="bg-[#393a36] text-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-serif font-semibold mb-4">
          Conor Peña <br /> Ancient Chinese Medicine
        </h1>
        <p className="mb-6">Release, Relax, Heal</p>
        <Button arrowDirection="right">Discover</Button>
      </div>
    </section>
  );
}
