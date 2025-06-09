import Image from "next/image";
import Button from "./Button";

export default function About() {
  return (
    <section className="bg-[#7b8a7a] py-12 px-4">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <img
          src="/conor-about.jpg"
          alt="Conor"
          className="rounded shadow-lg w-full max-w-xs mx-auto md:mx-0"
        />
        <div>
          <h2 className="text-2xl font-serif mb-2 text-[#393a36]">
            Meet Conor
          </h2>
          <p className="text-[#393a36] mb-4">
            I'm a paragraph. Click here to add your own text and edit me. It's
            easy. Just click "Edit Text" or double click me to add your own
            content and make changes to the font.
          </p>
          <Button arrowDirection="right">Read More</Button>
        </div>
      </div>
    </section>
  );
}
