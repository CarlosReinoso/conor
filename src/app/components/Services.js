const services = [
  {
    title: "In-Clinic Sessions",
    desc: "Personalized healing sessions in a tranquil, nature-inspired clinic space.",
  },
  {
    title: "Online Remote Consults",
    desc: "Connect from anywhere for guidance, support, and holistic practices.",
  },
  {
    title: "Community Events",
    desc: "Workshops and gatherings to foster connection, learning, and growth.",
  },
];

export default function Services() {
  return (
    <section className="py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-xl font-serif mb-2">My Specializations</h3>
        <p className="mb-8 text-gray-600 text-sm">
          I'm a paragraph. Click here to add your own text and edit me. It's
          easy.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left max-w-2xl mx-auto">
          <ul className="space-y-2">
            <li>• Orthopedia</li>
            <li>• Women's Health</li>
          </ul>
          <ul className="space-y-2">
            <li>• Digestion Disorders</li>
            <li>• Stress & Tension</li>
          </ul>
          <ul className="space-y-2">
            <li>• Sleep Disorders</li>
            <li>• Hormonal Imbalance</li>
          </ul>
        </div>
        <button className="mt-8 bg-[#b97a2b] px-6 py-2 rounded text-white">
          Book Now
        </button>
      </div>
    </section>
  );
}
