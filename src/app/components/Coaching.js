import Button from "./Button";

export default function Coaching() {
  return (
    <section className="bg-[#ede7df] py-12 px-4">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
          alt="Consultation"
          className="rounded shadow-lg w-full max-w-xs"
        />
        <div>
          <h4 className="text-lg font-serif mb-2">Initial Consultation</h4>
          <p className="mb-2 text-gray-700">1 hr 30 min</p>
          <p className="mb-4 text-gray-700">$65</p>
          <button className="bg-[#b97a2b] px-4 py-2 rounded text-white">
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
}
